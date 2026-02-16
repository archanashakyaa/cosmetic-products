import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 px-6 relative overflow-hidden bg-cream">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white-pure/30 to-cream -z-10" />
      
      {/* Decorative floating element */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 md:space-y-8"
        >
          {/* Eyebrow label */}
          <p className="text-xs md:text-sm font-medium tracking-[0.35em] uppercase text-gold/70">
            Stay Connected
          </p>

          {/* Main heading with refined typography */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal leading-tight">
              Join the <span className="italic text-gold">GlowLab</span> Circle
            </h2>
            <p className="text-sm md:text-base text-charcoal-soft leading-relaxed max-w-2xl mx-auto">
              Be the first to discover new launches, exclusive offers, and beauty secrets curated by our experts. Delivered straight to your inbox.
            </p>
          </div>

          {/* Minimalist email form with bottom border style */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="pt-4 md:pt-6 max-w-2xl mx-auto"
          >
            <div className="group relative">
              <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-0 border-b-2 border-charcoal/15 focus-within:border-gold transition-colors duration-300 py-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:flex-1 bg-transparent text-charcoal placeholder:text-charcoal-soft/50 px-0 sm:pr-4 py-4 text-base md:text-lg font-serif italic focus:outline-none"
                />
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ x: 0 }}
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-2 text-gold font-medium text-xs md:text-sm tracking-wider uppercase hover:text-gold-light transition-colors duration-300 py-4 sm:py-0"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                </motion.button>
              </div>
            </div>
            
            {/* Privacy text */}
            <p className="text-[11px] md:text-xs text-charcoal-soft/60 mt-4 uppercase tracking-wider font-medium">
              Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.form>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 pt-8 md:pt-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />
            <div className="w-1 h-1 rounded-full bg-gold/40" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
