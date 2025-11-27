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
    <section
      className="reveal animate-fade-up"
      style={{ background: 'linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 60%)', padding: '4rem 0 4.5rem' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-12 space-y-2">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#D62828] font-bold">
            Cómo funciona
          </p>
          <h2 className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-black">Pide en 3 pasos</h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
            Arma tu pedido, confirma en WhatsApp y recibe cortes premium listos para la parrilla.
          </p>
        </div>

        <div className="steps-grid max-w-5xl md:max-w-none mx-auto">
          {pasos.map((paso, index) => (
            <div
              key={paso.title}
              className="relative rounded-2xl card-elevated hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: 'linear-gradient(180deg, #F7F7F7 0%, #FFFFFF 70%)',
                border: '1px solid #e5e5e5',
                padding: '28px',
              }}
            >
              <div
                ref={(el) => (iconRefs.current[index] = el)}
                className="inline-flex items-center justify-center bg-[#D62828] text-white p-4 rounded-full shadow-lg mb-6 icon-pulse"
              >
                <paso.icon className="w-6 h-6" aria-hidden="true" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-1">{paso.title}</h3>
              <p className="mb-5 text-sm md:text-base leading-relaxed" style={{ color: '#4B5563' }}>
                {paso.desc}
              </p>

              <ul className="space-y-3 text-sm md:text-base mb-6" style={{ color: '#2B2B2B' }}>
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

              <div
                className="rounded-lg flex items-center justify-between text-sm md:text-base"
                style={{ background: '#F5F5F5', padding: '16px', border: '1px solid #e5e5e5' }}
              >
                <div>
                  <p className="uppercase tracking-wider text-xs md:text-sm" style={{ color: '#2B2B2B' }}>
                    Paso
                  </p>
                  <p className="text-base md:text-lg text-[#D62828]">0{index + 1}</p>
                </div>
                <div className="flex items-center gap-2" style={{ color: '#2B2B2B' }}>
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
