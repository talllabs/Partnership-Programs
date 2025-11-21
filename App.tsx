import React from 'react';
import { Hero } from './components/Hero';
import { ProgramCards } from './components/ProgramCards';
import { StartupExchange } from './components/StartupExchange';
import { Testimonials } from './components/Testimonials';
import { ComingSoon } from './components/ComingSoon';
import { CaseStudies } from './components/CaseStudies';
import { StudentIdeas } from './components/StudentIdeas';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-sigmund-dark font-sans antialiased selection:bg-sigmund-yellow selection:text-sigmund-dark">
      <main>
        {/* Intro Section: Who We Support */}
        <Hero />
        
        {/* Two Groups Info - placed between Hero and Grid */}
        <section className="bg-sigmund-yellow pb-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 border-t border-sigmund-dark/10 pt-12">
                <div>
                    <h3 className="font-bold text-xl mb-4">Sigmund supports two groups:</h3>
                    <ul className="space-y-4 text-lg font-medium">
                        <li className="flex items-start">
                            <span className="w-3 h-3 bg-sigmund-dark rounded-full mt-1.5 mr-3"></span>
                            Tourism professionals ready to launch or grow a business.
                        </li>
                        <li className="flex items-start">
                            <span className="w-3 h-3 bg-sigmund-dark rounded-full mt-1.5 mr-3"></span>
                            University students who want to turn ideas into real ventures.
                        </li>
                    </ul>
                </div>
                <p className="text-lg leading-relaxed">
                    We do this through a set of partnership programs that connect classrooms, founders, and industry in practical, purpose-driven ways.
                </p>
            </div>
        </section>

        <ProgramCards />
        <StartupExchange />
        
        {/* Solve a Challenge - Brief visual break */}
        <section className="py-20 px-6 lg:px-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="bg-sigmund-dark text-white rounded-3xl p-8 md:p-16">
                     <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">Solve a Challenge on Sigmund</h2>
                     <p className="text-xl text-gray-300 mb-12">Live project briefs that connect students with real tourism businesses.</p>
                     
                     <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h3 className="font-bold text-xl text-sigmund-yellow mb-2">Example Challenge: Aarya Village Travel</h3>
                            <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Marketing Strategy</p>
                            <ul className="space-y-3 text-sm text-gray-200">
                                <li>• Analyze luxury traveler preferences</li>
                                <li>• Conduct detailed market research</li>
                                <li>• Develop targeted marketing strategies</li>
                                <li>• Expand partnership opportunities</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-bold text-xl mb-4">Academic Context: Consultancy Projects</h4>
                            <p className="text-gray-400 leading-relaxed">
                                At The Hong Kong Polytechnic University, postgraduate students complete a consultancy project over a 13-week semester. Sigmund-style challenges fit naturally into this framework.
                            </p>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        <StudentIdeas />
        <CaseStudies />
        <Testimonials />
        <ComingSoon />
        <Footer />
      </main>
    </div>
  );
};

export default App;