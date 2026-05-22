import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLd from "@/components/JsonLd";
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

const BASE_URL = "https://championfumigation.com";

export const metadata: Metadata = {
  title: {
    default: "Champion Fumigation Services | Premium Pest Control Malawi",
    template: "%s | Champion Fumigation Services",
  },
  description: "Industry-leading pest control and fumigation services in Malawi. Certified experts delivering uncompromising protection for homes, businesses, and agricultural assets across Lilongwe and Kanengo.",
  keywords: ["pest control", "fumigation", "Malawi", "Lilongwe", "Kanengo", "termite proofing", "rodent control", "agricultural fumigation", "premium pest control"],
  authors: [{ name: "Champion Fumigation Services" }],

  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },

  openGraph: {
    title: "Champion Fumigation Services | Premium Pest Control Malawi",
    description: "Industry-leading pest control and fumigation services in Malawi. Certified experts delivering uncompromising protection.",
    url: BASE_URL,
    siteName: "Champion Fumigation Services",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Champion Fumigation Services",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Champion Fumigation Services | Premium Pest Control Malawi",
    description: "Industry-leading pest control and fumigation services in Malawi. Certified experts delivering uncompromising protection.",
    images: ["/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <body className="min-h-screen antialiased">
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
