import React, { useState } from 'react';

export function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 animate-pop-up">Projects</h2>
        <div className="max-w-4xl mx-auto">
          <div 
            className="hover-card bg-white p-8 rounded-lg shadow-md relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className={`transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Obstacle Avoiding Robot</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designed an Arduino-based robot that avoids obstacles with remote, voice, and Bluetooth control.
                    This project demonstrates practical application of electronics and programming skills.
                  </p>
                  <div className={`mt-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Obstacle detection and avoidance</li>
                      <li>Multiple control interfaces</li>
                      <li>Real-time response system</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
                    alt="Obstacle Avoiding Robot"
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="px-2 py-1 bg-blue-600 rounded text-sm">Arduino Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}