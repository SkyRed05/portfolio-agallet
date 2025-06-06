
import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Database, Shield, Terminal } from 'lucide-react';

const DocumentationCard = ({ title, description, imageSrc, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-portfolio-purple/10 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center">
          <Icon className="text-portfolio-purple" size={20} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const TechnicalDocumentation = () => {
  const documentationItems = [
    {
      title: "Architecture Système",
      description: "Schéma d'architecture pour un système de gestion d'emails avec authentification et validation des tokens, illustrant ma capacité à concevoir des infrastructures complexes.",
      imageSrc: "/lovable-uploads/57862e43-6ea4-47bc-a222-8269cfa47b9e.png",
      icon: Database
    },
    {
      title: "Développement d'Authentification",
      description: "Code PHP d'une fonction d'authentification avec gestion des tokens et validation sécurisée, démontrant mes compétences en développement backend.",
      imageSrc: "/lovable-uploads/eca0cd24-238d-47d4-ad3f-475380eb677c.png",
      icon: Shield
    },
    {
      title: "Script de Gestion de Licences",
      description: "Script PowerShell pour la gestion automatisée des licences logicielles avec validation des dates d'expiration et alertes de renouvellement.",
      imageSrc: "/lovable-uploads/c5b90e5d-9dd7-46a7-b1a2-70eba5e571fc.png",
      icon: Terminal
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium mb-3">
            Documentation Technique
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets & Réalisations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exemples concrets de mes réalisations en administration système, 
            développement et automatisation de processus IT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationItems.map((item, index) => (
            <DocumentationCard
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              icon={item.icon}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gray-50 rounded-xl p-8 text-center"
        >
          <FileCode2 className="mx-auto mb-4 text-portfolio-purple" size={48} />
          <h3 className="text-xl font-semibold mb-3">Expertise Technique</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ces projets illustrent ma capacité à concevoir, développer et maintenir des solutions 
            informatiques robustes, alliant administration système et développement logiciel 
            pour répondre aux besoins spécifiques des entreprises.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalDocumentation;
