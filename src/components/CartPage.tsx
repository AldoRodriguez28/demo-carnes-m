import { ArrowLeft, Trash2 } from 'lucide-react';
import { Navbar } from './Navbar';

type CartItem = {
  type: 'product' | 'cajita';
  slug: string;
  name: string;
  price: number;
  image: string;
  weight?: number;
  quantity: number;
};

type CartPageProps = {
  items: CartItem[];
  onBack: () => void;
  onNavigate?: (path: string) => void;
  onUpdateQuantity: (slug: string, type: CartItem['type'], quantity: number) => void;
  onRemove: (slug: string, type: CartItem['type']) => void;
};

export function CartPage({ items, onBack, onNavigate, onUpdateQuantity, onRemove }: CartPageProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWeight = items.reduce((acc, item) => acc + (item.weight ?? 0) * item.quantity, 0);

  const handleConfirm = () => {
    const lines = [
      'Pedido CARNES M®',
      '',
      ...items.map(
        (item) =>
          `• ${item.name} (${item.type === 'product' ? 'Producto' : 'Cajita'}) x${item.quantity} - $${(item.price * item.quantity).toLocaleString()}`
      ),
      '',
      `Subtotal: $${subtotal.toLocaleString()}`,
      `Peso estimado: ${totalWeight.toFixed(2)} kg`,
      '',
      'Confírmame dirección y forma de pago, por favor.'
    ];
    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar onNavigate={onNavigate} />
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black bg-white text-black text-sm font-semibold hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
            Seguir comprando
          </button>
          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Carrito</p>
            <h1 className="text-2xl sm:text-3xl font-black">Tu pedido</h1>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-[#F5F5F5] rounded-2xl p-8 text-center">
            <p className="text-lg font-semibold text-[#2B2B2B] mb-2">Aún no tienes productos.</p>
            <p className="text-sm text-[#4B5563] mb-6">Agrega cortes o cajitas y vuelve aquí.</p>
            <button
              onClick={() => (onNavigate ? onNavigate('/') : onBack())}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#D62828] text-white font-semibold hover:bg-[#c22222] transition"
            >
              Ir al catálogo
            </button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.type}-${item.slug}`}
                  className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 border border-gray-200 rounded-2xl shadow-sm"
                >
                  <div className="w-full sm:w-24 h-48 sm:h-24 rounded-2xl overflow-hidden bg-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                          {item.type === 'product' ? 'Producto' : 'Cajita'}
                        </p>
                        <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                      </div>
                      <button
                        onClick={() => onRemove(item.slug, item.type)}
                        className="text-gray-500 hover:text-[#D62828] p-2 rounded-lg transition"
                        aria-label="Eliminar"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <p className="text-[#D62828] font-bold mt-1">${item.price.toLocaleString()} {item.type === 'product' ? '/ kg' : ''}</p>
                    {item.weight ? (
                      <p className="text-sm text-gray-600">Peso referencia: {item.weight} kg</p>
                    ) : null}

                    <div className="flex items-center gap-3 mt-3">
                      <div className="inline-flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.slug, item.type, item.quantity - 1)}
                          className="px-3 py-2 text-sm font-bold text-black hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 text-sm font-semibold text-black bg-gray-50">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.slug, item.type, item.quantity + 1)}
                          className="px-3 py-2 text-sm font-bold text-black hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">
                        Subtotal: ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-[#000000] text-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] space-y-4">
              <h2 className="text-2xl font-black">Resumen</h2>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Peso estimado</span>
                  <span>{totalWeight.toFixed(2)} kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>Calculado al confirmar</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 text-lg font-semibold flex justify-between">
                <span>Total estimado</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={handleConfirm}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#D62828] text-white font-semibold hover:bg-[#c22222] active:scale-[0.99] transition"
                >
                  Confirmar pedido
                </button>
                <button
                  onClick={() => (onNavigate ? onNavigate('/') : onBack())}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-black text-[#000000] font-semibold bg-white hover:bg-gray-100 transition"
                >
                  Seguir comprando
                </button>
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
