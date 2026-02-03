import React from 'react';
import { motion } from 'framer-motion';

const VisualGallery = () => {
  const landmarks = [
    {
      name: 'Brandenburg Gate',
      location: 'Berlin, Germany',
      img: 'https://images.unsplash.com/photo-1560930950-5cc20e80e392'
    },
    {
      name: 'London Eye',
      location: 'London, UK',
      img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad'
    },
    {
      name: 'Schönbrunn Palace',
      location: 'Vienna, Austria',
      img: 'https://images.unsplash.com/photo-1679600790489-7b1233482325?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Royal Palace of Madrid',
      location: 'Madrid, Spain',
      img: 'https://images.unsplash.com/photo-1574556462575-eb106a5865a0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <section className='bg-white py-16 lg:py-24'> {/* Added vertical padding for spacing */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'> {/* Added padding and margin-bottom for heading */}
        <h2 className='text-sm font-bold text-[#003366] tracking-widest uppercase mb-3 text-center'>
            EUROPEAN LANDMARKS
        </h2>
        <h3 className='text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#003366] text-center'>
            A Glimpse of Your Adventure
        </h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {landmarks.map((landmark, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className='relative h-[400px] md:h-[500px] group overflow-hidden'
          >
            <img 
              src={landmark.img} 
              alt={landmark.name}
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'> {/* Adjusted gradient opacity */}
              <div className='p-8'> {/* Increased padding */}
                <h3 className='text-2xl font-bold text-white mb-1'>{landmark.name}</h3>
                <p className='text-[#FF6600] font-medium text-lg'>{landmark.location}</p> {/* Adjusted font size */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VisualGallery;