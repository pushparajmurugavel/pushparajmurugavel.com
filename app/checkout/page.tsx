"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

declare global {
  interface Window {
    Razorpay?: new (
      options: Record<string, unknown>
    ) => {
      open: () => void;
    };
  }
}

const BOOK_ID = "the-miles-between-us";

export default function CheckoutPage() {
  const { cartItems, subtotal } = useCart();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  async function handlePayment(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setMessage("");

    if (cartItems.length !== 1) {
      setMessage(
        "Please keep only Where the Miles Melt Away in your cart."
      );
      return;
    }

    if (cartItems[0].id !== BOOK_ID) {
      setMessage("Invalid book in cart.");
      return;
    }

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    if (!window.Razorpay) {
      setMessage(
        "Razorpay is still loading. Please try again."
      );
      return;
    }

    const formData = new FormData(form);

    const fullName = String(
      formData.get("fullName") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const phone = String(
      formData.get("phone") || ""
    ).trim();

    const address = String(
      formData.get("address") || ""
    ).trim();

    const city = String(
      formData.get("city") || ""
    ).trim();

    const state = String(
      formData.get("state") || ""
    ).trim();

    const pincode = String(
      formData.get("pincode") || ""
    ).trim();

    const country = String(
      formData.get("country") || ""
    ).trim();

    if (!/^[0-9]{6}$/.test(pincode)) {
      setMessage(
        "Please enter a valid 6-digit PIN code."
      );
      return;
    }

    setLoading(true);

    try {
      // 1. Create the order on the server.
      const orderResponse = await fetch(
        "/api/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookId: BOOK_ID,
            quantity: cartItems[0].quantity,
          }),
        }
      );

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(
          orderData.error ||
            "Unable to create payment order."
        );
      }

      if (
        !orderData.orderId ||
        !orderData.keyId ||
        !orderData.amount
      ) {
        throw new Error(
          "Invalid response from payment server."
        );
      }

      // 2. Configure Razorpay Checkout.
      const options: Record<string, unknown> = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Pushparaj Murugavel",
        description: "Where the Miles Melt Away",
        order_id: orderData.orderId,

        prefill: {
          name: fullName,
          email,
          contact: phone,
        },

        notes: {
          shipping_address: address,
          city,
          state,
          pincode,
          country,
        },

        theme: {
          color: "#c8a96b",
        },

        // 3. Verify payment after Razorpay Checkout succeeds.
        handler: async (
          response: Record<string, string>
        ) => {
          try {
            setMessage("Verifying your payment...");

            const orderId =
              response.razorpay_order_id;

            const paymentId =
              response.razorpay_payment_id;

            const signature =
              response.razorpay_signature;

            if (!orderId || !paymentId || !signature) {
              throw new Error(
                "Razorpay returned incomplete payment details."
              );
            }

            const verifyResponse = await fetch(
              "/api/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: orderId,
                  razorpay_payment_id: paymentId,
                  razorpay_signature: signature,
                  bookId: BOOK_ID,
                  quantity: cartItems[0].quantity,
                  customer: {
                    fullName,
                    email,
                    phone,
                    address,
                    city,
                    state,
                    pincode,
                    country,
                  },
                }),
              }
            );

         const responseText = await verifyResponse.text();

let verifyData: {
  success?: boolean;
  message?: string;
};

