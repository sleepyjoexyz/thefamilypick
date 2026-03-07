import { Metadata } from "next";
import GPSTrackersContent from "./GPSTrackersContent";

export const metadata: Metadata = {
  title: "Best Pet GPS Trackers Compared — 2025-2026 | The Family Pick",
  description: "Compare pet GPS trackers by accuracy, battery life, subscription cost, and features. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/gps-trackers",
  },
  openGraph: {
    title: "Best Pet GPS Trackers Compared",
    description: "Compare pet GPS trackers by accuracy, battery life, subscription cost, and features. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/gps-trackers",
  },
};

export default function Page() {
  return <GPSTrackersContent />;
}
