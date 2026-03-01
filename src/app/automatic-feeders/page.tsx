"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { automaticFeeders } from "@/data/automatic-feeders";
import { automaticFeederArticles } from "@/data/automatic-feeder-articles";
import { AutoFeeder } from "@/data/automatic-feeders";
import Link from "next/link";
import { getAmazonLink, formatPrice, formatRating } from "@/lib/utils";

export default function AutomaticFeedersComparison() {
  const [feederType, setFeederType] = useState<string>("all");
  const [petType, setPetType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [hasApp, setHasApp] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...automaticFeeders];

    if (feederType !== "all") {
      result = result.filter((p) => p.feederType === feederType);
    }

    if (petType !== "all") {
      result = result.filter((p) => p.petType === petType || p.petType === "both");
    }

    if (hasApp !== "all") {
      const hasAppAccess = hasApp === "yes";
      result = result.filter((p) => p.hasApp === hasAppAccess);
    }

    if (priceRange !== "all") {
      if (priceRange === "budget") {
        result = result.filter((p) => p.price < 100);
      } else if (priceRange === "mid") {
        result = result.filter((p) => p.price >= 100 && p.price < 200);
      } else if (priceRange === "premium") {
        result = result.filter((p) => p.price >= 200);
      }
    }

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
  }, [feederType, petType, priceRange, hasApp, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Automatic Feeders",
              href: "/automatic-feeders",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Automatic Pet Feeders Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 10+ automatic feeders for cats and dogs across all types and price points—from basic timed models to smart WiFi-enabled systems with app control. Compare specifications, features, prices, and ratings to find the feeder that keeps your pet on schedule.
        </p>
        <p className="text-base text-gray-600 mb-6">
          Our methodology is based on manufacturer specifications, user ratings, real-world performance data, and durability testing.
        </p>
      </section>

      {/* Articles Section */}
      {Object.keys(automaticFeederArticles).length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(automaticFeederArticles).map((article) => (
              <Link
                key={article.slug}
                href={`/automatic-feeders/${article.slug}`}
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
          <h2 className="font-bold text-lg text-gray-900 mb-6">Filters & Sort</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Feeder Type
              </label>
              <select
                value={feederType}
                onChange={(e) => setFeederType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="gravity">Gravity Feeder</option>
                <option value="timed">Timed Feeder</option>
                <option value="smart">Smart WiFi</option>
                <option value="microchip">Microchip-Activated</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet Type
              </label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Pets</option>
                <option value="cat">Cats</option>
                <option value="dog">Dogs</option>
                <option value="both">Cats & Dogs</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                App Control
              </label>
              <select
                value={hasApp}
                onChange={(e) => setHasApp(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="yes">Has App</option>
                <option value="no">No App</option>
              </select>
            </div>
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
                <option value="budget">Budget (&lt; $100)</option>
                <option value="mid">Mid-Range ($100-$200)</option>
                <option value="premium">Premium (&gt; $200)</option>
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
                <option value="name">Brand & Model A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {automaticFeeders.length} automatic feeders
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
                  Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Price
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Rating
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Capacity
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Meals/Day
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Features
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Amazon Link
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((feeder) => {
                const amazonLink = getAmazonLink(feeder.amazonAsin);
                const features = [
                  feeder.hasApp && "App Control",
                  feeder.hasCamera && "Camera",
                  feeder.hasVoiceRecording && "Voice Record",
                ]
                  .filter(Boolean)
                  .join(", ");

                return (
                  <tr key={feeder.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {feeder.brand} {feeder.model}
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">{feeder.feederType}</td>
                    <td className="px-4 py-3 text-gray-900 font-semibold">{formatPrice(feeder.price)}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ★ {formatRating(feeder.rating)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{feeder.foodCapacityLbs} lbs</td>
                    <td className="px-4 py-3 text-gray-600">{feeder.mealsPerDay}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{features || "Basic"}</td>
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

      {/* Product Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Detailed Product Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((feeder) => {
            const amazonLink = getAmazonLink(feeder.amazonAsin);
            return (
              <div key={feeder.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                {/* Image */}
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={feeder.imageUrl}
                    alt={`${feeder.brand} ${feeder.model}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1587300411107-ec5ff141dd27?w=400";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {feeder.brand} {feeder.model}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">{formatPrice(feeder.price)}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                      ★ {formatRating(feeder.rating)}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{feeder.summary}</p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4 text-xs text-gray-700">
                    <div>
                      <strong>Type:</strong> <span className="capitalize">{feeder.feederType}</span>
                    </div>
                    <div>
                      <strong>Capacity:</strong> {feeder.foodCapacityLbs} lbs
                    </div>
                    <div>
                      <strong>Meals/Day:</strong> Up to {feeder.mealsPerDay}
                    </div>
                    <div>
                      <strong>Power:</strong> {feeder.powerSource}
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    {[
                      { label: "App Control", value: feeder.hasApp },
                      { label: "Camera", value: feeder.hasCamera },
                      { label: "Voice Record", value: feeder.hasVoiceRecording },
                      { label: "Dishwasher Safe", value: feeder.dishwasherSafe },
                    ].map((feature) => (
                      <div key={feature.label} className="flex items-center">
                        <span className={feature.value ? "text-green-600 font-bold mr-1" : "text-gray-400 mr-1"}>
                          {feature.value ? "✓" : "—"}
                        </span>
                        <span className="text-gray-600">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {amazonLink && (
                    <a
                      href={amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-2 bg-blue-600 text-white text-center font-semibold rounded hover:bg-blue-700 transition"
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
