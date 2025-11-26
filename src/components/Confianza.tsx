import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Award, Shield, Star } from 'lucide-react';

const certificaciones = [
  { name: "Arita Wagyu", country: "Japón" },
  { name: "2GR Australia", country: "Australia" },
  { name: "Snake River Farms", country: "USA" },
  { name: "INK Uruguay", country: "Uruguay" },
  { name: "UMI Uruguay", country: "Uruguay" }
];

const stats = [
  { label: "Años de Experiencia", value: 15, suffix: "" },
  { label: "Países de Origen", value: 5, suffix: "" },
  { label: "Calidad Certificada", value: 100, suffix: "%" },
  { label: "Clientes Satisfechos", value: 10000, suffix: "+" }
];

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Cliente Premium",
    quote: "“Sin duda la mejor carne que he probado. El marmoleo del Wagyu es impresionante y la frescura al llegar es perfecta.”",
    avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=160&q=80"
  },
  {
    name: "Ana Rodríguez",
    role: "Chef de Restaurante",
    quote: "“La consistencia de los cortes y el servicio de envío refrigerado nos permite mantener un estándar alto en la cocina.”",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80"
  }
];

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

export function Confianza() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });
  const statValues = stats.map((s) => useCountUp(s.value));
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="bg-[#000000] text-white py-20 reveal animate-fade-up relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-[#D62828]/15 blur-3xl"></div>
        <div className="absolute right-0 top-1/3 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D62828] text-white px-4 py-2 uppercase tracking-wider mb-6">
            <Award size={20} />
            Certificaciones Internacionales
          </div>
          <h2 className="text-white mb-6 max-w-4xl mx-auto">
            ¡La mejor carne del mundo en tu asador!
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Trabajamos directamente con los proveedores más reconocidos a nivel mundial para garantizar la máxima calidad en cada corte.
          </p>
        </div>

        {/* Certificaciones Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {certificaciones.map((cert, index) => (
            <div 
              key={index}
              ref={(el) => (glowRefs.current[index] = el)}
              className="bg-white/8 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-[#D62828] transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-[#D62828]/15"></div>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <Shield size={48} className="text-[#D62828]" />
              </div>
              <h4 className="text-white text-center mb-2 relative z-10">
                {cert.name}
              </h4>
              <p className="text-gray-400 text-center uppercase tracking-wider relative z-10">
                {cert.country}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-16 mb-16">
          {stats.map((stat, idx) => (
            <div className="text-center" key={idx}>
              <div className="flex items-center justify-center mb-4">
                <Star className="text-[#D62828]" size={40} />
              </div>
              <p className="text-5xl text-white mb-2">
                {statValues[idx].toLocaleString()}
                {stat.suffix}
              </p>
              <p className="text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Slider */}
        <div className="bg-white/8 backdrop-blur-md border border-white/10 p-6 rounded-xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, idx) => (
                <div className="flex-[0_0_100%] px-2" key={idx}>
                  <div className="flex flex-col items-center text-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[#D62828]"
                      loading="lazy"
                    />
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-[#D62828] text-[#D62828]" />
                      ))}
                    </div>
                    <p className="text-white text-lg italic">{t.quote}</p>
                    <div>
                      <p className="text-[#D62828] font-semibold">{t.name}</p>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
