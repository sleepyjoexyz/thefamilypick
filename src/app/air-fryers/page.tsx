import { Metadata } from "next";
import AirFryersContent from "./AirFryersContent";

export const metadata: Metadata = {
  title: "Best Air Fryers Compared — 2025-2026 | The Family Pick",
  description: "Compare air fryers across all types and price points. Detailed specs, prices, ratings, and buying guide for families.",
  alternates: {
    canonical: "https://thefamilypick.com/air-fryers",
  },
  openGraph: {
    title: "Best Air Fryers Compared",
    description: "Compare air fryers across all types and price points. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/air-fryers",
  },
};

export default function Page() {
  return <AirFryersContent />;
}
