import React from 'react';
import { Activity, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-[#009998]" size={28} />
              <span className="text-2xl font-bold tracking-tight">Centro Médico San Juan</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Comprometidos con la excelencia en el cuidado de la salud de nuestra comunidad, combinando tecnología avanzada con un trato humano y personalizado.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Facebook} />
              <SocialLink icon={Twitter} />
              <SocialLink icon={Instagram} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#mision" className="text-gray-400 hover:text-white transition-colors">Nuestra Misión</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Horarios</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Lun - Vie:</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Emergencias:</span>
                <span className="text-[#009998] font-bold">24 / 7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2025 Centro Médico San Juan. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ElementType }> = ({ icon: Icon }) => (
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0056b3] transition-colors duration-300">
    <Icon size={18} className="text-white" />
  </a>
);