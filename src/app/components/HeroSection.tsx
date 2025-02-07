import React from 'react';
import Image from 'next/image';
import HeroImage from '../images/HeroSection.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <Image
        src={HeroImage}
        alt="Hero background with flowers and incense"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-yellow-300">
          BRING HOME A WORLD OF FRAGRANCES
        </h1>
        <button className="bg-teal-100 text-gray-800 px-8 py-3 rounded-full hover:bg-teal-200 transition-colors">
          SHOP NATURAL AGARBATHIS, DHOOPS STICKS AND CONES!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;