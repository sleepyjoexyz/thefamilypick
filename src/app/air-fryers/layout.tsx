import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Air Fryers Compared 2025-2026 | The Family Pick",
    description: "Compare air fryers by capacity, power, features, and price. Find the perfect air fryer for your kitchen.",
    alternates: { canonical: "https://www.thefamilypick.com/air-fryers" },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
