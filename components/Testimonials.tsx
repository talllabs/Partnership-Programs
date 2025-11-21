import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-center mb-16">What Our University Partners Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-sigmund-light p-8 md:p-10 rounded-4xl relative">
            <Quote className="w-10 h-10 text-sigmund-yellow absolute top-8 left-8 opacity-50" />
            <p className="text-lg text-gray-700 italic leading-relaxed mb-8 relative z-10 pt-6">
              "We see great merit in The Sigmund Project’s model and believe we can work together to bring greater innovation to the global tourism industry. We look forward to seeing what ideas are presented on Sigmund’s OPEN · SOURCE platform."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-sigmund-dark rounded-full flex items-center justify-center text-white font-bold mr-4">
                N
              </div>
              <div>
                <p className="font-bold text-sigmund-dark">Nicolas, Professor</p>
                <p className="text-sm text-gray-500">NYU Jonathan M. Tisch Center of Hospitality</p>
              </div>
            </div>
          </div>

          <div className="bg-sigmund-light p-8 md:p-10 rounded-4xl relative">
            <Quote className="w-10 h-10 text-sigmund-yellow absolute top-8 left-8 opacity-50" />
            <p className="text-lg text-gray-700 italic leading-relaxed mb-8 relative z-10 pt-6">
              "This was fantastic. It’s a great project for this course and fun too. I’d like to discuss setting this up again for my next semester course."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-sigmund-dark rounded-full flex items-center justify-center text-white font-bold mr-4">
                R
              </div>
              <div>
                <p className="font-bold text-sigmund-dark">Roy, Professor</p>
                <p className="text-sm text-gray-500">Capilano University</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-sigmund-dark rounded-3xl p-8 md:p-12 relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-sigmund-yellow opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 relative z-10">See More Startups for Your Students</h3>
          <p className="text-gray-400 mb-8 relative z-10">Explore live startup briefs, tourism ventures, and challenges on Sigmund’s OPEN · SOURCE platform.</p>
          <button className="px-8 py-3 bg-sigmund-yellow text-sigmund-dark font-bold rounded-full hover:bg-white transition-colors relative z-10">
            Explore Open Source
          </button>
        </div>
      </div>
    </section>
  );
};