import { NextResponse } from "next/server";
import crypto from "crypto";
import Razorpay from "razorpay";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export const runtime = "nodejs";

const BOOKS: Record<string, { title: string; price: number }> = {
  "the-miles-between-us": {
    title: "Where the Miles Melt Away",
    price: 299,
  },
};

export async function POST(request: Request) {
  try {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { success: false, message: "Payment configuration error." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customer,
      bookId,
      quantity,
    } = body;

    // Validate payment details
    if (
      typeof razorpay_order_id !== "string" ||
      typeof razorpay_payment_id !== "string" ||
      typeof razorpay_signature !== "string" ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !/^[a-f0-9]{64}$/i.test(razorpay_signature)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid payment details." },
        { status: 400 }
      );
    }

    // Validate customer details
    if (
      !customer ||
      typeof customer.fullName !== "string" ||
      typeof customer.email !== "string" ||
      typeof customer.phone !== "string" ||
      typeof customer.address !== "string" ||
      typeof customer.city !== "string" ||
      typeof customer.state !== "string" ||
      typeof customer.pincode !== "string" ||
      typeof customer.country !== "string"
    ) {
      return NextResponse.json(
        { success: false, message: "Customer details are incomplete." },
        { status: 400 }
      );
    }

    // Validate book and quantity
    if (
      typeof bookId !== "string" ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 10
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid book or quantity." },
        { status: 400 }
      );
    }

    const book = BOOKS[bookId];

    if (!book) {
      return NextResponse.json(
        { success: false, message: "Book not found." },
        { status: 404 }
      );
    }

    // Verify Razorpay signature
    const generatedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const signatureBuffer = Buffer.from(generatedSignature, "hex");
    const receivedSignatureBuffer = Buffer.from(
      razorpay_signature,
      "hex"
    );

    if (
      signatureBuffer.length !== receivedSignatureBuffer.length ||
      !crypto.timingSafeEqual(
        signatureBuffer,
        receivedSignatureBuffer
      )
    ) {
      return NextResponse.json(
        { success: false, message: "Payment verification failed." },
        { status: 400 }
      );
    }

    // Verify payment directly with Razorpay
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const payment = await razorpay.payments.fetch(
      razorpay_payment_id
    );

    if (
      payment.order_id !== razorpay_order_id ||
      payment.status !== "captured" ||
      payment.currency !== "INR"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment is not captured or does not match this order.",
        },
        { status: 400 }
      );
    }

    // Calculate amount using server-side book price
    const subtotal = book.price * quantity;
    const shippingCost = 0;
    const total = subtotal + shippingCost;
    const expectedAmountInPaise = total * 100;

    if (payment.amount !== expectedAmountInPaise) {
      return NextResponse.json(
        { success: false, message: "Payment amount mismatch." },
        { status: 400 }
      );
    }

    // Prepare order items for JSONB column
    const items = [
      {
        book_id: bookId,
        book_title: book.title,
        quantity,
        price: book.price,
      },
    ];

    // Check whether this Razorpay order already exists
    const { data: existingOrder, error: lookupError } =
      await supabaseAdmin
        .from("orders")
        .select("order_number, payment_status")
        .eq("razorpay_order_id", razorpay_order_id)
        .maybeSingle();

    if (lookupError) {
      console.error("Order lookup failed:", lookupError);

      return NextResponse.json(
        {
          success: false,
          message: "Could not check existing order.",
        },
        { status: 500 }
      );
    }

    // If order exists, update its payment status
    if (existingOrder) {
      if (existingOrder.payment_status === "paid") {
        return NextResponse.json({
          success: true,
          message: "Payment already verified.",
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
          orderNumber: existingOrder.order_number,
        });
      }

      const { error: updateError } = await supabaseAdmin
        .from("orders")
        .update({
          razorpay_payment_id,
          payment_status: "paid",
          status: "confirmed",
        })
        .eq("razorpay_order_id", razorpay_order_id);

      if (updateError) {
        console.error("Order update failed:", updateError);

        return NextResponse.json(
          {
            success: false,
            message: "Payment verified, but existing order update failed.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Payment verified and existing order updated.",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        orderNumber: existingOrder.order_number,
      });
    }

    // Create a new order
    const orderNumber = `PM-${Date.now()}`;

    const { data: savedOrder, error: insertError } =
      await supabaseAdmin
        .from("orders")
        .insert({
          order_number: orderNumber,

          customer_name: customer.fullName.trim(),
          customer_email: customer.email.trim(),
          customer_phone: customer.phone.trim(),

          customer_address: customer.address.trim(),
          shipping_city: customer.city.trim(),
          shipping_state: customer.state.trim(),
          shipping_pincode: customer.pincode.trim(),
          shipping_country: customer.country.trim(),

          items,

          subtotal,
          shipping_cost: shippingCost,
          total,

          status: "confirmed",
          payment_status: "paid",

          razorpay_order_id,
          razorpay_payment_id,
        })
        .select("order_number")
        .single();

    if (insertError) {
      console.error("Order insert failed:", insertError);

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment was received, but order saving failed. Please contact support with your payment ID.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified and order saved successfully.",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      orderNumber: savedOrder.order_number,
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown server error.",
      },
      { status: 500 }
    );
  }
}