import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Truck, RefreshCw } from 'lucide-react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero"
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Spring Collection 2026
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              ELEVATE YOUR <br />
              <span className="text-primary italic">LIFESTYLE</span>
            </h1>
            <p className="text-lg text-secondary mb-8 max-w-lg">
              Discover our curated selection of premium essentials designed for the modern individual. Quality meets aesthetic in every piece.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/products"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <span>Shop Now</span>
                <ArrowRight size={20} />
              </Link>
              <button className="border border-foreground/20 px-8 py-4 rounded-full font-semibold hover:bg-foreground/5 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On all orders over $150" },
            { icon: Shield, title: "Secure Payment", desc: "100% secure payment processing" },
            { icon: RefreshCw, title: "Easy Returns", desc: "30-day hassle-free return policy" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-secondary">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Shop by Category</h2>
            <p className="text-secondary">Explore our curated collections by category.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
          {/* Large Category Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative group rounded-3xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1200" 
              alt="Electronics" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 space-y-4">
              <h3 className="text-4xl font-bold text-white">Electronics</h3>
              <p className="text-white/70 max-w-xs">Cutting-edge technology for your digital lifestyle.</p>
              <Link 
                to="/products?category=Electronics"
                className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <span>View All</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Grid of 4 Smaller Cards */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600", desc: "Premium sound." },
              { name: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600", desc: "Daily essentials." },
              { name: "Lifestyle", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600", desc: "Modern living." },
              { name: "Home Office", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600", desc: "Productive space." }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-3xl overflow-hidden aspect-square md:aspect-auto"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
                  <Link 
                    to={`/products?category=${cat.name}`}
                    className="text-primary text-sm font-bold flex items-center space-x-1 group-hover:translate-x-2 transition-transform"
                  >
                    <span>View All</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Products</h2>
            <p className="text-secondary">Handpicked excellence for your daily needs.</p>
          </div>
          <Link to="/products" className="text-primary font-semibold flex items-center space-x-1 hover:underline">
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative h-[400px] rounded-3xl overflow-hidden flex items-center justify-center text-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920" 
            alt="Newsletter"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-xl px-4">
            <h2 className="text-4xl font-bold text-white mb-6">Join the Lumina Circle</h2>
            <p className="text-white/80 mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
