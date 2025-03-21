
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-4 font-display"
            >
              Antonin <span className="text-portfolio-purple">GALLET</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-6 max-w-md"
            >
              Étudiant en BTS Service Informatiques aux Organisations, passionné par le développement web et les technologies informatiques.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              <a href="mailto:antonin.gallet1@gmail.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={18} />
              </a>
              <a href="tel:0749460678" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Phone size={18} />
              </a>
            </motion.div>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold mb-4"
            >
              Liens Rapides
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-2"
            >
              {['À propos', 'Expériences', 'Compétences', 'Formation', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg font-semibold mb-4"
            >
              Contact
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-start">
                <Mail size={18} className="mr-3 text-gray-400 mt-0.5" />
                <span className="text-gray-400">antonin.gallet1@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="mr-3 text-gray-400 mt-0.5" />
                <span className="text-gray-400">07 49 46 06 78</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 text-gray-400 mt-0.5" />
                <span className="text-gray-400">Nantes, France</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Antonin Gallet. Tous droits réservés.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-portfolio-purple rounded-full hover:bg-portfolio-darkpurple transition-colors"
          >
            <ChevronUp size={20} />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
