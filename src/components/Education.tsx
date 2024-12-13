import React from 'react';

export function Education() {
  const education = [
    {
      degree: "B.Tech. (E.C.E.)",
      institution: "SR University",
      location: "Ananthasagar, Hanamkonda",
      year: "2026",
      percentage: "73.5%"
    },
    {
      degree: "12th",
      institution: "SR-EDU CENTRE",
      location: "Subedari, Hanamkonda",
      year: "2022",
      percentage: "70.4%"
    },
    {
      degree: "10th",
      institution: "Bishop Beretta High School",
      location: "Fathima Nagar, Hanamkonda",
      year: "2020",
      percentage: "98%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 animate-pop-up">Education</h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} 
                 className={`hover-card bg-white p-6 rounded-lg shadow-md ${
                   index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                 }`}>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600 mt-2">{edu.institution}</p>
                <p className="text-gray-500">{edu.location}</p>
                <div className="flex justify-between mt-4 text-gray-600">
                  <span className="bg-blue-50 px-3 py-1 rounded-full">Year: {edu.year}</span>
                  <span className="bg-green-50 px-3 py-1 rounded-full">Percentage: {edu.percentage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}