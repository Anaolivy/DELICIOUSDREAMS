import React from 'react';
import { ShoppingCart, Minus, Plus, X } from 'lucide-react';
import { useStore } from '../store';
import { products, translations, shippingRate } from '../data';

export function Cart() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, cart, updateQuantity, removeFromCart } = useStore();
  const t = translations[language];

  const cartItems = cart.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const totalWeight = cartItems.reduce(
    (total, item) => total + 0.5 * item.quantity,
    0
  );

  const shippingCost = shippingRate.baseRate + shippingRate.ratePerKg * totalWeight;
  const total = subtotal + shippingCost;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-brand-deep-lilac text-white p-4 rounded-full shadow-lg hover:bg-brand-lavender transition-colors z-50"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-brand-bubblegum text-brand-deep-lilac rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-baloo text-brand-deep-lilac">{t.cart}</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-brand-deep-lilac"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center gap-4 mb-4 p-4 bg-white rounded-lg shadow"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name[language]}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-baloo text-brand-deep-lilac">
                        {item.product.name[language]}
                      </h3>
                      <p className="text-gray-600">
                        ${item.product.price.toFixed(2)} / 500g
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, Math.max(0, item.quantity - 1))
                          }
                          className="text-brand-deep-lilac hover:text-brand-lavender"
                        >
                          <Minus size={20} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                          className="text-brand-deep-lilac hover:text-brand-lavender"
                        >
                          <Plus size={20} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="ml-auto text-red-500 hover:text-red-600"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t.total}</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.shipping}</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>{t.orderTotal}</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-brand-deep-lilac text-white py-2 rounded-lg hover:bg-brand-lavender transition-colors">
                  {t.checkout}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}