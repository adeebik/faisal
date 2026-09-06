"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2, TrendingUp, Sparkles, FileText, ArrowDownRight, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: "32px",
        paddingBottom: "36px",
        overflow: "visible",
        zIndex: 10,
        width: "100%",
      }}
    >
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        {/* Top Greeting Badge with Hand-Drawn Rays Doodle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "18px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Left Rays Doodle */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{
                position: "absolute",
                left: "-34px",
                top: "-8px",
                transform: "rotate(-15deg)",
              }}
            >
              <path d="M6 16L1 14M10 8L6 3M16 6L16 1" stroke="#985CFF" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            {/* Center Pill */}
            <div
              style={{
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-full)",
                padding: "6px 22px",
                background: "#FFFFFF",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "0.92rem",
                boxShadow: "var(--shadow-pop-sm)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--text-primary)",
              }}
            >
              <span style={{ color: "var(--accent-primary)", fontWeight: 800 }}>⚡ FROM DEALER NETWORKS TO DIGITAL DEMAND</span>
              <span style={{ color: "var(--text-muted)", opacity: 0.5 }}>•</span>
              <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>Sales Execution × Marketing Strategy</span>
            </div>

            {/* Right Rays Doodle */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{
                position: "absolute",
                right: "-34px",
                top: "-8px",
                transform: "rotate(15deg)",
              }}
            >
              <path d="M26 16L31 14M22 8L26 3M16 6L16 1" stroke="#985CFF" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: "clamp(2.3rem, 4.4vw, 3.8rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.04em",
            maxWidth: "960px",
            margin: "0 auto 16px auto",
            textAlign: "center",
            display: "block",
          }}
        >
          I&apos;m{" "}
          <span
            style={{
              color: "var(--accent-primary)",
              position: "relative",
              display: "inline-block",
            }}
          >
            {portfolioData.personal.shortName}
            {/* Playful underline squiggle */}
            <svg
              viewBox="0 0 200 18"
              fill="none"
              style={{
                position: "absolute",
                left: 0,
                bottom: "-10px",
                width: "100%",
                height: "14px",
              }}
            >
              <path
                d="M3 12C50 4 150 4 197 12"
                stroke="#985CFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          <span style={{ display: "inline-block", animation: "wave 2s infinite" }}>👋</span>,
          <br />
          Turning Ground-Level Execution into Digital-First Growth
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: "clamp(1.02rem, 1.75vw, 1.2rem)",
            color: "var(--text-secondary)",
            maxWidth: "840px",
            margin: "0 auto 36px auto",
            fontWeight: 500,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          {portfolioData.personal.heroSummary}
        </p>

        {/* Center Hero Stage (Left Quote Card + Center Portrait Arch Stage + Right Stat Card) */}
        <div
          className="hero-stage"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1160px",
            margin: "0 auto 36px auto",
            minHeight: "440px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Testimonial / Social Proof Card */}
          <div
            className="hero-side-card"
            style={{
              width: "280px",
              textAlign: "left",
              zIndex: 10,
              flexShrink: 0,
              background: "#FFFFFF",
              border: "2px solid var(--border-dark)",
              borderRadius: "var(--radius-lg)",
              padding: "20px",
              boxShadow: "var(--shadow-pop)",
            }}
          >
            <div
              style={{
                fontSize: "2.8rem",
                color: "var(--accent-primary)",
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 0.8,
                marginBottom: "8px",
              }}
            >
              “
            </div>
            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.5,
                color: "var(--text-secondary)",
                fontStyle: "italic",
                marginBottom: "14px",
              }}
            >
              {portfolioData.personal.heroQuote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "var(--accent-primary)",
                  color: "#FFFFFF",
                }}
              >
                <CheckCircle2 size={14} />
              </span>
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-primary)" }}>
                Core Operating Philosophy
              </span>
            </div>
          </div>

          {/* Central Portrait Stage with Unclipped Cutout & Emerald Arch Backdrop */}
          <div
            className="hero-portrait-stage"
            style={{
              position: "relative",
              width: "360px",
              height: "440px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* Violet Gradient Arch Backdrop */}
            <div
              className="hero-arch-backdrop"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "340px",
                height: "250px",
                borderRadius: "170px 170px 24px 24px",
                background: "linear-gradient(180deg, #D8B4FE 0%, #985CFF 100%)",
                zIndex: 1,
                pointerEvents: "none",
                boxShadow: "0 15px 35px rgba(152, 92, 255, 0.3)",
              }}
            />

            {/* Unclipped Portrait Image */}
            <div
              style={{
                position: "relative",
                width: "350px",
                height: "440px",
                zIndex: 2,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Image
                src="/images/faisal_hero.png"
                alt="Faisal Farhan Ansari"
                width={350}
                height={440}
                priority
                style={{
                  objectFit: "contain",
                  maxHeight: "100%",
                  filter: "drop-shadow(0 14px 28px rgba(18, 16, 25, 0.22))",
                }}
              />
            </div>

            {/* Floating Skills Pills around Portrait */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "-55px",
                background: "#121019",
                color: "#FFFFFF",
                border: "2px solid #121019",
                borderRadius: "var(--radius-full)",
                padding: "6px 14px",
                fontSize: "0.8rem",
                fontWeight: 700,
                boxShadow: "var(--shadow-pop-sm)",
                zIndex: 5,
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              className="hero-pill-top-left animate-float"
            >
              <span>🤝</span>
              <span>Negotiation &amp; Client Acquisition</span>
            </div>

            <div
              style={{
                position: "absolute",
                top: "52px",
                right: "-90px",
                background: "#FFFFFF",
                color: "#985CFF",
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-full)",
                padding: "6px 14px",
                fontSize: "0.8rem",
                fontWeight: 800,
                boxShadow: "var(--shadow-pop-sm)",
                zIndex: 5,
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              className="hero-pill-top-right animate-float"
            >
              <span>⚡</span>
              <span>Sales Execution (GT &amp; MT)</span>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "35px",
                left: "-40px",
                background: "#FFFFFF",
                color: "#06B6D4",
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-full)",
                padding: "6px 14px",
                fontSize: "0.8rem",
                fontWeight: 800,
                boxShadow: "var(--shadow-pop-sm)",
                zIndex: 5,
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              className="hero-pill-bottom-left"
            >
              <span>📊</span>
              <span>MS-Excel &amp; Power BI MIS</span>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "75px",
                right: "-35px",
                background: "#F59E0B",
                color: "#FFFFFF",
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-full)",
                padding: "6px 14px",
                fontSize: "0.8rem",
                fontWeight: 800,
                boxShadow: "var(--shadow-pop-sm)",
                zIndex: 5,
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              className="hero-pill-bottom-right"
            >
              <span>🤖</span>
              <span>AI Product Strategy &amp; PRFAQs</span>
            </div>
          </div>

          {/* Right Proof Metrics Card */}
          <div
            className="hero-side-card"
            style={{
              width: "280px",
              textAlign: "left",
              zIndex: 10,
              flexShrink: 0,
              background: "#FFFFFF",
              border: "2px solid var(--border-dark)",
              borderRadius: "var(--radius-lg)",
              padding: "20px",
              boxShadow: "var(--shadow-pop)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                  height: 24,
                  borderRadius: "6px",
                  background: "var(--accent-primary-light)",
                  color: "var(--accent-primary)",
                }}
              >
                <Sparkles size={16} />
              </span>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)" }}>
                Key Impact Numbers
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <div style={{ fontSize: "1.45rem", fontWeight: 900, color: "var(--accent-primary)", fontFamily: "var(--font-heading)" }}>
                  +15%
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                  Secondary Sales Growth (GT)
                </div>
              </div>

              <div style={{ borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                <div style={{ fontSize: "1.45rem", fontWeight: 900, color: "var(--accent-cyan)", fontFamily: "var(--font-heading)" }}>
                  40+ Outlets
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                  General Trade Network Managed
                </div>
              </div>

              <div>
                <div style={{ fontSize: "1.45rem", fontWeight: 900, color: "var(--accent-amber)", fontFamily: "var(--font-heading)" }}>
                  ₹1.5L+ Revenue
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                  EcoRealm D2C Bootstrapped (200+ Buyers)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Call to Actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <a href="#projects" className="btn-primary">
            <span>Explore Case Studies</span>
            <ArrowDownRight size={18} />
          </a>

          <button onClick={onOpenResume} className="btn-outline">
            <FileText size={18} />
            <span>View Complete Resume</span>
          </button>

          <a
            href={portfolioData.personal.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-dark"
          >
            <MessageCircle size={18} />
            <span>Direct WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
