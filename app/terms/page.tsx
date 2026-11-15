import Link from "next/link";

const sections = [
  {
    id: "acceptance",
    title: "01. Acceptance of Terms",
    paragraphs: [
      "By accessing or using this website, you agree to comply with the terms and conditions described on this page. If you do not agree with these terms, please discontinue using the website.",
      "These terms should be read together with the applicable Privacy Policy, Shipping Policy, and Return & Refund Policy.",
    ],
  },
  {
    id: "website",
    title: "02. About This Website",
    paragraphs: [
      "This website represents the author brand of Pushparaj Murugavel and is intended to provide information about books, writing, travel, literary activities, and related services.",
      "Book availability, descriptions, prices, and purchasing facilities will be displayed when the relevant features are available. Information shown on the website may be updated from time to time.",
    ],
  },
  {
    id: "orders",
    title: "03. Orders and Availability",
    paragraphs: [
      "An order process may be introduced to allow customers to purchase available books through this website. Any order acceptance, confirmation, cancellation, or fulfilment process will be explained before the purchasing facility is launched.",
      "Submitting an order request should not be treated as confirmation of a purchase unless the website provides an appropriate order confirmation.",
    ],
  },
  {
    id: "pricing",
    title: "04. Prices and Payments",
    paragraphs: [
      "Applicable book prices, delivery charges, taxes, and other costs will be disclosed before a customer completes a purchase, as applicable.",
      "Online payments are not currently enabled. If a payment gateway is introduced, payments will be subject to the applicable provider's terms and security procedures.",
    ],
  },
  {
    id: "shipping",
    title: "05. Shipping and Delivery",
    paragraphs: [
      "Shipping methods, estimated delivery timelines, delivery charges, and serviceable locations will be described in the Shipping Policy when the book-ordering service becomes available.",
      "Delivery estimates may depend on the destination, courier service, availability of the book, and other circumstances beyond the website operator's reasonable control.",
    ],
  },
  {
    id: "returns",
    title: "06. Returns, Refunds and Damaged Books",
    paragraphs: [
      "The conditions for returns, replacements, and refunds will be stated in a separate Return & Refund Policy before sales begin.",
      "Customers should review that policy before placing an order. Nothing in these terms is intended to exclude rights that cannot lawfully be excluded under applicable law.",
    ],
  },
  {
    id: "intellectual",
    title: "07. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, original writing, text, photographs, artwork, branding, and other creative content published on this website are intended to remain the intellectual property of their respective owners.",
      "You may not reproduce, republish, distribute, commercially exploit, or modify protected content without appropriate permission, except where permitted by applicable law.",
    ],
  },
  {
    id: "conduct",
    title: "08. Acceptable Use",
    paragraphs: [
      "You agree not to misuse this website, attempt unauthorised access, interfere with its operation, introduce malicious code, or use the website for unlawful purposes.",
      "Website features may be restricted or suspended where reasonably necessary to protect the website, its users, or its services, subject to applicable law.",
    ],
  },
  {
    id: "liability",
    title: "09. Liability and Website Information",
    paragraphs: [
      "Website content is provided for general informational purposes. Reasonable efforts should be made to keep information accurate and up to date, but errors or omissions may occasionally occur.",
      "Nothing in these terms limits or excludes liability where such limitation or exclusion is prohibited by applicable law.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to These Terms",
    paragraphs: [
      "These terms may be revised when website features, business practices, or legal requirements change. The latest version should be published on this page with an appropriate effective date.",
      "You should review this page periodically for material updates.",
    ],
  },
  {
    id: "law",
    title: "11. Applicable Law",
    paragraphs: [
      "These terms must be reviewed and finalised in accordance with the laws applicable to the website operator and the transactions offered through this website.",
      "Any jurisdiction-specific wording should be confirmed before these terms are published as the final legal policy.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact",
    paragraphs: [
      "For questions about these terms, please use the website's Contact page. Verified business contact details should be added before the website launches its purchasing features.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Clear and Transparent
          </p>

          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#aaa39a]">
            A clear understanding makes every journey better.
            Please review the terms that govern the use of this website
            and its book-related services.
          </p>

          <p className="mt-5 text-xs text-[#817a70]">
            Draft terms — review before publishing.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[220px_1fr]">
          {/* Contents */}
          <aside className="h-fit border border-white/10 bg-[#1d1b19] p-6 md:sticky md:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96b]">
              On This Page
            </p>

            <nav className="mt-5 space-y-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-[#aaa39a] transition-colors hover:text-[#d8bd8a]"
                >
                  {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
          </aside>

          {/* Terms Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-white/10 pb-10 last:border-0"
              >
                <h2 className="font-serif text-2xl leading-snug md:text-3xl">
                  {section.title}
                </h2>

                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-5 leading-8 text-[#aaa39a]"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}

            {/* Contact CTA */}
            <div className="border border-[#c8a96b]/20 bg-[#1d1b19] p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                Need Clarification?
              </p>

              <h2 className="mt-4 font-serif text-3xl">
                We&apos;re happy to help.
              </h2>

              <p className="mt-4 leading-7 text-[#aaa39a]">
                If you have questions about using this website,
                please get in touch.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-full bg-[#c8a96b] px-7 py-3.5 text-sm font-semibold text-[#171614] transition-colors hover:bg-[#d8bd8a]"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-white/10 bg-[#1d1b19] px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-[#817a70]">
            Pushparaj Murugavel · Terms & Conditions
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