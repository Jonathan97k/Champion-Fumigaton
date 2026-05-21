import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Champion Fumigation's full range of pest control services in Malawi — termite proofing, rodent control, agricultural fumigation, spraying, hygiene solutions, and bee removal.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Pest Control Services | Champion Fumigation Malawi",
    description: "Full range of pest control services across Malawi.",
    url: "/services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
