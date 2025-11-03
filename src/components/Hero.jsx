import { BadgePercent, Truck, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold">
              <BadgePercent size={14} /> Super Sale Minggu Ini
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Belanja apa pun, kapan pun, di mana pun
            </h1>
            <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xl">
              Temukan jutaan produk dari berbagai kategori dengan harga terbaik.
              Pengiriman cepat, promo menarik, dan jaminan keaslian produk.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 font-semibold text-gray-800"><Truck size={18} className="text-emerald-600"/> Cepat</div>
                <p className="mt-1 text-xs text-gray-600">Pengiriman kilat ke seluruh Indonesia</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 font-semibold text-gray-800"><BadgePercent size={18} className="text-emerald-600"/> Hemat</div>
                <p className="mt-1 text-xs text-gray-600">Banjir promo tiap hari</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 font-semibold text-gray-800"><ShieldCheck size={18} className="text-emerald-600"/> Aman</div>
                <p className="mt-1 text-xs text-gray-600">Jaminan transaksi aman</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative h-72 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                alt="Shopping Banner"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow">
                  Diskon hingga 70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
