
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Terminal, Database, Code } from 'lucide-react';

const ExperienceCard = ({ date, title, company, description, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-portfolio-purple mb-8"
    >
      <div className="absolute -left-5 top-6 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center border-2 border-portfolio-purple/20">
        <Icon size={20} className="text-portfolio-purple" />
      </div>
      
      <div className="ml-6">
        <span className="inline-block px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium mb-2">
          {date}
        </span>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 mb-3">{company}</p>
        <ul className="text-gray-700 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      date: "Janvier - Février 2025",
      title: "Stage",
      company: "LNA Santé",
      icon: Terminal,
      description: [
        "Scripting",
        "Configuration de switch",
        "Automatisation de tâches sur power automate"
      ]
    },
    {
      date: "Avril - Mai 2024",
      title: "Stage",
      company: "WhyNotTrading",
      icon: Database,
      description: [
        "Découverte API, API de Zalando utilisant PHP",
        "Mise en place de solutions web, tri et affichage de base de donnée MySQL"
      ]
    },
    {
      date: "Été 2023 et 2024",
      title: "Emploi saisonnier",
      company: "Nageur/Sauveteur sur les plages de Saint Hilaire de Riez",
      icon: Briefcase,
      description: [
        "Surveillance des plages",
        "Secours à personne",
        "Travail d'équipe et communication"
      ]
    }
  ];

  return (
    <section id="expériences" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium mb-3">
            Parcours
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expériences professionnelles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mes différentes expériences professionnelles m'ont permis de développer mes compétences
            techniques et personnelles.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="ml-0 md:ml-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                date={exp.date}
                title={exp.title}
                company={exp.company}
                description={exp.description}
                icon={exp.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
