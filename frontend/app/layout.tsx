// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto p-6">
        <header className="flex justify-between items-center mb-6">
          <Link href="/" className="text-xl font-bold">🛍️ MyShop</Link>
          <Link href="/cart" className="text-blue-500">Cart</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
