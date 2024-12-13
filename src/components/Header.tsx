import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">BSR</a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-gray-600 hover:text-blue-600">About</a>
            <a href="#education" className="block text-gray-600 hover:text-blue-600">Education</a>
            <a href="#skills" className="block text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#projects" className="block text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}