import { Metadata } from "next";
import AutomaticFeedersContent from "./AutomaticFeedersContent";

export const metadata: Metadata = {
  title: "Best Automatic Pet Feeders Compared — 2025-2026 | The Family Pick",
  description: "Compare automatic pet feeders by capacity, portions, schedule control, and smart features. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/automatic-feeders",
  },
  openGraph: {
    title: "Best Automatic Pet Feeders Compared",
    description: "Compare automatic pet feeders by capacity, portions, schedule control, and smart features. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/automatic-feeders",
  },
};

export default function Page() {
  return <AutomaticFeedersContent />;
}
