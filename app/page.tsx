"use client";

import React, { useState } from "react";
import { ProjectCaseStudy, CertificationItem } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceEducationSection } from "@/components/ExperienceEducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProjectModal } from "@/components/ProjectModal";
import { CertificatesSection } from "@/components/CertificatesSection";
import { CertificateModal } from "@/components/CertificateModal";
import { SkillsToolsSection } from "@/components/SkillsToolsSection";
import { ContactSection } from "@/components/ContactSection";
import { ResumeModal } from "@/components/ResumeModal";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* 1. Fixed / Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* 2. Hero Section with Hand-Drawn Rays Doodle & Arch Portrait */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* 3. High-Impact Metrics Stats Bar */}
      <StatsBar />

      {/* 4. Infinite Running Marquee Ribbon */}
      <MarqueeTicker />

      {/* 5. Editorial About Me Section with Real Photo Collage */}
      <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* 6. Career Experience & Education Tabbed Section */}
      <ExperienceEducationSection />

      {/* 7. Commercial Strategy Projects */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* 8. Google Drive Verified Certificates & Campus Gallery */}
      <CertificatesSection onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

      {/* 9. Skills & Modern Tool Deck Bento */}
      <SkillsToolsSection />

      {/* 10. Direct Contact Channels & Inquiry Form */}
      <ContactSection />

      {/* 12. Neo-Editorial Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
