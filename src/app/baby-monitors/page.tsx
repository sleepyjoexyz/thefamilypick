import { Metadata } from "next";
import BabyMonitorsContent from "./BabyMonitorsContent";

export const metadata: Metadata = {
  title: "Best Baby Monitors Compared — 2025-2026 | The Family Pick",
  description: "Compare baby monitors with video, audio, temperature monitoring, and smart features. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/baby-monitors",
  },
  openGraph: {
    title: "Best Baby Monitors Compared",
    description: "Compare baby monitors with video, audio, temperature monitoring, and smart features. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/baby-monitors",
  },
};

export default function Page() {
  return <BabyMonitorsContent />;
}
