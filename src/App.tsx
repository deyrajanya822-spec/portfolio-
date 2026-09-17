import React, { useState } from 'react';
import { SydneyNavbar } from './components/sydney/SydneyNavbar';
import { SydneyHero } from './components/sydney/SydneyHero';
import { SydneyAbout } from './components/sydney/SydneyAbout';
import { SydneyExperience } from './components/sydney/SydneyExperience';
import { SydneyTools } from './components/sydney/SydneyTools';
import { SydneyContact } from './components/sydney/SydneyContact';
import { SydneyConnectModal } from './components/sydney/SydneyConnectModal';

export default function App() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsConnectModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1D1A] flex flex-col selection:bg-[#7A141D] selection:text-white relative">
      {/* 1. Header Navigation */}
      <SydneyNavbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section: Marketing & Strategic Management Portfolio */}
        <SydneyHero onOpenContact={handleOpenContact} />

        {/* 3. Executive Profile, Core Competencies & Education */}
        <SydneyAbout />

        {/* 4. Professional Trajectory & Immediate Internship Client Deliverables (Storyboats, IMS, McKinsey) */}
        <SydneyExperience />

        {/* 5. Tool Badges & Strategic Methodologies Across Experiences */}
        <SydneyTools />

        {/* 6. Contact & Collaboration */}
        <SydneyContact />
      </main>

      {/* Interactive Quick Connect Modal */}
      <SydneyConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
      />
    </div>
  );
}
