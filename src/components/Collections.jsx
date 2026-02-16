import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/data';
import ProductCard from './ProductCard';

const Collections = () => {
  const collectionProducts = products.slice(4, 8);

  return (
    <section id="collections" className="py-20 md:py-32 lg:py-40 pb-12 md:pb-20 lg:pb-32 bg-cream-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent uppercase text-xs tracking-wider font-medium mb-4 block">
            Signature Edit
          </span>
          <h2 className="h2 text-secondary mb-6 md:mb-8">
            The Collection
          </h2>
          <p className="body-sm text-muted max-w-2xl mx-auto">
            Our editors' most coveted picks - timeless formulas for every ritual.
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
            src="/photo/image%20(10).png"
            alt="The Essentials Collection"
            className="w-full h-48 sm:h-56 md:h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-16">
            <div>
              <span className="text-accent uppercase text-xs tracking-wider font-medium mb-4 block">
                Limited Edition
              </span>
              <h3 className="h3 text-white-pure mb-4 md:mb-6 max-w-md">
                The Essentials Collection
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 body-sm text-white-pure/90 hover:text-gold-light transition-colors group/link"
              >
                Discover More
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 xl:gap-8">
          {collectionProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
