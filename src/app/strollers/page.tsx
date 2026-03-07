import { Metadata } from "next";
import StrollersContent from "./StrollersContent";

export const metadata: Metadata = {
  title: "Best Strollers Compared — 2025-2026 | The Family Pick",
  description: "Compare strollers by type (travel, jogging, lightweight), storage, terrain capability, and price. Detailed specs, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/strollers",
  },
  openGraph: {
    title: "Best Strollers Compared",
    description: "Compare strollers by type, storage, terrain capability, and price. Detailed specs, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/strollers",
  },
};

export default function Page() {
  return <StrollersContent />;
}
