import { Metadata } from "next";
import AirPurifiersContent from "./AirPurifiersContent";

export const metadata: Metadata = {
  title: "Best Air Purifiers Compared — 2025-2026 | The Family Pick",
  description: "Compare air purifiers by CADR, filter type, noise level, and cost. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/air-purifiers",
  },
  openGraph: {
    title: "Best Air Purifiers Compared",
    description: "Compare air purifiers by CADR, filter type, noise level, and cost. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/air-purifiers",
  },
};

export default function Page() {
  return <AirPurifiersContent />;
}
