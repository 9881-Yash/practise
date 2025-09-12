import AddToCart from "@/app/components/AddToCart";

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <main>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <p>{product.description}</p>

      {/* Client component */}
      <AddToCart productId={product._id} />
    </main>
  );
}
