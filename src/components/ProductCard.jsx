import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   "The Editorial Vessel" — a luxury skincare product card
   following a minimalist editorial grid with clinical dividers,
   maximum negative space, and serif-forward typography.
   ═══════════════════════════════════════════════════════════════ */

const ProductCard = ({ product, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="editorial-card group relative flex flex-col h-full"
    >
      {/* ── Image Vessel ─────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x530/F5F2EE/2C2C2C?text=${encodeURIComponent(product.name)}`;
          }}
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />

        {/* Badge — minimal pill */}
        {product.badge && (
          <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-white-pure/92 backdrop-blur-sm text-charcoal text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 border border-bone">
            {product.badge}
          </span>
        )}

        {/* Hover Actions — editorial overlay */}
        <div className="absolute inset-0 flex items-end justify-center p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full flex gap-2">
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="flex-1 bg-charcoal/90 backdrop-blur-sm text-white-pure py-2.5 md:py-3 text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase flex items-center justify-center gap-2 border border-charcoal/90 hover:bg-charcoal transition-colors duration-200"
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              Add to Bag
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-10 md:w-11 bg-white-pure/92 backdrop-blur-sm text-charcoal flex items-center justify-center border border-bone hover:border-charcoal-soft transition-colors duration-200"
              aria-label="Add to wishlist"
            >
              <Heart size={14} strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Editorial Information Grid ────────────────────────── */}
      <div className="editorial-info flex-1 flex flex-col px-4 md:px-5 lg:px-6 pt-0 pb-5 md:pb-6">

        {/* ─── Section 1: Metadata (Category Tag) ─────────── */}
        <div className="editorial-section-meta py-3 md:py-3.5">
          <span className="text-[9px] md:text-[10px] font-medium tracking-[0.22em] uppercase text-charcoal-soft block">
            {product.category}
          </span>
        </div>

        {/* ─── Hair-line Divider ──────────────────────────── */}
        <div className="editorial-divider w-full h-px bg-bone group-hover:bg-bone-dark transition-colors duration-500" />

        {/* ─── Section 2: Title + Narrative ───────────────── */}
        <div className="editorial-section-body py-4 md:py-5 flex-1 flex flex-col">
          <h3 className="font-serif text-base md:text-lg lg:text-xl font-medium text-charcoal leading-snug tracking-tight line-clamp-3 mb-3 md:mb-4">
            {product.name}
          </h3>
          <p className="text-[11px] md:text-xs font-light text-charcoal-soft leading-[1.65] line-clamp-2 flex-grow">
            {product.description}
          </p>
        </div>

        {/* ─── Hair-line Divider ──────────────────────────── */}
        <div className="editorial-divider w-full h-px bg-bone group-hover:bg-bone-dark transition-colors duration-500" />

        {/* ─── Section 3: Price + Social Proof ────────────── */}
        <div className="editorial-section-footer pt-3.5 md:pt-4 flex items-center justify-between">
          {/* Pricing — Serif, bold, high-value feel */}
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-base md:text-lg font-semibold text-charcoal tracking-tight">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] md:text-xs text-charcoal-soft/50 line-through font-light">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Rating — minimalist outlined stars + count */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  strokeWidth={1.2}
                  className={
                    i < Math.floor(product.rating)
                      ? 'text-charcoal-soft fill-charcoal-soft'
                      : 'text-bone fill-transparent'
                  }
                />
              ))}
            </div>
            <span className="text-[10px] md:text-[11px] text-charcoal-soft/60 font-light tracking-wide">
              ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
