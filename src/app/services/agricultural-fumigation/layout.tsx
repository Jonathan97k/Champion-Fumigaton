import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Agricultural Fumigation",
  description: "Professional agricultural fumigation services in Malawi. Protect your stored grains and crops from pests with Champion Fumigation's certified treatments.",
  alternates: { canonical: "/services/agricultural-fumigation" },
  openGraph: {
    title: "Agricultural Fumigation | Champion Fumigation",
    description: "Protect your crops and stored grains with expert fumigation in Malawi.",
    url: "/services/agricultural-fumigation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
