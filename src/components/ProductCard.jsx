import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full border border-beige rounded-xl overflow-hidden bg-white-pure shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-cream/40 aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x500/E8DDD3/2C2C2C?text=${encodeURIComponent(product.name)}`;
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-charcoal text-white-pure text-[10px] md:text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-xl border border-charcoal">
            {product.badge}
          </span>
        )}

        {/* Hover Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-charcoal/80 to-transparent">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-charcoal text-white-pure py-3 px-4 md:px-6 text-xs md:text-sm font-semibold tracking-wider uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-2 rounded-xl border border-charcoal hover:border-gold"
          >
            <ShoppingBag size={15} />
            Add to Bag
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 md:w-14 bg-white-pure/95 border border-beige text-charcoal flex items-center justify-center hover:bg-gold hover:text-white-pure hover:border-gold transition-all duration-300 py-3 rounded-xl"
            aria-label="Add to wishlist"
          >
            <Heart size={16} />
          </motion.button>
        </div>
      </div>

      {/* Product Info Container with Professional Borders */}
      <div className="p-5 md:p-6 flex-1 flex flex-col bg-white-pure rounded-xl shadow-md">
        
        {/* Category Section - Top Border */}
        <div className="border-b border-beige/40 pb-3 mb-3">
          <span className="text-caption text-muted uppercase tracking-wider font-semibold block">
            {product.category}
          </span>
        </div>

        {/* Title Section */}
        <h3 className="h4 text-secondary mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="body-sm text-body mb-4 line-clamp-2 hidden md:block flex-grow">
          {product.description}
        </p>

        {/* Price Section - Boxed with Top & Bottom Borders */}
        <div className="border-t border-b border-beige/40 py-4 my-4 px-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-secondary text-lg">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted line-through font-medium">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Rating Section - Bottom Border */}
        <div className="border-t border-beige/40 pt-3 mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-beige fill-beige'}
              />
            ))}
          </div>
          <span className="caption text-light font-medium">
            ({product.reviews})
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
