import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Batra | Aspiring Yacht Broker | Saint-Tropez & French Riviera",
  description:
    "Aryan Batra — Aspiring Yacht Broker & Luxury Maritime Business Development Specialist. Practical yacht brokerage & charter experience across Saint Tropez Yacht Charter, Villa Yachting, and Moana Yachting (Cannes). Combining MSc Luxury Management & Innovation (BSB Dijon) with B.A. LL.B (Hons).",
  keywords: [
    "Aryan Batra",
    "Aspiring Yacht Broker",
    "Saint Tropez Yacht Charter",
    "Moana Yachting Cannes",
    "Villa Yachting",
    "French Riviera Yacht Brokerage",
    "Côte d'Azur Yacht Charter",
    "Burgundy School of Business",
    "Luxury Maritime Business Development",
  ],
  authors: [{ name: "Aryan Batra", url: "https://www.linkedin.com/in/aryan-batra-746b391b2/" }],
  openGraph: {
    title: "Aryan Batra | Aspiring Yacht Broker | Côte d'Azur",
    description: "Authentic Career Portfolio & Côte d'Azur Yacht Brokerage Dossier.",
    url: "https://www.linkedin.com/in/aryan-batra-746b391b2/",
    siteName: "Aryan Batra Yacht Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#050D1A]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#050D1A] text-[#FAF9F6] selection:bg-[#C5A059] selection:text-[#050D1A] min-h-screen">
        {children}
      </body>
    </html>
  );
}
