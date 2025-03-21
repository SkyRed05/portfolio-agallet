
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Award, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="à-propos" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium mb-3">
            À Propos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qui suis-je?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Étudiant en informatique passionné, je développe des compétences techniques et personnelles 
            à travers mes études et expériences professionnelles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Award className="text-portfolio-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atouts</h3>
              <ul className="text-gray-600 space-y-2 mt-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Déterminé</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Travail d'équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Volontaire</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Users className="text-portfolio-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Langues</h3>
              <ul className="text-gray-600 space-y-2 mt-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Anglais - C1</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Espagnol - B2</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Italien - A2-B1</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Heart className="text-portfolio-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Centres d'intérêt</h3>
              <ul className="text-gray-600 space-y-2 mt-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Programmation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Jeux vidéo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                  <span>Sport</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row gap-6 items-center justify-around"
        >
          <div className="flex items-center gap-3">
            <div className="bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <Mail className="text-portfolio-purple" size={20} />
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Email</h4>
              <p className="font-medium">antonin.gallet1@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <Phone className="text-portfolio-purple" size={20} />
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Téléphone</h4>
              <p className="font-medium">07 49 46 06 78</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <MapPin className="text-portfolio-purple" size={20} />
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Localisation</h4>
              <p className="font-medium">Nantes, France</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
