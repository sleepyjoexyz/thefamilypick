"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { babyMonitors } from "@/data/baby-monitors";
import { BabyMonitor } from "@/data/baby-monitors";
import Link from "next/link";
import { getAllBabyMonitorArticleSlugs } from "@/data/baby-monitor-articles";
import { getAmazonLink, formatPrice, formatRating } from "@/lib/utils";

export default function BabyMonitorsComparison() {
  const [monitorType, setMonitorType] = useState<string>("all");
  const [wifiRequired, setWifiRequired] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [panTiltZoom, setPanTiltZoom] = useState<string>("all");
  const [hasApp, setHasApp] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const articles = getAllBabyMonitorArticleSlugs();

  const filteredProducts = useMemo(() => {
    let result = [...babyMonitors];

    if (monitorType !== "all") {
      result = result.filter((p) => p.monitorType === monitorType);
    }

    if (wifiRequired !== "all") {
      const requiresWifi = wifiRequired === "yes";
      result = result.filter((p) => p.wifiRequired === requiresWifi);
    }

    if (panTiltZoom !== "all") {
      const hasPTZ = panTiltZoom === "yes";
      result = result.filter((p) => p.panTiltZoom === hasPTZ);
    }

    if (hasApp !== "all") {
      const hasAppAccess = hasApp === "yes";
      result = result.filter((p) => p.hasApp === hasAppAccess);
    }

    if (priceRange !== "all") {
      if (priceRange === "budget") {
        result = result.filter((p) => p.price < 150);
      } else if (priceRange === "mid") {
        result = result.filter((p) => p.price >= 150 && p.price < 250);
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
  }, [monitorType, wifiRequired, priceRange, panTiltZoom, hasApp, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Baby Monitors",
              href: "/baby-monitors",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Baby Monitors Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 13 baby monitors across all types and price points—from budget audio-only monitors to premium WiFi systems with AI sleep tracking. Compare specifications, features, prices, and ratings to find the monitor that matches your family's needs, privacy preferences, and budget.
        </p>
        <p className="text-base text-gray-600 mb-6">
          Our methodology is based on manufacturer specifications, user ratings, security certifications, and real-world performance data.
        </p>
      </section>

      {/* Articles Section */}
      {articles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((slug) => {
              const titles: Record<string, string> = {
                "wifi-vs-non-wifi-baby-monitor": "WiFi vs Non-WiFi Baby Monitors: Privacy and Security",
                "best-baby-monitors-for-twins": "Best Baby Monitors for Twins: Multi-Camera Guide",
                "baby-monitor-security-guide": "Baby Monitor Security: Encryption and Hacking Prevention",
                "smart-baby-monitor-features-worth-paying-for": "Smart Features Worth Paying For vs Marketing Hype",
              };
              return (
                <Link
                  key={slug}
                  href={`/baby-monitors/${slug}`}
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
                Monitor Type
              </label>
              <select
                value={monitorType}
                onChange={(e) => setMonitorType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="audio">Audio Only</option>
                <option value="video">Video Monitor</option>
                <option value="smart">Smart WiFi</option>
                <option value="wearable">Wearable (with sensor)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WiFi Required
              </label>
              <select
                value={wifiRequired}
                onChange={(e) => setWifiRequired(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="yes">WiFi Required</option>
                <option value="no">Closed System (No WiFi)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pan/Tilt/Zoom
              </label>
              <select
                value={panTiltZoom}
                onChange={(e) => setPanTiltZoom(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All</option>
                <option value="yes">Pan/Tilt/Zoom</option>
                <option value="no">Fixed Camera</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile App Control
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
                <option value="budget">Budget (&lt; $150)</option>
                <option value="mid">Mid-Range ($150-$250)</option>
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
            Showing {filteredProducts.length} of {babyMonitors.length} baby monitors
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
                  Resolution
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  WiFi
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  PTZ
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
              {filteredProducts.map((monitor) => {
                const amazonLink = getAmazonLink(monitor.amazonAsin);
                const features = [
                  monitor.nightVision && "Night Vision",
                  monitor.twoWayAudio && "Two-Way Audio",
                  monitor.temperatureSensor && "Temp Sensor",
                  monitor.panTiltZoom && "Pan/Tilt/Zoom",
                ]
                  .filter(Boolean)
                  .join(", ");

                return (
                  <tr key={monitor.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-medium">
                      {monitor.brand} {monitor.model}
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">{monitor.monitorType}</td>
                    <td className="px-4 py-3 text-gray-900 font-semibold">{formatPrice(monitor.price)}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ★ {formatRating(monitor.rating)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{monitor.resolution || "N/A"}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${
                        monitor.wifiRequired ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                      }`}>
                        {monitor.wifiRequired ? "WiFi" : "No WiFi"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {monitor.panTiltZoom ? (
                        <span className="text-green-600 font-medium">✓</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{features}</td>
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
          {filteredProducts.map((monitor) => {
            const amazonLink = getAmazonLink(monitor.amazonAsin);
            return (
              <div key={monitor.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                {/* Image */}
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={monitor.imageUrl}
                    alt={`${monitor.brand} ${monitor.model}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585691261385-35c1ad5f9e3e?w=400";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {monitor.brand} {monitor.model}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">{formatPrice(monitor.price)}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                      ★ {formatRating(monitor.rating)}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{monitor.summary}</p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4 text-xs text-gray-700">
                    <div>
                      <strong>Type:</strong> <span className="capitalize">{monitor.monitorType}</span>
                    </div>
                    <div>
                      <strong>Resolution:</strong> {monitor.resolution || "N/A"}
                    </div>
                    <div>
                      <strong>Range:</strong> {monitor.range}
                    </div>
                    <div>
                      <strong>Encryption:</strong> {monitor.encryption}
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    {[
                      { label: "Night Vision", value: monitor.nightVision },
                      { label: "2-Way Audio", value: monitor.twoWayAudio },
                      { label: "Temp Sensor", value: monitor.temperatureSensor },
                      { label: "Lullabies", value: monitor.lullabies },
                      { label: "Pan/Tilt/Zoom", value: monitor.panTiltZoom },
                      { label: "App Control", value: monitor.hasApp },
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
