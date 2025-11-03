import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

export default function Navbar({ cartCount, onSearch }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white font-bold">T</span>
            <span className="text-xl font-semibold tracking-tight">TokoPlaza</span>
          </a>

          {/* Category dropdown (visual only) */}
          <button className="hidden md:inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-200">
            Kategori <ChevronDown size={16} className="text-gray-500" />
          </button>

          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Cari produk, brand, atau toko"
                onChange={(e) => onSearch?.(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white pl-10 pr-4 py-2 text-sm outline-none ring-0 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">
              <ShoppingCart size={18} />
              <span>Keranjang</span>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-600 px-1.5 text-xs font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              <User size={18} />
              <span>Masuk</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number,
  onSearch: PropTypes.func,
};
