import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Termite Proofing",
  description: "Professional termite proofing services in Lilongwe and Kanengo, Malawi. Protect your property from termite damage with Champion Fumigation's expert treatments.",
  alternates: { canonical: "/services/termite-proofing" },
  openGraph: {
    title: "Termite Proofing Services | Champion Fumigation",
    description: "Expert termite control and proofing in Lilongwe and Kanengo, Malawi.",
    url: "/services/termite-proofing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
