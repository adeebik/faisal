"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { TrendingUp, Users, DollarSign, CheckCircle, Award } from "lucide-react";

export const StatsBar: React.FC = () => {
  const icons = [
    <Users key="users" size={22} color="#985CFF" />,
    <TrendingUp key="trending" size={22} color="#06B6D4" />,
    <DollarSign key="dollar" size={22} color="#F59E0B" />,
    <CheckCircle key="check" size={22} color="#10B981" />,
    <Award key="award" size={22} color="#985CFF" />,
  ];

  return (
    <section style={{ padding: "18px 0 36px 0", position: "relative", zIndex: 10 }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {portfolioData.personal.stats.map((item, index) => (
            <div
              key={item.label}
              className="pop-card"
              style={{
                padding: "20px 18px",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#FFFFFF",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 38,
                    height: 38,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-card-subtle)",
                    border: "1.5px solid var(--border-dark)",
                  }}
                >
                  {icons[index % icons.length]}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--text-muted)",
                  }}
                >
                  Metric #{index + 1}
                </span>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.1rem",
                    fontWeight: 900,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: "4px",
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  {item.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
