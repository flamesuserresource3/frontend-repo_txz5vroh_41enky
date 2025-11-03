const items = [
  { name: "Elektronik", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" },
  { name: "Fashion", image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop" },
  { name: "Olahraga", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop" },
  { name: "Kesehatan", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" },
  { name: "Rumah Tangga", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800&auto=format&fit=crop" },
  { name: "Hobi & Koleksi", image: "https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?q=80&w=800&auto=format&fit=crop" },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold tracking-tight">Jelajahi Kategori</h2>
        <a className="text-sm text-emerald-700 hover:text-emerald-800 font-medium" href="#">Lihat semua</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {items.map((cat) => (
          <a key={cat.name} href="#" className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img src={cat.image} alt={cat.name} className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"/>
            <div className="absolute inset-x-0 bottom-0 m-2 rounded-md bg-white/90 px-2 py-1 text-center text-xs font-semibold text-gray-800 group-hover:bg-white">
              {cat.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
