import React from 'react';

export const StudentIdeas: React.FC = () => {
    return (
        <section className="py-24 px-6 lg:px-12 bg-sigmund-light">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-sigmund-dark mb-12">
                    Student Submissions on Sigmund OPEN · SOURCE
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Examples of Student-Led Ideas</h3>
                        <div className="space-y-4">
                            {[
                                { title: "FlowTour", desc: "AI-powered system to manage tourist crowds and improve visitor flow.", focus: "Tech, Crowd Management" },
                                { title: "EcoPath UAE", desc: "Smart app for sustainable travel routes in the Emirates.", focus: "Sustainability, App Development" },
                                { title: "Smart Coins", desc: "Digital rewards for hotel guests who choose sustainable options.", focus: "Gamification, Hospitality" }
                            ].map((idea, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-sigmund-dark">{idea.title}</h4>
                                    </div>
                                    <p className="text-gray-600 mb-2 text-sm">{idea.desc}</p>
                                    <span className="text-xs font-bold text-sigmund-yellow bg-sigmund-dark px-2 py-1 rounded">{idea.focus}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6">Capilano University x Sigmund</h3>
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 h-full">
                            <p className="text-gray-600 mb-6">Capilano University students have contributed a wide range of ideas, such as:</p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Reducing food waste via apps connecting restaurants with travelers",
                                    "Making travel easier for people with mobility disabilities",
                                    "Bamboo bicycle projects, eco-homestays, solar panels",
                                    "Sustainable tourism hubs, eco-rating systems, AR tours"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700 text-sm">
                                        <span className="mr-3 text-sigmund-yellow font-bold">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-sigmund-yellow/10 p-6 rounded-xl">
                                <h4 className="font-bold text-sigmund-dark mb-2">For Students</h4>
                                <p className="text-sm text-gray-600 mb-4">Have a great idea for the future of travel? Submit your idea via Sigmund’s OPEN · SOURCE submission form.</p>
                                <button className="text-sm font-bold underline decoration-2 decoration-sigmund-yellow hover:text-sigmund-gray">Submit Your Idea</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}