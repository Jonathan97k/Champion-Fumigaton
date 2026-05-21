import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Bee Removal",
  description: "Safe and humane bee removal services in Lilongwe and Kanengo, Malawi. Expert beekeepers relocate bees without harming them or your property.",
  alternates: { canonical: "/services/bee-removal" },
  openGraph: {
    title: "Bee Removal Services | Champion Fumigation",
    description: "Safe and humane bee relocation services in Lilongwe and Kanengo, Malawi.",
    url: "/services/bee-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
