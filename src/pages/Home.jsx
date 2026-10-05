import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import EducationSection from '../components/sections/EducationSection';
import ProjectsSection from '../components/sections/ProjectSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillSection';
import TestimonialSection from '../components/sections/TestimoniSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}