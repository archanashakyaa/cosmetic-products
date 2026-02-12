import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, Heart, User } from 'lucide-react';
import { navLinks } from '../data/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Mobile/Tablet Header */}
          <div className="flex lg:hidden items-center justify-between h-16 px-4">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <a href="#" className="font-serif text-xl font-semibold tracking-wider text-charcoal">
              GlowLab
            </a>
            <div className="flex items-center gap-4">
              <button className="p-2 text-charcoal hover:text-gold transition-colors" aria-label="Cart">
                <ShoppingBag size={22} />
              </button>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between h-20 px-8">
            {/* Logo */}
            <a href="#" className="font-serif text-2xl font-semibold tracking-widest text-charcoal hover:text-gold transition-colors">
              GlowLab
            </a>

            {/* Center Links */}
            <div className="flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium tracking-wide uppercase text-charcoal-light hover:text-charcoal transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <button className="text-charcoal-light hover:text-gold transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="text-charcoal-light hover:text-gold transition-colors" aria-label="Wishlist">
                <Heart size={20} />
              </button>
              <button className="text-charcoal-light hover:text-gold transition-colors" aria-label="Account">
                <User size={20} />
              </button>
              <button className="relative text-charcoal-light hover:text-gold transition-colors" aria-label="Cart">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white-pure text-[10px] font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-charcoal/30 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-cream z-[60] flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-beige gap-4">
                <span className="font-serif text-xl font-semibold tracking-wider">GlowLab</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-charcoal hover:text-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-8 px-6 overflow-y-auto space-y-2">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 px-4 text-lg font-medium tracking-wide text-charcoal hover:text-gold hover:pl-6 transition-all border-b border-beige/50"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Extra Links */}
                <div className="mt-12 space-y-4">
                  <a href="#" className="flex items-center gap-4 text-charcoal-soft hover:text-charcoal transition-colors">
                    <Search size={18} />
                    <span className="text-sm tracking-wide">Search</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-charcoal-soft hover:text-charcoal transition-colors">
                    <Heart size={18} />
                    <span className="text-sm tracking-wide">Wishlist</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-charcoal-soft hover:text-charcoal transition-colors">
                    <User size={18} />
                    <span className="text-sm tracking-wide">Account</span>
                  </a>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-beige">
                <p className="text-xs text-charcoal-soft tracking-wide">
                  Free shipping on orders over $75
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
