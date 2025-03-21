
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const EducationCard = ({ title, school, date, description, specialization, options }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
            <GraduationCap className="text-portfolio-purple" size={22} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{school}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-4 text-gray-500 text-sm">
          <Calendar size={16} className="mr-1" />
          <span>{date}</span>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Description</h4>
            <p className="text-gray-600">{description}</p>
          </div>
          
          {specialization && (
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Spécialités</h4>
              <ul className="text-gray-600 space-y-1">
                {specialization.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {options && (
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Options</h4>
              <ul className="text-gray-600 space-y-1">
                {options.map((opt, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  const educations = [
    {
      title: "BTS Service Informatiques aux Organisations",
      school: "École Privée des Sciences Informatiques (EPSI), Nantes",
      date: "Septembre 2023 à Juin 2025",
      description: "BTS en Service Informatiques aux Organisations dans le cadre d'un Bachelor Informatique.",
      specialization: null,
      options: null
    },
    {
      title: "Baccalauréat Général",
      school: "Lycée Privé Notre Dame, Challans",
      date: "2021 - 2023",
      description: "Baccalauréat général avec spécialités en sciences et mathématiques.",
      specialization: ["Numérique et Sciences Informatiques, mathématiques"],
      options: ["Math expert, Italien"]
    }
  ];

  return (
    <section id="formation" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium mb-3">
            Parcours Académique
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mon parcours académique en informatique et technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <EducationCard
              key={index}
              title={edu.title}
              school={edu.school}
              date={edu.date}
              description={edu.description}
              specialization={edu.specialization}
              options={edu.options}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 bg-gradient-to-r from-portfolio-purple/90 to-portfolio-darkpurple rounded-xl text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6TTMwIDBDMTMuNDMgMCAwIDEzLjQzIDAgMzBzMTMuNDMgMzAgMzAgMzAgMzAtMTMuNDMgMzAtMzBTNDYuNTcgMCAzMCAwem0wIDU0QzE2LjY3IDU0IDYgNDMuMzMgNiAzMFMxNi42NyA2IDMwIDZzMjQgMTAuNjcgMjQgMjQtMTAuNjcgMjQtMjQgMjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Formation Continue</h3>
              <p className="mb-6">
                Je suis constamment en recherche d'amélioration de mes compétences à travers des formations en ligne et des projets personnels.
              </p>
              <div className="flex items-center">
                <BookOpen size={20} className="mr-2" />
                <span>Toujours en apprentissage</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 backdrop-filter">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Objectif à venir</h4>
                <p className="text-white/80 mb-4">
                  Compléter mon BTS puis poursuivre mes études en Bachelor Informatique
                </p>
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full">2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
