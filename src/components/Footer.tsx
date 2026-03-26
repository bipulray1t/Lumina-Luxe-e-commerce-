import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-primary">LUMINA</span>
              <span className="text-2xl font-light tracking-tighter">LUXE</span>
            </Link>
            <p className="text-secondary max-w-xs">
              Redefining modern essentials with a focus on quality, aesthetic, and functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-secondary hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-secondary hover:text-primary transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-secondary">
              <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Featured</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Discounts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
          <p>© 2026 Lumina Luxe. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>English (US)</span>
            <span>USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
