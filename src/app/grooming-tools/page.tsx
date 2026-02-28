"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { groomingTools } from "@/data/grooming-tools";
import { GroomingTool } from "@/data/grooming-tools";
import Link from "next/link";
import { getAllGroomingToolArticleSlugs } from "@/data/grooming-tool-articles";
import { getAmazonLink, formatPrice, formatRating } from "@/lib/utils";

export default function GroomingToolsComparison() {
  const [toolType, setToolType] = useState<string>("all");
  const [petType, setPetType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [isCordless, setIsCordless] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const articles = getAllGroomingToolArticleSlugs();

  const filteredProducts = useMemo(() => {
    let result = [...groomingTools];

    if (toolType !== "all") {
      result = result.filter((p) => p.toolType === toolType);
    }

    if (petType !== "all") {
      result = result.filter((p) => p.petType === petType || p.petType === "both");
    }

    if (isCordless !== "all") {
      const cordless = isCordless === "yes";
      result = result.filter((p) => p.cordless === cordless);
    }

    if (priceRange !== "all") {
      if (priceRange === "budget") {
        result = result.filter((p) => p.price < 100);
      } else if (priceRange === "mid") {
        result = result.filter((p) => p.price >= 100 && p.price < 300);
      } else if (priceRange === "premium") {
        result = result.filter((p) => p.price >= 300);
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
  }, [toolType, petType, priceRange, isCordless, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Grooming Tools",
              href: "/grooming-tools",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Pet Grooming Tools Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 20+ grooming tools for dogs and cats—from traditional clippers and de-shedding tools to innovative vacuum groomers and cordless nail grinders. Compare performance, noise levels, battery life, pet comfort, and price across all grooming needs.
        </p>
        <p className="text-base text-gray-600 mb-6">
          Our methodology is based on manufacturer specifications, user ratings, durability testing, and real-world grooming performance data.
        </p>
      </section>

      {/* Articles Section */}
      {articles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((slug) => {
              const titles: Record<string, string> = {
                "vacuum-groomer-vs-traditional-clippers": "Vacuum Groomers vs Traditional Clippers: Mess-Free Grooming Comparison",
                "best-deshedding-tools-by-coat-type": "Best Deshedding Tools by Coat Type: Short, Medium, Long & Double Coats",
                "dog-nail-grinding-vs-clipping": "Dog Nail Grinding vs Clipping: Safety, Comfort & Technique Comparison",
                "home-grooming-starter-kit-guide": "Home Grooming Starter Kit Guide: Essential Tools for Beginners",
              };
              return (
                <Link
                  key={slug}
                  href={`/grooming-tools/${slug}`}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-600 hover:underline">{titles[slug] || slug}</h3>
                  <p className="text-sm text-gray-600 mt-1">Read our in-depth guide →</p>
                </Link>
              );
            })}
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
                Tool Type
              </label>
              <select
                value={toolType}
                onChange={(e) => setToolType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="clipper">Clippers</option>
                <option value="deshedding">De-shedding</option>
                <option value="vacuum-groomer">Vacuum Groomer</option>
                <option value="dryer">Dryer</option>
                <option value="nail-grinder">Nail Grinder</option>
                <option value="brush">Brush</option>
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
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
                <option value="both">Dogs & Cats</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cordless
              </label>
              <select
                value={isCordless}
                onChange={(e) => setIsCordless(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="yes">Cordless</option>
                <option value="no">Corded</option>
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
                <option value="mid">Mid-Range ($100-$300)</option>
                <option value="premium">Premium (&gt; $300)</option>
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
            Showing {filteredProducts.length} of {groomingTools.length} grooming tools
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
                  Cordless
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Battery/Runtime
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
              {filteredProducts.map((tool) => {
                const amazonLink = getAmazonLink(tool.amazonAsin);
                const features = [
                  tool.waterproof && "Waterproof",
                  tool.suctionPower && "Suction",
                ]
                  .filter(Boolean)
                  .join(", ");

                return (
                  <tr key={tool.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {tool.brand} {tool.model}
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">{tool.toolType.replace("-", " ")}</td>
                    <td className="px-4 py-3 text-gray-900 font-semibold">{formatPrice(tool.price)}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ★ {formatRating(tool.rating)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${
                        tool.cordless ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {tool.cordless ? "Cordless" : "Corded"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{tool.cordless ? `${tool.batteryMinutes}min` : "—"}</td>
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
          {filteredProducts.map((tool) => {
            const amazonLink = getAmazonLink(tool.amazonAsin);
            return (
              <div key={tool.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                {/* Image */}
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={tool.imageUrl}
                    alt={`${tool.brand} ${tool.model}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585314355797-a2c08b56e0e3?w=400";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {tool.brand} {tool.model}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">{formatPrice(tool.price)}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                      ★ {formatRating(tool.rating)}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{tool.summary}</p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4 text-xs text-gray-700">
                    <div>
                      <strong>Type:</strong> <span className="capitalize">{tool.toolType.replace("-", " ")}</span>
                    </div>
                    <div>
                      <strong>Pet Size:</strong> {tool.petSizeRange}
                    </div>
                    <div>
                      <strong>Noise Level:</strong> {tool.noiseLevel}
                    </div>
                    <div>
                      <strong>Warranty:</strong> {tool.warranty}
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    {[
                      { label: "Cordless", value: tool.cordless },
                      { label: "Waterproof", value: tool.waterproof },
                      { label: "Suction Power", value: tool.suctionPower },
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
