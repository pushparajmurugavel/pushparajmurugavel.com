import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* Page Header */}
      <section className="border-b border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Your Privacy Matters
          </p>

          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#aaa39a]">
            Your trust matters to us. This page explains how information
            may be collected, used, and protected when you visit this
            website or purchase a book.
          </p>

          <p className="mt-5 text-xs text-[#817a70]">
            Draft policy — review and update before publishing.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-[220px_1fr]">

            {/* Contents */}
            <aside className="h-fit border border-white/10 bg-[#1d1b19] p-6 md:sticky md:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96b]">
                On This Page
              </p>

              <nav className="mt-5 space-y-4 text-sm text-[#aaa39a]">
                <a href="#information" className="block hover:text-[#d8bd8a]">
                  Information We Collect
                </a>
                <a href="#usage" className="block hover:text-[#d8bd8a]">
                  How We Use Information
                </a>
                <a href="#payments" className="block hover:text-[#d8bd8a]">
                  Payments
                </a>
                <a href="#sharing" className="block hover:text-[#d8bd8a]">
                  Information Sharing
                </a>
                <a href="#security" className="block hover:text-[#d8bd8a]">
                  Data Security
                </a>
                <a href="#cookies" className="block hover:text-[#d8bd8a]">
                  Cookies
                </a>
                <a href="#rights" className="block hover:text-[#d8bd8a]">
                  Your Choices
                </a>
                <a href="#contact" className="block hover:text-[#d8bd8a]">
                  Contact
                </a>
              </nav>
            </aside>

            {/* Policy Sections */}
            <div className="space-y-10">

              <article
                id="information"
                className="scroll-mt-28 border-b border-white/10 pb-10"
              >
                <h2 className="font-serif text-3xl">
                  01. Information We Collect
                </h2>

                <p className="mt-5 leading-8 text-[#aaa39a]">
                  Depending on the features you use, we may collect
                  information such as your name, email address, phone
                  number, delivery address, and details relating to your
                  enquiries or orders.
                </p>

                <p className="mt-4 leading-8 text-[#aaa39a]">
                  Technical information, such as browser type, device
                  information, and website usage data, may also be
                  collected if analytics or similar technologies are
                  enabled.
                </p>
              </article>

              <article
                id="usage"
                className="scroll-mt-28 border-b border-white/10 pb-10"
              >
                <h2 className="font-serif text-3xl">
                  02. How We Use Information
                </h2>

                <p className="mt-5 leading-8 text-[#aaa39a]">
                  Information may be used to respond to enquiries,
                  process and fulfil book orders, arrange delivery,
                  provide order updates, maintain website security,
                  and improve the services offered through this website.
                </p>

                <p className="mt-4 leading-8 text-[#aaa39a]">
                  We will review our practices before launch to ensure
                  that information is used only for appropriate,
                  disclosed purposes and in accordance with applicable law.
                </p>
              </article>

              <article
                id="payments"
                className="scroll-mt-28 border-b border-white/10 pb-10"
              >
                <h2 className="font-serif text-3xl">
                  03. Payment Information
                </h2>

                <p className="mt-5 leading-8 text-[#aaa39a]">
                  If online payments are introduced, payment processing
                  will be handled through the selected payment provider,
                  subject to its applicable terms and privacy practices.
                </p>

                <p className="mt-4 leading-8 text-[#aaa39a]">
                  This website does not currently have a connected
                  payment system. Do not submit payment details through
                  the unfinished checkout page.
                </p>
              </article>

              <article
                id="sharing"
                className="scroll-mt-28 border-b border-white/10 pb-10"
              >
                <h2 className="font-serif text-3xl">
                  04. Information Sharing
                </h2>

                <p className="mt-5 leading-8 text-[#aaa39a]">
                  If the website introduces order fulfilment services,
                  relevant information may need to be shared with
                  service providers such as payment processors, delivery
                  partners, and technical hosting providers.
                </p>

                <p className="mt-4 leading-8 text-[#aaa39a]">
                  The actual providers, purposes, and applicable
                  safeguards must be confirmed before the website begins
                  collecting customer information.
                </p>
              </article>

              <article
                id="security"
                className="scroll-mt-28 border-b border-white/10 pb-10"
              >
                <h2 className="font-serif text-3xl">
                  05. Data Security and Retention
                </h2>

                <p className="mt-5 leading-8 text-[#aaa39a]">
                  Appropriate technical and organisational safeguards
                  should be implemented to protect personal information
                  against unauthorised access, loss, misuse, or disclosure.
                </p>

                <p className="mt-4 leading-8 text-[#aaa39a]">
                  Information should be retained only for as long as
                  necessary for the disclosed purposes or as required
                  by applicable law.
                </p>
              </article>

              <article
                id="cookies"
                className="scroll-mt-28 border-b border-white/10 pb-10"
              >
                <h2 className="font-serif text-3xl">
                  06. Cookies and Analytics
                </h2>

                <p className="mt-5 leading-8 text-[#aaa39a]">
                  Cookies or similar technologies may be used if
                  necessary website features, analytics, or other
                  services are enabled. The final policy should identify
                  the technologies actually used and explain any available
                  user controls.
                </p>
              </article>

              <article
                id="rights"
                className="scroll-mt-28 border-b border-white/10 pb-10"
              >
                <h2 className="font-serif text-3xl">
                  07. Your Choices and Rights
                </h2>

                <p className="mt-5 leading-8 text-[#aaa39a]">
                  Depending on applicable law, you may have rights
                  relating to access, correction, deletion, or other
                  handling of your personal information.
                </p>

                <p className="mt-4 leading-8 text-[#aaa39a]">
                  Contact details and a process for handling privacy
                  requests should be confirmed before publication.
                </p>
              </article>

              <article
                id="contact"
                className="scroll-mt-28 pb-4"
              >
                <h2 className="font-serif text-3xl">
                  08. Contact Us
                </h2>

                <p className="mt-5 leading-8 text-[#aaa39a]">
                  For privacy-related questions, please use the website&apos;s
                  contact page. The final published policy should include
                  a verified contact email and the identity of the
                  responsible website operator.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-[#c8a96b] px-7 py-3.5 text-sm font-semibold text-[#171614] transition-colors hover:bg-[#d8bd8a]"
                >
                  Contact Us →
                </Link>
              </article>

            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="border-t border-white/10 bg-[#1d1b19] px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-[#817a70]">
            Pushparaj Murugavel · Privacy & Transparency
          </p>

          <Link
            href="/"
            className="text-sm text-[#d8bd8a] transition-colors hover:text-[#f4efe6]"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}