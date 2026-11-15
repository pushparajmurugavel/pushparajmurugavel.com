"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";

type AddToCartButtonProps = {
  id: string;
  title: string;
  price: number;
  image?: string;
};

export default function AddToCartButton({
  id,
  title,
  price,
  image,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart({
      id,
      title,
      price,
      image,
    });

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="inline-flex items-center justify-center rounded-full border border-[#c8a96b] bg-[#c8a96b] px-6 py-3 text-sm font-semibold text-[#171614] transition-colors hover:border-[#d8bd8a] hover:bg-[#d8bd8a]"
    >
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}