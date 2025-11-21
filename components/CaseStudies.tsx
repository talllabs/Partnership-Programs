import React from 'react';
import { CaseStudyProps } from '../types';

const cases: CaseStudyProps[] = [
  {
    title: "With Heart Travel",
    subtitle: "Melinda’s Growth Moment",
    points: ["Mapped and simplified the brand", "Defined three core customer segments", "Suggested content calendar & CRM"]
  },
  {
    title: "Steri Tours",
    subtitle: "Phoebe’s Next Chapter",
    points: ["Designed two new travel packages", "Built a 12–18 month partnership plan", "Proposed SEO upgrades"]
  },
  {
    title: "Baboo Travel",
    subtitle: "The Path to Conversion",
    points: ["Refined positioning for 55+ travelers", "Suggested travel club partnerships", "Mapped user journeys"]
  },
  {
    title: "Look@",
    subtitle: "Bringing Public Art to Life",
    points: ["Proposed AR-based photo enhancements", "Outlined Shopify souvenir shop", "Designed metrics dashboard"]
  },
  {
    title: "Videreo",
    subtitle: "Launching into South Africa",
    points: ["Developed micro-influencer plan", "Outlined growth tactics & trip bundles", "Proposed trust-building strategies"]
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-sigmund-dark mb-6">
            UCT x Sigmund Case Study Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
            Founders brought their vision. Student teams brought research, analysis, and structured recommendations.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cases.map((study, idx) => (
                <div key={idx} className="p-8 rounded-3xl border-2 border-gray-100 hover:border-sigmund-yellow transition-colors shadow-sm hover:shadow-md">
                    <h3 className="font-display text-2xl font-bold text-sigmund-dark mb-1">{study.title}</h3>
                    <p className="text-sm font-bold text-sigmund-yellow uppercase tracking-wider mb-6">{study.subtitle}</p>
                    <ul className="space-y-2">
                        {study.points.map((p, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start">
                                <span className="mr-2 mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
             <div className="p-8 rounded-3xl bg-sigmund-dark text-white flex flex-col justify-center">
                <h3 className="font-display text-2xl font-bold text-sigmund-yellow mb-4">What This Demonstrates</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                    Founders benefit from structured, student-led research. Students gain hands-on consulting experience. Cross-continental collaboration unlocks new ideas.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};