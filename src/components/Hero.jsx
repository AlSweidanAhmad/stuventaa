import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 90; // لأن الهيدر sticky (h-20 = 80px) + هامش
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
};

  return (
    <section 
      id="home" 
      className='relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden scroll-mt-[90px]'
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img 
          className='w-full h-full object-cover' 
          alt='Mountains with students studying abroad'
         src="https://images.unsplash.com/photo-1696885343801-8ffdd7e25969" />
        <div className='absolute inset-0 bg-black/40'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight'>
            Study - Travel - Work - Internship
          </h1>
          <p className='text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed'>
            At Stuventaa, We Empower Students to Explore, Learn, and Grow
          </p>
          <div className='flex flex-col sm:flex-row gap-5 justify-center items-center'>
            <Button 
              onClick={() => scrollToSection('services')}
              size='lg'
              className='bg-[#FF6600] hover:bg-[#E55A00] text-white px-10 py-7 text-lg font-bold rounded-sm transition-all duration-300 shadow-xl uppercase tracking-wider'
            >
              Our Programs
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size='lg'
              className='bg-white/20 hover:bg-white/30 text-white border-2 border-white px-10 py-7 text-lg font-bold rounded-sm transition-all duration-300 backdrop-blur-sm shadow-xl uppercase tracking-wider'
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;