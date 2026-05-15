import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Champion Fumigation Services | Premium Pest Control Malawi",
  description: "Industry-leading pest control and fumigation services in Malawi. Certified experts delivering uncompromising protection for homes, businesses, and agricultural assets across Lilongwe, Mzuzu, and Blantyre.",
  keywords: ["pest control", "fumigation", "Malawi", "Lilongwe", "Mzuzu", "Blantyre", "termite proofing", "rodent control", "agricultural fumigation", "premium pest control"],
  authors: [{ name: "Champion Fumigation Services" }],
  openGraph: {
    title: "Champion Fumigation Services | Premium Pest Control Malawi",
    description: "Industry-leading pest control and fumigation services in Malawi. Certified experts delivering uncompromising protection.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
