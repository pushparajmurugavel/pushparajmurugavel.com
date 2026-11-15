import Link from "next/link";
import AddToCartButton from "../components/AddToCartButton";
const books = [
  {
    title: "Where the Miles Melt Away",
    category: "Featured Book",
    description:
      "A story of love, distance, friendship, memories and the journeys that change us.",
    status: "Available Soon",
    price: 299,
    featured: true,
  },
  {
    title: "Upcoming Book",
    category: "Coming Soon",
    description:
      "Another story is taking shape, waiting to find its way into the world.",
    status: "Coming Soon",
    price: null,
    featured: false,
  },
  {
    title: "More Stories",
    category: "Future Releases",
    description:
      "New pages, new places and new stories to discover in the future.",
    status: "Coming Soon",
    price: null,
    featured: false,
  },
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* HERO SECTION */}
      <section className="border-b border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            The Author&apos;s Collection
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Every book holds
            <span className="block text-[#c8a96b]">
              a world of its own.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            Explore my books, discover the stories behind them,
            and find the next journey you want to take.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="inline-flex rounded-full bg-[#c8a96b] px-7 py-4 text-sm font-semibold text-[#171614] transition hover:-translate-y-1 hover:bg-[#d8bd8a]"
            >
              Explore the Collection ↓
            </a>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[#c8a96b]/60 px-7 py-4 text-sm font-semibold text-[#f4efe6] transition hover:bg-[#c8a96b] hover:text-[#171614]"
            >
              Book Enquiries
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section
        id="collection"
        className="scroll-mt-24 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a96b]">
              The Collection
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Books & Stories
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#aaa39a]">
              Stories inspired by love, life, memories and the
              journeys that make us who we are.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <article
                key={book.title}
                className="group overflow-hidden border border-white/10 bg-[#1d1b19] transition duration-300 hover:-translate-y-1 hover:border-[#c8a96b]/60"
              >
                {/* BOOK COVER */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#211e1a] p-7">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96b]/10 via-transparent to-black/40" />

                  <div className="relative flex h-full flex-col items-center justify-center border border-[#c8a96b]/50 px-5 text-center">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#c8a96b]">
                      {book.category}
                    </p>

                    <div className="my-6 h-px w-12 bg-[#c8a96b]" />

                    {book.featured ? (
                      <h3 className="font-serif text-4xl leading-tight tracking-wide md:text-5xl">
                        THE
                        <br />
                        MILES
                        <br />
                        BETWEEN
                        <br />
                        US
                      </h3>
                    ) : (
                      <h3 className="max-w-[220px] font-serif text-3xl leading-tight text-[#d8bd8a]">
                        {book.title}
                      </h3>
                    )}

                    <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#aaa39a]">
                      Pushparaj Murugavel
                    </p>

                    {book.featured && (
                      <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#817a70]">
                        A Journey of Love & Distance
                      </p>
                    )}
                  </div>
                </div>

                {/* BOOK DETAILS */}
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96b]">
                    {book.category}
                  </p>

                  <h3 className="mt-4 font-serif text-2xl">
                    {book.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#aaa39a]">
                    {book.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      {book.price ? (
                        <>
                          <p className="text-xs text-[#817a70]">
                            Indicative Price
                          </p>

                          <p className="mt-1 text-xl font-semibold text-[#d8bd8a]">
                            ₹{book.price}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm font-medium text-[#d8bd8a]">
                          {book.status}
                        </p>
                      )}
                    </div>

                    {book.featured ? (
  <AddToCartButton
    id="the-miles-between-us"
    title={book.title}
    price={book.price ?? 299}
  />
) : (
  <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-[#aaa39a]">
    Coming Soon
  </span>
)}
 
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BOOK */}
      <section className="border-y border-white/10 bg-[#1d1b19] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
              Featured Book
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              Where the Miles Melt Away
            </h2>

            <p className="mt-5 text-xl italic text-[#d8bd8a]">
              A journey of love, distance and destiny.
            </p>

            <div className="mt-8 h-px w-16 bg-[#c8a96b]" />

            <p className="mt-8 max-w-xl leading-8 text-[#aaa39a]">
              Some distances are measured in miles. Others are
              measured in memories, silence, waiting and the
              moments we never forget.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-[#aaa39a]">
              Discover a story about relationships, choices,
              emotions and the people who remain with us even
              when life takes us far apart.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex rounded-full bg-[#c8a96b] px-8 py-4 text-sm font-semibold text-[#171614] transition hover:-translate-y-1 hover:bg-[#d8bd8a]"
            >
              Enquire About This Book →
            </Link>
          </div>

          {/* FEATURED BOOK VISUAL */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[340px]">
              <div className="absolute -inset-4 border border-[#c8a96b]/20" />

              <div className="relative flex aspect-[3/4] flex-col items-center justify-center bg-gradient-to-br from-[#34302b] via-[#211e1a] to-[#0b0a09] p-8 shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center border border-[#c8a96b]/50 px-5 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#c8a96b]">
                    A Novel
                  </p>

                  <div className="my-7 h-px w-12 bg-[#c8a96b]" />

                  <h3 className="font-serif text-4xl leading-tight tracking-wide md:text-5xl">
                    THE
                    <br />
                    MILES
                    <br />
                    BETWEEN
                    <br />
                    US
                  </h3>

                  <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#aaa39a]">
                    A Journey of Love,
                    <br />
                    Distance and Destiny
                  </p>

                  <p
                    className="mt-9 text-2xl text-[#d8bd8a]"
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

      {/* AUTHOR CTA */}
      <section className="px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            More Than Words
          </p>

          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            Every story begins somewhere.
          </h2>

          <p className="mt-6 leading-8 text-[#aaa39a]">
            Discover the person, places and experiences behind my writing.
          </p>

          <Link
            href="/about"
            className="mt-9 inline-flex rounded-full border border-[#c8a96b] px-8 py-4 text-sm font-semibold text-[#d8bd8a] transition hover:bg-[#c8a96b] hover:text-[#171614]"
          >
            About the Author →
          </Link>
        </div>
      </section>
    </main>
  );
}