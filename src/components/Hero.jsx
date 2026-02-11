import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1000px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.imageMobile} />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent md:bg-gradient-to-r md:from-charcoal/50 md:via-charcoal/20 md:to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end md:items-center pb-28 md:pb-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-xl">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gold-light mb-4"
                    >
                      New Collection
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white-pure leading-tight mb-4 md:mb-6"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-sm md:text-base lg:text-lg text-white-pure/80 leading-relaxed mb-6 md:mb-8 max-w-md"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.a
                      href="#shop"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="inline-flex items-center gap-3 bg-white-pure/95 text-charcoal px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium tracking-wide hover:bg-gold hover:text-white-pure transition-all duration-400 group"
                    >
                      {slide.cta}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
