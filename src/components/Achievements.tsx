import React from 'react';

export function Achievements() {
  const achievements = [
    "NCC A Certificate with Grade 'C' (2018)"
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Achievements
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 hover:bg-white/50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="h-3 w-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-4"></span>
                <span className="text-lg text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}