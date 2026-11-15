import { NextResponse } from "next/server";
import Razorpay from "razorpay";

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
        { error: "Payment configuration is missing." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const bookId = body.bookId;
    const quantity = Number(body.quantity);

    if (
      typeof bookId !== "string" ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 10
    ) {
      return NextResponse.json(
        { error: "Invalid book or quantity." },
        { status: 400 }
      );
    }

    const book = BOOKS[bookId];

    if (!book) {
      return NextResponse.json(
        { error: "Book not found." },
        { status: 404 }
      );
    }

    const amountInPaise = book.price * quantity * 100;

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `book_${Date.now()}`,
      notes: {
        book: book.title,
        quantity: String(quantity),
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);

    return NextResponse.json(
      { error: "Unable to create payment order." },
      { status: 500 }
    );
  }
}