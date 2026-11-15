import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      <section className="border-b border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Delivery Information
          </p>

          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Shipping Policy
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#aaa39a]">
            Every book deserves a safe journey from our collection
            to your bookshelf.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8">

          <article className="border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">01. Order Processing</h2>
            <p className="mt-4 leading-7 text-[#aaa39a]">
              Orders will be processed after confirmation and
              subject to book availability. Processing timelines
              will be communicated when purchases are enabled.
            </p>
          </article>

          <article className="border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">02. Delivery Time</h2>
            <p className="mt-4 leading-7 text-[#aaa39a]">
              Delivery timelines may vary depending on your
              location and courier service. Estimated delivery
              times will be displayed before an order is placed.
            </p>
          </article>

          <article className="border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">03. Shipping Charges</h2>
            <p className="mt-4 leading-7 text-[#aaa39a]">
              Applicable shipping charges, if any, will be shown
              before checkout is completed.
            </p>
          </article>

          <article className="border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">04. Damaged or Delayed Orders</h2>
            <p className="mt-4 leading-7 text-[#aaa39a]">
              If your book arrives damaged or your delivery is
              delayed, please contact us with your order details
              so that we can review the issue.
            </p>
          </article>

          <div className="border border-[#c8a96b]/30 p-7 md:p-9">
            <h2 className="font-serif text-2xl">Need Help?</h2>

            <p className="mt-4 leading-7 text-[#aaa39a]">
              Contact us if you have questions about book delivery.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#c8a96b] px-7 py-3.5 text-sm font-semibold text-[#171614] transition hover:bg-[#d8bd8a]"
            >
              Contact Us →
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}