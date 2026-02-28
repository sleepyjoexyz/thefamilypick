"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { highChairs } from "@/data/high-chairs";
import { getAmazonLink } from "@/lib/utils";
import Link from "next/link";

export default function HighChairsComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [chairType, setChairType] = useState<string>("all");
  const [foldable, setFoldable] = useState<string>("all");
  const [dishwasherTray, setDishwasherTray] = useState<string>("all");
  const [footrest, setFootrest] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");

  const filteredProducts = useMemo(() => {
    let result = [...highChairs];

    // Price filter
    if (priceRange !== "all") {
      const min = parseInt(priceRange.split("-")[0]);
      const max = parseInt(priceRange.split("-")[1]);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Chair type filter
    if (chairType !== "all") {
      result = result.filter((p) => p.chairType === chairType);
    }

    // Foldable filter
    if (foldable !== "all") {
      const isFoldable = foldable === "yes";
      result = result.filter((p) => p.foldable === isFoldable);
    }

    // Dishwasher tray filter
    if (dishwasherTray !== "all") {
      const isDishwasher = dishwasherTray === "yes";
      result = result.filter((p) => p.trayDishwasherSafe === isDishwasher);
    }

    // Footrest filter
    if (footrest !== "all") {
      const hasFootrest = footrest === "yes";
      result = result.filter((p) => p.footrest === hasFootrest);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    } else {
      // rating (default)
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [priceRange, chairType, foldable, dishwasherTray, footrest, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "High Chairs",
              href: "/high-chairs",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best High Chairs Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 13 high chairs across all types (full-size, portable, hook-on, booster,
          and convertible), price points, and features. Compare specifications, materials, safety
          features, and ease of cleaning to find the high chair that matches your family's needs
          and space constraints. Our methodology is based on manufacturer specifications, user
          ratings, and real-world parent feedback.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm font-semibold text-blue-900">13 Models</p>
            <p className="text-xs text-blue-700">From $79 to $499</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm font-semibold text-green-900">5 Types</p>
            <p className="text-xs text-green-700">Convertible, portable, hook-on, and more</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm font-semibold text-purple-900">4 Guides</p>
            <p className="text-xs text-purple-700">Safety, cleaning, timing, and more</p>
          </div>
        </div>
      </section>

      {/* Articles Link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Learn More About High Chairs</h3>
          <p className="text-sm text-gray-600 mb-4">
            Read our detailed guides on safety, materials, timing, and space-saving options:
          </p>
          <div className="space-y-2">
            <Link
              href="/high-chairs/best-high-chairs-for-small-spaces"
              className="block text-sm text-blue-600 hover:underline"
            >
              → Best High Chairs for Small Spaces & Apartments
            </Link>
            <Link
              href="/high-chairs/wooden-vs-plastic-high-chairs"
              className="block text-sm text-blue-600 hover:underline"
            >
              → Wood vs Plastic High Chairs: Durability, Cleaning & Aesthetics
            </Link>
            <Link
              href="/high-chairs/high-chair-safety-checklist"
              className="block text-sm text-blue-600 hover:underline"
            >
              → High Chair Safety Checklist: Harness, Stability & Recall Info
            </Link>
            <Link
              href="/high-chairs/when-to-start-using-a-high-chair"
              className="block text-sm text-blue-600 hover:underline"
            >
              → When to Start Using a High Chair: Developmental Readiness Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-lg text-gray-900 mb-6">Filters & Sort</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="0-100">Under $100</option>
                <option value="100-200">$100-$200</option>
                <option value="200-300">$200-$300</option>
                <option value="300-500">$300-$500</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chair Type
              </label>
              <select
                value={chairType}
                onChange={(e) => setChairType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="full-size">Full-Size</option>
                <option value="convertible">Convertible</option>
                <option value="portable">Portable</option>
                <option value="hook-on">Hook-On</option>
                <option value="booster">Booster</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foldable
              </label>
              <select
                value={foldable}
                onChange={(e) => setFoldable(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Foldable Only</option>
                <option value="no">Non-Foldable Only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dishwasher Tray
              </label>
              <select
                value={dishwasherTray}
                onChange={(e) => setDishwasherTray(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Dishwasher-Safe Only</option>
                <option value="no">Hand Wash Only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Footrest
              </label>
              <select
                value={footrest}
                onChange={(e) => setFootrest(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Has Footrest</option>
                <option value="no">No Footrest</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {highChairs.length} high chairs
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Full Comparison Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                  Brand & Model
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Rating
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Harness Points
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Foldable
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Dishwasher Tray
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Footrest
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Amazon
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => {
                const amazonLink = getAmazonLink(product.amazonAsin);
                return (
                  <tr
                    key={product.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      <strong>{product.brand}</strong> {product.model}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      ${product.price}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {product.chairType === "full-size"
                          ? "Full-Size"
                          : product.chairType.charAt(0).toUpperCase() +
                            product.chairType.slice(1)}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <span className="font-bold text-yellow-600">★ {product.rating.toFixed(1)}</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {product.harnessPoints}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {product.foldable ? "✓" : "—"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {product.trayDishwasherSafe ? "✓" : "—"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {product.footrest ? "✓" : "—"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {amazonLink ? (
                        <a
                          href={amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline font-semibold"
                        >
                          View
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All High Chairs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const amazonLink = getAmazonLink(product.amazonAsin);
            return (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={`${product.brand} ${product.model}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    {product.brand} {product.model}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 my-2">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">{product.summary}</p>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <p>
                      <strong>Type:</strong>{" "}
                      {product.chairType === "full-size"
                        ? "Full-Size"
                        : product.chairType.charAt(0).toUpperCase() +
                          product.chairType.slice(1)}
                    </p>
                    <p>
                      <strong>Age Range:</strong> {product.ageRange}
                    </p>
                    <p>
                      <strong>Rating:</strong> ★ {product.rating.toFixed(1)}
                    </p>
                    <p>
                      <strong>Harness:</strong> {product.harnessPoints}-point
                    </p>
                    <p>
                      <strong>Features:</strong>{" "}
                      {[
                        product.foldable && "Foldable",
                        product.trayDishwasherSafe && "Dishwasher Tray",
                        product.footrest && "Footrest",
                        product.wheelsCasters && "Wheels",
                      ]
                        .filter(Boolean)
                        .join(", ") || "Basic"}
                    </p>
                  </div>
                  {amazonLink && (
                    <a
                      href={amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
                    >
                      View on Amazon
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          This high chair comparison was prepared with AI-assisted research. It is provided for
          informational purposes only and does not constitute product endorsement. All data should
          be independently verified before purchase. Prices and specifications are subject to change.
          We may earn affiliate commissions from Amazon purchases.
        </p>
      </section>
    </div>
  );
}
