import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { products, type Product } from '../data/products';

type CategoriasProps = {
  onNavigate?: (path: string) => void;
};

export function Categorias({ onNavigate }: CategoriasProps) {
  return (
    <section id="catalogo" className="bg-white py-20 reveal animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#000000] mb-4">
            Catálogo Premium
          </h2>
          <p className="text-[#2B2B2B] max-w-2xl mx-auto">
            Los mejores cortes del mundo, seleccionados especialmente para los amantes del buen asador.
          </p>
        </div>

        {/* Grid on desktop, scrollable on mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((categoria: Product, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 overflow-hidden group hover:border-[#D62828] transition-all duration-300 card-elevated rounded-xl flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <ImageWithFallback
                    src={categoria.image}
                    alt={categoria.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {categoria.badge && (
                    <div
                      className="absolute top-2 left-4 bg-[#D62828] text-white px-2 py-3 uppercase tracking-wider shadow-lg rounded-b-md"
                      style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
                    >
                      {categoria.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"></div>
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm leading-snug">
                      {categoria.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#2B2B2B] uppercase tracking-wider mb-2">
                    {categoria.origin}
                  </p>
                  <h3 className="text-[#000000] mb-4">
                    {categoria.name}
                  </h3>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[#2B2B2B] uppercase tracking-wider">Desde</p>
                      <p className="text-[#D62828] text-2xl font-mono">
                        ${categoria.priceFrom}<span className="text-lg font-mono">/kg</span>
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/producto/${categoria.slug}`}
                    onClick={(event) => {
                      if (onNavigate) {
                        event.preventDefault();
                        onNavigate(`/producto/${categoria.slug}`);
                      }
                    }}
                    className="w-full bg-[#000000] text-white py-3 hover:bg-[#D62828] transition-colors flex items-center justify-center gap-2 group rounded-full mt-auto"
                  >
                    Ver producto
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
