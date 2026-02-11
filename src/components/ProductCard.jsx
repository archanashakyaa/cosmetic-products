import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-beige/30 rounded-sm aspect-[4/5]">
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
          <span className="absolute top-3 left-3 bg-charcoal text-white-pure text-[10px] md:text-xs font-medium tracking-wider uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Hover Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-white-pure/95 backdrop-blur-sm text-charcoal py-2.5 md:py-3 text-xs md:text-sm font-medium tracking-wide hover:bg-charcoal hover:text-white-pure transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={15} />
            Add to Bag
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 md:w-12 bg-white-pure/95 backdrop-blur-sm text-charcoal flex items-center justify-center hover:text-gold transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={16} />
          </motion.button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-3 md:mt-4 flex-1 flex flex-col">
        <span className="text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-charcoal-soft mb-1">
          {product.category}
        </span>
        <h3 className="font-serif text-base md:text-lg font-medium text-charcoal leading-snug mb-1.5 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-charcoal-soft leading-relaxed mb-2 line-clamp-2 hidden md:block">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-beige fill-beige'}
              />
            ))}
          </div>
          <span className="text-[10px] md:text-xs text-charcoal-soft">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center gap-2">
          <span className="text-base md:text-lg font-semibold text-charcoal">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs md:text-sm text-charcoal-soft line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
