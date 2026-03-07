import { Metadata } from "next";
import ElectricToothbrushesContent from "./ElectricToothbrushesContent";

export const metadata: Metadata = {
  title: "Best Electric Toothbrushes Compared — 2025-2026 | The Family Pick",
  description: "Compare electric toothbrushes with sonic vs oscillating technology. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/electric-toothbrushes",
  },
  openGraph: {
    title: "Best Electric Toothbrushes Compared",
    description: "Compare electric toothbrushes with sonic vs oscillating technology. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/electric-toothbrushes",
  },
};

export default function Page() {
  return <ElectricToothbrushesContent />;
}
