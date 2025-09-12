import CartItem from "../components/CartItem";

async function getCart() {
  const res = await fetch("http://localhost:5000/api/cart", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
}

export default async function CartPage() {
  const cartItems = await getCart();

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item: any) => (
            <CartItem key={item._id} item={item} />
          ))}
        </ul>
      )}
    </main>
  );
}
