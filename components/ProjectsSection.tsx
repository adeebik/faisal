"use client";

import React from "react";
import Image from "next/image";
import { portfolioData, ProjectCaseStudy } from "@/data/portfolioData";
import { ArrowUpRight, Calendar, MapPin, CheckCircle2, Camera } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" style={{ padding: "64px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-badge">
            <span>💼</span>
            <span>COMMERCIAL STRATEGY</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              maxWidth: "880px",
              margin: "0 auto 12px auto",
              lineHeight: 1.18,
            }}
          >
            Commercial Strategy{" "}
            <span
              style={{
                color: "var(--accent-primary)",
                fontStyle: "italic",
                position: "relative",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            From on-ground dealer networks to D2C brand scaling and retail AI agents — click any project to inspect full problem statements, on-ground tactical interventions, and audited deliverables.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {portfolioData.projects.map((proj) => (
            <div
              key={proj.id}
              className="pop-card"
              onClick={() => onSelectProject(proj)}
              style={{
                background: "#FFFFFF",
                borderRadius: "var(--radius-xl)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <div>
                {/* Image Preview Container or Dedicated Space */}
                {proj.image ? (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "210px",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      border: "2px solid var(--border-dark)",
                      marginBottom: "16px",
                      background: "var(--bg-canvas)",
                    }}
                  >
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {/* Chapter Pill on Image */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        background: "rgba(18, 16, 25, 0.88)",
                        backdropFilter: "blur(6px)",
                        color: "#FFFFFF",
                        borderRadius: "var(--radius-full)",
                        padding: "3px 10px",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                      }}
                    >
                      CHAPTER {proj.number}
                    </div>

                    {/* Tag on Image */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        background: "#FFFFFF",
                        border: "1.5px solid var(--border-dark)",
                        borderRadius: "var(--radius-full)",
                        padding: "3px 10px",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        color: "var(--accent-primary)",
                      }}
                    >
                      {proj.badgeTag}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "210px",
                      borderRadius: "var(--radius-lg)",
                      border: "2px dashed var(--border-dark)",
                      background: "var(--bg-canvas)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      padding: "16px",
                      textAlign: "center",
                      gap: "6px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        background: "rgba(18, 16, 25, 0.88)",
                        color: "#FFFFFF",
                        borderRadius: "var(--radius-full)",
                        padding: "3px 10px",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                      }}
                    >
                      CHAPTER {proj.number}
                    </div>

                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "var(--accent-primary-light)",
                        border: "1.5px solid var(--accent-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-primary)",
                      }}
                    >
                      <Camera size={22} />
                    </div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)" }}>
                      Britannia Field Project Visual
                    </div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      Reference visual space (to be added)
                    </div>
                  </div>
                )}

                {/* Top Chapter & Badge for non-image or secondary meta */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--accent-primary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {proj.category}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    {proj.period}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    color: "var(--text-primary)",
                    lineHeight: 1.25,
                    marginBottom: "10px",
                  }}
                >
                  {proj.title}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "16px",
                  }}
                >
                  {proj.summary}
                </p>

                {/* Key Metrics Chips */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "10px",
                    marginBottom: "18px",
                  }}
                >
                  {proj.metrics.slice(0, 2).map((m, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "var(--bg-canvas)",
                        border: "1.5px solid var(--border-dark)",
                        borderRadius: "var(--radius-md)",
                        padding: "10px",
                      }}
                    >
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 700 }}>
                        {m.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.15rem",
                          fontWeight: 900,
                          color: "var(--accent-primary)",
                        }}
                      >
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metadata & CTA */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "14px",
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                    {proj.location || "Pan-India"}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(proj);
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      color: "var(--accent-primary)",
                    }}
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
