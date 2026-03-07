import { Metadata } from "next";
import HighChairsContent from "./HighChairsContent";

export const metadata: Metadata = {
  title: "Best High Chairs Compared — 2025-2026 | The Family Pick",
  description: "Compare high chairs by design (wood, plastic, convertible), safety features, adjustability, and price. Detailed specs, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/high-chairs",
  },
  openGraph: {
    title: "Best High Chairs Compared",
    description: "Compare high chairs by design, safety features, adjustability, and price. Detailed specs, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/high-chairs",
  },
};

export default function Page() {
  return <HighChairsContent />;
}
