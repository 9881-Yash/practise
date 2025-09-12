"use client";

import { useState } from "react";

export default function AddToCart({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleAdd() {
    setLoading(true);
    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    setLoading(false);
    alert("✅ Added to cart!");
  }

  return (
    <button
      onClick={handleAdd}
      disabled={loading}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}
