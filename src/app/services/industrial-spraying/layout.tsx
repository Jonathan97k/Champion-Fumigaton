import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Industrial Spraying",
  description: "Industrial spraying and pest control services for factories, warehouses, and commercial facilities in Lilongwe and Kanengo, Malawi.",
  alternates: { canonical: "/services/industrial-spraying" },
  openGraph: {
    title: "Industrial Spraying | Champion Fumigation",
    description: "Commercial and industrial pest control solutions in Malawi.",
    url: "/services/industrial-spraying",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
