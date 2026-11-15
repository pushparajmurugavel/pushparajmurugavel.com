import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { CartProvider } from "../context/CartContext";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pushparaj Murugavel | Writer. Traveller. Storyteller.",
    template: "%s | Pushparaj Murugavel",
  },
  description:
    "Explore the books, writing, journeys and stories of Pushparaj Murugavel.",
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Writing", href: "/writing" },
  { label: "Travel", href: "/travel" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const policies = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns & Refunds", href: "/refund-policy" },
];

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#c8a96b]/20 bg-[#11100f]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link
          href="/"
          aria-label="Pushparaj Murugavel — Home"
          className="shrink-0 text-2xl text-[#f4efe6] transition-colors hover:text-[#d8bd8a] sm:text-3xl"
          style={{
            fontFamily:
              "var(--font-dancing-script), 'Brush Script MT', cursive",
            fontWeight: 700,
          }}
        >
          Pushparaj Murugavel
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-[#d0c8bc] transition-colors duration-300 hover:text-[#d8bd8a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/cart"
            aria-label="View shopping cart"
            className="rounded-full border border-[#c8a96b]/50 px-4 py-3 text-sm text-[#d8bd8a] transition-colors hover:bg-[#c8a96b]/10"
          >
            Cart
          </Link>

          <Link
            href="/books"
            className="rounded-full border border-[#c8a96b] bg-[#c8a96b] px-4 py-3 text-xs font-semibold text-[#171614] transition-colors hover:border-[#f0d9a5] hover:bg-[#f0d9a5] sm:px-6 sm:text-sm"
          >
            Shop Books <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="flex gap-5 overflow-x-auto border-t border-white/5 px-5 py-3 lg:hidden"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 text-xs text-[#d0c8bc] transition-colors hover:text-[#d8bd8a]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#c8a96b]/20 bg-[#0b0a09] px-6 py-12 text-[#aaa39a]">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start">
        <div>
          <Link
            href="/"
            className="text-3xl text-[#f4efe6] transition-colors hover:text-[#d8bd8a]"
            style={{
              fontFamily:
                "var(--font-dancing-script), 'Brush Script MT', cursive",
              fontWeight: 700,
            }}
          >
            Pushparaj Murugavel
          </Link>

          <p className="mt-3 text-sm tracking-wide">
            Writer. Traveller. Storyteller.
          </p>

          <div className="mt-5 h-px w-16 bg-[#c8a96b]" />
        </div>

        <div className="space-y-7 md:text-right">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96b]">
              Explore
            </p>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-5 gap-y-3 text-sm md:justify-end"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-[#d8bd8a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96b]">
              Customer Information
            </p>

            <nav
              aria-label="Policy navigation"
              className="flex flex-wrap gap-x-5 gap-y-3 text-sm md:justify-end"
            >
              {policies.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-[#d8bd8a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <p className="text-xs leading-6 text-[#817a70]">
            © {new Date().getFullYear()} Pushparaj Murugavel.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} antialiased`}
        style={{
          backgroundColor: "#171614",
          color: "#f4efe6",
        }}
      >
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}