import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="grid gap-6">
            <a 
              href="tel:+918179723621" 
              className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="text-blue-600" size={24} />
              </div>
              <span className="text-gray-700 hover:text-blue-600 transition-colors">+91 8179723621</span>
            </a>
            <a 
              href="mailto:saireddybyreddy72@gmail.com" 
              className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-3 bg-purple-100 rounded-full">
                <Mail className="text-purple-600" size={24} />
              </div>
              <span className="text-gray-700 hover:text-purple-600 transition-colors">saireddybyreddy72@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/byreddy-saireddy-2155322b8" 
              className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-3 bg-blue-100 rounded-full">
                <Linkedin className="text-blue-600" size={24} />
              </div>
              <span className="text-gray-700 hover:text-blue-600 transition-colors">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}