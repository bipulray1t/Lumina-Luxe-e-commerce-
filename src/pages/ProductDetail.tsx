import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data';
import { useStore } from '../store';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useStore((state) => state.addToCart);
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button onClick={() => navigate('/products')} className="text-primary hover:underline">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-border">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-card border border-border cursor-pointer hover:border-primary transition-colors">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">{product.category}</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-secondary"} 
                  />
                ))}
              </div>
              <span className="text-secondary">({product.reviews} customer reviews)</span>
            </div>
          </div>

          <p className="text-4xl font-bold">${product.price}</p>
          
          <p className="text-lg text-secondary leading-relaxed">
            {product.description}
          </p>

          <div className="flex space-x-4 pt-4">
            <button
              onClick={() => addToCart(product)}
              className="flex-grow bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              <ShoppingCart size={24} />
              <span>Add to Cart</span>
            </button>
            <button className="p-4 border border-border rounded-2xl hover:bg-foreground/5 transition-colors">
              <Star size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="flex items-center space-x-3 text-sm">
              <Truck className="text-primary" size={20} />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <RotateCcw className="text-primary" size={20} />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <ShieldCheck className="text-primary" size={20} />
              <span>2-Year Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
