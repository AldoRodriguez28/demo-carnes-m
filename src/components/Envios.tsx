import { useEffect, useRef } from 'react';
import { Truck, Plane, Clock, ThermometerSnowflake, MapPin, CheckCircle2, LocateFixed } from 'lucide-react';

const methods = [
  {
    title: "Envío por Paquetería",
    subtitle: "Servicio estándar refrigerado",
    time: "1 a 3 días hábiles",
    cost: "Desde $350",
    icon: Truck,
    points: [
      "Empaque refrigerado con gel packs",
      "A domicilio en toda la República",
      "Seguimiento en tiempo real"
    ],
    durationScore: 60
  },
  {
    title: "Envío Ocurre",
    subtitle: "Express Aero/Terminal",
    time: "12 a 36 horas",
    cost: "Desde $450",
    icon: Plane,
    points: [
      "Refrigeración premium garantizada",
      "Recoges en terminal más cercana",
      "Ventaja de tiempo para urgencias"
    ],
    durationScore: 90
  }
];

export function Envios() {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = iconRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('pulse'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pulse');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="envios" className="bg-[#F5F5F5] py-20 reveal animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D62828] text-white px-4 py-2 uppercase tracking-wider mb-4">
            <Truck className="inline mr-2" size={20} />
            Cobertura Nacional
          </div>
          <h2 className="text-[#000000] mb-4">
            Envíos a Toda la República
          </h2>
          <p className="text-[#2B2B2B] max-w-2xl mx-auto">
            Llevamos carne premium directamente a tu puerta, con sistema de refrigeración especializado para garantizar la frescura y calidad de cada corte.
          </p>
        </div>

        {/* Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-b from-[#f3f3f3] to-white p-8 border border-gray-200 rounded-xl card-elevated hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="inline-flex items-center justify-center bg-[#D62828] text-white p-4 rounded-full shadow-lg mb-6 icon-pulse"
                >
                  <Icon size={32} />
                </div>
                <h3 className="text-[#000000] mb-1">{method.title}</h3>
                <p className="text-[#2B2B2B] mb-4">{method.subtitle}</p>

                <div className="flex items-center gap-3 mb-6">
                  <Clock size={20} className="text-[#D62828]" />
                  <span className="text-[#2B2B2B] font-medium">{method.time}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {method.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#2B2B2B]">
                      <CheckCircle2 size={20} className="text-[#D62828]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#F5F5F5] p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="text-[#2B2B2B] uppercase tracking-wider text-sm">Costo</p>
                    <p className="text-[#D62828] text-xl">{method.cost}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#2B2B2B]">
                    <ThermometerSnowflake size={20} className="text-[#D62828]" />
                    <span>Cadena de frío</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline / Progress */}
        <div className="bg-white p-6 border border-gray-200 rounded-xl card-elevated mb-12">
          <h3 className="text-[#000000] mb-4 text-center">Velocidad de Entrega</h3>
          <div className="space-y-4">
            {methods.map((method, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm text-[#2B2B2B] mb-1">
                  <span>{method.title}</span>
                  <span>{method.time}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-gradient-to-r from-[#D62828] to-[#7a0f0f]"
                    style={{ width: `${method.durationScore}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 bg-[#D62828] text-white px-8 py-4 rounded-full hover:bg-[#000000] transition-colors btn-magnetic">
            <LocateFixed size={20} />
            Detectando ubicación…
          </button>
        </div>
      </div>
    </section>
  );
}
