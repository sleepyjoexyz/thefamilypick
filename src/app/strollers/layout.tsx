import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Strollers Compared 2025-2026 | The Family Pick",
    description: "Compare strollers side-by-side. Filter by type, price, compatibility, and features. Data-driven recommendations for every family.",
    alternates: { canonical: "https://thefamilypick.com/strollers" },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
