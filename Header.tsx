import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nuestra Misión', href: '#mision' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-[#0056b3] text-white p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300">
              <Activity size={24} />
            </div>
            <span className="text-xl font-bold text-[#0056b3] tracking-tight">
              Centro Médico San Juan
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-[#0056b3] font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto" 
              className="bg-[#0056b3] hover:bg-[#004494] text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transform hover:-translate-y-0.5"
            >
              Agenda tu Cita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full left-0 top-full shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto"
            className="bg-[#0056b3] text-white text-center py-3 rounded-md font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agenda tu Cita
          </a>
        </div>
      )}
    </header>
  );
};