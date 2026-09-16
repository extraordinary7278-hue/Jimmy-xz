/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectModal } from './components/ProjectModal';
import { StudioPhilosophy } from './components/StudioPhilosophy';
import { CapabilitiesCalculator } from './components/CapabilitiesCalculator';
import { JournalSection } from './components/JournalSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryServices, setInquiryServices] = useState<string[]>([
    'Spatial Architecture & Pavilions',
  ]);
  const [inquiryBudget, setInquiryBudget] = useState<string>('€25,000 – €50,000');
  const [inquiryTimeline, setInquiryTimeline] = useState<string>('Standard Studio Pace');
  const [referenceProjectTitle, setReferenceProjectTitle] = useState<string>('');

  const handleOpenInquiry = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    const capabilitiesSection = document.getElementById('capabilities');
    if (capabilitiesSection) {
      capabilitiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferScope = (
    services: string[],
    budgetTier: string,
    timeline: string
  ) => {
    setInquiryServices(services);
    setInquiryBudget(budgetTier);
    setInquiryTimeline(timeline);
  };

  const handleCommissionSimilar = (project: Project) => {
    setReferenceProjectTitle(project.title);
    if (project.category === 'architecture') {
      setInquiryServices(['Spatial Architecture & Pavilions']);
      setInquiryBudget('€50,000 – €100,000');
    } else if (project.category === 'digital') {
      setInquiryServices(['Digital Systems & Archival Platforms']);
      setInquiryBudget('€25,000 – €50,000');
    } else if (project.category === 'brand') {
      setInquiryServices(['Editorial Identity & Type Design']);
      setInquiryBudget('€15,000 – €25,000');
    } else if (project.category === 'furniture') {
      setInquiryServices(['Tactile Objects & Seating Commissions']);
      setInquiryBudget('€15,000 – €25,000');
    }

    handleOpenInquiry();
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1c1917] selection:bg-[#e7e5e4] selection:text-[#1c1917] flex flex-col font-sans">
      {/* Site Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Editorial Hero */}
        <Hero
          onSelectProject={setSelectedProject}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Selected Works Catalog */}
        <ProjectShowcase onSelectProject={setSelectedProject} />

        {/* Studio Philosophy & Material Manifesto */}
        <StudioPhilosophy />

        {/* Interactive Scope & Capabilities Calculator */}
        <CapabilitiesCalculator onTransferScope={handleTransferScope} />

        {/* Journal & Architectural Discourse */}
        <JournalSection />

        {/* Commission Inquiry Dossier */}
        <InquirySection
          key={`${inquiryBudget}-${inquiryServices.join(',')}-${referenceProjectTitle}`}
          initialServices={inquiryServices}
          initialBudget={inquiryBudget}
          initialTimeline={inquiryTimeline}
          referenceProject={referenceProjectTitle}
        />
      </main>

      {/* Deep-dive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCommissionSimilar={handleCommissionSimilar}
      />

      {/* Studio Footer & Colophon */}
      <Footer />
    </div>
  );
}
