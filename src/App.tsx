import React, { useState } from 'react';
import { ScrollProgress } from './components/story/ScrollProgress';
import { CustomCursor } from './components/story/CustomCursor';
import { StoryNavbar } from './components/story/StoryNavbar';
import { HeroSection } from './components/story/HeroSection';
import { PersonalHookSection } from './components/story/PersonalHookSection';
import { StoryboatSection } from './components/story/StoryboatSection';
import { AcademicProjectsSection } from './components/story/AcademicProjectsSection';
import { AchievementsSection } from './components/story/AchievementsSection';
import { SkillsSection } from './components/story/SkillsSection';
import { ContactSection } from './components/story/ContactSection';
import { downloadOfficialCV } from './utils/resumeGenerator';

// Modals
import { LotusTvcModal } from './components/sydney/LotusTvcModal';
import { ToffeemanModal } from './components/sydney/ToffeemanModal';
import { RockwellModal } from './components/sydney/RockwellModal';
import { CampaModal } from './components/sydney/CampaModal';
import { StrategicStudyModal } from './components/sydney/StrategicStudyModal';
import { VideoDemonstrationModal } from './components/sydney/VideoDemonstrationModal';
import { SydneyConnectModal } from './components/sydney/SydneyConnectModal';
import { SOCIAL_CASE_STUDIES } from './data/sydneyData';
import { STRATEGIC_STUDIES } from './data/portfolioData';
import { StrategicStudy } from './types';

export default function App() {
  // Modal states
  const [isLotusModalOpen, setIsLotusModalOpen] = useState(false);
  const [isToffeemanModalOpen, setIsToffeemanModalOpen] = useState(false);
  const [isRockwellModalOpen, setIsRockwellModalOpen] = useState(false);
  const [isCampaModalOpen, setIsCampaModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<StrategicStudy | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const handleDownloadCV = () => {
    downloadOfficialCV();
  };

  const handleOpenMyntra = () => {
    const study =
      STRATEGIC_STUDIES.find((s) => s.id === 'study-2') ||
      (SOCIAL_CASE_STUDIES && (SOCIAL_CASE_STUDIES[0] as unknown as StrategicStudy));
    if (study) setSelectedStudy(study);
  };

  const handleOpenBrewtopia = () => {
    const study =
      STRATEGIC_STUDIES.find((s) => s.id === 'study-brewtopia') ||
      (SOCIAL_CASE_STUDIES && (SOCIAL_CASE_STUDIES[1] as unknown as StrategicStudy));
    if (study) setSelectedStudy(study);
  };

  const handleOpenSpss = () => {
    const study =
      STRATEGIC_STUDIES.find((s) => s.id === 'study-trust-reconstruction') ||
      (SOCIAL_CASE_STUDIES && (SOCIAL_CASE_STUDIES[3] as unknown as StrategicStudy));
    if (study) setSelectedStudy(study);
  };

  return (
    <div className="portfolio-app-root">
      {/* 1. Subtle Noise Texture Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* 2. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3. Custom Desktop Cursor */}
      <CustomCursor />

      {/* 4. Glassmorphism Sticky Navbar */}
      <StoryNavbar onOpenContactModal={() => setIsConnectModalOpen(true)} />

      {/* Main Story Arc */}
      <main id="main-content">
        {/* Section 1: Cinematic Hero */}
        <HeroSection onDownloadCV={handleDownloadCV} />

        {/* Section 2: Chapter 01 — Personal Hook ("Hi, I'm Rajanya") */}
        <PersonalHookSection />

        {/* Section 3: Chapter 02 — Storyboat Internship ("Into the Field" - Dark Theme) */}
        <StoryboatSection
          onOpenLotus={() => setIsLotusModalOpen(true)}
          onOpenToffeeman={() => setIsToffeemanModalOpen(true)}
          onOpenRockwell={() => setIsRockwellModalOpen(true)}
          onOpenCampa={() => setIsCampaModalOpen(true)}
        />

        {/* Section 4: Chapter 03 — Academic Projects ("Building the Machine") */}
        <AcademicProjectsSection
          onOpenMyntraModal={handleOpenMyntra}
          onOpenBrewtopiaModal={handleOpenBrewtopia}
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
          onOpenSpssModal={handleOpenSpss}
        />

        {/* Section 5: Chapter 04 — Achievements ("The Proof" - AIR 2 Spotlight) */}
        <AchievementsSection />

        {/* Section 6: Chapter 05 — Skills ("What I Bring to the Table") */}
        <SkillsSection />

        {/* Section 7: Chapter 06 — Contact & Footer ("Let's Talk") */}
        <ContactSection onDownloadCV={handleDownloadCV} />
      </main>

      {/* Interactive Deep-Dive Case Study & Connect Modals */}
      <LotusTvcModal
        isOpen={isLotusModalOpen}
        onClose={() => setIsLotusModalOpen(false)}
      />

      <ToffeemanModal
        isOpen={isToffeemanModalOpen}
        onClose={() => setIsToffeemanModalOpen(false)}
      />

      <RockwellModal
        isOpen={isRockwellModalOpen}
        onClose={() => setIsRockwellModalOpen(false)}
      />

      <CampaModal
        isOpen={isCampaModalOpen}
        onClose={() => setIsCampaModalOpen(false)}
      />

      <StrategicStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onOpenVideo={() => {
          setSelectedStudy(null);
          setIsVideoModalOpen(true);
        }}
      />

      <VideoDemonstrationModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <SydneyConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
      />
    </div>
  );
}
