import ProductCard from "../components/ProductCart";

// app/products/page.tsx
async function getProducts(page = 1) {
  const res = await fetch(`http://localhost:5000/api/products?page=${page}&limit=20`, {
    cache: "no-store", // ensures fresh data every request
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
 const { products, page, pages } = await getProducts();

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product:any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
