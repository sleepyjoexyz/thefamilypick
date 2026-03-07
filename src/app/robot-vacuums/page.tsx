import { Metadata } from "next";
import RobotVacuumsContent from "./RobotVacuumsContent";

export const metadata: Metadata = {
  title: "Best Robot Vacuums Compared — 2025-2026 | The Family Pick",
  description: "Compare robot vacuums with different navigation and features. Detailed specs, prices, ratings, and buying guide for families.",
  alternates: {
    canonical: "https://thefamilypick.com/robot-vacuums",
  },
  openGraph: {
    title: "Best Robot Vacuums Compared",
    description: "Compare robot vacuums with different navigation and features. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/robot-vacuums",
  },
};

export default function Page() {
  return <RobotVacuumsContent />;
}
