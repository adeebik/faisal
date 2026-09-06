"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Mail, Phone, MapPin, FileText } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/Icons";

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-dark)",
        color: "#FFFFFF",
        padding: "60px 0 30px 0",
        borderTop: "3px solid var(--border-dark)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "36px",
            paddingBottom: "40px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: "420px" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.8rem",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>FAISAL</span>
              <span style={{ color: "var(--accent-primary)" }}>.</span>
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#985CFF", marginBottom: "12px" }}>
              {portfolioData.personal.title}
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-inverse-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
              {portfolioData.personal.tagline} Bringing full-stack thinking from the shelf to the screen — open to Marketing &amp; Sales opportunities across India.
            </p>

            {/* Social Channels */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10B981",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#10B981";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.color = "#10B981";
                }}
              >
                <WhatsAppIcon size={20} />
              </a>

              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#06B6D4",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#06B6D4";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.color = "#06B6D4";
                }}
              >
                <LinkedInIcon size={20} />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F59E0B",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F59E0B";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.color = "#F59E0B";
                }}
              >
                <Mail size={18} />
              </a>

              <button
                onClick={onOpenResume}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#985CFF", e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)", e.currentTarget.style.color = "#FFFFFF")}
                title="View Resume"
              >
                <FileText size={18} />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "16px", color: "#FFFFFF" }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem", color: "var(--text-inverse-muted)" }}>
              <a href="#about" style={{ transition: "color 0.15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C4B5FD")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-inverse-muted)")}>About Faisal</a>
              <a href="#experience" style={{ transition: "color 0.15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C4B5FD")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-inverse-muted)")}>Career &amp; Academics</a>
              <a href="#projects" style={{ transition: "color 0.15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C4B5FD")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-inverse-muted)")}>Live Case Studies</a>
              <a href="#skills" style={{ transition: "color 0.15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C4B5FD")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-inverse-muted)")}>Skills &amp; Platforms</a>
              <a href="#certificates" style={{ transition: "color 0.15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C4B5FD")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-inverse-muted)")}>Verified Credentials</a>
              <a href="#contact" style={{ transition: "color 0.15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C4B5FD")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-inverse-muted)")}>Direct Contact</a>
            </div>
          </div>

          {/* Availability Status */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "16px", color: "#FFFFFF" }}>
              Current Status
            </div>
            <div
              style={{
                background: "rgba(152, 92, 255, 0.15)",
                border: "1.5px solid #985CFF",
                borderRadius: "var(--radius-lg)",
                padding: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#985CFF", display: "inline-block" }} />
                <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#C4B5FD" }}>
                  Actively Interviewing
                </span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-inverse-muted)", lineHeight: 1.5 }}>
                Available for Territory Sales, Key Account Management, and FMCG Channel Expansion roles.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            paddingTop: "24px",
            fontSize: "0.85rem",
            color: "var(--text-inverse-muted)",
          }}
        >
          <div>
            © 2026 Faisal Farhan Ansari. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#FFFFFF",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "0.85rem",
              background: "rgba(255, 255, 255, 0.08)",
              padding: "8px 16px",
              borderRadius: "var(--radius-full)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
