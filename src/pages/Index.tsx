
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import TechnicalDocumentation from '@/components/TechnicalDocumentation';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle animations on scroll
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.on-view-animation');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight * 0.85) {
          element.classList.add('in-view');
        }
      });
    };
    
    // Initial check for elements in view
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Clean up on unmount
    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <TechnicalDocumentation />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
