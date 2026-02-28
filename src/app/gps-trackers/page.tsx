"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { gpsTrackers } from "@/data/gps-trackers";
import { GPSTracker } from "@/data/gps-trackers";
import Link from "next/link";
import { getAllGPSTrackerArticleSlugs } from "@/data/gps-tracker-articles";
import { getAmazonLink, formatPrice, formatRating } from "@/lib/utils";

export default function GPSTrackersComparison() {
  const [trackingType, setTrackingType] = useState<string>("all");
  const [petType, setPetType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [hasGeofencing, setHasGeofencing] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const articles = getAllGPSTrackerArticleSlugs();

  const filteredProducts = useMemo(() => {
    let result = [...gpsTrackers];

    if (trackingType !== "all") {
      result = result.filter((p) => p.trackingType === trackingType);
    }

    if (petType !== "all") {
      result = result.filter((p) => p.petType === petType || p.petType === "both");
    }

    if (hasGeofencing !== "all") {
      const hasGeo = hasGeofencing === "yes";
      result = result.filter((p) => p.geofencing === hasGeo);
    }

    if (priceRange !== "all") {
      if (priceRange === "budget") {
        result = result.filter((p) => p.price < 100);
      } else if (priceRange === "mid") {
        result = result.filter((p) => p.price >= 100 && p.price < 250);
      } else if (priceRange === "premium") {
        result = result.filter((p) => p.price >= 250);
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
  }, [trackingType, petType, priceRange, hasGeofencing, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "GPS Trackers",
              href: "/gps-trackers",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best GPS Pet Trackers Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 15+ GPS and Bluetooth trackers for dogs and cats across all price points—from affordable Bluetooth-only devices to premium GPS+LTE systems with cellular backup. Compare range, battery life, subscription costs, waterproofing, and real-world performance.
        </p>
        <p className="text-base text-gray-600 mb-6">
          Our methodology is based on manufacturer specifications, user ratings, range testing, battery life verification, and subscription cost analysis.
        </p>
      </section>

      {/* Articles Section */}
      {articles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((slug) => {
              const titles: Record<string, string> = {
                "gps-vs-bluetooth-pet-tracker": "GPS vs Bluetooth Pet Trackers: Range, Battery, and Subscription Costs",
                "best-gps-tracker-escape-prone-dogs": "Best GPS Trackers for Escape-Prone Dogs with Real-Time Alerts",
                "gps-tracker-monthly-costs-comparison": "Monthly Subscription Costs for Pet GPS Trackers",
              };
              return (
                <Link
                  key={slug}
                  href={`/gps-trackers/${slug}`}
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
                Tracking Type
              </label>
              <select
                value={trackingType}
                onChange={(e) => setTrackingType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="GPS">GPS Only</option>
                <option value="Bluetooth">Bluetooth Only</option>
                <option value="GPS+LTE">GPS + LTE (Cellular)</option>
                <option value="GPS+WiFi">GPS + WiFi</option>
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
                Geofencing
              </label>
              <select
                value={hasGeofencing}
                onChange={(e) => setHasGeofencing(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="yes">Has Geofencing</option>
                <option value="no">No Geofencing</option>
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
                <option value="mid">Mid-Range ($100-$250)</option>
                <option value="premium">Premium (&gt; $250)</option>
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
            Showing {filteredProducts.length} of {gpsTrackers.length} GPS trackers
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
                  Battery Life
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Subscription
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
              {filteredProducts.map((tracker) => {
                const amazonLink = getAmazonLink(tracker.amazonAsin);
                const features = [
                  tracker.geofencing && "Geofencing",
                  tracker.activityTracking && "Activity Tracking",
                  tracker.healthMonitoring && "Health Monitor",
                  tracker.lightLED && "Light/LED",
                ]
                  .filter(Boolean)
                  .join(", ");

                return (
                  <tr key={tracker.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {tracker.brand} {tracker.model}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{tracker.trackingType}</td>
                    <td className="px-4 py-3 text-gray-900 font-semibold">{formatPrice(tracker.price)}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ★ {formatRating(tracker.rating)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{tracker.batteryLifeDays} days</td>
                    <td className="px-4 py-3 text-gray-600">${tracker.monthlySubscription}/mo</td>
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
          {filteredProducts.map((tracker) => {
            const amazonLink = getAmazonLink(tracker.amazonAsin);
            return (
              <div key={tracker.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                {/* Image */}
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={tracker.imageUrl}
                    alt={`${tracker.brand} ${tracker.model}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {tracker.brand} {tracker.model}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">{formatPrice(tracker.price)}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                      ★ {formatRating(tracker.rating)}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{tracker.summary}</p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4 text-xs text-gray-700">
                    <div>
                      <strong>Type:</strong> {tracker.trackingType}
                    </div>
                    <div>
                      <strong>Battery:</strong> {tracker.batteryLifeDays} days
                    </div>
                    <div>
                      <strong>Subscription:</strong> ${tracker.monthlySubscription}/month
                    </div>
                    <div>
                      <strong>Weight:</strong> {tracker.weightGrams}g
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    {[
                      { label: "Geofencing", value: tracker.geofencing },
                      { label: "Activity Track", value: tracker.activityTracking },
                      { label: "Health Monitor", value: tracker.healthMonitoring },
                      { label: "Live Tracking", value: tracker.liveTracking },
                      { label: "Light/LED", value: tracker.lightLED },
                      { label: "Waterproof", value: tracker.waterproof },
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
