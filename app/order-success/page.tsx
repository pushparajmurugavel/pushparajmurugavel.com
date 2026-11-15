"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("order_id");
  const paymentId = searchParams.get("payment_id");

  return (
    <main className="min-h-screen bg-[#11100e] px-5 py-20 text-white">
      <div className="mx-auto max-w-2xl border border-[#c9a96e]/30 bg-[#191714] p-8 text-center md:p-14">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a96e] text-4xl text-[#c9a96e]">
          ✓
        </div>

        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#c9a96e]">
          Pushparaj Murugavel
        </p>

        <h1 className="mb-4 font-serif text-4xl text-[#d5b779] md:text-5xl">
          Thank You!
        </h1>

        <h2 className="mb-4 text-xl">
          Your Order Has Been Received
        </h2>

        <p className="mx-auto mb-8 max-w-md leading-7 text-gray-400">
          Thank you for choosing my book. Your order details are shown below.
        </p>

        <div className="mb-8 space-y-4 border-y border-white/10 py-6 text-left">
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Book</span>
            <span className="text-right">
              Where the Miles Melt Away
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Amount</span>
            <span className="text-[#d5b779]">₹299</span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Order ID</span>
            <span className="max-w-[65%] break-all text-right text-sm">
              {orderId || "Not available"}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Payment ID</span>
            <span className="max-w-[65%] break-all text-right text-sm">
              {paymentId || "Not available"}
            </span>
          </div>
        </div>

        <p className="mb-8 text-sm leading-6 text-gray-500">
          Please keep your payment ID for reference. Your order confirmation
          will be provided after your payment and order details are verified.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#c9a96e] px-8 py-4 font-medium text-black transition hover:bg-[#dfc58f]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#11100e] p-10 text-center text-white">
          Loading order details...
        </main>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}