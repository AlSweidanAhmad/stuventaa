import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      id="contact" 
      className='relative bg-[#0b1120] text-white pt-24 pb-12 overflow-hidden scroll-mt-[90px]'
    >
      {/* Background Map Pattern - Simulated with opacity mask on image */}
      <div className='absolute inset-0 z-0 opacity-10 pointer-events-none'>
         <img-replace src="https://images.unsplash.com/photo-1589519160732-5796712a180d" alt="World Map Pattern" className="w-full h-full object-cover" />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between min-h-[400px]'>
        
        {/* Slogan */}
        <div className='text-center mb-20 md:mb-24'>
          <h2 className='text-2xl md:text-4xl font-extralight tracking-[0.2em] text-white uppercase leading-normal'>
            GLOBAL CONNECTIONS START HERE
          </h2>
        </div>

        {/* Content Grid */}
        <div className='grid md:grid-cols-2 gap-12 md:gap-24 items-end'>
          
          {/* Contact Info - Left Side */}
          <div className='space-y-6 lg:space-y-8'>
            {/* Email */}
            <a href='mailto:INFO@STUVENTAA.DE' className='flex items-center gap-4 group'>
              <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF6600] transition-colors'>
                <Mail className='w-5 h-5 text-white' />
              </div>
              <span className='text-lg font-light tracking-wide'>INFO@STUVENTAA.DE</span>
            </a>

            {/* Phone */}
            <a href='tel:+49176844826' className='flex items-center gap-4 group'>
              <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF6600] transition-colors'>
                <Phone className='w-5 h-5 text-white' />
              </div>
              <span className='text-lg font-light tracking-wide'>+49 176 844826</span>
            </a>

            {/* Location */}
            <div className='flex items-center gap-4 group'>
              <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF6600] transition-colors'>
                <MapPin className='w-5 h-5 text-white' />
              </div>
              <span className='text-lg font-light tracking-wide'>GERMANY, LÜBECK</span>
            </div>
          </div>

          {/* Map/Graphic Visual - Right Side Placeholder */}
          <div className='hidden md:block relative h-64 lg:h-80'>
             <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-contain bg-right opacity-20 bg-white/50"></div>
          </div>
        </div>

        {/* Copyright & Privacy Anchor */}
        <div 
          id="privacy" 
          className='mt-20 pt-8 border-t border-white/10 text-center md:text-left scroll-mt-[90px]'
        >
             <p className='text-white/40 text-xs tracking-wider'>
            © {new Date().getFullYear()} STUVENTAA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;