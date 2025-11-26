import { useEffect, useRef } from 'react';
import { ShoppingCart, MessageCircle, CreditCard, CheckCircle2 } from 'lucide-react';

const pasos = [
  {
    icon: ShoppingCart,
    title: 'Arma tu carrito',
    desc: 'Elige cortes o cajitas, ajusta cantidades y agrega en un clic.',
  },
  {
    icon: MessageCircle,
    title: 'Confirma por WhatsApp',
    desc: 'Mensaje prellenado con tu pedido; respondemos y coordinamos envío.',
  },
  {
    icon: CreditCard,
    title: 'Paga y recibe',
    desc: 'Pagas seguro y entregamos refrigerado en 24h.',
  },
];

export function FlujoPedido() {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = iconRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;
    nodes.forEach((node) => node.classList.add('pulse'));
  }, []);

  return (
    <section className="bg-[#F7F7F7] md:bg-white py-14 md:py-18 reveal animate-fade-up">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-12 space-y-2">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#D62828] font-bold">
            Cómo funciona
          </p>
          <h2 className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-black">Pide en 3 pasos</h2>
          <p className="text-[#2B2B2B] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Arma tu pedido, confirma en WhatsApp y recibe cortes premium listos para la parrilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl md:max-w-none mx-auto">
          {pasos.map((paso, index) => (
            <div
              key={paso.title}
              className="relative bg-gradient-to-b from-[#f5f5f5] to-white p-6 sm:p-7 md:p-8 border border-gray-200 rounded-2xl card-elevated hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                ref={(el) => (iconRefs.current[index] = el)}
                className="inline-flex items-center justify-center bg-[#D62828] text-white p-4 rounded-full shadow-lg mb-6 icon-pulse"
              >
                <paso.icon className="w-6 h-6" aria-hidden="true" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-1">{paso.title}</h3>
              <p className="text-[#4B5563] mb-5 text-sm md:text-base leading-relaxed">{paso.desc}</p>

              <ul className="space-y-3 text-[#2B2B2B] text-sm md:text-base mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#D62828]" />
                  <span>Asesoría y seguimiento inmediato.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#D62828]" />
                  <span>Notificaciones y confirmación rápida.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#D62828]" />
                  <span>Entrega refrigerada en 24h.</span>
                </li>
              </ul>

              <div className="bg-[#F7F7F7] p-4 rounded-lg border border-gray-200 flex items-center justify-between text-sm md:text-base">
                <div>
                  <p className="text-[#2B2B2B] uppercase tracking-wider text-xs md:text-sm">Paso</p>
                  <p className="text-[#D62828] text-base md:text-lg">0{index + 1}</p>
                </div>
                <div className="flex items-center gap-2 text-[#2B2B2B]">
                  <paso.icon size={18} className="text-[#D62828]" />
                  <span>Sin fricción</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
