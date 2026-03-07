import { Metadata } from "next";
import MassageGunsContent from "./MassageGunsContent";

export const metadata: Metadata = {
  title: "Best Massage Guns Compared — 2025-2026 | The Family Pick",
  description: "Compare massage guns by stall force, amplitude, noise, and battery life. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/massage-guns",
  },
  openGraph: {
    title: "Best Massage Guns Compared",
    description: "Compare massage guns by stall force, amplitude, noise, and battery life. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/massage-guns",
  },
};

export default function Page() {
  return <MassageGunsContent />;
}
