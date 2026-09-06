"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectCaseStudy } from "@/data/portfolioData";
import { X, CheckCircle2, TrendingUp, Calendar, MapPin, Wrench, ArrowUpRight, MessageCircle } from "lucide-react";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          maxWidth: "840px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          border: "2.5px solid var(--border-dark)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
          position: "relative",
        }}
      >
        {/* Sticky Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            background: "#FFFFFF",
            borderBottom: "2px solid var(--border-dark)",
            padding: "18px 24px",
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
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                fontWeight: 900,
                color: "var(--accent-primary)",
              }}
            >
              CHAPTER {project.number}
            </span>
            <span style={{ color: "var(--border-dark)" }}>/</span>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 800,
                color: "var(--text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study Modal"
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
        <div style={{ padding: "28px" }}>
          {/* Title & Metadata */}
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                fontWeight: 900,
                lineHeight: 1.25,
                color: "var(--text-primary)",
                marginBottom: "12px",
              }}
            >
              {project.title}
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                fontWeight: 600,
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Calendar size={15} />
                {project.period}
              </span>
              <span>•</span>
              <span style={{ color: "var(--accent-primary)", fontWeight: 800 }}>Role: {project.role}</span>
              {project.location && (
                <>
                  <span>•</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <MapPin size={15} />
                    {project.location}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Project Featured Image Banner (if available) */}
          {project.image && (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "320px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "2px solid var(--border-dark)",
                marginBottom: "28px",
                boxShadow: "var(--shadow-pop-sm)",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}

          {/* Key Metrics Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "14px",
              marginBottom: "28px",
            }}
          >
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--bg-canvas)",
                  border: "2px solid var(--border-dark)",
                  borderRadius: "var(--radius-md)",
                  padding: "14px",
                  boxShadow: "var(--shadow-pop-sm)",
                }}
              >
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "4px" }}>
                  {m.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.45rem",
                    fontWeight: 900,
                    color: "var(--accent-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  {m.value}
                </div>
                {m.change && (
                  <div style={{ fontSize: "0.76rem", color: "var(--text-secondary)", fontWeight: 600, marginTop: "4px" }}>
                    {m.change}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* The Challenge */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>🚨</span>
              <span>The Field Challenge</span>
            </h3>
            <p
              style={{
                fontSize: "0.98rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                background: "var(--accent-rose-light)",
                border: "1.5px solid var(--accent-rose)",
                borderRadius: "var(--radius-md)",
                padding: "16px",
              }}
            >
              {project.challenge}
            </p>
          </div>

          {/* Strategy */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>🎯</span>
              <span>Strategic Route &amp; Interventions</span>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.strategy.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "var(--accent-primary-light)",
                      border: "1px solid var(--accent-primary)",
                      color: "var(--accent-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {idx + 1}
                  </span>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Execution */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>⚡</span>
              <span>On-Ground Tactical Execution</span>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.execution.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Tools */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              paddingTop: "20px",
              borderTop: "1.5px solid var(--border-subtle)",
              marginBottom: "28px",
            }}
          >
            <div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>
                Audited Deliverables:
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {project.deliverables.map((del, idx) => (
                  <div key={idx} style={{ fontSize: "0.88rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "var(--accent-primary)" }}>✓</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>
                Tools &amp; Frameworks:
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      background: "var(--bg-card-subtle)",
                      border: "1px solid var(--border-dark)",
                      borderRadius: "var(--radius-full)",
                      padding: "4px 12px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Action */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              paddingTop: "16px",
              borderTop: "2px solid var(--border-dark)",
            }}
          >
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>
              Faisal Farhan Ansari • Territory Case Study Dossier
            </div>

            <a
              href={`https://wa.me/917001516198?text=Hi%20Faisal,%20I%20read%20your%20case%20study%20on%20${encodeURIComponent(project.title)}%20and%20would%20love%20to%20discuss%20it.`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: "0.88rem", padding: "10px 20px" }}
            >
              <MessageCircle size={16} />
              <span>Discuss On WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
