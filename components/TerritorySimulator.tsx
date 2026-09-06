"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Calendar, MapPin, ArrowRight, MessageCircle } from "lucide-react";

export const TerritorySimulator: React.FC = () => {
  const [outlets, setOutlets] = useState<number>(40);
  const [aov, setAov] = useState<number>(25000);
  const [frequency, setFrequency] = useState<"weekly" | "biweekly" | "monthly">("biweekly");

  const visitsPerMonth = frequency === "weekly" ? 4 : frequency === "biweekly" ? 2 : 1;
  const monthlyRevenue = outlets * aov * visitsPerMonth;
  const annualRevenue = monthlyRevenue * 12;
  const totalTouchpoints = outlets * visitsPerMonth;
  const distributorMargin = Math.round(monthlyRevenue * 0.08); // 8% standard FMCG gross trade margin

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <section style={{ padding: "64px 0", background: "var(--bg-canvas)", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-badge">
            <Calculator size={15} />
            <span>INTERACTIVE FMCG CALCULATOR</span>
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
            Territory Beat &amp; Revenue Projection Simulator
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Simulate how retail outlet network expansion and route visit cadence directly compound monthly FMCG distribution turnover.
          </p>
        </div>

        {/* Calculator Main Stage */}
        <div
          className="pop-card"
          style={{
            background: "#FFFFFF",
            borderRadius: "var(--radius-xl)",
            padding: "36px",
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "center",
          }}
        >
          {/* Left Inputs */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.35rem",
                fontWeight: 900,
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              Route Parameters
            </h3>

            {/* Slider 1: Active Outlets */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  General Trade Outlets Managed:
                </label>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    color: "var(--accent-primary)",
                  }}
                >
                  {outlets} Outlets
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={outlets}
                onChange={(e) => setOutlets(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--accent-primary)", height: "8px", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                <span>10 Outlets (Seed)</span>
                <span>40 Outlets (Anwar Trader Baseline)</span>
                <span>100 Outlets (Scale)</span>
              </div>
            </div>

            {/* Slider 2: Average Order Value */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Average Order Value (AOV):
                </label>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    color: "var(--accent-cyan)",
                  }}
                >
                  ₹{aov.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="60000"
                step="5000"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--accent-cyan)", height: "8px", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                <span>₹10,000 (Kirana)</span>
                <span>₹25,000 (Standard GT)</span>
                <span>₹60,000 (Wholesale)</span>
              </div>
            </div>

            {/* Beat Cadence Frequency */}
            <div>
              <label style={{ display: "block", fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
                Route Visit Cadence:
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {[
                  { id: "weekly", label: "Weekly", sub: "4 visits/mo" },
                  { id: "biweekly", label: "Bi-Weekly", sub: "2 visits/mo" },
                  { id: "monthly", label: "Monthly", sub: "1 visit/mo" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFrequency(item.id as any)}
                    style={{
                      padding: "10px 8px",
                      borderRadius: "var(--radius-md)",
                      border: "2px solid var(--border-dark)",
                      background: frequency === item.id ? "var(--accent-primary)" : "var(--bg-canvas)",
                      color: frequency === item.id ? "#FFFFFF" : "var(--text-primary)",
                      fontFamily: "var(--font-heading)",
                      textAlign: "center",
                      transition: "all 0.15s ease",
                      boxShadow: frequency === item.id ? "var(--shadow-pop-sm)" : "none",
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: "0.9rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.72rem", opacity: 0.85 }}>{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Projections */}
          <div
            style={{
              background: "var(--bg-canvas)",
              border: "2px solid var(--border-dark)",
              borderRadius: "var(--radius-lg)",
              padding: "24px",
              boxShadow: "var(--shadow-pop)",
            }}
          >
            <div style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em", marginBottom: "4px" }}>
              PROJECTED MONTHLY TERRITORY RUN-RATE
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 3.5vw, 2.7rem)",
                fontWeight: 900,
                color: "var(--accent-primary)",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              {formatCurrency(monthlyRevenue)}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
              <div style={{ background: "#FFFFFF", border: "1.5px solid var(--border-dark)", borderRadius: "var(--radius-md)", padding: "12px" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700 }}>
                  Annual Territory Run-Rate
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 900, color: "var(--text-primary)" }}>
                  {formatCurrency(annualRevenue)}
                </div>
              </div>

              <div style={{ background: "#FFFFFF", border: "1.5px solid var(--border-dark)", borderRadius: "var(--radius-md)", padding: "12px" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700 }}>
                  Monthly Touchpoints
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 900, color: "var(--accent-cyan)" }}>
                  {totalTouchpoints} Visits
                </div>
              </div>
            </div>

            <div style={{ background: "var(--accent-primary-light)", border: "1.5px solid var(--accent-primary)", borderRadius: "var(--radius-md)", padding: "12px", marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent-primary-hover)" }}>
                  Est. Distributor Trade Margin (8%):
                </span>
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.1rem", color: "var(--accent-primary-hover)" }}>
                  {formatCurrency(distributorMargin)}/mo
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/917001516198?text=Hi%20Faisal,%20I%20used%20your%20territory%20simulator%20for%20${outlets}%20outlets%20with%20${frequency}%20beat%20frequency.%20Let's%20discuss%20structuring%20this%20territory.`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ width: "100%", textAlign: "center" }}
            >
              <MessageCircle size={18} />
              <span>Structure This Territory With Faisal</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
