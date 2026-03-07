import { Metadata } from "next";
import SecurityCamerasContent from "./SecurityCamerasContent";

export const metadata: Metadata = {
  title: "Best Security Cameras Compared — 2025-2026 | The Family Pick",
  description: "Compare security cameras with wired, battery, and solar options. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/security-cameras",
  },
  openGraph: {
    title: "Best Security Cameras Compared",
    description: "Compare security cameras with wired, battery, and solar options. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/security-cameras",
  },
};

export default function Page() {
  return <SecurityCamerasContent />;
}
