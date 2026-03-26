import { Link } from 'react-router-dom';
import { ShoppingBag, Sun, Moon, Menu, X } from 'lucide-react';
import { useStore } from '../store';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { theme, toggleTheme, cart } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-primary">LUMINA</span>
            <span className="text-2xl font-light tracking-tighter">LUXE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-cart'))}
              className="relative p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-cart'))}
              className="relative p-2"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button onClick={toggleTheme} className="p-2">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-primary"
              >
                Shop
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
