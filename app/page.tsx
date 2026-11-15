import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        id="home"
        className="relative min-h-[calc(100vh-90px)] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10, 9, 8, 0.68) 0%, rgba(10, 9, 8, 0.46) 38%, rgba(10, 9, 8, 0.20) 70%, rgba(10, 9, 8, 0.10) 100%), url('/images/hero-travel.jpg')",
          backgroundPosition: "center center",
        }}
      >

        {/* Subtle gold glow */}
        <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#8f6b35]/10 blur-[140px]" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center px-6 py-20">

          <div className="max-w-[680px]">

            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-[#c8a96b]">
              Stories. Journeys. Emotions.
            </p>

            <h1 className="max-w-[680px] font-serif text-6xl leading-[0.95] tracking-[-0.04em] text-[#f4efe6] md:text-7xl lg:text-8xl">

              Some journeys
              <br />

              <span className="text-[#c8a96b]">
                change you forever.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#d3ccc1]">
              I write about love, life, friendship, distance, memories,
              and the roads that lead us to ourselves.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              {/* EXPLORE BOOKS */}
              <a
                href="#books"
                className="inline-flex items-center justify-center rounded-full bg-[#c8a96b] px-7 py-4 text-sm font-semibold text-[#171614] transition-transform duration-300 hover:-translate-y-1"
              >
                Explore My Books →
              </a>

              {/* WATCH MY JOURNEY */}
              <a
                href="#travel"
                className="inline-flex items-center justify-center rounded-full border border-[#c8a96b] bg-transparent px-7 py-4 text-sm font-semibold text-[#f4efe6] transition-colors duration-300 hover:bg-[#c8a96b] hover:text-[#171614]"
              >
                Watch My Journey
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT AUTHOR
      ====================================================== */}

      <section
        id="about"
        className="bg-[#f4efe6] px-6 py-24 text-[#171614]"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* AUTHOR PHOTO */}

          <div className="relative mx-auto w-full max-w-md">

            <div className="border border-[#c8a96b] p-2">

              <Image
                src="/images/pushparaj-author.jpg"
                alt="Pushparaj Murugavel"
                width={1023}
                height={1538}
                className="h-auto w-full object-cover"
                priority
              />

            </div>

            {/* AUTHOR LABEL */}

            <div className="absolute -bottom-4 right-[-10px] bg-[#c8a96b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#171614]">
              The Author
            </div>

          </div>


          {/* ABOUT CONTENT */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9f7b3f]">
              About The Author
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">

              Words.
              <br />

              Roads.
              <br />

              <span className="text-[#9f7b3f]">
                Real Life.
              </span>

            </h2>

            <div className="mt-8 h-px w-16 bg-[#c8a96b]" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#49443e]">
              I am Pushparaj Murugavel — a writer, traveller, and storyteller.
              My stories are born from real conversations, quiet moments,
              meaningful places, relationships, memories, and the beautiful
              chaos of everyday life.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#49443e]">
              When I am not writing, I am often on the road, collecting
              experiences, photographs, and stories that eventually find
              their way onto a page.
            </p>


            {/* SIGNATURE */}

            <p
              className="mt-8 text-4xl text-[#171614]"
              style={{
                fontFamily:
                  "var(--font-dancing-script), 'Brush Script MT', 'Segoe Script', cursive",
              }}
            >
              Pushparaj Murugavel
            </p>


            {/* KNOW MORE BUTTON */}

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#171614] px-7 py-4 text-sm font-semibold text-[#f4efe6] transition-transform duration-300 hover:-translate-y-1"
            >
              Know More About Me →
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          WRITING
      ====================================================== */}

      <section
        id="writing"
        className="bg-[#171614] px-6 py-24 text-[#f4efe6]"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            From My Notebook
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Stories that begin with a thought.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            Ideas, reflections, observations, poems, and stories shaped by
            everyday life.
          </p>

        </div>

      </section>


      {/* =====================================================
          BOOKS
      ====================================================== */}

      <section
        id="books"
        className="bg-[#f4efe6] px-6 py-24 text-[#171614]"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9f7b3f]">
            My Books
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <h2 className="font-serif text-5xl md:text-6xl">
              Stories worth carrying with you.
            </h2>

            <a
              href="#books"
              className="text-sm font-semibold text-[#9f7b3f] transition-colors hover:text-[#171614]"
            >
              View All Books →
            </a>

          </div>


          {/* BOOK GRID */}

          <div className="mt-14 grid gap-8 md:grid-cols-3">


            {/* Where the Miles Melt Away */}

            <article className="premium-card overflow-hidden border border-[#d8cdbd] bg-white">

              <div className="flex aspect-[3/4] items-center justify-center bg-[#171614] p-10">

                <div className="flex h-full w-full flex-col items-center justify-center border border-[#c8a96b]/50 px-6 text-center">

                  <p className="text-xs uppercase tracking-[0.35em] text-[#c8a96b]">
                    A Novel
                  </p>

                  <h3 className="mt-8 font-serif text-3xl text-[#f4efe6]">
                    THE
                    <br />
                    MILES
                    <br />
                    BETWEEN
                    <br />
                    US
                  </h3>

                  <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#aaa39a]">
                    Pushparaj Murugavel
                  </p>

                </div>

              </div>

              <div className="p-7">

                <h3 className="font-serif text-2xl">
                  Where the Miles Melt Away
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6c665f]">
                  A journey of love, distance, friendship and destiny.
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-lg font-semibold">
                    ₹299
                  </span>

                  <a
                    href="#contact"
                    className="rounded-full bg-[#171614] px-5 py-3 text-sm font-semibold text-[#f4efe6] transition-transform duration-300 hover:-translate-y-1"
                  >
                    Buy Now
                  </a>

                </div>

              </div>

            </article>


            {/* UPCOMING BOOK */}

            <article className="premium-card overflow-hidden border border-[#d8cdbd] bg-white">

              <div className="flex aspect-[3/4] items-center justify-center bg-[#e8e0d4]">

                <div className="text-center">

                  <p className="text-xs uppercase tracking-[0.35em] text-[#9f7b3f]">
                    Coming Soon
                  </p>

                  <h3 className="mt-5 font-serif text-3xl text-[#6f665c]">
                    More
                    <br />
                    Stories
                  </h3>

                </div>

              </div>

              <div className="p-7">

                <h3 className="font-serif text-2xl">
                  Upcoming Book
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6c665f]">
                  Another journey is taking shape.
                </p>

                <div className="mt-6">

                  <span className="text-sm font-semibold uppercase tracking-wider text-[#9f7b3f]">
                    Coming Soon
                  </span>

                </div>

              </div>

            </article>


            {/* FUTURE BOOK */}

            <article className="premium-card overflow-hidden border border-[#d8cdbd] bg-white">

              <div className="flex aspect-[3/4] items-center justify-center bg-[#e8e0d4]">

                <div className="text-center">

                  <p className="text-xs uppercase tracking-[0.35em] text-[#9f7b3f]">
                    Coming Soon
                  </p>

                  <h3 className="mt-5 font-serif text-3xl text-[#6f665c]">
                    A Story
                    <br />
                    Unwritten
                  </h3>

                </div>

              </div>

              <div className="p-7">

                <h3 className="font-serif text-2xl">
                  More Stories
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6c665f]">
                  New pages. New places. New stories.
                </p>

                <div className="mt-6">

                  <span className="text-sm font-semibold uppercase tracking-wider text-[#9f7b3f]">
                    Coming Soon
                  </span>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED BOOK
      ====================================================== */}

      <section className="bg-[#171614] px-6 py-24 text-[#f4efe6]">

        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
              Featured Book
            </p>

            <h2 className="mt-6 font-serif text-5xl md:text-6xl">
              Where the Miles Melt Away
            </h2>

            <p className="mt-5 text-xl italic text-[#d8bd8a]">
              A journey of love, distance and destiny.
            </p>

            <div className="mt-8 h-px w-16 bg-[#c8a96b]" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#aaa39a]">
              Some distances are measured in miles. Others are measured in
              memories, silence, waiting, and the moments we never forget.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#aaa39a]">
              Where the Miles Melt Away is a story about relationships, roads,
              choices, emotions, and the people who remain with us even when
              life takes us far apart.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-full bg-[#c8a96b] px-7 py-4 text-sm font-semibold text-[#171614] transition-transform duration-300 hover:-translate-y-1"
              >
                Order Now →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#c8a96b] px-7 py-4 text-sm font-semibold text-[#f4efe6] transition-colors duration-300 hover:bg-[#c8a96b] hover:text-[#171614]"
              >
                Read a Sample
              </a>

            </div>

          </div>


          {/* BOOK VISUAL */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="flex h-[480px] w-[310px] items-center justify-center bg-gradient-to-b from-[#34302b] to-[#11100f] p-8 shadow-2xl">

                <div className="flex h-full w-full flex-col items-center justify-center border border-[#c8a96b]/50 text-center">

                  <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b]">
                    The
                  </p>

                  <h3 className="mt-5 font-serif text-4xl text-[#f4efe6]">
                    MILES
                    <br />
                    BETWEEN
                    <br />
                    US
                  </h3>

                  <p className="mt-10 text-xs uppercase tracking-[0.25em] text-[#aaa39a]">
                    A Journey of Love,
                    <br />
                    Distance and Destiny
                  </p>

                  <p
                    className="mt-10 text-2xl text-[#d8bd8a]"
                    style={{
                      fontFamily:
                        "var(--font-dancing-script), 'Brush Script MT', cursive",
                    }}
                  >
                    Pushparaj Murugavel
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAVEL
      ====================================================== */}

      <section
        id="travel"
        className="bg-[#171614] px-6 py-24 text-[#f4efe6]"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Travel
          </p>

          <h2 className="mt-5 font-serif text-5xl md:text-6xl">
            The road is part of the story.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            I travel not to escape, but to understand life better.
            Every road leaves behind a memory, a photograph, and sometimes
            a story waiting to be written.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full border border-[#c8a96b] px-7 py-4 text-sm font-semibold text-[#f4efe6] transition-colors duration-300 hover:bg-[#c8a96b] hover:text-[#171614]"
          >
            Explore My Travel Stories →
          </a>

        </div>

      </section>


      {/* =====================================================
          MEDIA & EVENTS
      ====================================================== */}

      <section
        id="media"
        className="bg-[#f4efe6] px-6 py-24 text-[#171614]"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9f7b3f]">
            Media & Events
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            Let&apos;s share a story together.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#49443e]">
            For literary events, speaking opportunities, interviews,
            workshops, collaborations, or author appearances, get in touch.
          </p>


          {/* ALWAYS VISIBLE BUTTON */}

          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-[#c8a96b] bg-[#171614] px-8 py-4 text-sm font-semibold text-[#f4efe6] transition-colors duration-300 hover:bg-[#c8a96b] hover:text-[#171614]"
          >
            Invite the Author →
          </a>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="bg-[#171614] px-6 py-24 text-[#f4efe6]"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Contact
          </p>

          <h2 className="mt-5 font-serif text-5xl md:text-6xl">
            Let&apos;s stay connected.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            For books, collaborations, media enquiries, speaking events,
            or simply to say hello, I would love to hear from you.
          </p>

          <a
            href="mailto:hello@pushparajmurugavel.com"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-[#c8a96b] px-8 py-4 text-sm font-semibold text-[#f4efe6] transition-colors duration-300 hover:bg-[#c8a96b] hover:text-[#171614]"
          >
            Get In Touch →
          </a>

        </div>

      </section>

</main>
  );
}