import type { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 16\" M3 Pro",
    price: 2699,
    description: "Ordinateur portable professionnel avec puce M3 Pro, écran Liquid Retina XDR de 16,2 pouces, 16 Go de RAM et 512 Go de SSD. Idéal pour les créatifs et les développeurs.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
    category: "Ordinateurs portables",
    brand: "Apple",
    inStock: true,
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: 1299,
    description: "Ultrabook premium avec écran InfinityEdge de 13,4 pouces, processeur Intel Core i7, 16 Go de RAM et 512 Go de SSD. Design élégant et performances exceptionnelles.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400",
    category: "Ordinateurs portables",
    brand: "Dell",
    inStock: true,
    rating: 4.6,
    reviews: 892
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 1199,
    description: "Smartphone haut de gamme avec caméra Pro, puce A17 Pro, écran Super Retina XDR de 6,1 pouces et finition en titane. Capturez des moments exceptionnels.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    category: "Smartphones",
    brand: "Apple",
    inStock: true,
    rating: 4.7,
    reviews: 2156
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    price: 1399,
    description: "Smartphone flagship avec caméra de 200 MP, S Pen intégré, écran AMOLED 2X de 6,8 pouces et batterie longue durée. Productivité et créativité sans limites.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    category: "Smartphones",
    brand: "Samsung",
    inStock: true,
    rating: 4.5,
    reviews: 1876
  },
  {
    id: 5,
    name: "iPad Pro 12.9\" M2",
    price: 1099,
    description: "Tablette professionnelle avec puce M2, écran Liquid Retina XDR de 12,9 pouces et Apple Pencil Pro. Parfaite pour les artistes et les professionnels.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    category: "Tablettes",
    brand: "Apple",
    inStock: true,
    rating: 4.9,
    reviews: 967
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    price: 349,
    description: "Casque sans fil avec réduction de bruit active, autonomie de 30 heures et son haute résolution. L'expérience audio ultime pour les mélomanes.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    category: "Audio",
    brand: "Sony",
    inStock: true,
    rating: 4.4,
    reviews: 3421
  },
  {
    id: 7,
    name: "LG OLED C3 55\"",
    price: 1299,
    description: "Téléviseur OLED 4K de 55 pouces avec processeur α9 Gen6, Dolby Vision IQ et design ultra-fin. Images d'une qualité exceptionnelle.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    category: "Téléviseurs",
    brand: "LG",
    inStock: false,
    rating: 4.6,
    reviews: 756
  },
  {
    id: 8,
    name: "AirPods Pro (2nd generation)",
    price: 279,
    description: "Écouteurs true wireless avec réduction de bruit active, mode Transparence et étanchéité IPX4. Audio spatial et qualité sonore premium.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c9bf1d?w=400",
    category: "Audio",
    brand: "Apple",
    inStock: true,
    rating: 4.3,
    reviews: 2894
  }
];
