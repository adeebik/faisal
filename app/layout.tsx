import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#985CFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://faisal-ansari.com"),
  title: "Faisal Farhan Ansari | Growth Marketing & Sales Professional",
  description:
    "From dealer networks to digital demand — Sales execution meets Marketing strategy. Faisal pairs ground-level sales execution with digital-first marketing and emerging AI product thinking — scaling a 40+ outlet distribution network, growing a self-built D2C brand, and shaping AI-agent strategy at a national hackathon.",
  keywords: [
    "Faisal Farhan Ansari",
    "Growth Marketing & Sales Professional",
    "Marketing & Sales Strategist",
    "Sales Execution",
    "Performance Marketing",
    "AI Product Strategy",
    "PRFAQs",
    "Lean Canvas",
    "General Trade",
    "D2C Brand Growth",
    "EcoRealm",
    "Dabur",
    "PepsiCo",
    "Britannia",
    "Centific Hackathon",
    "LPU MBA",
  ],
  authors: [{ name: "Faisal Farhan Ansari" }],
  openGraph: {
    title: "Faisal Farhan Ansari | Growth Marketing & Sales Professional",
    description:
      "From dealer networks to digital demand — Sales execution meets Marketing strategy. Ground-level sales execution, digital-first marketing, and emerging AI product thinking.",
    url: "https://faisal-ansari.com",
    siteName: "Faisal Farhan Ansari Portfolio",
    images: [
      {
        url: "/images/faisal_profile.png",
        width: 1024,
        height: 1024,
        alt: "Faisal Farhan Ansari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Farhan Ansari | Growth Marketing & Sales Professional",
    description:
      "Sales execution meets Marketing strategy. Scaling 40+ outlet distribution, D2C brand growth (₹1.5L+), and AI-agent strategy.",
    images: ["/images/faisal_profile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/faisal_profile.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
