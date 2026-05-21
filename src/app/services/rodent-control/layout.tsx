import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Rodent Control",
  description: "Effective rodent control services in Lilongwe and Kanengo, Malawi. Eliminate rats and mice from your home or business with Champion Fumigation.",
  alternates: { canonical: "/services/rodent-control" },
  openGraph: {
    title: "Rodent Control Services | Champion Fumigation",
    description: "Professional rat and mice extermination in Lilongwe and Kanengo, Malawi.",
    url: "/services/rodent-control",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
