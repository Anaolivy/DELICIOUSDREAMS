export type Language = 'en' | 'pt';

export interface Product {
  id: string;
  name: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  price: number;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface ShippingRate {
  baseRate: number;
  ratePerKg: number;
}