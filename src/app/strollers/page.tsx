"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductFinder, { FinderStep, FinderResultConfig } from "@/components/ProductFinder";
import { strollers, Stroller } from "@/data/strollers";
import { strollerArticles } from "@/data/stroller-articles";
import { getAmazonLink, formatPrice, formatRating } from "@/lib/utils";
import Link from "next/link";

export default function StrollersContent() {
  const [strollerType, setStrollerType] = useState<string>("all");
  const [priceMin, setPriceMin] = useState<string>("0");
  const [priceMax, setPriceMax] = useState<string>("1500");
  const [carSeatCompatible, setCarSeatCompatible] = useState<string>("all");
  const [oneBoardFold, setOneBoardFold] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...strollers];

    if (strollerType !== "all") {
      result = result.filter((p) => p.strollerType === strollerType);
    }

    const min = parseInt(priceMin) || 0;
    const max = parseInt(priceMax) || 1500;
    result = result.filter((p) => p.price >= min && p.price <= max);

    if (carSeatCompatible !== "all") {
      const compatible = carSeatCompatible === "yes";
      result = result.filter((p) => p.carSeatCompatible === compatible);
    }

    if (oneBoardFold !== "all") {
      const fold = oneBoardFold === "yes";
      result = result.filter((p) => p.oneBoardFold === fold);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "weight") {
      result.sort((a, b) => a.weightLbs - b.weightLbs);
    } else {
      result.sort((a, b) =>
        `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`)
      );
    }

    return result;
  }, [strollerType, priceMin, priceMax, carSeatCompatible, oneBoardFold, sortBy]);

  // ProductFinder configuration
  const finderSteps: FinderStep[] = [
    {
      id: "budget",
      question: "What's your budget? 💰",
      subtitle: "Choose a price range to narrow down options",
      options: [
        { value: "any", label: "Any budget", icon: "✅" },
        { value: "0-300", label: "Under $300 (lightweight/jogging)", icon: "💵" },
        { value: "300-600", label: "$300-$600 (mid-range)", icon: "💳" },
        { value: "600-1000", label: "$600-$1000 (premium)", icon: "💎" },
        { value: "1000-1500", label: "$1000+ (luxury)", icon: "👑" },
      ],
      filterFn: (product: Stroller, value: string) => {
        if (value === "any") return true;
        const [min, max] = value.split("-").map(Number);
        return product.price >= min && product.price <= max;
      },
    },
    {
      id: "strollerType",
      question: "What type of stroller? 👶",
      subtitle: "Full-size, lightweight, jogging, double, or travel system",
      options: [
        { value: "any", label: "Any type", icon: "✅" },
        { value: "full-size", label: "Full-size (reversible, features)", icon: "🛴" },
        { value: "lightweight", label: "Lightweight (portable, easy)", icon: "🪶" },
        { value: "jogging", label: "Jogging (active parents)", icon: "🏃" },
        { value: "double", label: "Double (two kids)", icon: "👶👶" },
        { value: "travel-system", label: "Travel system (with car seat)", icon: "🚗" },
      ],
      filterFn: (product: Stroller, value: string) => {
        if (value === "any") return true;
        return product.strollerType === value;
      },
    },
    {
      id: "carSeat",
      question: "Do you need car seat compatibility? 🚗",
      subtitle: "Match with infant car seats for travel systems",
      options: [
        { value: "any", label: "Not important", icon: "✅" },
        { value: "yes", label: "Yes, car seat compatible", icon: "🚗" },
        { value: "no", label: "No, standard use only", icon: "👶" },
      ],
      filterFn: (product: Stroller, value: string) => {
        if (value === "any") return true;
        if (value === "yes") return product.carSeatCompatible === true;
        if (value === "no") return product.carSeatCompatible === false;
        return true;
      },
    },
    {
      id: "fold",
      question: "Do you want one-hand fold? 🙌",
      subtitle: "Convenient for parents on the go",
      options: [
        { value: "any", label: "Not important", icon: "✅" },
        { value: "yes", label: "Yes, one-hand fold", icon: "🙌" },
        { value: "no", label: "Standard fold is fine", icon: "📦" },
      ],
      filterFn: (product: Stroller, value: string) => {
        if (value === "any") return true;
        if (value === "yes") return product.oneBoardFold === true;
        if (value === "no") return product.oneBoardFold === false;
        return true;
      },
    },
  ];

  const resultConfig: FinderResultConfig = {
    getName: (p: Stroller) => `${p.brand} ${p.model}`,
    getPrice: (p: Stroller) => p.price,
    getRating: (p: Stroller) => p.rating,
    getSummary: (p: Stroller) => p.summary,
    getAsin: (p: Stroller) => p.amazonAsin || null,
    displayFields: [
      { label: "Type", getValue: (p: Stroller) => p.strollerType },
      { label: "Weight", getValue: (p: Stroller) => `${p.weightLbs} lbs` },
      { label: "Recline", getValue: (p: Stroller) => `${p.reclinePositions} positions` },
    ],
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Strollers",
              href: "/strollers",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Strollers Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 14 strollers across all types: full-size, lightweight,
          jogging, double, and travel-system models. Compare prices, weights,
          recline positions, car seat compatibility, and features to find the
          stroller that matches your lifestyle. Our methodology is based on
          manufacturer specifications, real-world testing, and parent feedback.
        </p>
      </section>

      {/* ProductFinder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductFinder
          title="Find Your Perfect Stroller"
          subtitle="Answer a few quick questions to see your top matches"
          steps={finderSteps}
          products={strollers}
          resultConfig={resultConfig}
        />
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-lg text-gray-900 mb-6">
            Filters & Sort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stroller Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stroller Type
              </label>
              <select
                value={strollerType}
                onChange={(e) => setStrollerType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="full-size">Full-Size</option>
                <option value="lightweight">Lightweight</option>
                <option value="jogging">Jogging</option>
                <option value="double">Double</option>
                <option value="travel-system">Travel System</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Price
              </label>
              <input
                type="number"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price
              </label>
              <input
                type="number"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                placeholder="1500"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Car Seat Compatible */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Car Seat Compatible
              </label>
              <select
                value={carSeatCompatible}
                onChange={(e) => setCarSeatCompatible(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* One-Hand Fold */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                One-Hand Fold
              </label>
              <select
                value={oneBoardFold}
                onChange={(e) => setOneBoardFold(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Brand & Model</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Rating (Highest)</option>
                <option value="weight">Weight (Lightest)</option>
              </select>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-6">
          Showing {filteredProducts.length} of {strollers.length} strollers
        </p>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Brand & Model
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Weight (lbs)
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Max Child Wt (lbs)
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Recline
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Car Seat
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Amazon
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((stroller) => (
                <tr key={stroller.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {stroller.brand} {stroller.model}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatPrice(stroller.price)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {stroller.strollerType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {stroller.weightLbs}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {stroller.maxChildWeightLbs}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {stroller.reclinePositions} positions
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {stroller.carSeatCompatible ? (
                      <span className="text-green-600 font-medium">Yes</span>
                    ) : (
                      <span className="text-gray-400">No</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <span className="inline-flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-900">
                        {formatRating(stroller.rating)}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {getAmazonLink(stroller.amazonAsin) ? (
                      <a
                        href={getAmazonLink(stroller.amazonAsin) || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        View
                      </a>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Stroller Guides & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(strollerArticles).map((article) => (
            <Link
              key={article.slug}
              href={`/strollers/${article.slug}`}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          This stroller comparison was prepared with AI-assisted research. All
          specifications and pricing are based on current manufacturer data and
          Amazon product listings. Prices and availability may change. For the
          most current information, please visit the manufacturers' websites or
          product pages.
        </p>
      </section>
    </div>
  );

}
