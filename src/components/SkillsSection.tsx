
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Globe, FileCode, Terminal, Network, Monitor, Laptop, HardDrive } from 'lucide-react';

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
        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-2 h-2 rounded-full bg-portfolio-purple"></div>
              <span className="text-sm font-medium text-gray-700">{skill}</span>
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
      title: "Administration Système",
      icon: Server,
      skills: [
        "Windows Server",
        "Active Directory",
        "PowerShell",
        "Linux",
        "Virtual Box"
      ]
    },
    {
      title: "Réseaux & Sécurité",
      icon: Shield,
      skills: [
        "Pare-feu (Pfsense)",
        "Proxy (squidGuard)",
        "VPN",
        "TCP/IP",
        "Routage",
        "BGP"
      ]
    }
  ];

  const additionalSkills = [
    {
      title: "Infrastructure",
      icon: Network,
      skills: [
        "Virtualisation",
        "Stockage SAN/NAS"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences Techniques</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mon parcours académique et mes expériences m'ont permis de développer diverses 
            compétences en administration système et infrastructure IT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalSkills.map((category, index) => (
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
          
          <h3 className="text-2xl font-semibold mb-6 relative z-10">Certifications & Outils</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <HardDrive className="mr-2 text-portfolio-purple" size={20} />
                Outils Maîtrisés
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Microsoft System Center
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  VMware vSphere
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Microsoft 365 Admin
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  PfSense
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <Terminal className="mr-2 text-portfolio-purple" size={20} />
                Compétences Techniques
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Scripting (PowerShell, Bash)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Gestion des utilisateurs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></div>
                  Configuration de serveurs
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
