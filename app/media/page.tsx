import Link from "next/link";

const opportunities = [
  {
    number: "01",
    title: "Literary Events",
    subtitle: "Books · Literature · Conversations",
    description:
      "For book launches, literary gatherings, reading sessions and events that celebrate stories and the written word.",
  },
  {
    number: "02",
    title: "Speaking & Workshops",
    subtitle: "Ideas · Learning · Creativity",
    description:
      "For speaking invitations, writing workshops, educational sessions and meaningful conversations with readers.",
  },
  {
    number: "03",
    title: "Media & Interviews",
    subtitle: "Stories · Perspectives · Features",
    description:
      "For interviews, author features, podcasts, literary publications and conversations about writing and travel.",
  },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-28 md:py-36">
        <div className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#c8a96b]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#c8a96b]">
            Media · Events · Conversations
          </p>

          <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Every story creates
            <span className="block text-[#c8a96b]">
              a reason to connect.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            A space for literary conversations, speaking opportunities,
            creative collaborations and events that bring people closer
            to stories and ideas.
          </p>

          <a
            href="#opportunities"
            className="mt-10 inline-flex rounded-full border border-[#c8a96b] px-7 py-4 text-sm font-semibold text-[#f4efe6] transition-colors duration-300 hover:bg-[#c8a96b] hover:text-[#171614]"
          >
            Explore Opportunities ↓
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
              Beyond the Written Word
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Stories are meant
              <br />
              to be shared.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[#c8c0b5]">
              Books begin as words on a page, but conversations allow
              those words to travel further. Meeting readers, exchanging
              ideas and exploring different perspectives can give a story
              a life beyond its pages.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#c8c0b5]">
              This page is for organisations, event organisers,
              publishers, educational institutions and media professionals
              interested in connecting through literature, writing and travel.
            </p>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        id="opportunities"
        className="border-y border-white/10 bg-[#1d1b19] px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Ways to Connect
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-4xl md:text-5xl">
            Let&apos;s create something meaningful.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {opportunities.map((item) => (
              <article
                key={item.number}
                className="group flex flex-col border border-white/10 bg-[#171614] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a96b]/60 md:p-9"
              >
                <span className="font-serif text-4xl text-[#c8a96b]">
                  {item.number}
                </span>

                <div className="mt-7 h-px w-12 bg-[#8c7045] transition-all duration-300 group-hover:w-20" />

                <h3 className="mt-7 font-serif text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs uppercase leading-6 tracking-wider text-[#d8bd8a]">
                  {item.subtitle}
                </p>

                <p className="mt-5 flex-1 leading-7 text-[#aaa39a]">
                  {item.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-fit border-b border-[#c8a96b]/60 pb-2 text-sm font-semibold text-[#d8bd8a] transition-colors hover:text-[#f4efe6]"
                >
                  Make an Enquiry →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INVITATION */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Invite the Author
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Have an idea worth sharing?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            If you are organising a literary event, planning an interview
            or exploring a creative collaboration, I would be glad to hear
            about your idea.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#c8a96b] px-8 py-4 text-sm font-semibold text-[#171614] transition-transform duration-300 hover:-translate-y-1"
          >
            Get in Touch →
          </Link>

          <p className="mt-6 text-sm text-[#8c8275]">
            Share your event details, proposed date and collaboration idea
            through the contact page.
          </p>
        </div>
      </section>
    </main>
  );
}