import { Metadata } from "next";
import GroomingToolsContent from "./GroomingToolsContent";

export const metadata: Metadata = {
  title: "Best Pet Grooming Tools Compared — 2025-2026 | The Family Pick",
  description: "Compare pet grooming tools (clippers, brushes, nail trimmers) by type, motor power, and noise level. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/grooming-tools",
  },
  openGraph: {
    title: "Best Pet Grooming Tools Compared",
    description: "Compare pet grooming tools by type, motor power, and noise level. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/grooming-tools",
  },
};

export default function Page() {
  return <GroomingToolsContent />;
}
