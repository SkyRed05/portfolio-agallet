
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-purple/20 rounded-full filter blur-3xl opacity-60 -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-lightpurple/20 rounded-full filter blur-3xl opacity-60 -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-4">
              Antonin <span className="text-gradient">GALLET</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
                Développeur Web & Informatique
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg text-gray-600 max-w-lg mb-8"
            >
              Étudiant en BTS Service Informatiques aux Organisations
              passionné par le développement web et la programmation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#expériences" 
                className="px-8 py-3 bg-portfolio-purple text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-portfolio-purple/25 active:translate-y-1"
              >
                Voir mes expériences
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-medium transition-all hover:border-portfolio-purple hover:text-portfolio-purple"
              >
                Me contacter
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-portfolio-purple/20 rounded-full filter blur-xl animate-float"></div>
            <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/d79ccb89-9367-4e9f-9a5d-c23d45861445.png"
                alt="Antonin Gallet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-500 mb-2">Découvrir</span>
        <ChevronDown className="animate-bounce text-portfolio-purple" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
