"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2, FileText, ArrowRight, Target, TrendingUp, Sparkles, Award } from "lucide-react";

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const pillars = [
    {
      icon: <Target size={24} color="#985CFF" />,
      title: "Ground-Level Sales Execution",
      description: "Three years managing a 40+ outlet general trade network, onboarding 25+ dealers into repeat-order cycles, and driving double-digit secondary sales growth with 98% route coverage.",
    },
    {
      icon: <TrendingUp size={24} color="#06B6D4" />,
      title: "Growth & Performance Marketing",
      description: "Bootstrapped sustainable D2C brand EcoRealm from zero to ₹1.5L+ revenue & 200+ customers. Executed FMCG field live projects for Dabur, Britannia, and PepsiCo utilizing SEO, SEMrush, Ahrefs, and analytics.",
    },
    {
      icon: <Sparkles size={24} color="#F59E0B" />,
      title: "AI Product Strategy & PRFAQs",
      description: "Built PRFAQs and Lean Canvas strategies across 10 BRDs spanning 5 verticals at a national AI hackathon; architecting AI-agent workflows and data models from the shelf to the screen.",
    },
  ];

  return (
    <section id="about" style={{ padding: "60px 0", position: "relative", zIndex: 10 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-badge">
            <span>✨</span>
            <span>ABOUT ME</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              maxWidth: "880px",
              margin: "0 auto 12px auto",
              lineHeight: 1.2,
            }}
          >
            From Dealer Networks to Digital Demand — Sales Execution Meets Marketing Strategy
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            A final-year MBA student specializing in Marketing and Sales, building at the intersection of field execution, digital strategy, and brand growth.
          </p>
        </div>

        {/* Content Grid: Left Photo Collage & Badges, Right Bio & Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Visual Photo Collage */}
          <div style={{ position: "relative" }}>
            {/* Main Formal Photo Card */}
            <div
              className="pop-card"
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                background: "#FFFFFF",
                padding: "12px",
                maxWidth: "460px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "440px",
                  borderRadius: "calc(var(--radius-xl) - 8px)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/about_faisal.jpg"
                  alt="Faisal Farhan Ansari managing Modern Trade sales activation at Reliance Retail"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  priority
                />

                {/* In-photo Location Overlay Pill */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    background: "rgba(18, 16, 25, 0.85)",
                    backdropFilter: "blur(6px)",
                    color: "#FFFFFF",
                    borderRadius: "var(--radius-full)",
                    padding: "5px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <span>📍</span>
                  <span>Reliance Retail Modern Trade Activation</span>
                </div>
              </div>

              {/* Photo Bottom Caption Tag */}
              <div
                style={{
                  padding: "16px 8px 8px 8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem" }}>
                    Faisal Farhan Ansari
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    MBA Marketing &amp; Sales • LPU (8.56 CGPA)
                  </div>
                </div>
                <div
                  style={{
                    background: "var(--accent-primary-light)",
                    border: "1.5px solid var(--accent-primary)",
                    borderRadius: "var(--radius-full)",
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--accent-primary)",
                  }}
                >
                  FMCG STRATEGIST
                </div>
              </div>

              {/* Floating Mini Photo (EcoRealm Stall) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "35px",
                  right: "-20px",
                  width: "165px",
                  height: "125px",
                  borderRadius: "var(--radius-md)",
                  border: "2.5px solid var(--border-dark)",
                  boxShadow: "var(--shadow-pop)",
                  overflow: "hidden",
                  background: "#FFFFFF",
                  zIndex: 5,
                }}
                className="hidden sm:block"
              >
                <Image
                  src="/images/drive/IMG-20251003-WA0016.jpg"
                  alt="Faisal at EcoRealm D2C stall"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(18, 16, 25, 0.8)",
                    color: "#FFFFFF",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    textAlign: "center",
                  }}
                >
                  🌱 EcoRealm D2C Stall
                </div>
              </div>
            </div>

            {/* Floating Credential Pill */}
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "10px",
                background: "#FFFFFF",
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-full)",
                padding: "8px 18px",
                boxShadow: "var(--shadow-pop-sm)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "0.85rem",
                color: "var(--text-primary)",
                zIndex: 6,
              }}
            >
              <Award size={18} color="#D97706" />
              <span>Commercial Strategy &amp; FMCG Field Sales</span>
            </div>
          </div>

          {/* Right Column: Bio Narrative & 3 Strategic Pillars */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              {portfolioData.personal.aboutBio.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 3 Core Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  style={{
                    background: "#FFFFFF",
                    border: "2px solid var(--border-dark)",
                    borderRadius: "var(--radius-lg)",
                    padding: "16px 20px",
                    boxShadow: "var(--shadow-pop-sm)",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "var(--radius-md)",
                      background: "var(--bg-card-subtle)",
                      border: "1.5px solid var(--border-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.05rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <button onClick={onOpenResume} className="btn-primary">
                <FileText size={18} />
                <span>Download Verified Resume</span>
              </button>
              <a href="#experience" className="btn-outline">
                <span>View Career Timeline</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
