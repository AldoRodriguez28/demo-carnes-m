import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: "Elige tus cortes",
    description: "Selecciona entre Wagyu, Prime, Angus y más"
  },
  {
    title: "Agrega complementos",
    description: "Chorizos, quesos, salsas y más"
  },
  {
    title: "Recibe en tu puerta",
    description: "Envío refrigerado a toda la República"
  }
];

export function ArmaTuCajita() {
  return (
    <section id="arma-cajita" className="bg-[#000000] text-white py-20 reveal animate-fade-up diagonal-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative card-elevated overflow-hidden">
            <div className="absolute inset-0 bg-[#D62828] opacity-20 transform -rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1617813833669-8ad4397b9239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwZ2lmdCUyMGJveCUyMGJ1dGNoZXJ8ZW58MXx8fHwxNzY0MTA0OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Caja Carnes M"
              className="relative w-full h-[500px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#D62828] text-white p-6 w-48">
              <p className="text-4xl mb-2">100%</p>
              <p className="uppercase tracking-wider">Personalizable</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#D62828] text-white px-4 py-2 uppercase tracking-wider">
              <Sparkles size={20} />
              Personalizado
            </div>
            
            <h2 className="text-white">
              Arma tu Cajita Feliz
            </h2>
            
            <p className="text-gray-300 text-xl">
              Elige tus productos favoritos y arma tu paquete personalizado. Selecciona los mejores cortes de carne premium del mundo según tus preferencias.
            </p>

            <div className="space-y-4 pt-4 relative">
              <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-[#D62828]/60 via-[#D62828]/30 to-transparent pointer-events-none"></div>
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 relative">
                  <div className="bg-[#D62828] text-white w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full shadow-[0_0_0_6px_rgba(214,40,40,0.22)] ring-2 ring-[#D62828]/60">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-white mb-1">{step.title}</h4>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#000000] via-[#2b0000] to-[#D62828] text-white btn-magnetic mt-8 group">
              Personalizar mi Cajita
              <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
