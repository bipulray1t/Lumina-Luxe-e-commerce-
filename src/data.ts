export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Aether Headphones",
    price: 349.99,
    description: "Premium noise-canceling wireless headphones with spatial audio and 40-hour battery life.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    name: "Chronos Watch",
    price: 199.00,
    description: "Minimalist mechanical watch with sapphire crystal and Italian leather strap.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 85
  },
  {
    id: 3,
    name: "Nebula Speaker",
    price: 129.50,
    description: "Portable waterproof speaker with 360-degree sound and ambient lighting.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 210
  },
  {
    id: 4,
    name: "Zenith Camera",
    price: 899.00,
    description: "Compact mirrorless camera with 4K video and advanced autofocus system.",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviews: 56
  },
  {
    id: 5,
    name: "Onyx Backpack",
    price: 85.00,
    description: "Weather-resistant commuter backpack with dedicated laptop sleeve and hidden pockets.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1553062407-98eeb94c6a62?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 342
  },
  {
    id: 6,
    name: "Prism Sunglasses",
    price: 150.00,
    description: "Polarized sunglasses with lightweight titanium frames and UV protection.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    reviews: 92
  },
  {
    id: 7,
    name: "Stellar Tablet",
    price: 599.00,
    description: "Ultra-thin tablet with a stunning OLED display and powerful octa-core processor.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 8,
    name: "Aurora Keyboard",
    price: 129.00,
    description: "Mechanical gaming keyboard with customizable RGB lighting and tactile switches.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 210
  },
  {
    id: 9,
    name: "Titan Mouse",
    price: 79.00,
    description: "Ergonomic wireless mouse with high-precision sensor and long-lasting battery.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviews: 185
  },
  {
    id: 10,
    name: "Luna Lamp",
    price: 45.00,
    description: "Minimalist desk lamp with adjustable brightness and color temperature.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 320
  },
  {
    id: 11,
    name: "Vortex Drone",
    price: 1200.00,
    description: "Professional drone with 4K camera, GPS tracking, and obstacle avoidance.",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 45
  },
  {
    id: 12,
    name: "Solis Smartwatch",
    price: 249.00,
    description: "Advanced smartwatch with fitness tracking, heart rate monitor, and built-in GPS.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1508685096489-7aac291bd5b3?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    reviews: 112
  },
  {
    id: 13,
    name: "Aura Air Purifier",
    price: 189.00,
    description: "HEPA-filter air purifier with real-time air quality monitoring and ultra-quiet operation.",
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1585771724684-2827df006327?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 142
  },
  {
    id: 14,
    name: "Apex Gaming Chair",
    price: 399.00,
    description: "Ergonomic gaming chair with high-density foam, 4D armrests, and premium leather finish.",
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fce66?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 275
  },
  {
    id: 15,
    name: "Summit Backpack",
    price: 120.00,
    description: "Rugged outdoor backpack with 40L capacity, waterproof zippers, and ergonomic support.",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1553062407-98eeb94c6a62?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 16,
    name: "Pulse Fitness Tracker",
    price: 99.00,
    description: "Slim fitness band with heart rate, sleep tracking, and 14-day battery life.",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    reviews: 412
  },
  {
    id: 17,
    name: "Nova Projector",
    price: 499.00,
    description: "Portable 1080p smart projector with built-in speakers and streaming app support.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1535016120720-40c646bebbfc?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    reviews: 67
  },
  {
    id: 18,
    name: "Zen Desk Mat",
    price: 35.00,
    description: "Premium felt desk mat with non-slip base and minimalist aesthetic.",
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 19,
    name: "Orbit Wireless Charger",
    price: 55.00,
    description: "Fast wireless charging pad with magnetic alignment and sleek aluminum finish.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 203
  },
  {
    id: 20,
    name: "Ember Smart Mug",
    price: 129.00,
    description: "Temperature-controlled smart mug that keeps your coffee at the perfect heat.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 512
  }
];
