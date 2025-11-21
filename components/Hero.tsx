import React from 'react';
import { Button } from './Button';
import { Mail, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-sigmund-yellow pt-24 pb-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-sigmund-dark text-sigmund-yellow px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-md">
            <GraduationCap className="w-4 h-4 mr-2" />
            Academic Programs
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-sigmund-dark leading-[0.95] tracking-tight mb-8">
            Partnership Programs
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-sigmund-dark/90 mb-10 max-w-2xl leading-relaxed">
            Bridging Academia & Tourism Innovation
          </p>
          
          <Button variant="primary" icon={<Mail className="w-4 h-4" />}>
            Express Your Interest
          </Button>
        </div>
      </div>
      
      {/* Abstract background element */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000" d="M45.7,-70.5C58.9,-62.5,69.3,-51.2,77.3,-38.2C85.3,-25.2,90.9,-10.5,89.1,3.4C87.3,17.3,78.1,30.4,68.1,41.7C58.1,53,47.3,62.5,35.1,68.4C22.9,74.3,9.3,76.6,-3.2,75.5C-15.7,74.4,-31.4,69.9,-44.9,61.7C-58.4,53.5,-69.7,41.6,-76.8,27.6C-83.9,13.6,-86.8,-2.5,-82.7,-16.6C-78.6,-30.7,-67.5,-42.8,-54.9,-51C-42.3,-59.2,-28.2,-63.5,-14.7,-65.8C-1.2,-68.1,11.7,-68.4,25.7,-68.4L45.7,-70.5Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};