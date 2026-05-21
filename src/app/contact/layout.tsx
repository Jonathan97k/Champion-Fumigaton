import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Champion Fumigation Services. Request a free quote for pest control, fumigation, and hygiene services in Lilongwe and Kanengo, Malawi.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Champion Fumigation Services",
    description: "Request a free quote for pest control services in Malawi.",
    url: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
