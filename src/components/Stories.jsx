import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/data';

const Stories = () => {
  const featured = blogPosts.find(p => p.featured);
  const others = blogPosts.filter(p => !p.featured);

  return (
    <section id="stories" className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gold mb-3 block">
            The Journal
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl font-medium text-charcoal mb-4">
            Beauty Stories
          </h2>
          <p className="text-sm md:text-base text-charcoal-soft max-w-lg mx-auto leading-relaxed">
            Expert tips, behind-the-scenes, and the science of beauty.
          </p>
        </motion.div>

        {/* Mobile: Single Column Stack */}
        <div className="md:hidden space-y-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold-light">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-white-pure mt-1 leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Tablet/Desktop: Masonry-like Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Featured (large) */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-2 lg:col-span-2 lg:row-span-2 group cursor-pointer relative overflow-hidden rounded-sm"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-72 md:h-80 lg:h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold-light mb-2 block">
                  {featured.category} — {featured.date}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-white-pure leading-tight mb-3">
                  {featured.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm text-white-pure/80 group-hover:text-gold-light transition-colors">
                  Read Article
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.article>
          )}

          {/* Side Posts */}
          {others.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 lg:h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />
              </div>
              <div className="mt-3 md:mt-4">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-gold">
                    {post.category}
                  </span>
                  <span className="text-[10px] md:text-xs text-charcoal-soft">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-serif text-base md:text-lg font-medium text-charcoal group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
