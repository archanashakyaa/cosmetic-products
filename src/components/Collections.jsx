import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/data';
import ProductCard from './ProductCard';

const Collections = () => {
  const collectionProducts = products.slice(4, 8);

  return (
    <section id="collections" className="py-20 md:py-32 lg:py-40 bg-cream-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gold mb-4 block">
            Signature Edit
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl font-medium text-charcoal mb-6 md:mb-8">
            The Collection
          </h2>
          <p className="text-sm md:text-base text-charcoal-soft max-w-lg mx-auto leading-relaxed">
            Our editors' most coveted picks — timeless formulas for every ritual.
          </p>
        </motion.div>

        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-sm mb-12 md:mb-16 group cursor-pointer"
        >
          <img
            src="https://placehold.co/1400x500/C4B5A5/2C2C2C?text=The+Essentials+Collection"
            alt="The Essentials Collection"
            className="w-full h-48 sm:h-56 md:h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-16">
            <div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-light mb-4 block">
                Limited Edition
              </span>
              <h3 className="font-serif text-xl md:text-3xl lg:text-4xl font-medium text-white-pure mb-4 md:mb-6 max-w-md leading-tight">
                The Essentials Collection
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-white-pure/90 hover:text-gold-light transition-colors group/link"
              >
                Discover More
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
          {collectionProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
