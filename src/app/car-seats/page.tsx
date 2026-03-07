import { Metadata } from "next";
import CarSeatsContent from "./CarSeatsContent";

export const metadata: Metadata = {
  title: "Best Car Seats Compared — 2025-2026 | The Family Pick",
  description: "Compare car seats by safety rating, type (infant, convertible, booster), installation method, and price. Detailed specs, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/car-seats",
  },
  openGraph: {
    title: "Best Car Seats Compared",
    description: "Compare car seats by safety rating, type, installation method, and price. Detailed specs, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/car-seats",
  },
};

export default function Page() {
  return <CarSeatsContent />;
}
