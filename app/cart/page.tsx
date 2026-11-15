"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useCart();

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <main className="min-h-screen bg-[#171614] text-[#f4efe6]">
      {/* HERO */}
      <section className="border-b border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a96b]">
            Your Collection
          </p>

          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Your Shopping Cart
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#aaa39a]">
            The stories you choose to bring home begin here.
          </p>
        </div>
      </section>

      {/* CART CONTENT */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* CART ITEMS */}
          <div className="space-y-5">
            {cartItems.length === 0 ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center border border-white/10 bg-[#1d1b19] p-8 text-center md:p-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c8a96b]/40 text-4xl text-[#c8a96b]">
                  ♧
                </div>

                <h2 className="mt-7 font-serif text-3xl">
                  Your cart is waiting.
                </h2>

                <p className="mt-4 max-w-md leading-7 text-[#aaa39a]">
                  You haven&apos;t added any books yet. Explore the
                  collection and discover a story you would love to own.
                </p>

                <Link
                  href="/books"
                  className="mt-8 inline-flex rounded-full bg-[#c8a96b] px-7 py-4 text-sm font-semibold text-[#171614] transition-colors hover:bg-[#d8bd8a]"
                >
                  Explore My Books →
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <article
                  key={item.id}
                  className="border border-white/10 bg-[#1d1b19] p-6 md:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a96b]">
                        Book
                      </p>

                      <h2 className="mt-3 font-serif text-2xl">
                        {item.title}
                      </h2>

                      <p className="mt-3 text-lg font-semibold text-[#d8bd8a]">
                        {formatPrice(item.price)}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="mt-4 text-sm text-[#aaa39a] underline underline-offset-4 transition-colors hover:text-[#d8bd8a]"
                      >
                        Remove
                      </button>
                    </div>

                    <div>
                      <label
                        htmlFor={`quantity-${item.id}`}
                        className="block text-sm text-[#aaa39a]"
                      >
                        Quantity
                      </label>

                      <select
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(
                            item.id,
                            Number(event.target.value)
                          )
                        }
                        className="mt-2 rounded-lg border border-[#c8a96b]/40 bg-[#171614] px-4 py-3 text-[#f4efe6] outline-none focus:border-[#c8a96b]"
                      >
                        {Array.from({ length: 10 }, (_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>

                      <p className="mt-4 text-sm text-[#aaa39a]">
                        Item total
                      </p>

                      <p className="mt-1 text-xl font-semibold text-[#d8bd8a]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* ORDER SUMMARY */}
          <aside className="h-fit border border-white/10 bg-[#1d1b19] p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a96b]">
              Order Summary
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Your order
            </h2>

            <div className="mt-8 space-y-5 border-b border-white/10 pb-6">
              <div className="flex justify-between gap-4 text-sm text-[#aaa39a]">
                <span>Items</span>
                <span>
                  {cartItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="flex justify-between gap-4 text-sm text-[#aaa39a]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between gap-4 text-sm text-[#aaa39a]">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 py-6">
              <span className="font-semibold">Subtotal</span>
              <span className="text-xl font-semibold text-[#d8bd8a]">
                {formatPrice(subtotal)}
              </span>
            </div>

            {cartItems.length > 0 ? (
              <Link
                href="/checkout"
                className="block w-full rounded-full bg-[#c8a96b] px-6 py-4 text-center text-sm font-semibold text-[#171614] transition-colors hover:bg-[#d8bd8a]"
              >
                Proceed to Checkout →
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-full bg-[#4b463e] px-6 py-4 text-sm font-semibold text-[#aaa39a]"
              >
                Proceed to Checkout
              </button>
            )}

            <p className="mt-5 text-xs leading-6 text-[#817a70]">
              Shipping charges will be confirmed before your order
              is completed. Online payment is not connected yet.
            </p>
          </aside>
        </div>
      </section>

      {/* CONTINUE SHOPPING */}
      <section className="border-t border-white/10 bg-[#1d1b19] px-6 py-12 text-center">
        <Link
          href="/books"
          className="text-sm font-semibold text-[#d8bd8a] transition-colors hover:text-[#f4efe6]"
        >
          ← Continue Exploring Books
        </Link>
      </section>
    </main>
  );
}