import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best High Chairs Compared 2025-2026 | The Family Pick",
    description: "Compare high chairs side-by-side. Filter by price, material, features, and safety. Find the perfect feeding solution for your family.",
    alternates: { canonical: "https://thefamilypick.com/high-chairs" },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
