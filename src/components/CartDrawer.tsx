import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useStore } from '../store';
import { useState, useEffect } from 'react';

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsCheckingOut(false);
    setIsSuccess(true);
    clearCart();
    setTimeout(() => {
      setIsSuccess(false);
      setIsOpen(false);
    }, 3000);
  };

  // Listen for cart button clicks (we'll implement a custom event or just use the store)
  // For simplicity, let's add a toggle to the store or just use a local state if we had a trigger.
  // I'll add a simple trigger in the Navbar.
  
  useEffect(() => {
    const handleOpenCart = () => setIsOpen(true);
    window.addEventListener('open-cart', handleOpenCart);
    return () => window.removeEventListener('open-cart', handleOpenCart);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-border flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ShoppingBag size={24} className="text-primary" />
                <h2 className="text-xl font-bold">Your Cart</h2>
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  {cart.length} items
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-foreground/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                    <ShieldCheck size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Order Confirmed!</h3>
                    <p className="text-secondary">Thank you for shopping with Lumina Luxe. Your order is being processed.</p>
                  </div>
                </motion.div>
              ) : cart.length > 0 ? (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex space-x-4"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-border">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-bold">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id)} className="text-secondary hover:text-destructive transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-primary font-bold">${item.price}</p>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-border rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-foreground/5"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-foreground/5"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-6 bg-foreground/5 rounded-full">
                    <ShoppingBag size={48} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Your cart is empty</h3>
                    <p className="text-secondary">Looks like you haven't added anything yet.</p>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>

            {cart.length > 0 && !isSuccess && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCheckingOut ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <span>Checkout</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
                <button 
                  onClick={clearCart}
                  className="w-full text-secondary text-sm hover:text-primary transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
