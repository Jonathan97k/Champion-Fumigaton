import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Champion Fumigation Services — Malawi's trusted pest control experts with years of experience serving Lilongwe and Kanengo.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Champion Fumigation Services",
    description: "Malawi's trusted pest control experts serving Lilongwe and Kanengo.",
    url: "/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
