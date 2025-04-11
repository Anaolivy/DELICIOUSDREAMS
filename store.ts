import { create } from 'zustand';
import { Language, CartItem } from './types';

interface Store {
  language: Language;
  setLanguage: (language: Language) => void;
  cart: CartItem[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

export const useStore = create<Store>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
  cart: [],
  addToCart: (productId) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.productId === productId);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { productId, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    })),
}));