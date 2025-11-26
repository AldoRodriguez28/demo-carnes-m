import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CajitasFelices } from './components/CajitasFelices';
import { ArmaTuCajita } from './components/ArmaTuCajita';
import { Categorias } from './components/Categorias';
import { Envios } from './components/Envios';
import { Confianza } from './components/Confianza';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';
import { CajitaDetail } from './components/CajitaDetail';
import { CartPage } from './components/CartPage';
import { CartProvider, useCart } from './contexts/CartContext';

function useScrollReveal(deps: unknown[]) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const ensureAnimationClass = (el: HTMLElement) => {
      if (!el.classList.contains('animate-fade-up') && !el.classList.contains('animate-fade-in')) {
        el.classList.add('animate-fade-up');
      }
    };

    if (!elements.length) return;

    // Fallback para navegadores móviles donde el observer puede no disparar
    const fallbackTimeout = window.setTimeout(() => {
      elements.forEach((el) => {
        ensureAnimationClass(el);
        el.classList.add('is-visible');
      });
    }, 1200);

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => {
        ensureAnimationClass(el);
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          ensureAnimationClass(target);
          target.classList.add('is-visible');
          obs.unobserve(target);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, deps);
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

function AppContent() {
  const [path, setPath] = useState(() => window.location.pathname);
  const { items, addItem, updateQuantity, removeItem } = useCart();

  useScrollReveal([path]);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    if (to === path) return;
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  if (path.startsWith('/producto/')) {
    const slug = path.replace('/producto/', '').replace(/\/$/, '');
    return (
      <ProductDetail
        slug={slug}
        onBack={() => navigate('/')}
        onNavigate={navigate}
        onAddToCart={(payload) => addItem({ ...payload, type: 'product' })}
        onGoCart={() => navigate('/carrito')}
      />
    );
  }

  if (path.startsWith('/cajita/')) {
    const slug = path.replace('/cajita/', '').replace(/\/$/, '');
    return (
      <CajitaDetail
        slug={slug}
        onBack={() => navigate('/')}
        onNavigate={navigate}
        onAddToCart={(payload) => addItem({ ...payload, type: 'cajita' })}
        onGoCart={() => navigate('/carrito')}
      />
    );
  }

  if (path === '/carrito') {
    return (
      <CartPage
        items={items}
        onBack={() => navigate('/')}
        onNavigate={navigate}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={navigate} />
      <Hero />
      <CajitasFelices onNavigate={navigate} />
      <Categorias onNavigate={navigate} />
      <ArmaTuCajita />
      <Envios />
      <Confianza />
      <Footer />
    </div>
  );
}
