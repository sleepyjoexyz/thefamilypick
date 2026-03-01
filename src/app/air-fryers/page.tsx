
"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { airFryers } from "@/data/air-fryers";
import { AirFryer } from "@/data/air-fryers";
import { airFryerArticles } from "@/data/air-fryer-articles";
import Link from "next/link";
import { getAmazonLink, formatPrice, formatRating } from "@/lib/utils";

export default function AirFryersComparison() {
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...airFryers];

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    return result;
  }, [sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Air Fryers",
              href: "/air-fryers",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Air Fryers Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed and compared the top Air Fryers available today. Find the perfect
          product for your needs with our detailed comparison of prices, features, and ratings.
        </p>
      </section>

      {/* Articles Section */}
      {Object.keys(airFryerArticles).length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Guides & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(airFryerArticles).map((article) => (
              <Link
                key={article.slug}
                href={`/air-fryers/${article.slug}`}
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
      )}

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-lg text-gray-900 mb-6">Sort By</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Brand & Model A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {airFryers.length} Air Fryers
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Full Comparison Table
        </h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Brand & Model
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Price
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Rating
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Amazon Link
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
                const amazonLink = getAmazonLink(product.amazonAsin);
                return (
                  <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {product.brand} {product.model}
                    </td>
                    <td className="px-4 py-3 text-gray-900 font-semibold">{formatPrice(product.price)}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ★ {formatRating(product.rating)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {amazonLink ? (
                        <a
                          href={amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          View on Amazon →
                        </a>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-gray-600">
            <strong>Disclaimer:</strong> This comparison and analysis was prepared with AI-assisted research. All prices, specifications, and ratings are current as of 2025-2026 and based on manufacturer data and user reviews. Prices and availability may vary by retailer. Please verify product details on Amazon before purchasing. We earn affiliate commissions on qualifying purchases at no additional cost to you.
          </p>
        </div>
      </section>
    </div>
  );
}
