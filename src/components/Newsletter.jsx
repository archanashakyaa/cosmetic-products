import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gold mb-4 block">
            Stay Connected
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-white-pure mb-6 md:mb-8">
            Join the GlowLab Circle
          </h2>
          <p className="text-sm md:text-base text-white-pure/60 mb-10 leading-relaxed">
            Be the first to discover new launches, exclusive offers, and beauty secrets 
            curated by our experts. Delivered straight to your inbox.
          </p>

          {/* Email Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white-pure/10 border border-white-pure/20 text-white-pure placeholder:text-white-pure/40 px-6 py-4 md:py-5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-gold text-white-pure px-8 py-4 md:py-5 text-sm font-medium tracking-wide hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={16} />
            </motion.button>
          </form>

          <p className="text-[10px] md:text-xs text-white-pure/30 mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
