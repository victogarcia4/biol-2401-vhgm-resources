import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A&P Resources",
  description:
    "Anatomy & Physiology I (BIOL 2401) resource hub by Dr. Victor Garcia Martinez, Assistant Professor at Lone Star College. Pre-assessment infographics, flipped-classroom active learning, and post-assessment mini-apps.",
  keywords: [
    "BIOL 2401",
    "Anatomy and Physiology",
    "A&P I",
    "Lone Star College",
    "Dr. Victor Garcia Martinez",
    "Flipped Classroom",
    "HAPS SLO",
    "Active Learning",
  ],
  authors: [{ name: "Dr. Victor Garcia Martinez" }],
  icons: {
    icon: "/VHGM traje azul.png",
    apple: "/VHGM traje azul.png",
  },
  openGraph: {
    title: "BIOL 2401 · A&P Resources — Dr. Victor Garcia Martinez",
    description:
      "Pre-assessment infographics, flipped-classroom active learning, and post-assessment mini-apps for Anatomy & Physiology I.",
    siteName: "BIOL 2401 · A&P Resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOL 2401 · A&P Resources",
    description:
      "Pre-assessment, flipped classroom, and post-assessment mini-apps for A&P I — Dr. Victor Garcia Martinez, Lone Star College.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${caveat.variable} antialiased`}
        style={{
          background: "#f5f2e8",
          color: "#1a1a1a",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
