import React from 'react';

export function Skills() {
  const skills = {
    programming: ["C", "C++", "Python", "Java", "Object-Oriented Programming"],
    softSkills: ["Communication", "Presentation", "Critical Thinking", "Problem-Solving"],
    tools: ["Autodesk Fusion 360", "Arduino Uno", "AutoCAD"]
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 animate-pop-up">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={category} 
                 className="hover-card bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
                 style={{ animationDelay: `${idx * 200}ms` }}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 capitalize">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li key={index} 
                      className="text-gray-600 flex items-center space-x-2 animate-slide-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}