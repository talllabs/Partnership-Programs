import React from 'react';
import { Lightbulb, BookOpen, Target, Users, FileText, Terminal, ArrowRight } from 'lucide-react';
import { ProgramCardProps } from '../types';

const programs: ProgramCardProps[] = [
  {
    title: "Startup Exchange Program",
    description: "Collaborate with industry leaders on real-world tourism challenges.",
    icon: Lightbulb
  },
  {
    title: "Sigmund on the Syllabus",
    description: "Course-embedded projects that apply theory to real business needs.",
    icon: BookOpen
  },
  {
    title: "Solve a Challenge on Sigmund",
    description: "Live industry briefs for consultancy projects.",
    icon: Target
  },
  {
    title: "Joint Case Studies",
    description: "Structured analysis and report generation for partner ventures.",
    icon: Users
  },
  {
    title: "Business & Marketing Plans",
    description: "Student teams develop strategic plans for tourism ventures.",
    icon: FileText
  },
  {
    title: "Coding / IT Support Projects",
    description: "Technical assistance and development support.",
    icon: Terminal
  }
];

export const ProgramCards: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white -mt-12 rounded-t-5xl relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-sigmund-dark mb-6">
            Sigmund Academic Partnership Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Unlocking entrepreneurial potential in university students worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col p-8 rounded-3xl bg-white border-2 border-sigmund-dark hover:bg-sigmund-dark transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sigmund-yellow flex items-center justify-center mb-6 border-2 border-sigmund-dark group-hover:border-white group-hover:bg-white transition-colors">
                <program.icon className="w-7 h-7 text-sigmund-dark" />
              </div>
              <h3 className="font-display text-2xl font-bold text-sigmund-dark group-hover:text-white mb-3 transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 mb-8 flex-grow transition-colors leading-relaxed">
                {program.description}
              </p>
              <div className="mt-auto">
                <button className="flex items-center text-sm font-bold uppercase tracking-wide text-sigmund-dark group-hover:text-sigmund-yellow transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};