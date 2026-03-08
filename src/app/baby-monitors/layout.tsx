import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Baby Monitors Compared 2025-2026 | The Family Pick",
    description: "Compare the top baby monitors side-by-side. Filter by price, video quality, range, and features. Data-driven recommendations for every budget.",
    alternates: { canonical: "https://www.thefamilypick.com/baby-monitors" },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
