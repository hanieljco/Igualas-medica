import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Smile, Ambulance } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Cirugía Plástica",
    description: "Procedimientos estéticos y reconstructivos con tecnología de punta y seguridad integral para realzar tu belleza natural.",
    icon: Sparkles
  },
  {
    title: "Odontología",
    description: "Salud bucal completa: ortodoncia, implantes y diseño de sonrisa en un ambiente confortable y moderno.",
    icon: Smile
  },
  {
    title: "Medicina General",
    description: "Atención primaria integral, diagnósticos precisos, chequeos preventivos y manejo experto de enfermedades crónicas.",
    icon: Stethoscope
  },
  {
    title: "Emergencias 24/7",
    description: "Respuesta inmediata y cuidados críticos con un equipo especializado disponible cuando más lo necesita su familia.",
    icon: Ambulance
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0056b3] mb-4">Nuestros Servicios Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cuidado integral especializado para cada etapa de su vida y la de su familia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#0056b3] mb-6 group-hover:bg-[#0056b3] group-hover:text-white transition-colors duration-300">
                <service.icon size={30} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0056b3] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};