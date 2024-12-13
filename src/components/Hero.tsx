import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center gradient-bg">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pop-up">
            Hi, I'm Byreddy Sai Reddy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            Electronics and Communication Engineering Student
          </p>
          <div className="flex justify-center space-x-6 animate-float">
            <a href="https://saireddy81797.github.io/Sai_Portfolio/" target="_blank" rel="noopener noreferrer" 
               className="text-white/90 hover:text-white transition-colors transform hover:scale-110 duration-300">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/byreddy-saireddy-2155322b8" target="_blank" rel="noopener noreferrer" 
               className="text-white/90 hover:text-white transition-colors transform hover:scale-110 duration-300">
              <Linkedin size={28} />
            </a>
            <a href="mailto:saireddybyreddy72@gmail.com" 
               className="text-white/90 hover:text-white transition-colors transform hover:scale-110 duration-300">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}