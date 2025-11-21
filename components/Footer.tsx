import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sigmund-yellow pt-24 pb-12 px-6 lg:px-12 rounded-t-5xl relative z-30 -mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-sigmund-dark mb-8">
          Ready to Collaborate?
        </h2>
        <p className="text-xl md:text-2xl text-sigmund-dark/80 mb-12 leading-relaxed">
          If you would like to explore any of these partnership options—Academic Partnerships, Sigmund Support, Case Study Programs, or “Solve a Challenge” briefs—Sigmund can help you design a collaboration that fits your goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button variant="primary">For Universities</Button>
          <Button variant="outline" className="border-sigmund-dark text-sigmund-dark hover:bg-sigmund-dark hover:text-white">For Founders</Button>
        </div>

        <div className="border-t border-sigmund-dark/10 pt-8">
          <p className="text-sm text-sigmund-dark/50 font-medium">
            © 2024 The Sigmund Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};