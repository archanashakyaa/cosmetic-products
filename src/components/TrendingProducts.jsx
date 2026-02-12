import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/data';
import 'swiper/css';
import 'swiper/css/free-mode';

const TrendingProducts = () => {
  const trendingProducts = products.slice(0, 4);

  return (
    <section id="shop" className="py-20 md:py-32 lg:py-40 bg-white-pure">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gold mb-4 block">
              Curated for You
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl font-medium text-charcoal">
              Trending Now
            </h2>
          </div>
          <a
            href="#collections"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-charcoal-soft hover:text-gold transition-colors group"
          >
            View All Products
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Mobile/Tablet: Swiper Carousel */}
        <div className="lg:hidden">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={16}
            slidesPerView={1.3}
            freeMode={true}
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 2.5, spaceBetween: 24 },
            }}
            className="!overflow-visible"
          >
            {trendingProducts.map((product, index) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8 xl:gap-10">
          {trendingProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
