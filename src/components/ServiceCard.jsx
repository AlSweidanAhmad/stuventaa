import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group'
    >
      {/* Image */}
      <div className='relative h-56 overflow-hidden'>
        <img 
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
          alt={title}
         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
        
        {/* Icon */}
        <div className='absolute top-4 right-4 bg-[#FF6600] p-3 rounded-full shadow-lg'>
          <Icon className='w-6 h-6 text-white' />
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-2xl font-bold text-[#003366] mb-3 group-hover:text-[#FF6600] transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-600 leading-relaxed'>
          {description}
        </p>
      </div>

      {/* Bottom Accent */}
      <div className='h-1 bg-gradient-to-r from-[#003366] to-[#FF6600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
    </motion.div>
  );
};

export default ServiceCard;