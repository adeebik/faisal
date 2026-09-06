"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Wrench, CheckCircle2, TrendingUp, Sparkles, Cpu } from "lucide-react";

export const SkillsToolsSection: React.FC = () => {
  return (
    <section id="skills" style={{ padding: "64px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-badge">
            <Cpu size={15} />
            <span>SKILLS &amp; TOOL STACK</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              maxWidth: "840px",
              margin: "0 auto 12px auto",
              lineHeight: 1.2,
            }}
          >
            Sales Execution, Growth Marketing &amp; AI Strategy Toolkit
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            A versatile capability stack pairing on-ground dealer negotiations with performance marketing, SEO analytics, and emerging AI product strategy.
          </p>
        </div>

        {/* Top: Power Skills Interactive Pills Matrix */}
        <div
          className="pop-card"
          style={{
            background: "#FFFFFF",
            borderRadius: "var(--radius-xl)",
            padding: "32px",
            marginBottom: "36px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: "var(--radius-sm)",
                background: "var(--accent-primary-light)",
                color: "var(--accent-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Sparkles size={18} />
            </span>
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 900, color: "var(--text-primary)" }}>
                Core Competencies &amp; Power Skills
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Core capabilities built through 3+ years of on-ground distribution, D2C brand scaling, and AI product strategy.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {portfolioData.skills.map((skill, index) => (
              <span
                key={skill.name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: index % 3 === 0 ? "var(--bg-canvas)" : index % 3 === 1 ? "var(--accent-primary-light)" : "var(--accent-cyan-light)",
                  border: "1.5px solid var(--border-dark)",
                  borderRadius: "var(--radius-full)",
                  padding: "8px 16px",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  boxShadow: "var(--shadow-pop-sm)",
                  transition: "transform 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translate(-2px, -2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translate(0, 0)")}
              >
                <CheckCircle2 size={14} color="#985CFF" />
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom: Tool Deck 3 Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {portfolioData.toolDeck.map((category) => (
            <div
              key={category.title}
              className="pop-card"
              style={{
                background: "#FFFFFF",
                borderRadius: "var(--radius-xl)",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                  }}
                >
                  {category.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "20px" }}>
                  {category.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      style={{
                        background: "var(--bg-canvas)",
                        border: "1.5px solid var(--border-dark)",
                        borderRadius: "var(--radius-md)",
                        padding: "12px 14px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                          {tool.name}
                        </span>
                        <span
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid var(--border-dark)",
                            borderRadius: "var(--radius-full)",
                            padding: "2px 8px",
                            fontSize: "0.72rem",
                            fontWeight: 800,
                            color: "var(--accent-primary)",
                          }}
                        >
                          {tool.tag} • {tool.level}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
