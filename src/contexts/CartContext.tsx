import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

type CartItem = {
  type: 'product' | 'cajita';
  slug: string;
  name: string;
  price: number;
  image: string;
  weight?: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (slug: string, type: CartItem['type'], quantity: number) => void;
  removeItem: (slug: string, type: CartItem['type']) => void;
  clear: () => void;
  subtotal: number;
  totalItems: number;
  totalWeight: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = window.localStorage.getItem('carnes-cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('carnes-cart', JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const key = `${item.type}:${item.slug}`;
      const existing = prev.find((i) => `${i.type}:${i.slug}` === key);
      if (existing) {
        return prev.map((i) =>
          `${i.type}:${i.slug}` === key ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (slug: string, type: CartItem['type'], quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.slug === slug && item.type === type ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (slug: string, type: CartItem['type']) => {
    setItems((prev) => prev.filter((item) => !(item.slug === slug && item.type === type)));
  };

  const clear = () => setItems([]);

  const { subtotal, totalItems, totalWeight } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.subtotal += item.price * item.quantity;
        acc.totalItems += item.quantity;
        acc.totalWeight += (item.weight ?? 0) * item.quantity;
        return acc;
      },
      { subtotal: 0, totalItems: 0, totalWeight: 0 }
    );
  }, [items]);

  const value: CartContextValue = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    subtotal,
    totalItems,
    totalWeight,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
