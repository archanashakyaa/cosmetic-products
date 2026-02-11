import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';

const footerSections = [
  {
    title: "Shop",
    links: ["Skincare", "Makeup", "Lips", "Eyes", "Sets & Gifts", "New Arrivals"]
  },
  {
    title: "Help",
    links: ["Customer Service", "Shipping & Returns", "Order Tracking", "Size Guide", "FAQs"]
  },
  {
    title: "Company",
    links: ["Our Story", "Sustainability", "Ingredients", "Careers", "Press"]
  }
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className="bg-charcoal text-white-pure/70">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-2xl font-semibold tracking-widest text-white-pure inline-block mb-4">
              GlowLab
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Where clean science meets quiet luxury. Discover skincare and beauty 
              crafted for the modern ritual.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-xs">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                <span>456 Beauty Lane, Los Angeles, CA 90028</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <span>+1 (800) 456-7890</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <span>hello@glowlab.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 border border-white-pure/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label="Social media"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile: Accordion Links */}
          <div className="lg:hidden space-y-0">
            {footerSections.map((section, index) => (
              <div key={index} className="border-b border-white-pure/10">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex items-center justify-between w-full py-4 text-sm font-medium tracking-wide text-white-pure/90"
                >
                  {section.title}
                  <motion.span
                    animate={{ rotate: openSection === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 space-y-2.5">
                        {section.links.map((link) => (
                          <a
                            key={link}
                            href="#"
                            className="block text-sm text-white-pure/50 hover:text-gold transition-colors pl-2"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop: Column Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="hidden lg:block">
              <h4 className="text-sm font-medium tracking-wide text-white-pure mb-5 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white-pure/50 hover:text-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white-pure/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white-pure/30 text-center md:text-left">
              © 2026 GlowLab. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-white-pure/30">
              <a href="#" className="hover:text-white-pure/60 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white-pure/60 transition-colors">Terms</a>
              <a href="#" className="hover:text-white-pure/60 transition-colors">Cookies</a>
              <a href="#" className="hover:text-white-pure/60 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
