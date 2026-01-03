import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaStar, FaTruck, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import ProductCard from './ProductCard';
import { products } from '../data';

const Home: React.FC = () => {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              ElectroShop
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection premium de produits électroniques.
              <span className="block mt-2 font-semibold">Qualité, performance et service client exceptionnel.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/products"
                className="btn-primary text-lg px-10 py-4 inline-flex items-center group"
              >
                <FaShoppingBag className="mr-3 text-xl" />
                Voir tous les produits
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/cart"
                className="btn-secondary text-lg px-10 py-4 inline-flex items-center"
              >
                Mon panier
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center slide-up">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaTruck className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Livraison Rapide</h3>
              <p className="text-gray-600 text-lg">Livraison gratuite dès 50€ d'achat</p>
            </div>
            <div className="text-center slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaShieldAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Garantie Qualité</h3>
              <p className="text-gray-600 text-lg">2 ans de garantie sur tous nos produits</p>
            </div>
            <div className="text-center slide-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaStar className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Service Client</h3>
              <p className="text-gray-600 text-lg">Support technique 7j/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Produits <span className="text-gradient">Phares</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez notre sélection de produits électroniques les plus populaires et tendances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="btn-primary text-lg px-12 py-4 inline-flex items-center group"
            >
              Voir tous les produits
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-gradient">Catégories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explorez notre large gamme de produits électroniques
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['Ordinateurs portables', 'Smartphones', 'Tablettes', 'Audio', 'Téléviseurs'].map((category, index) => (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className="card p-8 text-center hover:scale-105 transition-all duration-300 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{category}</h3>
                <p className="text-gray-600 font-medium">
                  {products.filter(p => p.category === category).length} produits
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaArrowRight className="mx-auto text-blue-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Restez <span className="text-yellow-300">informé</span>
            </h2>
            <p className="text-xl mb-10 leading-relaxed">
              Inscrivez-vous à notre newsletter pour recevoir les dernières nouveautés et offres exclusives
            </p>
            <div className="max-w-md mx-auto flex shadow-2xl rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-4 text-gray-900 focus:outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 text-lg">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white bg-opacity-5 rounded-full"></div>
      </section>
    </div>
  );
};

export default Home;
