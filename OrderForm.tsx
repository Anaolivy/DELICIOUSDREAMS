import React, { useState } from 'react';
import { useStore } from '../store';
import { Mail, MapPin, User, CreditCard } from 'lucide-react';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const { language, cart } = useStore();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit_card'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment processor and email service
    console.log('Order submitted:', { formData, cart });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-baloo text-brand-deep-lilac mb-6">
          {t.completeOrder}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-brand-deep-lilac">
              <User size={20} />
              <span>{t.name}</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-2 border-brand-lavender rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-deep-lilac"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-brand-deep-lilac">
              <Mail size={20} />
              <span>{t.email}</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-2 border-brand-lavender rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-deep-lilac"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-brand-deep-lilac">
              <MapPin size={20} />
              <span>{t.address}</span>
            </label>
            <textarea
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full border-2 border-brand-lavender rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-deep-lilac"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-brand-deep-lilac">
              <CreditCard size={20} />
              <span>{t.paymentMethod}</span>
            </label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              className="w-full border-2 border-brand-lavender rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-deep-lilac"
            >
              <option value="credit_card">{t.creditCard}</option>
              <option value="bank_transfer">{t.bankTransfer}</option>
              <option value="cash">{t.cashOnDelivery}</option>
            </select>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-brand-lavender text-brand-deep-lilac rounded-lg hover:bg-brand-lavender hover:text-white transition-colors"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-brand-deep-lilac text-white rounded-lg hover:bg-brand-lavender transition-colors"
            >
              {t.placeOrder}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}