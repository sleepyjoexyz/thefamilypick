"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { carSeats } from "@/data/car-seats";
import { carSeatArticles } from "@/data/car-seat-articles";
import { CarSeat } from "@/data/car-seats";
import Link from "next/link";
import { getAmazonLink, formatPrice } from "@/lib/utils";

export default function CarSeatsComparison() {
  const [seatType, setSeatType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sideImpactProtection, setSideImpactProtection] =
    useState<string>("all");
  const [installMethod, setInstallMethod] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...carSeats];

    if (seatType !== "all") {
      result = result.filter((p) => p.seatType === seatType);
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter(
        (p) => p.price >= min && (max === Infinity ? true : p.price <= max)
      );
    }

    if (sideImpactProtection === "yes") {
      result = result.filter((p) => p.sideImpactProtection === true);
    }

    if (installMethod !== "all") {
      result = result.filter((p) => p.installMethod.includes(installMethod));
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
  }, [seatType, priceRange, sideImpactProtection, installMethod, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Car Seats",
              href: "/car-seats",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Car Seats Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 14 car seats across all types, price points, and safety
          features. Compare specifications, installation methods, weight ranges,
          and ratings to find the car seat that matches your child's age, your
          vehicle, and your safety priorities. Our methodology is based on
          manufacturer specs, NHTSA safety data, and real-world user ratings.
        </p>

        {/* Articles Section */}
        {Object.keys(carSeatArticles).length > 0 && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Car Seat Guides & Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.values(carSeatArticles).map((article) => (
                <Link
                  key={article.slug}
                  href={`/car-seats/${article.slug}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  → {article.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-lg text-gray-900 mb-6">
            Filters & Sort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seat Type
              </label>
              <select
                value={seatType}
                onChange={(e) => setSeatType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="infant">Infant</option>
                <option value="convertible">Convertible</option>
                <option value="all-in-one">All-in-One</option>
                <option value="booster">Booster</option>
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
                <option value="0-199">Under $200</option>
                <option value="200-299">$200-$299</option>
                <option value="300-399">$300-$399</option>
                <option value="400-Infinity">$400+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Side Impact Protection
              </label>
              <select
                value={sideImpactProtection}
                onChange={(e) => setSideImpactProtection(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Install Method
              </label>
              <select
                value={installMethod}
                onChange={(e) => setInstallMethod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any Method</option>
                <option value="LATCH">LATCH</option>
                <option value="Seatbelt">Seatbelt</option>
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
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {carSeats.length} car seats
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
                  Weight Range
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Rear-Facing Max
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Width (in)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Side Impact
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Rating
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
                    <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">
                      {product.brand} {product.model}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      {formatPrice(product.price)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-xs">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {product.seatType.charAt(0).toUpperCase() +
                          product.seatType.slice(1)}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-xs">
                      {product.weightRangeMin}-{product.weightRangeMax} lbs
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      {product.rearFacingMaxLbs} lbs
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right text-xs">
                      {product.seatWidthInches}"
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {product.sideImpactProtection ? (
                        <span className="text-green-600 font-semibold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right font-semibold">
                      {product.rating}⭐
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {amazonLink ? (
                        <a
                          href={amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline text-xs font-semibold"
                        >
                          View
                        </a>
                      ) : (
                        <span className="text-gray-400 text-xs">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Detailed Product Summaries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.brand} {product.model}
                  </h3>
                  <p className="text-sm text-gray-600">{product.summary}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Price</p>
                    <p className="text-gray-600">{formatPrice(product.price)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Type</p>
                    <p className="text-gray-600">
                      {product.seatType.charAt(0).toUpperCase() +
                        product.seatType.slice(1)}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Weight Range</p>
                    <p className="text-gray-600">
                      {product.weightRangeMin}-{product.weightRangeMax} lbs
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Width</p>
                    <p className="text-gray-600">{product.seatWidthInches}"</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Installation</p>
                    <p className="text-gray-600">{product.installMethod}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Rating</p>
                    <p className="text-gray-600">{product.rating}⭐</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  {product.sideImpactProtection && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Side Impact Protection
                    </span>
                  )}
                  {product.antiRebound && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Anti-Rebound Bar
                    </span>
                  )}
                  {product.steelFrame && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Steel Frame
                    </span>
                  )}
                  {product.washableCover && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Washable Cover
                    </span>
                  )}
                </div>

                <div className="mt-4 flex gap-2">
                  {getAmazonLink(product.amazonAsin) && (
                    <a
                      href={getAmazonLink(product.amazonAsin) || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-orange-500 text-white px-3 py-2 rounded text-center text-sm font-semibold hover:bg-orange-600"
                    >
                      View on Amazon
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
