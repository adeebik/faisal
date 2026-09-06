"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Users, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

export const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "leadership">("experience");

  return (
    <section id="experience" style={{ padding: "60px 0", background: "var(--bg-canvas)", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="section-badge">
            <span>💼</span>
            <span>CAREER &amp; ACADEMICS</span>
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
            Proven Track Record in Field Sales, Growth &amp; Leadership
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Explore my hands-on professional territory roles, academic distinctions, and student leadership milestones.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "36px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setActiveTab("experience")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "var(--radius-full)",
              border: "2px solid var(--border-dark)",
              background: activeTab === "experience" ? "var(--accent-primary)" : "#FFFFFF",
              color: activeTab === "experience" ? "#FFFFFF" : "var(--text-primary)",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "0.95rem",
              boxShadow: activeTab === "experience" ? "var(--shadow-pop-sm)" : "none",
              transition: "all 0.15s ease",
            }}
          >
            <Briefcase size={17} />
            <span>Work Experience (3+ Yrs)</span>
          </button>

          <button
            onClick={() => setActiveTab("education")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "var(--radius-full)",
              border: "2px solid var(--border-dark)",
              background: activeTab === "education" ? "var(--accent-cyan)" : "#FFFFFF",
              color: activeTab === "education" ? "#FFFFFF" : "var(--text-primary)",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "0.95rem",
              boxShadow: activeTab === "education" ? "var(--shadow-pop-sm)" : "none",
              transition: "all 0.15s ease",
            }}
          >
            <GraduationCap size={18} />
            <span>Education (MBA &amp; BA)</span>
          </button>

          <button
            onClick={() => setActiveTab("leadership")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "var(--radius-full)",
              border: "2px solid var(--border-dark)",
              background: activeTab === "leadership" ? "var(--accent-amber)" : "#FFFFFF",
              color: activeTab === "leadership" ? "#FFFFFF" : "var(--text-primary)",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "0.95rem",
              boxShadow: activeTab === "leadership" ? "var(--shadow-pop-sm)" : "none",
              transition: "all 0.15s ease",
            }}
          >
            <Users size={17} />
            <span>Campus Leadership</span>
          </button>
        </div>

        {/* Tab 1: Work Experience */}
        {activeTab === "experience" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "920px", margin: "0 auto" }}>
            {portfolioData.experiences.map((exp) => (
              <div
                key={exp.id}
                className="pop-card"
                style={{
                  background: "#FFFFFF",
                  padding: "28px",
                  position: "relative",
                }}
              >
                {/* Role Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "14px",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "var(--radius-md)",
                        background: exp.accentColor,
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 900,
                        fontSize: "1.15rem",
                        border: "2px solid var(--border-dark)",
                        boxShadow: "var(--shadow-pop-sm)",
                      }}
                    >
                      {exp.logoText}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.35rem",
                          fontWeight: 900,
                          color: "var(--text-primary)",
                          lineHeight: 1.2,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginTop: "4px",
                          flexWrap: "wrap",
                          fontSize: "0.9rem",
                          color: "var(--text-secondary)",
                          fontWeight: 600,
                        }}
                      >
                        <span style={{ color: "var(--text-primary)", fontWeight: 800 }}>{exp.company}</span>
                        <span>•</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span
                          style={{
                            background: "var(--bg-card-subtle)",
                            padding: "2px 8px",
                            borderRadius: "var(--radius-full)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                          }}
                        >
                          {exp.workType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--bg-card-subtle)",
                      border: "1.5px solid var(--border-dark)",
                      borderRadius: "var(--radius-full)",
                      padding: "6px 14px",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullets */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span
                        style={{
                          color: exp.accentColor,
                          marginTop: "4px",
                          flexShrink: 0,
                          display: "inline-flex",
                        }}
                      >
                        <CheckCircle2 size={16} />
                      </span>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                    CORE STRENGTHS:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "var(--bg-card-subtle)",
                        border: "1px solid var(--border-dark)",
                        borderRadius: "var(--radius-full)",
                        padding: "3px 10px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === "education" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "920px", margin: "0 auto" }}>
            {portfolioData.education.map((edu) => (
              <div
                key={edu.id}
                className="pop-card"
                style={{
                  background: "#FFFFFF",
                  padding: "28px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "14px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "var(--accent-primary-light)",
                        border: "1px solid var(--accent-primary)",
                        borderRadius: "var(--radius-full)",
                        padding: "3px 12px",
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        color: "var(--accent-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      {edu.badge}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.35rem",
                        fontWeight: 900,
                        color: "var(--text-primary)",
                        lineHeight: 1.2,
                      }}
                    >
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--accent-primary)", marginTop: "2px" }}>
                        Specialization: {edu.specialization}
                      </div>
                    )}
                    <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 600, marginTop: "4px" }}>
                      {edu.institution} • {edu.location}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.5rem",
                        fontWeight: 900,
                        color: "var(--accent-primary)",
                      }}
                    >
                      {edu.score}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      {edu.duration}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid var(--border-subtle)", paddingTop: "16px" }}>
                  {edu.highlights.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <ChevronRight size={16} color="#985CFF" style={{ flexShrink: 0, marginTop: "3px" }} />
                      <span style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Campus Leadership */}
        {activeTab === "leadership" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "920px", margin: "0 auto" }}>
            {portfolioData.extraCurricular.map((item) => (
              <div
                key={item.id}
                className="pop-card"
                style={{
                  background: "#FFFFFF",
                  padding: "28px",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem", fontWeight: 900, color: "var(--text-primary)" }}>
                      {item.role}
                    </h3>
                    <div style={{ fontSize: "1rem", color: "var(--accent-amber)", fontWeight: 700 }}>
                      {item.organization}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "var(--accent-amber-light)",
                      border: "1.5px solid var(--accent-amber)",
                      borderRadius: "var(--radius-full)",
                      padding: "4px 14px",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      color: "var(--accent-amber)",
                    }}
                  >
                    {item.duration}
                  </div>
                </div>
                <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
