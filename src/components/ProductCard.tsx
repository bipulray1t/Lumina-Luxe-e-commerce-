import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data';
import { useStore } from '../store';

export default function ProductCard({ product, index }: { product: Product; index: number; key?: any }) {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 p-3 rounded-full text-black transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Eye size={20} />
          </div>
        </div>
      </Link>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-secondary uppercase tracking-widest mb-1">{product.category}</p>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{product.name}</h3>
          </div>
          <p className="text-lg font-bold text-primary">${product.price}</p>
        </div>

        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-secondary"} 
            />
          ))}
          <span className="text-xs text-secondary ml-2">({product.reviews})</span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-foreground text-background py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-primary hover:text-white transition-all active:scale-95"
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}
