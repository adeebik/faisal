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
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{ padding: "clamp(8px, 2.5vw, 24px)", zIndex: 1000 }}
    >
      <div
        className="modal-content cert-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            background: "#FFFFFF",
            borderBottom: "2px solid var(--border-dark)",
            padding: "clamp(12px, 2vw, 16px) clamp(14px, 2.5vw, 24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", minWidth: 0 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                background: "var(--accent-primary-light)",
                border: "1.5px solid var(--accent-primary)",
                borderRadius: "var(--radius-full)",
                padding: "3px 10px",
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--accent-primary)",
                whiteSpace: "nowrap",
              }}
            >
              <ShieldCheck size={14} />
              <span>VERIFIED CREDENTIAL</span>
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontWeight: 700,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {certificate.issuer}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Certificate Modal"
            style={{
              width: "36px",
              height: "36px",
              minWidth: "36px",
              minHeight: "36px",
              borderRadius: "50%",
              border: "2px solid var(--border-dark)",
              background: "var(--bg-card-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.15s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="cert-modal-body">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.2rem, 3vw, 1.55rem)",
              fontWeight: 900,
              color: "var(--text-primary)",
              marginBottom: "6px",
              lineHeight: 1.25,
            }}
          >
            {certificate.title}
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px 12px",
              marginBottom: "18px",
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontWeight: 800, color: "var(--accent-primary)" }}>{certificate.issuer}</span>
            <span>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Calendar size={14} />
              {certificate.date}
            </span>
          </div>

          {/* High-Res Certificate Image Container */}
          <div className="cert-preview-frame">
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={1000}
              height={750}
              priority
              className="cert-preview-img"
            />
          </div>

          {/* Description & Competencies */}
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                fontSize: "clamp(0.88rem, 1.8vw, 0.95rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              {certificate.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                COMPETENCIES VERIFIED:
              </span>
              {certificate.skillsLearned.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "var(--bg-canvas)",
                    border: "1px solid var(--border-dark)",
                    borderRadius: "var(--radius-full)",
                    padding: "3px 10px",
                    fontSize: "0.78rem",
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
          <div className="cert-footer-wrap">
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Official verified credential of Faisal Farhan Ansari
            </div>
            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              download
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "10px 20px" }}
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
