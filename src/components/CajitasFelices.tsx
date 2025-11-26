import { ImageWithFallback } from './figma/ImageWithFallback';
import { Package, Scale, Crown } from 'lucide-react';
import { cajitas, type Cajita } from '../data/cajitas';

type CajitasFelicesProps = {
  onNavigate?: (path: string) => void;
};

export function CajitasFelices({ onNavigate }: CajitasFelicesProps) {
  return (
    <section id="cajitas" className="bg-[#F5F5F5] py-20 reveal animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D62828] text-white px-4 py-2 uppercase tracking-wider mb-4">
            <Package className="inline mr-2" size={20} />
            Combos Especiales
          </div>
          <h2 className="text-[#000000] mb-4">
            Cajitas Felices Diciembre 2025
          </h2>
          <p className="text-[#2B2B2B] max-w-2xl mx-auto">
            Nuestros combos premium seleccionados especialmente para tu parrillada perfecta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cajitas.map((cajita, index) => (
            <div key={index} className={cajita.featured ? 'p-[2px] rounded-xl bg-gradient-to-r from-[#7a0f0f] via-[#D62828] to-[#7a0f0f]' : ''}>
              <div
                className="bg-white overflow-hidden group transition-transform duration-300 card-elevated rounded-xl hover:-translate-y-1.5 hover:scale-[1.01]"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <ImageWithFallback
                    src={cajita.image}
                    alt={cajita.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {cajita.featured && (
                    <div className="absolute top-4 right-4 px-3 py-2 text-white uppercase tracking-wider rounded-full bg-gradient-to-r from-[#5e0b0b] via-[#a31414] to-[#d62828] shadow-lg flex items-center gap-2">
                      <Crown size={16} />
                      Premium
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-sm text-[#2B2B2B] rounded-full shadow">
                    Entrega 24-48h
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#000000] mb-2">
                    {cajita.name}
                  </h3>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-[#D62828] text-3xl">
                        ${cajita.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#2B2B2B]">
                      <Scale size={20} />
                      <span>{cajita.weight} KG</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#F5F5F5] rounded-full text-sm text-[#2B2B2B]">
                      Origen: {cajita.origin}
                    </span>
                    <span className="px-3 py-1 bg-[#F5F5F5] rounded-full text-sm text-[#2B2B2B]">
                      Marmoleo: {cajita.marbling}
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="text-[#2B2B2B] uppercase tracking-wider mb-2">
                      Incluye:
                    </p>
                    <ul className="space-y-1">
                      {cajita.items.slice(0, 3).map((cut, idx) => (
                        <li key={idx} className="text-[#2B2B2B] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full"></span>
                          {cut}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`/cajita/${cajita.slug}`}
                    onClick={(event) => {
                      if (onNavigate) {
                        event.preventDefault();
                        onNavigate(`/cajita/${cajita.slug}`);
                      }
                    }}
                    className="w-full bg-[#000000] text-white py-3 hover:bg-[#D62828] transition-colors rounded-full inline-flex items-center justify-center"
                  >
                    Ver Detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
