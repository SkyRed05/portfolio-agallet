
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Code, Globe, FileCode, Terminal } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="mb-4 bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center">
          <Icon className="text-portfolio-purple" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-5">{title}</h3>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-2 rounded-full bg-portfolio-purple"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Développement",
      icon: Code,
      skills: [
        { name: "HTML / CSS", level: 90 },
        { name: "PHP", level: 85 },
        { name: "Lua", level: 70 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Réseau",
      icon: Globe,
      skills: [
        { name: "Proxy (squidGuard)", level: 75 },
        { name: "Pare-feu (Pfsense)", level: 80 },
        { name: "Active Directory", level: 85 },
        { name: "Windows Server", level: 80 }
      ]
    }
  ];

  return (
    <section id="compétences" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium mb-3">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences Informatiques</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mon parcours académique et mes expériences m'ont permis de développer diverses 
            compétences techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white rounded-xl shadow-sm p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-purple/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          
          <h3 className="text-2xl font-semibold mb-6 relative z-10">Autres compétences techniques</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <Terminal className="mr-2 text-portfolio-purple" size={20} />
                Administration Système
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Configuration de serveurs Windows
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Gestion des permissions et utilisateurs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Maintenance et dépannage
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <Database className="mr-2 text-portfolio-purple" size={20} />
                Gestion de Bases de Données
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Conception de schémas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Requêtes SQL complexes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Optimisation de performances
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
