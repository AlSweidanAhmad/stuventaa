import React from 'react';
import { motion } from 'framer-motion';

const ServiceItem = ({ title, description, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, delay: index * 0.2 }}
    className='group text-center'
  >
    <div className='relative h-64 mb-6 overflow-hidden rounded-lg shadow-md'>
      <img 
        src={image} 
        alt={title} 
        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-[#003366]/20 group-hover:bg-transparent transition-colors duration-500'></div>
    </div>
    <h3 className='text-2xl lg:text-3xl font-bold text-white mb-3'>
      {title}
    </h3>
    <p className='text-gray-300 leading-relaxed text-lg font-light'>
      {description}
    </p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: 'Study & Explore',
      description: 'Explore Germany, enhance your academic skills, and experience learning in a real university environment.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80&fm=jpg'
    },
    {
      title: 'Internship Opportunities',
      description: 'We support students in finding suitable internship opportunities and preparing professionally for the application process.',
      image: 'https://plus.unsplash.com/premium_photo-1663075814204-c4eb0358bbb2?auto=format&fit=crop&w=1600&q=80&fm=jpg'
    },
    {
      title: 'Travel Adventures',
      description: 'Discover new destinations, experience diverse cultures, and combine learning with unforgettable travel experiences.',
      image: 'https://plus.unsplash.com/premium_photo-1726866169408-25ae93e93e5b?auto=format&fit=crop&w=1600&q=80&fm=jpg'
    }
  ];

  return (
    <section 
      id="services" 
      className='py-24 lg:py-32 bg-[#003366] text-white scroll-mt-[90px]'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className='mb-16 text-center'
        >
          <h2 className='text-sm font-bold text-[#FF6600] tracking-widest uppercase mb-3'>
            WHAT WE OFFER
          </h2>
          <h3 className='text-4xl sm:text-5xl font-extralight text-white'>
            Our Programs
          </h3>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-10 lg:gap-16'>
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;