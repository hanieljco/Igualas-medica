import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Animation variants for staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-gray-900">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-[120%] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://picsum.photos/id/453/1920/1080?blur=5')",
            filter: "brightness(0.60)"
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-6 tracking-wider uppercase">
              Bienvenidos al Centro Médico San Juan
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight pb-2"
          >
            Salud de Clase Mundial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white inline-block">
              Para Nuestra Comunidad
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto font-light leading-relaxed"
          >
            La excelencia en atención médica, inspirada en los mejores, entregada por expertos comprometidos con su bienestar integral.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <a 
              href="#contacto" 
              className="px-8 py-4 bg-[#0056b3] hover:bg-[#004494] text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 flex items-center gap-2 group"
            >
              Agenda tu Cita
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            >
              Ver Especialidades
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
};