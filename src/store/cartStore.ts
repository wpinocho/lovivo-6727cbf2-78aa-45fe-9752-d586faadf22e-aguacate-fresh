import { create } from 'zustand';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product) => {
    console.log('Adding item to cart:', product);
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        items: [...state.items, { ...product, quantity: 1 }]
      };
    });
  },
  
  removeItem: (id) => {
    console.log('Removing item from cart:', id);
    set((state) => ({
      items: state.items.filter(item => item.id !== id)
    }));
  },
  
  updateQuantity: (id, quantity) => {
    console.log('Updating quantity:', id, quantity);
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    set((state) => ({
      items: state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    }));
  },
  
  clearCart: () => {
    console.log('Clearing cart');
    set({ items: [] });
  },
  
  toggleCart: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  }
}));