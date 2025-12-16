import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <section id="mision" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-[#009998] font-bold tracking-wider uppercase text-sm mb-2 block">
                Nuestra Filosofía
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0056b3] mb-6 leading-tight">
                ¿Por Qué Elegir <br/> Centro Médico San Juan?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Más que un centro de salud, somos su socio en bienestar. Descubra los pilares que nos hacen diferentes y por qué miles de familias confían en nosotros.
              </p>
              <div className="hidden lg:block w-20 h-1 bg-[#009998] rounded-full"></div>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-24 py-8">
            <MissionCard 
              number="01"
              title="Inspirados en la Excelencia Mundial"
              description="Hemos adoptado la filosofía de centros líderes como Mayo Clinic. Nuestro enfoque integral sitúa al paciente en el centro de cada decisión médica, asegurando una atención personalizada, humana y eficiente."
              delay={0}
            />
            <MissionCard 
              number="02"
              title="Innovación y Tecnología"
              description="Invertimos continuamente en equipos de diagnóstico y tratamiento de última generación. Garantizamos que nuestros pacientes tengan acceso a la misma tecnología médica avanzada que encontrarían en las principales capitales del mundo."
              delay={0.2}
            />
            <MissionCard 
              number="03"
              title="El Mejor Talento Local"
              description="Nuestro equipo está compuesto por profesionales altamente capacitados, muchos con experiencia y formación internacional. Combinamos la pericia global con un profundo compromiso local. La calidad humana es nuestra principal medicina."
              delay={0.4}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

interface MissionCardProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const MissionCard: React.FC<MissionCardProps> = ({ number, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl text-gray-300 select-none group-hover:scale-110 transition-transform duration-700">
        {number}
      </div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0056b3] mb-6">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-loose text-lg">{description}</p>
      </div>
    </motion.div>
  );
};