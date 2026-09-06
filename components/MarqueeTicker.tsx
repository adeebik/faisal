"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export const MarqueeTicker: React.FC = () => {
  const items = [...portfolioData.marqueeItems, ...portfolioData.marqueeItems];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "var(--bg-dark)",
        color: "#FFFFFF",
        padding: "16px 0",
        borderTop: "2.5px solid var(--border-dark)",
        borderBottom: "2.5px solid var(--border-dark)",
        transform: "rotate(-1deg) scale(1.02)",
        margin: "24px 0 40px 0",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        zIndex: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marqueeScroll 35s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "24px",
              paddingRight: "24px",
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              fontWeight: 800,
              letterSpacing: "0.06em",
            }}
          >
            <span style={{ color: index % 2 === 0 ? "#FFFFFF" : "#C4B5FD" }}>{item}</span>
            <span style={{ color: "#F59E0B", fontSize: "1.2rem" }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
