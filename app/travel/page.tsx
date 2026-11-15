import Image from "next/image";
import Link from "next/link";

const journeys = [
  {
    number: "01",
    title: "Mountain Roads",
    description:
      "Quiet roads, mist-covered hills and the freedom of travelling at your own pace.",
  },
  {
    number: "02",
    title: "Coastal Memories",
    description:
      "The sound of the sea, unfamiliar streets and moments worth remembering.",
  },
  {
    number: "03",
    title: "Places & People",
    description:
      "Every destination has a story, and every encounter leaves something behind.",
  },
];

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden">
        <Image
          src="/images/hero-travel.jpg"
          alt="A journey through the mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a09]/95 via-[#0b0a09]/65 to-[#0b0a09]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171614] via-transparent to-[#171614]/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#d6b779]">
            Beyond the Pages
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Some roads lead
            <span className="block text-[#d6b779]">
              to places within us.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#e0d8cc]">
            Journeys, photographs and moments collected along the way.
            Travel is not just about reaching a destination; it is about
            everything we discover between the beginning and the end.
          </p>

          <a
            href="#journeys"
            className="mt-10 inline-flex rounded-full border border-[#d6b779] px-7 py-4 text-sm font-semibold text-[#f5f0e7] transition-colors hover:bg-[#d6b779] hover:text-[#171614]"
          >
            Explore My Journeys ↓
          </a>
        </div>
      </section>

      {/* TRAVEL PHILOSOPHY */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d6b779]">
              My Travel Philosophy
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              The journey
              <br />
              is the story.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[#c8c0b5]">
              I travel to experience places beyond photographs and
              destinations beyond guidebooks. The roads, the people,
              the unexpected pauses and the quiet moments often become
              the most meaningful parts of a journey.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#c8c0b5]">
              Every trip gives me something to carry home: a memory,
              a different perspective, a photograph or an idea waiting
              to become a story.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY CATEGORIES */}
      <section
        id="journeys"
        className="border-y border-white/10 bg-[#1d1b19] px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d6b779]">
            Collected Along the Way
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            Every place leaves a trace.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {journeys.map((journey) => (
              <article
                key={journey.number}
                className="group border border-white/10 bg-[#171614] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b779]/60 md:p-9"
              >
                <span className="font-serif text-4xl text-[#d6b779]">
                  {journey.number}
                </span>

                <div className="mt-7 h-px w-12 bg-[#8c7045] transition-all duration-300 group-hover:w-20" />

                <h3 className="mt-7 font-serif text-2xl">
                  {journey.title}
                </h3>

                <p className="mt-4 leading-7 text-[#aaa39a]">
                  {journey.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY NOTE */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d6b779]">
            Through My Lens
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Moments that deserve to be remembered.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#aaa39a]">
            A collection of travel photographs and personal memories
            will find their place here. Each image will tell a little
            part of the journey.
          </p>

          <p className="mt-5 text-sm text-[#8c7045]">
            Travel photo gallery — coming soon
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-[#1d1b19] px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d6b779]">
            From Roads to Pages
          </p>

          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            Every journey has a story to tell.
          </h2>

          <p className="mt-6 leading-8 text-[#aaa39a]">
            Discover the stories, emotions and experiences that inspire
            my writing.
          </p>

          <Link
            href="/books"
            className="mt-9 inline-flex rounded-full bg-[#d6b779] px-8 py-4 text-sm font-semibold text-[#171614] transition-transform hover:-translate-y-1"
          >
            Explore My Books →
          </Link>
        </div>
      </section>
    </main>
  );
}