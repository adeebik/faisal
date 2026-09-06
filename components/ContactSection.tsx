"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/Icons";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    roleType: "Full-Time Role",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto-open WhatsApp or mailto as a fallback
      const text = encodeURIComponent(
        `Hi Faisal, my name is ${formData.name} from ${formData.company || "my organization"}. Inquiry: ${formData.message}`
      );
      window.open(`https://wa.me/917001516198?text=${text}`, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: "64px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-badge">
            <MessageCircle size={15} />
            <span>GET IN TOUCH</span>
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
            Let&apos;s Build &amp; Scale Your Territory Distribution
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Actively available for Territory Sales Executive (TSE), Area Sales Manager (ASM), Modern Trade Lead, and Growth Marketing opportunities.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "36px",
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          {/* Left Column: Direct Reach Channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* WhatsApp Card */}
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="pop-card"
              style={{
                background: "#FFFFFF",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-primary-light)",
                    border: "1.5px solid var(--accent-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-primary)",
                  }}
                >
                  <WhatsAppIcon size={22} color="#059669" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.05rem" }}>
                    Chat on WhatsApp
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {portfolioData.personal.phone} (Instant Response)
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} color="#059669" />
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, "")}`}
              className="pop-card"
              style={{
                background: "#FFFFFF",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-primary-light)",
                    border: "1.5px solid var(--accent-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-primary)",
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.05rem" }}>
                    Direct Phone Call
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {portfolioData.personal.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} color="#985CFF" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="pop-card"
              style={{
                background: "#FFFFFF",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-amber-light)",
                    border: "1.5px solid var(--accent-amber)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-amber)",
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.05rem" }}>
                    Email Inquiry
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {portfolioData.personal.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} color="#F59E0B" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="pop-card"
              style={{
                background: "#FFFFFF",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-cyan-light)",
                    border: "1.5px solid var(--accent-cyan)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-cyan)",
                  }}
                >
                  <LinkedInIcon size={20} color="#06B6D4" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.05rem" }}>
                    LinkedIn Profile
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    Connect &amp; Endorsements
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} color="#06B6D4" />
            </a>

            {/* Location Pill */}
            <div
              style={{
                background: "var(--bg-canvas)",
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-lg)",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <MapPin size={20} color="#985CFF" />
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  Primary Location:
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {portfolioData.personal.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div
            className="pop-card"
            style={{
              background: "#FFFFFF",
              padding: "32px",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.35rem",
                fontWeight: 900,
                color: "var(--text-primary)",
                marginBottom: "8px",
              }}
            >
              Send a Direct Message
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
              Leave your inquiry below. Messages route directly to Faisal&apos;s verified communication channel.
            </p>

            {isSubmitted ? (
              <div
                style={{
                  background: "var(--accent-primary-light)",
                  border: "2px solid var(--accent-primary)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <CheckCircle2 size={36} color="#059669" style={{ margin: "0 auto 10px auto" }} />
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 900, color: "var(--accent-primary-hover)", marginBottom: "4px" }}>
                  Message Ready!
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  Redirecting to WhatsApp to send directly to Faisal...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "4px", color: "var(--text-muted)" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      border: "2px solid var(--border-dark)",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "4px", color: "var(--text-muted)" }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "var(--radius-md)",
                        border: "2px solid var(--border-dark)",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "4px", color: "var(--text-muted)" }}>
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. FMCG Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "var(--radius-md)",
                        border: "2px solid var(--border-dark)",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "4px", color: "var(--text-muted)" }}>
                    Inquiry Details / Opportunity *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell Faisal about the role, territory scope, or distribution challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      border: "2px solid var(--border-dark)",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", padding: "12px" }}>
                  <Send size={18} />
                  <span>Send Message to Faisal</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
