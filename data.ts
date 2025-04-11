import { Product, ShippingRate } from './types';

export const products: Product[] = [
  {
    id: 'chocolate',
    name: {
      en: 'Chocolate Dream',
      pt: 'Sonho de Chocolate',
    },
    description: {
      en: 'Rich chocolate-flavored popcorn',
      pt: 'Pipoca com sabor rico de chocolate',
    },
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1692415048340-da8b8159b95c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'strawberry',
    name: {
      en: 'Strawberry Bliss',
      pt: 'Delícia de Morango',
    },
    description: {
      en: 'Sweet strawberry-flavored popcorn',
      pt: 'Pipoca com sabor doce de morango',
    },
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1621162337980-525951317dc2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'milk',
    name: {
      en: 'Milk Cloud',
      pt: 'Nuvem de Leite Ninho',
    },
    description: {
      en: 'Creamy milk-flavored popcorn',
      pt: 'Pipoca com sabor cremoso de leite ninho',
    },
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1583399426383-0ccb9a0c7f0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'oreo',
    name: {
      en: 'Oreo Delight',
      pt: 'Delícia de Oreo',
    },
    description: {
      en: 'Cookies and cream flavored popcorn',
      pt: 'Pipoca com sabor de cookies e creme',
    },
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pacoca',
    name: {
      en: 'Peanut Candy',
      pt: 'Paçoca',
    },
    description: {
      en: 'Brazilian peanut candy flavored popcorn',
      pt: 'Pipoca com sabor de paçoca',
    },
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?auto=format&fit=crop&w=600&q=80',
  },
];

export const translations = {
  en: {
    title: 'Delicious Dreams',
    subtitle: 'Dreams you can taste',
    exploreButton: 'Explore Our Flavors',
    productsTitle: 'Our Gourmet Popcorn Selection',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    quantity: 'Quantity',
    total: 'Total',
    checkout: 'Checkout',
    shipping: 'Shipping',
    orderTotal: 'Order Total',
    weight: 'Weight',
    price: 'Price',
    remove: 'Remove',
    completeOrder: 'Complete Your Order',
    name: 'Full Name',
    email: 'Email Address',
    address: 'Delivery Address',
    paymentMethod: 'Payment Method',
    creditCard: 'Credit Card',
    bankTransfer: 'Bank Transfer',
    cashOnDelivery: 'Cash on Delivery',
    cancel: 'Cancel',
    placeOrder: 'Place Order',
  },
  pt: {
    title: 'Delicious Dreams',
    subtitle: 'Sonhos que você pode saborear',
    exploreButton: 'Explore Nossos Sabores',
    productsTitle: 'Nossa Seleção de Pipocas Gourmet',
    addToCart: 'Adicionar ao Carrinho',
    cart: 'Carrinho',
    quantity: 'Quantidade',
    total: 'Total',
    checkout: 'Finalizar Compra',
    shipping: 'Frete',
    orderTotal: 'Total do Pedido',
    weight: 'Peso',
    price: 'Preço',
    remove: 'Remover',
    completeOrder: 'Complete seu Pedido',
    name: 'Nome Completo',
    email: 'Endereço de Email',
    address: 'Endereço de Entrega',
    paymentMethod: 'Forma de Pagamento',
    creditCard: 'Cartão de Crédito',
    bankTransfer: 'Transferência Bancária',
    cashOnDelivery: 'Pagamento na Entrega',
    cancel: 'Cancelar',
    placeOrder: 'Fazer Pedido',
  },
};

export const shippingRate: ShippingRate = {
  baseRate: 10,
  ratePerKg: 5,
};