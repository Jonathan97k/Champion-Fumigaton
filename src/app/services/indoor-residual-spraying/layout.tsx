import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Indoor Residual Spraying",
  description: "Indoor residual spraying (IRS) services in Lilongwe and Kanengo, Malawi. Effective mosquito and malaria vector control for homes and businesses.",
  alternates: { canonical: "/services/indoor-residual-spraying" },
  openGraph: {
    title: "Indoor Residual Spraying | Champion Fumigation",
    description: "Effective mosquito and vector control through IRS in Malawi.",
    url: "/services/indoor-residual-spraying",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
