import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">About Me</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2000"
                  alt="Student with Technology"
                  className="rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Electronics and Communication Engineering student at SR University. 
                I am keen on exploring innovative technology solutions and growing professionally through 
                learning and hands-on projects.
              </p>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Current Focus</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></span>
                    <span className="text-gray-700">Exploring advanced electronics concepts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></span>
                    <span className="text-gray-700">Building practical engineering projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></span>
                    <span className="text-gray-700">Developing technical expertise</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                <p className="text-gray-600 italic">
                  "My journey in engineering has equipped me with strong problem-solving skills and a deep understanding of technical concepts."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}