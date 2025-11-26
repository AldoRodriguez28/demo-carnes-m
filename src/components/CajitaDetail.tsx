import { ArrowLeft, ShoppingCart, Package, Info } from 'lucide-react';
import { cajitas } from '../data/cajitas';
import { Navbar } from './Navbar';

type CajitaDetailProps = {
  slug: string;
  onBack: () => void;
  onNavigate?: (path: string) => void;
  onAddToCart?: (item: { slug: string; name: string; price: number; image: string; weight?: number }) => void;
  onGoCart?: () => void;
};

export function CajitaDetail({ slug, onBack, onNavigate, onAddToCart, onGoCart }: CajitaDetailProps) {
  const cajita = cajitas.find((item) => item.slug === slug);

  if (!cajita) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white text-black">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-2">Cajita</p>
        <h1 className="text-4xl font-black mb-4">No encontrada</h1>
        <button
          onClick={() => onNavigate ? onNavigate('/') : onBack()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-black/90 transition"
        >
          <ArrowLeft size={18} />
          Volver al catálogo
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar onNavigate={onNavigate} />
      <section className="relative isolate overflow-hidden bg-[#0B0B0B] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-[#1b0b0b]" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url('${cajita.image}')`,
              filter: 'saturate(0.8) brightness(0.45)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(214,40,40,0.32),transparent_45%),radial-gradient(circle_at_80%_5%,rgba(255,255,255,0.12),transparent_35%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-28 grid gap-12 md:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)]">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/15 transition-colors"
              >
                <ArrowLeft size={18} />
                Volver
              </button>
              <span className="text-sm text-white/60 uppercase tracking-[0.2em]">{cajita.origin}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-[12px] font-semibold uppercase tracking-[0.12em]">
                <Package size={14} className="mr-1" />
                Cajita feliz
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#D62828] text-white text-[12px] font-semibold uppercase tracking-[0.12em]">
                {cajita.marbling}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-[12px] font-semibold uppercase tracking-[0.12em]">
                {cajita.weight} kg aprox.
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">{cajita.tagline}</p>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                {cajita.name}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                Seleccionamos cortes balanceados y complementos listos para encender la parrilla sin complicaciones.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                <p className="text-xs text-white/60">Peso estimado</p>
                <p className="text-base">{cajita.weight} kg</p>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                <p className="text-xs text-white/60">Origen</p>
                <p className="text-base">{cajita.origin}</p>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                <p className="text-xs text-white/60">Marmoleo</p>
                <p className="text-base">{cajita.marbling}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" aria-hidden="true" />
                <p className="text-sm uppercase tracking-[0.12em]">Incluye:</p>
              </div>
              <ul className="space-y-2 text-white/90 text-base leading-relaxed">
                {cajita.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2 block w-1.5 h-1.5 bg-[#D62828] rounded-full" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {cajita.note && (
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-white/80 leading-relaxed">
                <Info size={18} className="mt-0.5" />
                <p className="text-sm uppercase tracking-[0.14em]">{cajita.note}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#cajitas"
                onClick={(event) => {
                  event.preventDefault();
                  onBack();
                }}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition w-full sm:w-auto"
              >
                Ver más cajitas
              </a>
              <div className="flex flex-col sm:flex-row w-full gap-2">
                <button
                  onClick={() =>
                    onAddToCart?.({
                      slug: cajita.slug,
                      name: cajita.name,
                      price: cajita.price,
                      image: cajita.image,
                      weight: cajita.weight
                    })
                  }
                  className="inline-flex w-full items-center justify-center px-6 py-3 rounded-2xl bg-[#D62828] text-white text-base font-semibold shadow-[0_15px_40px_-18px_rgba(214,40,40,0.8)] hover:bg-[#c22222] active:scale-[0.99] transition"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Agregar · ${cajita.price.toLocaleString()}
                </button>
                <button
                  onClick={() => onGoCart?.()}
                  className="inline-flex w-full sm:w-auto items-center justify-center px-5 py-3 rounded-2xl border border-white/15 text-white font-semibold hover:border-white/35 hover:bg-white/5 transition"
                >
                  Ver carrito
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-16 -bottom-16 w-72 h-72 bg-[#D62828]/30 blur-[120px]" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_80px_-25px_rgba(0,0,0,0.55)] min-h-[360px] sm:min-h-[480px]">
              <img
                src={cajita.image}
                alt={cajita.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/55 text-sm font-semibold backdrop-blur border border-white/10">
                <span className="block w-2 h-2 rounded-full bg-[#16DB65] animate-pulse" aria-hidden="true" />
                Listo para enviar
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                  <p className="text-xs text-white/60">Precio</p>
                  <p className="text-base">${cajita.price.toLocaleString()}</p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                  <p className="text-xs text-white/60">Peso</p>
                  <p className="text-base">{cajita.weight} kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
