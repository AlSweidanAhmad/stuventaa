import React from 'react';
import logoImg from '../assets/logo.jpeg'; // عدّل المسار حسب مكان الصورة

const Logo = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      
      {/* LOGO IMAGE */}
      <img
        src={logoImg}
        alt="Stuventaa Logo"
        className="w-[180px] h-auto object-contain"
      />

      {/* TEXT 
      <div className="flex flex-col">
        <span className="text-2xl font-extrabold text-[#003366] tracking-tight leading-none">
          STUVENTAA
        </span>
        <span className="text-[0.65rem] font-medium text-gray-600 tracking-widest uppercase mt-0.5">
          Students · Training · Travel
        </span>
      </div>
      */}

    </div>
  );
};

export default Logo;
