import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Car Seats Compared 2025-2026 | The Family Pick",
    description: "Compare car seats by safety ratings, age group, price, and features. Expert guidance for every stage of your child's growth.",
    alternates: { canonical: "https://thefamilypick.com/car-seats" },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
