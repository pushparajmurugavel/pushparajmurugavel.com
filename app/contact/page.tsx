"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "");
    const message = String(form.get("message") || "");

    const mailSubject = encodeURIComponent(
      subject || `Website enquiry from ${name}`
    );

    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:hello@pushparajmurugavel.com?subject=${mailSubject}&body=${mailBody}`;

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#c8a96b]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#c8a96b]">
            Get in Touch
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Every meaningful
            <span className="block text-[#c8a96b]">
              connection begins somewhere.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aaa39a]">
            For book enquiries, literary events, interviews, collaborations
            or a simple hello, you are welcome to get in touch.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
              Let&apos;s Connect
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              I would love to hear from you.
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-[#aaa39a]">
              Whether you are a reader, an event organiser, a fellow writer
              or someone with an interesting idea, use the form to share
              a little about what you have in mind.
            </p>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96b]">
                Contact Topics
              </p>

              <ul className="mt-5 space-y-4 text-[#d4ccc1]">
                <li>— Book and reading enquiries</li>
                <li>— Literary events and speaking</li>
                <li>— Media and interviews</li>
                <li>— Creative collaborations</li>
                <li>— Writing and travel</li>
              </ul>
            </div>

            <Link
              href="/media"
              className="mt-9 inline-flex border-b border-[#c8a96b]/60 pb-2 text-sm font-semibold text-[#d8bd8a] transition-colors hover:text-[#f4efe6]"
            >
              Explore Media & Events →
            </Link>
          </div>

          {/* FORM */}
          <div className="border border-white/10 bg-[#1d1b19] p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a96b]">
              Send a Message
            </p>

            <h2 className="mt-4 font-serif text-3xl">
              Tell me what&apos;s on your mind.
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-[#d4ccc1]"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="w-full border border-white/15 bg-[#171614] px-4 py-3 text-[#f4efe6] outline-none placeholder:text-[#716b63] focus:border-[#c8a96b]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-[#d4ccc1]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full border border-white/15 bg-[#171614] px-4 py-3 text-[#f4efe6] outline-none placeholder:text-[#716b63] focus:border-[#c8a96b]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-[#d4ccc1]"
                >
                  Enquiry type
                </label>

                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full border border-white/15 bg-[#171614] px-4 py-3 text-[#f4efe6] outline-none focus:border-[#c8a96b]"
                >
                  <option value="" disabled>
                    Choose an enquiry type
                  </option>
                  <option value="Book enquiry">Book enquiry</option>
                  <option value="Literary event">Literary event</option>
                  <option value="Media or interview">Media or interview</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other enquiry">Other enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-[#d4ccc1]"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full resize-y border border-white/15 bg-[#171614] px-4 py-3 text-[#f4efe6] outline-none placeholder:text-[#716b63] focus:border-[#c8a96b]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#c8a96b] px-7 py-4 text-sm font-semibold text-[#171614] transition-colors hover:bg-[#d8bd8a] sm:w-auto"
              >
                Prepare Email →
              </button>

              {submitted && (
                <p className="text-sm leading-6 text-[#d8bd8a]" role="status">
                  Your email application should open with the message details.
                  Please review and send the email to complete your enquiry.
                </p>
              )}

              <p className="text-xs leading-6 text-[#8f877c]">
                This form prepares an email using your device&apos;s default
                email application. It does not store or automatically send
                messages from this website yet.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-white/10 bg-[#1d1b19] px-6 py-16 text-center">
        <p className="font-serif text-2xl text-[#d8bd8a]">
          Thank you for being here.
        </p>

        <p className="mt-4 text-sm text-[#aaa39a]">
          Every conversation has the potential to become a story.
        </p>
      </section>
    </main>
  );
}