try {
  verifyData = JSON.parse(responseText);
} catch {
  console.error(
    "Invalid verification API response:",
    responseText
  );

  throw new Error(
    "Payment verification server returned an invalid response. Please check the server logs before retrying payment."
  );
}

            if (
              !verifyResponse.ok ||
              verifyData.success !== true
            ) {
              throw new Error(
                verifyData.message ||
                  "Payment verification failed."
              );
            }

            // 4. Redirect only after verification succeeds.
            const successUrl = new URL(
              "/order-success",
              window.location.origin
            );

            successUrl.searchParams.set(
              "order_id",
              orderId
            );

            successUrl.searchParams.set(
              "payment_id",
              paymentId
            );

            window.location.href = successUrl.toString();
          } catch (error) {
            console.error(
              "Payment verification error:",
              error
            );

            setMessage(
              error instanceof Error
                ? error.message
                : "We could not verify your payment. Please contact support before retrying."
            );

            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
            setMessage(
              "Payment window closed. You can try again."
            );
          },
        },
      };

      // 5. Open the payment window.
      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error("Checkout error:", error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
        <section className="border-b border-white/10 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
              Almost Yours
            </p>

            <h1 className="mt-5 font-serif text-5xl md:text-7xl">
              Checkout
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-[#aaa39a]">
              A story is waiting to find its way to you.
              Enter your details to continue.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_1fr]">
            <form
              onSubmit={handlePayment}
              className="space-y-10"
            >
              {cartItems.length === 0 && (
                <div className="border border-[#c8a96b]/30 bg-[#1d1b19] p-6">
                  <h2 className="font-serif text-2xl">
                    Your cart is empty
                  </h2>

                  <Link
                    href="/books"
                    className="mt-5 inline-flex rounded-full bg-[#c8a96b] px-6 py-3 text-sm font-semibold text-[#171614]"
                  >
                    Explore Books →
                  </Link>
                </div>
              )}

              {/* Contact Information */}
              <div className="border border-white/10 bg-[#1d1b19] p-6 md:p-9">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b]">
                  Step 01
                </p>

                <h2 className="mt-4 font-serif text-3xl">
                  Contact Information
                </h2>

                <div className="mt-7 space-y-5">
                  <Field
                    label="Full Name"
                    name="fullName"
                    autoComplete="name"
                  />

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />

                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="border border-white/10 bg-[#1d1b19] p-6 md:p-9">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b]">
                  Step 02
                </p>

                <h2 className="mt-4 font-serif text-3xl">
                  Shipping Address
                </h2>

                <div className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block text-sm text-[#aaa39a]"
                    >
                      House / Street Address
                    </label>

                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      autoComplete="street-address"
                      required
                      className="w-full border border-white/10 bg-[#171614] px-4 py-3.5 text-sm outline-none focus:border-[#c8a96b]"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="City"
                      name="city"
                      autoComplete="address-level2"
                    />

                    <Field
                      label="State"
                      name="state"
                      autoComplete="address-level1"
                    />

                    <Field
                      label="PIN Code"
                      name="pincode"
                      autoComplete="postal-code"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength={6}
                    />

                    <Field
                      label="Country"
                      name="country"
                      defaultValue="India"
                      autoComplete="country-name"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="border border-white/10 bg-[#1d1b19] p-6 md:p-9">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b]">
                  Step 03
                </p>

                <h2 className="mt-4 font-serif text-3xl">
                  Payment Method
                </h2>

                <div className="mt-7 border border-[#c8a96b]/40 bg-[#c8a96b]/5 p-5">
                  <h3 className="font-medium">
                    Secure Online Payment
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#aaa39a]">
                    Pay using the payment methods available
                    in Razorpay Checkout.
                  </p>
                </div>
              </div>

              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className="border border-[#c8a96b]/30 p-4 text-sm leading-6 text-[#d8bd8a]"
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={
                  loading || cartItems.length === 0
                }
                className="w-full rounded-full bg-[#c8a96b] px-6 py-4 text-sm font-semibold text-[#171614] transition-colors hover:bg-[#d8bd8a] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Please wait..."
                  : `Pay ${formatPrice(subtotal)} securely`}
              </button>
            </form>

            {/* Order Summary */}
            <aside className="h-fit border border-white/10 bg-[#1d1b19] p-6 md:p-9 lg:sticky lg:top-24">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b]">
                Your Selection
              </p>

              <h2 className="mt-4 font-serif text-3xl">
                Order Summary
              </h2>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mt-6 flex justify-between gap-4 border-b border-white/10 pb-5"
                >
                  <div>
                    <h3 className="font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#aaa39a]">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <span className="text-sm text-[#d8bd8a]">
                    {formatPrice(
                      item.price * item.quantity
                    )}
                  </span>
                </div>
              ))}

              <div className="mt-6 flex justify-between text-sm">
                <span className="text-[#aaa39a]">
                  Total items
                </span>

                <span>{totalItems}</span>
              </div>

              <div className="mt-4 flex justify-between border-t border-white/10 pt-5">
                <span className="font-semibold">
                  Subtotal
                </span>

                <span className="font-serif text-2xl text-[#d8bd8a]">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <p className="mt-5 text-xs leading-6 text-[#817a70]">
                Shipping charges, if applicable, must be
                confirmed before payment.
              </p>

              <Link
                href="/cart"
                className="mt-6 block text-center text-sm text-[#d8bd8a] hover:text-[#f4efe6]"
              >
                ← Return to Shopping Cart
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  defaultValue?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  pattern?: string;
  maxLength?: number;
};

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  defaultValue,
  inputMode,
  pattern,
  maxLength,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm text-[#aaa39a]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        inputMode={inputMode}
        pattern={pattern}
        maxLength={maxLength}
        required
        className="w-full border border-white/10 bg-[#171614] px-4 py-3.5 text-sm outline-none focus:border-[#c8a96b]"
      />
    </div>
  );
}