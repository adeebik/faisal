"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, CertificationItem } from "@/data/portfolioData";
import { Award, ShieldCheck, Eye, Calendar, ExternalLink, Camera } from "lucide-react";

interface CertificatesSectionProps {
  onSelectCertificate: (cert: CertificationItem) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCertificate }) => {
  const [activePhotoCategory, setActivePhotoCategory] = useState<string>("all");
  const [zoomedPhoto, setZoomedPhoto] = useState<(typeof portfolioData.galleryPhotos)[0] | null>(null);

  const categories = [
    { id: "all", label: "All Photos", count: portfolioData.galleryPhotos.length },
    { id: "centific", label: "Centific", count: portfolioData.galleryPhotos.filter((p) => p.category.toLowerCase() === "centific").length },
    { id: "dabur", label: "Dabur", count: portfolioData.galleryPhotos.filter((p) => p.category.toLowerCase() === "dabur").length },
    { id: "pepsico", label: "PepsiCo", count: portfolioData.galleryPhotos.filter((p) => p.category.toLowerCase() === "pepsico").length },
    { id: "ecorealm", label: "EcoRealm", count: portfolioData.galleryPhotos.filter((p) => p.category.toLowerCase() === "ecorealm").length },
  ];

  const filteredPhotos =
    activePhotoCategory === "all"
      ? portfolioData.galleryPhotos
      : portfolioData.galleryPhotos.filter((p) => p.category.toLowerCase() === activePhotoCategory.toLowerCase());

  return (
    <section id="certificates" style={{ padding: "64px 0", background: "var(--bg-canvas)", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-badge">
            <span>🏆</span>
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              maxWidth: "800px",
              margin: "0 auto 12px auto",
              lineHeight: 1.2,
            }}
          >
            Industry Job Simulations, Honors &amp; Technical Certifications
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "var(--text-secondary)",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Verified credentials from Walmart, Red Bull, Bajaj Capital, and Lovely Professional University validating commercial sales execution, wealth advisory, territory management, and business intelligence.
          </p>
        </div>

        {/* 4 Certificates Grid */}
        <div className="certificates-grid">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="pop-card certificate-card"
              onClick={() => onSelectCertificate(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectCertificate(cert);
                }
              }}
            >
              <div>
                {/* Certificate Document Thumbnail Preview */}
                <div
                  className="certificate-thumb"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCertificate(cert);
                  }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1140px) 50vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                  {/* Subtle mobile/desktop preview badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      right: "8px",
                      background: "rgba(18, 16, 25, 0.82)",
                      backdropFilter: "blur(4px)",
                      color: "#FFFFFF",
                      borderRadius: "var(--radius-full)",
                      padding: "4px 10px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                    }}
                  >
                    <Eye size={12} />
                    <span>View</span>
                  </div>

                  {/* Desktop Hover Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(18, 16, 25, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <span
                      style={{
                        background: "#FFFFFF",
                        border: "2px solid var(--border-dark)",
                        borderRadius: "var(--radius-full)",
                        padding: "6px 14px",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        boxShadow: "var(--shadow-pop-sm)",
                      }}
                    >
                      <Eye size={14} />
                      <span>Inspect Credential</span>
                    </span>
                  </div>
                </div>

                {/* Badge & Issuer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
                  <span
                    style={{
                      background: "var(--accent-primary-light)",
                      border: "1px solid var(--accent-primary)",
                      borderRadius: "var(--radius-full)",
                      padding: "3px 10px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "var(--accent-primary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {cert.badge}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.12rem",
                    fontWeight: 900,
                    color: "var(--text-primary)",
                    lineHeight: 1.25,
                    marginBottom: "4px",
                  }}
                >
                  {cert.title}
                </h3>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 700, marginBottom: "10px" }}>
                  {cert.issuer}
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "14px" }}>
                  {cert.description}
                </p>

                {/* Skills Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {cert.skillsLearned.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "var(--bg-card-subtle)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-sm)",
                        padding: "2px 8px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "12px" }}>
                <button
                  type="button"
                  className="certificate-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCertificate(cert);
                  }}
                  aria-label={`Inspect ${cert.title} certificate`}
                >
                  <Eye size={15} />
                  <span>Inspect High-Res Credential</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Campus & Field Photo Gallery Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div className="section-badge">
            <Camera size={15} />
            <span>FIELD &amp; CAMPUS GALLERY</span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
              maxWidth: "750px",
              margin: "0 auto 8px auto",
            }}
          >
            Field Activations, AI Hackathons &amp; Brand Kiosks
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "620px", margin: "0 auto" }}>
            Real on-ground snapshots organized across Centific, Dabur, PepsiCo, and EcoRealm.
          </p>
        </div>

        {/* 4 Dedicated Section Tabs (Centific, Dabur, PepsiCo, EcoRealm) */}
        <div
          className="gallery-tabs-scroll no-scrollbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {categories.map((cat) => {
            const isActive = activePhotoCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActivePhotoCategory(cat.id)}
                style={{
                  background: isActive ? "var(--accent-primary)" : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : "var(--text-primary)",
                  border: "2px solid var(--border-dark)",
                  borderRadius: "var(--radius-full)",
                  padding: "8px 18px",
                  fontSize: "0.86rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-heading)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  boxShadow: isActive ? "var(--shadow-pop-sm)" : "none",
                  transform: isActive ? "translate(-2px, -2px)" : "none",
                  transition: "all 0.15s ease",
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    background: isActive ? "rgba(255, 255, 255, 0.25)" : "var(--bg-card-subtle)",
                    color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                    borderRadius: "var(--radius-full)",
                    padding: "2px 7px",
                    fontSize: "0.72rem",
                    fontWeight: 900,
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photo Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="pop-card"
              onClick={() => setZoomedPhoto(photo)}
              style={{
                background: "#FFFFFF",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                padding: "12px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    borderRadius: "calc(var(--radius-xl) - 4px)",
                    overflow: "hidden",
                    border: "1.5px solid var(--border-dark)",
                    marginBottom: "12px",
                    background: "var(--bg-canvas)",
                  }}
                >
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />

                  {/* Category Chip Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "rgba(18, 16, 25, 0.85)",
                      backdropFilter: "blur(4px)",
                      color: "#FFFFFF",
                      borderRadius: "var(--radius-full)",
                      padding: "3px 10px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {photo.category}
                  </div>

                  {/* Hover Inspect Pill */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(18, 16, 25, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <span
                      style={{
                        background: "#FFFFFF",
                        border: "2px solid var(--border-dark)",
                        borderRadius: "var(--radius-full)",
                        padding: "5px 12px",
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Eye size={14} />
                      <span>View Snapshot</span>
                    </span>
                  </div>
                </div>

                <div style={{ padding: "4px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                      marginBottom: "6px",
                    }}
                  >
                    {photo.title}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal for Gallery Photo */}
      {zoomedPhoto && (
        <div
          className="modal-overlay"
          onClick={() => setZoomedPhoto(null)}
          style={{ zIndex: 120, position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.78)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(10px, 2.5vw, 24px)' }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFFFFF",
              borderRadius: "clamp(16px, 3vw, 24px)",
              maxWidth: "760px",
              width: "100%",
              maxHeight: "92vh",
              overflowY: "auto",
              border: "2.5px solid var(--border-dark)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(240px, 50vh, 460px)",
                background: "#000000",
              }}
            >
              <Image
                src={zoomedPhoto.image}
                alt={zoomedPhoto.title}
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ padding: "clamp(14px, 2vw, 24px)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    background: "var(--accent-primary-light)",
                    border: "1px solid var(--accent-primary)",
                    color: "var(--accent-primary)",
                    borderRadius: "var(--radius-full)",
                    padding: "3px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                  }}
                >
                  {zoomedPhoto.category}
                </span>
                <button
                  onClick={() => setZoomedPhoto(null)}
                  style={{
                    background: "var(--bg-canvas)",
                    border: "1.5px solid var(--border-dark)",
                    borderRadius: "var(--radius-full)",
                    padding: "4px 14px",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.05rem, 2vw, 1.25rem)", fontWeight: 900, marginBottom: "4px" }}>
                {zoomedPhoto.title}
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {zoomedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
