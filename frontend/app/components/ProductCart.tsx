// components/ProductCard.tsx
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="border rounded-xl p-4 hover:shadow cursor-pointer">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
}
