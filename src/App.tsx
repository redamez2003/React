import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <footer className="bg-gray-900 text-white py-16 mt-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">ElectroShop</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Votre destination de confiance pour tous vos produits électroniques.
                    Qualité, service et satisfaction garantie.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="text-xl">📘</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="text-xl">🐦</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="text-xl">📷</span>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                  <ul className="space-y-2">
                    <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
                    <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Produits</Link></li>
                    <li><Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Panier</Link></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Catégories</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ordinateurs portables</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smartphones</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tablettes</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audio</a></li>
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="border-t border-gray-800 pt-8">
                <div className="max-w-md mx-auto text-center">
                  <h4 className="text-lg font-semibold mb-4">Restez informé</h4>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    <button className="bg-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors font-medium">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400">
                    &copy; 2024 ElectroShop. Tous droits réservés.
                  </p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Politique de confidentialité</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Conditions générales</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
