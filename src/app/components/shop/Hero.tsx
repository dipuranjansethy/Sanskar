import Image from 'next/image';
import React from 'react';

const Hero = () => {
  const fragrances = ['Rose', 'Jasmine', 'Lavender', 'Sandalwood', 'Tulsi'];
  
  return (
    <div className=" min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-lg shadow p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6">AGARBATHIS, DHOOP STICKS & DHOOP CONES</h1>
          
          <div className="mb-8">
            <Image 
              src="/api/placeholder/800/500" 
              alt="Agarbathi products display" 
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          <p className="text-lg mb-4 italic">
            We bring to you a fresh take on traditions - now, beyond your flowers!
          </p>

          <p className="mb-4">
            Agarbathis, Dhoop Sticks and Incense Cones in five different fragrances:
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {fragrances.map((fragrance) => (
              <span 
                key={fragrance}
                className="px-4 py-2 bg-amber-50 rounded-full shadow"
              >
                {fragrance}
              </span>
            ))}
          </div>

          <p className="mb-4">
            Our Agarbattis are made from sacred temple flowers. The dhoop sticks and cones 
            are made with natural ingredients to ensure a peaceful and beautiful 
            pooja experience.
          </p>

          <p className="text-lg font-medium">
            Just light them and sit back to enjoy, as the subtle aroma fills the room 
            and awakens your senses. Enter a world of fragrance with Hooyu today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;