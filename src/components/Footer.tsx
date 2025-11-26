import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-32 sm:pb-16 reveal animate-fade-up relative">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Grid - Mobile-first: 1 col, luego 2, luego 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-white text-xl font-bold mb-4">
              CARNES <span className="text-primary">M®</span>
            </h4>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              La mejor carne premium del mundo, directamente a tu asador.
            </p>

            {/* Social Links - Touch targets 44x44px */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center min-w-11 min-h-11 bg-white/10 hover:bg-primary transition-colors duration-200 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center min-w-11 min-h-11 bg-white/10 hover:bg-primary transition-colors duration-200 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center min-w-11 min-h-11 bg-white/10 hover:bg-primary transition-colors duration-200 rounded-full"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#cajitas"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                >
                  Cajitas Felices
                </a>
              </li>
              <li>
                <a
                  href="#arma-cajita"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                >
                  Arma tu Cajita
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#envios"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                >
                  Envíos
                </a>
              </li>
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">Wagyu Japonés A5</li>
              <li className="text-gray-300">Wagyu Australiano</li>
              <li className="text-gray-300">Black Angus Prime</li>
              <li className="text-gray-300">Snake River Farms</li>
              <li className="text-gray-300">Taurus Gold</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Phone size={18} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p>+52 (55) 1234-5678</p>
                  <p className="text-xs text-gray-400">Lun - Vie: 9am - 7pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p>contacto@carnesm.com</p>
                  <p className="text-xs text-gray-400">Respuesta en 24hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <p>Ciudad de México, México</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mb-12"></div>

        {/* Newsletter - Mobile-first: stack vertical, horizontal en md+ */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-6 items-center">
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">
                Suscríbete a novedades y ofertas
              </h4>
              <p className="text-gray-300 text-sm">
                Recibe lanzamientos y promociones especiales en tu correo.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-md bg-white text-black text-sm min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Email para newsletter"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors duration-200 font-medium text-sm whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar - Mobile-first: stack vertical, horizontal en sm+ */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2025 Carnes M®. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Aviso de Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Fixed Button - Solo móvil - Touch target 56px altura */}
      <div className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
        <a
          href="https://wa.me/521234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white shadow-lg px-6 py-4 min-h-14 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-[#20BA5A] transition-colors duration-200"
        >
          <MessageCircle size={20} />
          <span>Hablar por WhatsApp</span>
        </a>
      </div>
    </footer>
  );
}
