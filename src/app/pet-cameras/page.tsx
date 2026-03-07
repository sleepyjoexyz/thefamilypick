import { Metadata } from "next";
import PetCamerasContent from "./PetCamerasContent";

export const metadata: Metadata = {
  title: "Best Pet Cameras Compared — 2025-2026 | The Family Pick",
  description: "Compare pet cameras with live video, two-way audio, and treat dispensing. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thefamilypick.com/pet-cameras",
  },
  openGraph: {
    title: "Best Pet Cameras Compared",
    description: "Compare pet cameras with live video, two-way audio, and treat dispensing. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thefamilypick.com/pet-cameras",
  },
};

export default function Page() {
  return <PetCamerasContent />;
}
