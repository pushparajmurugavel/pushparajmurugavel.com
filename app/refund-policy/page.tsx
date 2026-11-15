import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      <section className="border-b border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Customer Support
          </p>

          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Returns & Refunds
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#aaa39a]">
            We want every reader to have a positive experience
            when purchasing a book from our collection.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <article className="border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">
              01. Return Eligibility
            </h2>
            <p className="mt-4 leading-7 text-[#aaa39a]">
              Return eligibility and applicable conditions will be
              confirmed before book sales begin. Please review the
              final policy before placing an order.
            </p>
          </article>

          <article className="border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">
              02. Damaged or Incorrect Books
            </h2>
            <p className="mt-4 leading-7 text-[#aaa39a]">
              If a book arrives damaged or differs from your order,
              contact us with your order details and clear photographs
              so the issue can be reviewed.
            </p>
          </article>

          <article className="border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">
              03. Refund Process
            </h2>
            <p className="mt-4 leading-7 text-[#aaa39a]">
              Where a refund is approved, the refund method and
              expected processing time will be communicated to you.
              The final process will depend on the payment method
              and applicable payment provider procedures.
            </p>
          </article>

          <article className="border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">
              04. Order Cancellation
            </h2>
            <p className="mt-4 leading-7 text-[#aaa39a]">
              Cancellation conditions and any applicable refund
              arrangements will be explained in the final policy
              before purchasing is enabled.
            </p>
          </article>

          <div className="border border-[#c8a96b]/30 bg-[#1d1b19] p-7 md:p-9">
            <h2 className="font-serif text-2xl">
              Need Assistance?
            </h2>

            <p className="mt-4 leading-7 text-[#aaa39a]">
              Have a question about a return or refund?
              Get in touch with us.
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