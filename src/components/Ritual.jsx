import { motion } from 'framer-motion';
import { Droplets, Sparkles, Sun } from 'lucide-react';
import { ritualSteps } from '../data/data';

const iconMap = {
  Droplets: Droplets,
  Sparkles: Sparkles,
  Sun: Sun,
};

const Ritual = () => {
  return (
    <section id="ritual" className="py-12 md:py-16 lg:py-20 bg-cream">
      <div className="container mx-auto px-6 mt-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20 lg:mb-24"
        >
          <span className="pt-4 text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gold mb-4 block">
            Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-3xl lg:text-5xl font-medium text-charcoal mb-6 md:mb-8">
            The Ritual
          </h2>
          <p className="body-sm md:text-muted max-w-2xl mx-auto">
            Three simple steps to unlock your skin's natural luminosity. A daily practice in self-care.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {ritualSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-beige/60 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <IconComponent size={22} className="text-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
                      Step {step.step}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal mt-2 mb-4">
                      {step.title}
                    </h3>
                    <p className="body-sm text-charcoal-soft leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ritual;
