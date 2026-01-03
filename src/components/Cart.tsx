import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaShoppingCart className="text-blue-600 text-5xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Votre panier est vide</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Découvrez nos produits électriques et commencez vos achats !
          </p>
          <Link
            to="/products"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
          >
            <FaShoppingCart className="mr-3" />
            Voir les produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Votre <span className="text-yellow-300">Panier</span>
              </h1>
              <p className="text-xl opacity-90">
                {cart.reduce((total, item) => total + item.quantity, 0)} article{cart.reduce((total, item) => total + item.quantity, 0) > 1 ? 's' : ''} dans votre panier
              </p>
            </div>
            <Link
              to="/products"
              className="btn-secondary flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={item.product.id} className="card fade-in p-6 hover:shadow-xl transition-all" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    {/* Product Image */}
                    <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/128x128?text=Image';
                        }}
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-blue-600 font-semibold mb-2">{item.product.brand}</p>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.product.description}</p>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-900">
                          {item.product.price.toLocaleString('fr-FR')} €
                        </p>
                        <div className="flex items-center space-x-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center bg-gray-100 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded transition-all duration-200"
                            >
                              <FaMinus className="w-3 h-3" />
                            </button>
                            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded transition-all duration-200"
                            >
                              <FaPlus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                            title="Supprimer du panier"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mt-8">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 transition-colors font-semibold flex items-center"
              >
                <FaTrash className="mr-2" />
                Vider le panier
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-8 sticky top-8 bg-gradient-to-br from-white to-gray-50 border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Résumé de la commande</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-semibold">{getTotalPrice().toLocaleString('fr-FR')} €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Articles ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
                  <span className="font-semibold">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between items-center text-green-600">
                  <span className="font-medium">Livraison</span>
                  <span className="font-bold">Gratuite</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-gradient">{getTotalPrice().toLocaleString('fr-FR')} €</span>
                </div>
              </div>

              <button className="w-full btn-primary text-lg py-4 mb-4">
                Procéder au paiement
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Fonctionnalité de paiement à implémenter
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <span>🔒</span>
                  <span>Paiement sécurisé SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
