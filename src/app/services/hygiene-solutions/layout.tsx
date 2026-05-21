import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Hygiene Solutions",
  description: "Professional hygiene and sanitization services in Lilongwe and Kanengo, Malawi. Comprehensive cleaning and disinfection for homes, offices, and commercial spaces.",
  alternates: { canonical: "/services/hygiene-solutions" },
  openGraph: {
    title: "Hygiene Solutions | Champion Fumigation",
    description: "Professional sanitization and hygiene services across Malawi.",
    url: "/services/hygiene-solutions",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
