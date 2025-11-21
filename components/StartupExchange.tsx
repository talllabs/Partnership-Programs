import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const StartupExchange: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-sigmund-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-sigmund-dark mb-8">
          Startup Exchange Program
        </h2>
        <p className="text-2xl font-medium text-gray-800 mb-12 border-l-4 border-sigmund-yellow pl-6">
          Bridging the gap between academic learning and real-world application.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Through Sigmund’s <span className="font-bold text-sigmund-dark">OPEN · SOURCE</span> platform, we connect student teams with tourism and travel-related startups. Students apply classroom knowledge to real business challenges while founders receive structured, research-backed support.
            </p>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="font-display text-xl font-bold mb-4">Example Project Focus</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-sigmund-yellow mt-2 mr-3 flex-shrink-0" />
                  <span><strong className="text-sigmund-dark">Skills involved:</strong> Marketing, DEI, Partnership Development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-sigmund-yellow mt-2 mr-3 flex-shrink-0" />
                  <span><strong className="text-sigmund-dark">Educational opportunity:</strong> Niche tourism markets, inclusive design, and collaborative partnership models</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold mb-6">How Sigmund Works with Your Curriculum</h3>
              <ul className="space-y-4">
                {[
                  "Aligning projects with your course outcomes and assessment needs",
                  "Matching student teams with relevant startups based on interests",
                  "Providing clear briefs, templates, and check-in points",
                  "Ensuring both students and founders have a structured experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-sigmund-dark text-white p-8 md:p-10 rounded-3xl shadow-xl">
              <h3 className="font-display text-2xl font-bold text-sigmund-yellow mb-6">Why Join Sigmund’s Startup Exchange Next Semester?</h3>
              <ul className="space-y-4">
                {[
                  { title: "No program fees", desc: "Sigmund is a not-for-profit platform focused on innovation." },
                  { title: "Real-world application", desc: "Students work on live projects, turning theory into practice." },
                  { title: "Skill development", desc: "Projects build critical thinking, creativity, and problem-solving." },
                  { title: "Career readiness", desc: "Students gain insight into startup culture and future career paths." },
                  { title: "Networks and visibility", desc: "Connect with industry leaders; hubs of innovation." }
                ].map((item, idx) => (
                  <li key={idx} className="text-sm md:text-base border-b border-gray-700 pb-3 last:border-0 last:pb-0">
                    <strong className="text-sigmund-yellow block mb-1">{item.title}</strong>
                    <span className="text-gray-400">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-sigmund-yellow/20 p-8 rounded-3xl border border-sigmund-yellow">
               <h3 className="font-display text-xl font-bold mb-2">Example Student Deliverables</h3>
               <p className="text-gray-800 mb-2">Project report or case study summarizing objectives, strategies, key challenges, outcomes, and impact.</p>
               <p className="text-sm text-gray-600 italic">Optional: Presentation, toolkit, or prototype.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};