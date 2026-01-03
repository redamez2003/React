import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../CartContext';
import { products } from '../data';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
        <p className="text-gray-600 mb-8">Le produit que vous recherchez n'existe pas.</p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Retour aux produits
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-all group font-medium"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux produits
        </Link>

        {/* Grid Parent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="card overflow-hidden p-4 group">
            <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/600x400?text=Image+non+disponible';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Name & Category */}
            <div>
              <div className="inline-block mb-4">
                <span className="badge badge-primary">{product.category}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                {product.name}
              </h1>
              <p className="text-blue-600 text-xl font-semibold">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-6 h-6 transition-all ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                {product.rating} <span className="text-gray-400">({product.reviews} avis)</span>
              </span>
            </div>

            {/* Price */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
              <p className="text-sm text-gray-600 mb-2 font-medium">Prix</p>
              <div className="text-5xl font-bold text-gradient">
                {product.price.toLocaleString('fr-FR')} €
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <div
                className={`w-4 h-4 rounded-full ${
                  product.inStock
                    ? 'bg-green-500 shadow-lg shadow-green-500/50 animate-pulse'
                    : 'bg-red-500'
                }`}
              ></div>
              <span
                className={`font-semibold ${
                  product.inStock ? 'text-green-700' : 'text-red-600'
                }`}
              >
                {product.inStock ? '✓ En stock - Livraison rapide' : '✗ Rupture de stock'}
              </span>
            </div>

            {/* Description */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-5 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                product.inStock
                  ? 'btn-primary text-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <FaShoppingCart className="text-xl" />
              {product.inStock ? 'Ajouter au panier' : 'Indisponible'}
            </button>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Livraison</p>
                <p className="font-semibold text-gray-900">Gratuite</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Garantie</p>
                <p className="font-semibold text-gray-900">2 ans</p>
              </div>
            </div>
          </div> 
        </div> 
      </div>
    </div>
  );
};

export default ProductDetail;
