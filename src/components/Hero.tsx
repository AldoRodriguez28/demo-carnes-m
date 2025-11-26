import { ShieldCheck, Truck, Timer } from 'lucide-react';

export function Hero() {
  const heroImage =
    "https://images.unsplash.com/photo-1602473812169-ede177b00aea?auto=format&fit=crop&w=2400&q=80";

  return (
    <section
      className="relative isolate overflow-hidden bg-[#0B0B0B] text-white flex items-center md:min-h-screen"
      style={{ minHeight: 'calc(100vh - 80px)' }}
    >
      {/* Fondo con imagen, gradientes y grano sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#101010] to-[#1B0B0B]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('${heroImage}')`,
            filter: 'saturate(0.8) brightness(0.45)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(214,40,40,0.35),transparent_40%),radial-gradient(circle_at_80%_5%,rgba(255,255,255,0.14),transparent_35%)]" />
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-25"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.16'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Columna izquierda: copy y CTA */}
          <div className="space-y-7 p-4 text-center md:text-left max-w-2xl">
            <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold tracking-[0.14em] uppercase backdrop-blur-md">
              Diciembre 2025
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              Carne <span className="text-[#D62828]">Premium</span>
            </h1>

            {/* <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-white/85">
              Listo para la parrilla, en 24h y con trazabilidad.
            </h2> */}

            <p className="text-lg text-white/75 max-w-xl mx-auto md:mx-0">
              Los mejores cortes directos a tu mesa. Seleccionados, empacados al vacío y listos para regalar o disfrutar.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#cajitas"
                className="inline-flex items-center justify-center px-10 py-4 sm:px-8 sm:py-6 bg-[#D62828] text-white text-lg font-bold tracking-tight rounded-2xl shadow-[0_18px_46px_-18px_rgba(214,40,40,0.85)] hover:bg-[#c22222] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D62828]/40 transition-all duration-300"
              >
                Ver Cajitas
              </a>
              <a
                href="#arma-tu-cajita"
                className="inline-flex items-center justify-center px-10 py-4 sm:px-8 sm:py-6 text-lg font-semibold text-white/85 border border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 active:scale-[0.99] transition-all duration-300"
              >
                Arma la tuya
              </a>
            </div>

            {/* Beneficios desktop/tablet */}
            <div className="hidden md:grid grid-cols-3 gap-3 pt-3">
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-left text-white/90 backdrop-blur">
                <div className="flex items-center gap-2 mb-2 text-white">
                  <Truck size={18} /> <span className="text-sm font-semibold">Entrega 24h</span>
                </div>
                <p className="text-sm text-white/70 leading-snug">Refrigerado y rastreable hasta tu puerta.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-left text-white/90 backdrop-blur">
                <div className="flex items-center gap-2 mb-2 text-white">
                  <ShieldCheck size={18} /> <span className="text-sm font-semibold">Certificados</span>
                </div>
                <p className="text-sm text-white/70 leading-snug">Maduración controlada y sellado al vacío.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-left text-white/90 backdrop-blur">
                <div className="flex items-center gap-2 mb-2 text-white">
                  <Timer size={18} /> <span className="text-sm font-semibold">Cero fricción</span>
                </div>
                <p className="text-sm text-white/70 leading-snug">Cortes porcionados para prender y servir.</p>
              </div>
            </div>
          </div>

          {/* Columna derecha: imagen controlada */}
          <div className="w-full h-full">
            <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px]">
              <div className="absolute -left-20 -bottom-12 w-80 h-80 bg-[#D62828]/30 blur-[120px]" aria-hidden="true" />
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 shadow-[0_25px_80px_-25px_rgba(0,0,0,0.55)] backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="Selección de cortes premium de res"
                  className="h-full w-full object-cover transform scale-[1.02] hover:scale-[1.05] transition-transform duration-700 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/55 text-sm font-semibold backdrop-blur-md border border-white/10">
                  <span className="block w-2 h-2 rounded-full bg-[#16DB65] animate-pulse" aria-hidden="true" />
                  Stock garantizado
                </div>
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                    <p className="text-xs text-white/60">Maduración</p>
                    <p className="text-base">28 días húmeda</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
                    <p className="text-xs text-white/60">Entrega</p>
                    <p className="text-base">24h refrigerada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
