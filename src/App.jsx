import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";

const sampleProducts = [
  {
    id: 1,
    title: "Headphone Wireless Noise Cancelling",
    price: 899000,
    original: 1299000,
    rating: 5,
    reviews: 1200,
    image:
      "https://images.unsplash.com/photo-1518444055433-8f7f06cf0f01?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sneakers Pria Premium Lightweight",
    price: 459000,
    original: 699000,
    rating: 4,
    reviews: 870,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smartwatch Layar AMOLED + GPS",
    price: 1299000,
    original: 1899000,
    rating: 4,
    reviews: 430,
    image:
      "https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Kamera Mirrorless 24MP Kit Lens",
    price: 6499000,
    original: 7999000,
    rating: 5,
    reviews: 250,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Botol Minum Insulasi 1L Stainless",
    price: 129000,
    original: 199000,
    rating: 4,
    reviews: 540,
    image:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Kacamata Hitam Polarized UV400",
    price: 179000,
    original: 249000,
    rating: 4,
    reviews: 310,
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Keyboard Mekanik 87 Keys Backlit",
    price: 599000,
    original: 799000,
    rating: 5,
    reviews: 980,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Mixer Dapur Serbaguna 5 Kecepatan",
    price: 349000,
    original: 499000,
    rating: 4,
    reviews: 205,
    image:
      "https://images.unsplash.com/photo-1517957754644-768f1f17d725?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);

  const products = useMemo(() => sampleProducts, []);
  const cartCount = cart.length;

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar cartCount={cartCount} onSearch={setQuery} />
      <main>
        <Hero />
        <Categories />
        <ProductGrid products={products} query={query} onAdd={handleAddToCart} />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} TokoPlaza — Terinspirasi oleh pengalaman belanja favorit Anda.
        </div>
      </footer>
    </div>
  );
}
