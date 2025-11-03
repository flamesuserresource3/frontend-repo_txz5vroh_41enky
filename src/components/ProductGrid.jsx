import { useMemo } from "react";
import PropTypes from "prop-types";
import { Heart, Star } from "lucide-react";

function ProductCard({ product, onAdd }) {
  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <button className="absolute right-3 top-3 rounded-full border border-gray-200 bg-white p-2 text-gray-600 hover:text-rose-600 hover:border-rose-200">
        <Heart size={16} />
      </button>
      <a href="#" className="block overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </a>
      <div className="mt-3 space-y-1">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-800 leading-snug">{product.title}</h3>
        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} />
          ))}
          <span className="ml-1 text-xs text-gray-500">{product.reviews}+ ulasan</span>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-base font-bold text-gray-900">Rp {product.price.toLocaleString("id-ID")}</span>
          {product.original && (
            <span className="text-xs text-gray-400 line-through">Rp {product.original.toLocaleString("id-ID")}</span>
          )}
        </div>
      </div>
      <button
        onClick={() => onAdd(product)}
        className="mt-3 w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    original: PropTypes.number,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default function ProductGrid({ products, query, onAdd }) {
  const filtered = useMemo(() => {
    const q = (query || "").toLowerCase();
    return products.filter((p) => p.title.toLowerCase().includes(q));
  }, [products, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold tracking-tight">Pilihan Terbaik untuk Anda</h2>
        <p className="text-sm text-gray-500">{filtered.length} produk ditemukan</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(ProductCard.propTypes.product).isRequired,
  query: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};
