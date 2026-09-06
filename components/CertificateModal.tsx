"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { CertificationItem } from "@/data/portfolioData";
import { X, ExternalLink, Download, ShieldCheck, Calendar, Award } from "lucide-react";

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          maxWidth: "880px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          border: "2.5px solid var(--border-dark)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
          position: "relative",
        }}
      >
        {/* Header */}
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
            zIndex: 10,
            borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "var(--accent-primary-light)",
                border: "1.5px solid var(--accent-primary)",
                borderRadius: "var(--radius-full)",
                padding: "3px 12px",
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "var(--accent-primary)",
              }}
            >
              <ShieldCheck size={14} />
              <span>VERIFIED CREDENTIAL</span>
            </span>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 700 }}>
              {certificate.issuer}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Certificate Modal"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "2px solid var(--border-dark)",
              background: "var(--bg-card-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "24px" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "var(--text-primary)",
              marginBottom: "6px",
            }}
          >
            {certificate.title}
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
            <span style={{ fontWeight: 800, color: "var(--accent-primary)" }}>{certificate.issuer}</span>
            <span>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Calendar size={14} />
              {certificate.date}
            </span>
          </div>

          {/* High-Res Certificate Image Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "420px",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "2px solid var(--border-dark)",
              boxShadow: "var(--shadow-pop-sm)",
              marginBottom: "20px",
              background: "#F9FAFB",
            }}
          >
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={800}
              height={560}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Description & Competencies */}
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
              {certificate.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase" }}>
                COMPETENCIES VERIFIED:
              </span>
              {certificate.skillsLearned.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "var(--bg-canvas)",
                    border: "1px solid var(--border-dark)",
                    borderRadius: "var(--radius-full)",
                    padding: "4px 12px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "16px",
              borderTop: "1.5px solid var(--border-subtle)",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Official credential of Faisal Farhan Ansari
            </div>
            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              download
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "8px 18px" }}
            >
              <Download size={15} />
              <span>Download Original Document</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
