"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { FileText, MessageCircle, Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        padding: isScrolled ? "8px 0" : "14px 0",
        transition: "all 0.2s ease",
        background: isScrolled ? "rgba(248, 247, 252, 0.94)" : "transparent",
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        borderBottom: isScrolled ? "1.5px solid var(--border-subtle)" : "none",
      }}
    >
      <div className="container">
        <div
          className="navbar-pill-container"
          style={{
            boxShadow: isScrolled ? "var(--shadow-pop-sm)" : "var(--shadow-pop)",
          }}
        >
          {/* Logo & Status Indicator */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "1.25rem",
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <span>FAISAL</span>
              <span style={{ color: "var(--accent-primary)" }}>.</span>
            </div>

            {/* Responsive Live Status Pill */}
            <div className="nav-status-badge">
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--accent-primary)",
                  display: "inline-block",
                  animation: "pulseGlow 1.5s infinite ease-in-out",
                  flexShrink: 0,
                }}
              />
              <span className="nav-status-badge-full">GROWTH MARKETING &amp; SALES</span>
              <span className="nav-status-badge-compact">HIRE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Hidden on screens <= 960px) */}
          <nav className="nav-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-item"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="nav-actions-wrap">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="nav-btn-resume"
              type="button"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="nav-btn-talk"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Menu Toggle Button (Visible on screens <= 960px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              className="nav-mobile-toggle"
              type="button"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="nav-mobile-dropdown">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-mobile-link"
              >
                <span>{link.label}</span>
                <ChevronRight size={16} style={{ color: "var(--text-muted)" }} />
              </a>
            ))}

            <div style={{ display: "flex", gap: "10px", paddingTop: "12px", borderTop: "1.5px solid var(--border-subtle)", marginTop: "6px" }}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-outline"
                style={{ flex: 1, padding: "10px 14px", fontSize: "0.85rem", justifyContent: "center" }}
                type="button"
              >
                <FileText size={15} />
                <span>Resume</span>
              </button>
              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ flex: 1, padding: "10px 14px", fontSize: "0.85rem", justifyContent: "center" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
