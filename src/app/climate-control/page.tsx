import { Metadata } from "next";
import ClimateControlContent from "./ClimateControlContent";

export const metadata: Metadata = {
  title: "Best Portable ACs & Heaters Compared — 2025-2026 | The Family Pick",
  description: "Compare portable ACs and space heaters by BTU, room size, noise, and efficiency. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/climate-control",
  },
  openGraph: {
    title: "Best Portable ACs & Heaters Compared",
    description: "Compare portable ACs and space heaters by BTU, room size, noise, and efficiency. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/climate-control",
  },
};

export default function Page() {
  return <ClimateControlContent />;
}
