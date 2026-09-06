"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { X, Download, Mail, Phone, MapPin, Printer, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<"pdf" | "html">("pdf");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const pdfPath = portfolioData.personal.resumeUrl || "/faisal_resume.pdf";
  const pdfFileName = portfolioData.personal.resumeFileName || "Faisal_Farhan_Ansari_Resume.pdf";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          maxWidth: "920px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          border: "2.5px solid var(--border-dark)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Modal Sticky Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            background: "#FFFFFF",
            borderBottom: "2px solid var(--border-dark)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 20,
            borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "var(--radius-sm)",
                background: "var(--accent-primary-light)",
                border: "1.5px solid var(--accent-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-primary)",
              }}
            >
              <FileText size={20} />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.15rem", color: "var(--text-primary)" }}>
                {portfolioData.personal.name}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                Verified Official Resume Document
              </div>
            </div>
          </div>

          {/* Controls: View Mode Switcher, Download & Close */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                display: "inline-flex",
                background: "var(--bg-canvas)",
                borderRadius: "var(--radius-full)",
                border: "1.5px solid var(--border-dark)",
                padding: "2px",
              }}
            >
              <button
                onClick={() => setViewMode("pdf")}
                style={{
                  padding: "5px 14px",
                  borderRadius: "var(--radius-full)",
                  background: viewMode === "pdf" ? "var(--accent-primary)" : "transparent",
                  color: viewMode === "pdf" ? "#FFFFFF" : "var(--text-primary)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  transition: "all 0.15s ease",
                }}
              >
                PDF Document
              </button>
              <button
                onClick={() => setViewMode("html")}
                style={{
                  padding: "5px 14px",
                  borderRadius: "var(--radius-full)",
                  background: viewMode === "html" ? "var(--accent-primary)" : "transparent",
                  color: viewMode === "html" ? "#FFFFFF" : "var(--text-primary)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  transition: "all 0.15s ease",
                }}
              >
                Interactive View
              </button>
            </div>

            <a
              href={pdfPath}
              download={pdfFileName}
              className="btn-primary"
              style={{ padding: "6px 14px", fontSize: "0.82rem" }}
            >
              <Download size={14} />
              <span>Download</span>
            </a>

            <button
              onClick={handlePrint}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-full)",
                border: "2px solid var(--border-dark)",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              title="Print Resume"
            >
              <Printer size={16} />
            </button>

            <button
              onClick={onClose}
              aria-label="Close Resume Modal"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-full)",
                border: "2px solid var(--border-dark)",
                background: "var(--bg-card-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          {viewMode === "pdf" ? (
            <div style={{ width: "100%", height: "72vh", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1.5px solid var(--border-dark)" }}>
              <iframe
                src={`${pdfPath}#toolbar=0&navpanes=0`}
                title="Faisal Farhan Ansari Resume PDF"
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            </div>
          ) : (
            /* Structured HTML Resume View */
            <div style={{ padding: "16px 24px", color: "var(--text-primary)" }}>
              {/* Header Info */}
              <div style={{ borderBottom: "2px solid var(--border-dark)", paddingBottom: "16px", marginBottom: "20px" }}>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 900 }}>
                  {portfolioData.personal.name}
                </h1>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-primary)", marginBottom: "8px" }}>
                  {portfolioData.personal.title}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  <span>📍 {portfolioData.personal.location}</span>
                  <span>📞 {portfolioData.personal.phone}</span>
                  <span>✉️ {portfolioData.personal.email}</span>
                  <span>🔗 {portfolioData.personal.linkedinUrl}</span>
                </div>
              </div>

              {/* Skills Summary */}
              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 800, textTransform: "uppercase", borderBottom: "1.5px solid var(--border-subtle)", paddingBottom: "6px", marginBottom: "10px" }}>
                  Skills Summary
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem" }}>
                  <div>
                    <strong>Tools &amp; Platforms:</strong> MS-Excel, Canva, Tableau, Power BI, Google Sheets, MS-Word, PowerPoint, Google Analytics, GTM, Semrush, Ubersuggest, Ahrefs, Screaming Frog
                  </div>
                  <div>
                    <strong>Power Skills:</strong> Negotiation, Client Acquisition, Relationship Management, Field Sales, Market Research, Route-to-Market
                  </div>
                  <div>
                    <strong>Soft Skills:</strong> Leadership, Communication, Adaptability, Time Management, Interpersonal Skills, Problem Solving
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 800, textTransform: "uppercase", borderBottom: "1.5px solid var(--border-subtle)", paddingBottom: "6px", marginBottom: "14px" }}>
                  Work Experience
                </h3>
                {portfolioData.experiences.map((exp) => (
                  <div key={exp.id} style={{ marginBottom: "18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4px" }}>
                      <div style={{ fontWeight: 800, fontSize: "1rem" }}>
                        {exp.company} | {exp.location}
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                        {exp.duration}
                      </div>
                    </div>
                    <div style={{ fontStyle: "italic", fontSize: "0.92rem", color: "var(--accent-primary)", fontWeight: 700, marginBottom: "8px" }}>
                      {exp.role}
                    </div>
                    <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                      {exp.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Live Projects */}
              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 800, textTransform: "uppercase", borderBottom: "1.5px solid var(--border-subtle)", paddingBottom: "6px", marginBottom: "14px" }}>
                  Key Live Projects
                </h3>
                {portfolioData.projects.slice(0, 4).map((proj) => (
                  <div key={proj.id} style={{ marginBottom: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                      <strong style={{ fontSize: "0.95rem" }}>{proj.title}</strong>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{proj.period}</span>
                    </div>
                    <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", marginTop: "3px" }}>
                      {proj.summary}
                    </p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 800, textTransform: "uppercase", borderBottom: "1.5px solid var(--border-subtle)", paddingBottom: "6px", marginBottom: "14px" }}>
                  Education
                </h3>
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>{edu.institution} — {edu.location}</div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{edu.degree} {edu.specialization && `– ${edu.specialization}`}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 800, color: "var(--accent-primary)" }}>{edu.score}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{edu.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
