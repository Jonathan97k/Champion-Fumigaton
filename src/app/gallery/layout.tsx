import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our work in action — photos of Champion Fumigation's pest control, fumigation, and spraying projects across Lilongwe and Kanengo, Malawi.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Champion Fumigation Gallery",
    description: "View our pest control projects in action across Malawi.",
    url: "/gallery",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
