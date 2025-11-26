import { useEffect, useRef, useState } from 'react';
import { Menu, ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

type NavbarProps = {
  onNavigate?: (path: string) => void;
};

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => {
    const activeEl = document.activeElement as HTMLElement | null;
    if (activeEl && menuContainerRef.current?.contains(activeEl)) {
      activeEl.blur();
    }
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <nav
      className={`navbar sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 border-b border-white/10 px-px ${scrolled ? 'scrolled bg-black' : 'bg-black/95'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-full">
        <div className="flex items-center justify-between h-full p-6">
          {/* Chris Do: Logo BOLD y confiado - Contraste extremo */}
          <div className="flex items-center py-4">
            <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase">
              Carnes <span className="text-[#D62828]">M®</span>
            </h4>
          </div>

          {/* Chris Do: Menú minimalista - Solo esencial */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            <a
              href="#cajitas"
              className="text-white hover:text-[#D62828] transition-colors duration-200 font-bold text-sm uppercase tracking-[0.15em]"
            >
              Cajitas
            </a>
            <a
              href="#catalogo"
              className="text-white hover:text-[#D62828] transition-colors duration-200 font-bold text-sm uppercase tracking-[0.15em]"
            >
              Catálogo
            </a>
            <a
              href="#envios"
              className="text-white hover:text-[#D62828] transition-colors duration-200 font-bold text-sm uppercase tracking-[0.15em]"
            >
              Envíos
            </a>
          </div>

          {/* Chris Do: Acciones limpias - Menos es más */}
          <div className="flex items-center gap-2">
            {/* Phone - Chris Do: Minimalista */}
            <a
              href="tel:+52"
              className="hidden md:flex items-center justify-center min-w-[48px] min-h-[48px] text-white hover:text-[#D62828] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
              aria-label="Llamar"
            >
              <Phone size={20} strokeWidth={2} />
            </a>

            {/* Shopping Cart - Badge rojo circular */}
            <button
              className="relative flex items-center justify-center min-w-[48px] min-h-[48px] text-white hover:text-[#D62828] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
              aria-label="Carrito de compras"
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/carrito');
                } else {
                  window.location.href = '/carrito';
                }
              }}
            >
              <ShoppingCart size={22} strokeWidth={2} />
              <span className="absolute -top-2 -right-2 bg-[#D62828] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black">
                {totalItems}
              </span>
            </button>

            {/* Mobile Menu Toggle - Chris Do: Simple y directo */}
            <button
            className="md:hidden flex items-center justify-center min-w-[48px] min-h-[48px] text-white hover:text-[#D62828] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            ref={menuButtonRef}
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </div>

        {/* Chris Do: Overlay minimalista */}
        <div
          className={`md:hidden fixed inset-0 bg-black/60 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Chris Do: Bottom Sheet - Minimalismo extremo */}
        <div
          id="mobile-menu"
          ref={menuContainerRef}
          className={`md:hidden fixed inset-0 z-50 flex flex-col justify-end pb-safe transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
            }`}
          aria-hidden={!menuOpen}
          inert={menuOpen ? undefined : ''}
        >
          {/* Botón cerrar - Minimalista */}
          <button
            className="absolute top-4 right-4 flex items-center justify-center min-w-[56px] min-h-[56px] text-black hover:text-[#B22222] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 active:scale-95"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Contenido con espaciado generoso */}
          <div className="relative bg-white text-black rounded-t-3xl shadow-[0_-24px_60px_-40px_rgba(0,0,0,0.45)] px-6 pb-10 pt-16">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-black/10" aria-hidden="true" />

            {/* Navegación - Tipografía BOLD, rectángulos sharp */}
            <nav className="flex flex-col gap-2 mb-8">
              <a
                href="#cajitas"
                className="flex items-center min-h-[56px] px-6 text-2xl font-semibold text-black hover:text-[#B22222] hover:bg-black/3 transition-all duration-200 uppercase tracking-tight active:scale-[0.99]"
                onClick={closeMenu}
              >
                Cajitas
              </a>
              <a
                href="#catalogo"
                className="flex items-center min-h-[56px] px-6 text-2xl font-semibold text-black hover:text-[#B22222] hover:bg-black/3 transition-all duration-200 uppercase tracking-tight active:scale-[0.99]"
                onClick={closeMenu}
              >
                Catálogo
              </a>
              <a
                href="#envios"
                className="flex items-center min-h-[56px] px-6 text-2xl font-semibold text-black hover:text-[#B22222] hover:bg-black/3 transition-all duration-200 uppercase tracking-tight active:scale-[0.99]"
                onClick={closeMenu}
              >
                Envíos
              </a>
            </nav>

            {/* CTA Principal - Rectángulo sharp, contraste dramático */}
            <a
              href="tel:+52"
              className="flex items-center justify-center gap-3 min-h-[64px] w-full px-8 bg-[#B22222] text-white text-lg font-semibold uppercase tracking-wide hover:bg-[#9A1D1D] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B22222]/30 active:scale-[0.98]"
              onClick={closeMenu}
            >
              <Phone size={22} strokeWidth={2.5} />
              <span>Llamar Ahora</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
