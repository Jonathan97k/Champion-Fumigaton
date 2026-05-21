import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Herbicide Spraying",
  description: "Professional herbicide spraying services in Lilongwe and Kanengo, Malawi. Effective weed control for agricultural and industrial sites.",
  alternates: { canonical: "/services/herbicide-spraying" },
  openGraph: {
    title: "Herbicide Spraying | Champion Fumigation",
    description: "Expert weed control through professional herbicide spraying in Malawi.",
    url: "/services/herbicide-spraying",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
