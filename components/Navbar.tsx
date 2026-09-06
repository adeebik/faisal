"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { FileText, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

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
        padding: isScrolled ? "10px 0" : "16px 0",
        transition: "all 0.2s ease",
        background: isScrolled ? "rgba(246, 248, 245, 0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1.5px solid var(--border-subtle)" : "none",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#FFFFFF",
            border: "2px solid var(--border-dark)",
            borderRadius: "var(--radius-full)",
            padding: "8px 16px 8px 24px",
            boxShadow: isScrolled ? "var(--shadow-pop-sm)" : "var(--shadow-pop)",
            transition: "all 0.2s ease",
          }}
        >
          {/* Logo & Status Indicator */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
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
                gap: "4px",
              }}
            >
              <span>FAISAL</span>
              <span style={{ color: "var(--accent-primary)" }}>.</span>
            </div>

            {/* Live Status Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "var(--accent-primary-light)",
                border: "1px solid var(--accent-primary)",
                borderRadius: "var(--radius-full)",
                padding: "2px 10px",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--accent-primary-hover)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent-primary)",
                  display: "inline-block",
                  animation: "pulseGlow 1.5s infinite ease-in-out",
                }}
              />
              <span className="hidden sm:inline">GROWTH MARKETING &amp; SALES</span>
              <span className="sm:hidden">HIRE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  transition: "color 0.15s ease",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#FFFFFF",
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-full)",
                padding: "8px 16px",
                fontSize: "0.85rem",
                fontWeight: 700,
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
                boxShadow: "var(--shadow-pop-sm)",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--bg-card-subtle)";
                e.currentTarget.style.transform = "translate(-1px, -1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "var(--accent-primary)",
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-full)",
                padding: "8px 18px",
                fontSize: "0.85rem",
                fontWeight: 800,
                fontFamily: "var(--font-heading)",
                color: "#FFFFFF",
                boxShadow: "var(--shadow-pop-sm)",
                transition: "all 0.15s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-primary-hover)";
                e.currentTarget.style.transform = "translate(-1px, -1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent-primary)";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-full)",
                border: "2px solid var(--border-dark)",
                background: "#FFFFFF",
              }}
              className="md:hidden !inline-flex"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              marginTop: "10px",
              background: "#FFFFFF",
              border: "2px solid var(--border-dark)",
              borderRadius: "var(--radius-lg)",
              padding: "18px",
              boxShadow: "var(--shadow-pop)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  padding: "6px 0",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: "10px", paddingTop: "8px" }}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-outline"
                style={{ flex: 1, padding: "10px 14px", fontSize: "0.85rem" }}
              >
                <FileText size={15} />
                <span>Resume</span>
              </button>
              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ flex: 1, padding: "10px 14px", fontSize: "0.85rem" }}
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
