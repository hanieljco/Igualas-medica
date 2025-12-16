import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0056b3] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-white opacity-5"></div>

          <div className="p-10 md:p-16 md:w-3/5 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Encuéntranos y Agenda tu Cita</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Estamos listos para atenderle. Visítenos en nuestras modernas instalaciones o llame hoy mismo para coordinar su visita.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dirección Principal</h4>
                  <p className="text-blue-100">Av. Principal 123, San Juan, Puerto Rico</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Llámenos</h4>
                  <p className="text-blue-100">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:w-2/5 bg-[#004494] flex flex-col justify-center items-center text-center">
            <div className="bg-white p-4 rounded-full mb-6 shadow-lg">
              <Calendar size={40} className="text-[#0056b3]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">¿Listo para su visita?</h3>
            <p className="text-blue-200 mb-8 text-sm">
              Nuestros especialistas están esperando para brindarle la mejor atención.
            </p>
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center gap-2 bg-white text-[#0056b3] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full justify-center group"
            >
              Llamar Ahora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};