
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message envoyé!",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium mb-3">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Restons en contact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous souhaitez me contacter pour un projet, une opportunité ou simplement pour discuter? 
            N'hésitez pas à m'envoyer un message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Email</h4>
                  <p className="font-medium">antonin.gallet1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Téléphone</h4>
                  <p className="font-medium">07 49 46 06 78</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Localisation</h4>
                  <p className="font-medium">Nantes, France</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-medium mb-3">Disponibilité</h4>
              <p className="text-gray-600 mb-3">
                Je suis actuellement en formation, mais disponible pour discuter d'opportunités de stage ou d'emploi futur.
              </p>
              <div className="flex items-center text-portfolio-purple">
                <Check size={18} className="mr-2" />
                <span className="text-sm font-medium">Ouvert aux opportunités</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows={5}
                  required
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-purple hover:bg-portfolio-darkpurple text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Envoyer
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
