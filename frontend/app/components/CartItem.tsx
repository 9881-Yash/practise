"use client";

import { useState } from "react";

export default function CartItem({ item }: { item: any }) {
  const [quantity, setQuantity] = useState(item.quantity);

  async function updateQuantity(newQty: number) {
    setQuantity(newQty);
    await fetch(`http://localhost:5000/api/cart/${item._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: newQty }),
    });
  }

  return (
    <li className="flex justify-between items-center border-b pb-2">
      <span>{item.productId.name}</span>
      <div className="flex items-center space-x-2">
        <button onClick={() => updateQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={() => updateQuantity(quantity + 1)}>+</button>
      </div>
    </li>
  );
}
