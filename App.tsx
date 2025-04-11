import React from 'react';
import { Star, MapPin, Phone, Mail, Instagram, Facebook, Cloud, Heart, ShoppingBag } from 'lucide-react';
import { useStore } from './store';
import { products, translations } from './data';
import { LanguageSelector } from './components/LanguageSelector';
import { Cart } from './components/Cart';

function App() {
  const { language, addToCart } = useStore();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-brand-baby-pink">
      <LanguageSelector />
      <Cart />

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-brand-bubblegum to-brand-baby-pink py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-baloo text-brand-deep-lilac mb-6">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl font-poppins text-brand-deep-lilac mb-8">
            {t.subtitle}
          </p>
          <a
            href="#products"
            className="inline-block bg-brand-lavender text-white px-8 py-3 rounded-full hover:bg-brand-deep-lilac transition duration-300 font-poppins"
          >
            {t.exploreButton}
          </a>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-baloo text-brand-deep-lilac text-center mb-12">
            {t.productsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-baloo font-semibold text-brand-deep-lilac mb-2">
                    {product.name[language]}
                  </h3>
                  <p className="text-gray-600 font-poppins mb-4">
                    {product.description[language]}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-deep-lilac font-semibold">
                      ${product.price.toFixed(2)} / 500g
                    </span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="bg-brand-deep-lilac text-white px-4 py-2 rounded-lg hover:bg-brand-lavender transition-colors flex items-center gap-2"
                    >
                      <ShoppingBag size={20} />
                      {t.addToCart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-deep-lilac text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Cloud className="text-brand-pastel-yellow" size={24} />
            <h3 className="text-2xl font-bold font-baloo">{t.title}</h3>
            <Heart className="text-brand-bubblegum" size={24} />
          </div>
          <p className="text-brand-pastel-yellow font-poppins">
            © {new Date().getFullYear()} Delicious Dreams. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;