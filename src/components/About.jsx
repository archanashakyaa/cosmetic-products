import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Clean Beauty",
      description: "Every formula is free from parabens, sulfates, and synthetic fragrances."
    },
    {
      icon: Shield,
      title: "Dermatologist Tested",
      description: "Clinically proven formulas developed with leading skincare scientists."
    },
    {
      icon: Heart,
      title: "Cruelty Free",
      description: "Never tested on animals. Certified by Leaping Bunny since day one."
    }
  ];

  return (
    <section id="about" className="pt-12 md:pt-20 lg:pt-32 py-20 md:py-32 lg:py-40 bg-white-pure">
      <div className="container mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/photo/Gemini_Generated_Image_7zwyr67zwyr67zwy.png"
              alt="About GlowLab"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/700x850/E8DDD3/2C2C2C?text=Our+Story';
              }}
              className="w-full h-72 sm:h-96 lg:h-[500px] object-cover rounded-sm shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-44 md:h-44 bg-gold/10 rounded-full -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gold mb-4 block mt-6 md:mt-8 lg:mt-10">
              Our Philosophy
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-charcoal mb-6 md:mb-8 leading-tight">
              Beauty that cares <br className="hidden md:block" />
              <span className="italic text-gold">as much as you do.</span>
            </h2>
            <p className="text-sm md:text-base text-charcoal-soft leading-relaxed mb-8 md:mb-10">
              At GlowLab, we believe luxury beauty should never come at the cost of our planet. 
              Born from a passion for clean science and timeless elegance, each product is a 
              testament to what happens when nature and innovation work in harmony.
            </p>

            {/* Values */}
            <div className="space-y-6 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center">
                    <value.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base text-charcoal mb-1">
                      {value.title}
                    </h4>
                    <p className="text-xs md:text-sm text-charcoal-soft leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-4 bg-beige text-charcoal px-8 py-4 md:px-10 md:py-4 text-sm font-medium tracking-wide hover:bg-gold hover:text-white-pure transition-colors duration-300 group"
            >
              Learn Our Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
