import Link from "next/link";

const writingCategories = [
  {
    number: "01",
    title: "Reflections",
    subtitle: "Thoughts from everyday life",
    description:
      "Small moments, meaningful conversations and observations that make us pause and think.",
  },
  {
    number: "02",
    title: "Poetry",
    subtitle: "When emotions become words",
    description:
      "Words about love, distance, memories, silence and the emotions we sometimes struggle to express.",
  },
  {
    number: "03",
    title: "Stories",
    subtitle: "Fiction inspired by life",
    description:
      "Stories about people, relationships, unexpected journeys and the experiences that shape us.",
  },
];

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#c8a96b]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#c8a96b]">
            From My Notebook
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-7xl">
            Some thoughts
            <br />
            <span className="text-[#c8a96b]">
              deserve to become stories.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            A collection of reflections, poems and stories inspired by
            everyday life, meaningful relationships, distant roads and
            the memories we carry.
          </p>

          <div className="mt-10 h-px w-20 bg-[#c8a96b]" />

          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#d8bd8a]">
            Words · Thoughts · Emotions
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
              The Writing Room
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              A space for
              <br />
              honest words.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[#c8c0b5]">
              Writing begins with noticing the things we often overlook:
              an unfinished conversation, a familiar place, a passing
              thought or a memory that returns without warning.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#c8c0b5]">
              This space brings together different forms of writing.
              Some pieces may be personal reflections, others imagined
              stories. Each begins with a simple curiosity about life
              and the people who make it meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-white/10 bg-[#1d1b19] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Explore the Collection
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            Different forms. One perspective.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {writingCategories.map((category) => (
              <article
                key={category.number}
                className="group border border-white/10 bg-[#171614] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a96b]/60 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#c8a96b]">
                    {category.number}
                  </span>

                  <span className="h-px w-12 bg-[#8c7045] transition-all duration-300 group-hover:w-20" />
                </div>

                <h3 className="mt-8 font-serif text-3xl">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm text-[#d8bd8a]">
                  {category.subtitle}
                </p>

                <p className="mt-5 leading-7 text-[#aaa39a]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 py-24 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            A Note to the Reader
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Sometimes, a few words
            <br />
            can stay with us forever.
          </h2>

          <p className="mt-6 leading-8 text-[#aaa39a]">
            Thank you for spending a little of your time here.
            I hope you find a thought, a feeling or a story that
            feels familiar to you.
          </p>

          <Link
            href="/books"
            className="mt-9 inline-flex rounded-full bg-[#c8a96b] px-8 py-4 text-sm font-semibold text-[#171614] transition-transform duration-300 hover:-translate-y-1"
          >
            Discover My Books →
          </Link>
        </div>
      </section>
    </main>
  );
}