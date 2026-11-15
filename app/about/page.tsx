import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* HERO */}
      <section className="border-b border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            About the Author
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Every life has a story.
            <span className="block text-[#c8a96b]">
              This is a little of mine.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            Writer. Traveller. Storyteller.
            <br />
            Exploring life through words, journeys, memories and emotions.
          </p>
        </div>
      </section>

      {/* AUTHOR PROFILE */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="mx-auto w-full max-w-md border border-[#c8a96b]/50 p-3">
            <Image
              src="/images/pushparaj-author.jpg"
              alt="Pushparaj Murugavel, author"
              width={1023}
              height={1538}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a96b]">
              The Person Behind the Pages
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Hello, I&apos;m Pushparaj Murugavel.
            </h2>

            <div className="mt-7 h-px w-16 bg-[#c8a96b]" />

            <p className="mt-7 text-lg leading-8 text-[#c8c0b5]">
              I am a writer and traveller who finds stories in ordinary
              moments, meaningful conversations, distant roads and the
              memories that stay with us.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#c8c0b5]">
              Writing allows me to explore relationships, friendship,
              love, distance and the complicated beauty of everyday life.
              Travelling gives me new places, perspectives and experiences
              to carry into my stories.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#c8c0b5]">
              Through my books and personal writing, I hope to create
              stories that readers can connect with in their own lives.
            </p>

            <p
              className="mt-8 text-4xl text-[#d8bd8a]"
              style={{
                fontFamily:
                  "var(--font-dancing-script), 'Brush Script MT', cursive",
              }}
            >
              Pushparaj Murugavel
            </p>
          </div>
        </div>
      </section>

      {/* WRITING & TRAVEL */}
      <section className="border-y border-white/10 bg-[#1d1b19] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="border border-white/10 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b]">
              Writing
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Stories shaped by life.
            </h2>

            <p className="mt-5 leading-7 text-[#aaa39a]">
              Discover my writing, reflections, ideas and stories inspired
              by the world around me.
            </p>

            <Link
              href="/writing"
              className="mt-7 inline-flex border-b border-[#c8a96b] pb-2 text-sm font-semibold text-[#d8bd8a] hover:text-[#f4efe6]"
            >
              Explore My Writing →
            </Link>
          </article>

          <article className="border border-white/10 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b]">
              Travel
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              The road is part of the story.
            </h2>

            <p className="mt-5 leading-7 text-[#aaa39a]">
              Explore journeys, photographs, places and experiences that
              continue to shape my perspective.
            </p>

            <Link
              href="/travel"
              className="mt-7 inline-flex border-b border-[#c8a96b] pb-2 text-sm font-semibold text-[#d8bd8a] hover:text-[#f4efe6]"
            >
              Explore My Travels →
            </Link>
          </article>
        </div>
      </section>

      {/* BOOKS CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Discover My Books
          </p>

          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            Every book begins with a story.
          </h2>

          <p className="mt-6 leading-8 text-[#aaa39a]">
            Explore my books and discover the stories I am bringing
            into the world.
          </p>

          <Link
            href="/books"
            className="mt-9 inline-flex rounded-full bg-[#c8a96b] px-8 py-4 text-sm font-semibold text-[#171614] transition-transform hover:-translate-y-1"
          >
            Explore My Books →
          </Link>
        </div>
      </section>
    </main>
  );
}