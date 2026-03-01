"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { petCameras, PetCamera } from "@/data/pet-cameras";
import { getAmazonLink } from "@/lib/utils";
import Link from "next/link";

export default function PetCamerasComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [treatDispenser, setTreatDispenser] = useState<string>("all");
  const [laserToy, setLaserToy] = useState<string>("all");
  const [barkAlert, setBarkAlert] = useState<string>("all");
  const [cloudStorage, setCloudStorage] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...petCameras];

    // Price range filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter(
        (p) => p.price >= min && (max ? p.price <= max : true)
      );
    }

    // Treat dispenser filter
    if (treatDispenser !== "all") {
      const hasDispenser = treatDispenser === "yes";
      result = result.filter((p) => p.treatDispenser === hasDispenser);
    }

    // Laser toy filter
    if (laserToy !== "all") {
      const hasLaser = laserToy === "yes";
      result = result.filter((p) => p.laserToy === hasLaser);
    }

    // Bark alert filter
    if (barkAlert !== "all") {
      const hasBark = barkAlert === "yes";
      result = result.filter((p) => p.barkAlert === hasBark);
    }

    // Cloud storage filter
    if (cloudStorage !== "all") {
      const hasCloud = cloudStorage === "yes";
      result = result.filter((p) => p.cloudStorage === hasCloud);
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "field-of-view") {
      result.sort((a, b) => b.fieldOfView - a.fieldOfView);
    } else {
      result.sort((a, b) =>
        `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`)
      );
    }

    return result;
  }, [priceRange, treatDispenser, laserToy, barkAlert, cloudStorage, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Pet Cameras",
              href: "/pet-cameras",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Pet Cameras Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 13 pet cameras across all price points and features.
          Compare specifications, interactive features, cloud storage options,
          and ratings to find the camera that matches your pet's needs. Whether
          you want treat dispensing, laser toys, bark detection, or just live
          monitoring, we break down the differences and help you decide which
          camera is right for your home.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-lg text-gray-900 mb-6">
            Filters & Sort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <option value="0-50">Budget (&lt; $50)</option>
                <option value="50-100">Mid-Range ($50-$100)</option>
                <option value="100-200">Premium ($100-$200)</option>
                <option value="200-10000">Luxury (&gt; $200)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Treat Dispenser
              </label>
              <select
                value={treatDispenser}
                onChange={(e) => setTreatDispenser(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Yes, Has Dispenser</option>
                <option value="no">No Dispenser</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Laser Toy
              </label>
              <select
                value={laserToy}
                onChange={(e) => setLaserToy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Yes, Has Laser</option>
                <option value="no">No Laser</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bark Alert
              </label>
              <select
                value={barkAlert}
                onChange={(e) => setBarkAlert(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Yes, Bark Detection</option>
                <option value="no">No Bark Detection</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cloud Storage
              </label>
              <select
                value={cloudStorage}
                onChange={(e) => setCloudStorage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Yes, Cloud Storage</option>
                <option value="no">No Cloud Storage</option>
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
                <option value="field-of-view">Widest Field of View</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {petCameras.length} pet cameras
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
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                  Brand & Model
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Resolution
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  FOV
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Night Vision
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  2-Way Audio
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Treat
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Laser
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Bark Alert
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Cloud
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Rating
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Amazon
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((camera, i) => (
                <tr
                  key={camera.id}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      {camera.brand} {camera.model}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right font-semibold">
                    ${camera.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {camera.resolution}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    {camera.fieldOfView}°
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {camera.nightVision ? (
                      <span className="text-green-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {camera.twoWayAudio ? (
                      <span className="text-green-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {camera.treatDispenser ? (
                      <span className="text-green-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {camera.laserToy ? (
                      <span className="text-green-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {camera.barkAlert ? (
                      <span className="text-green-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {camera.cloudStorage ? (
                      <span className="text-green-600 font-bold">✓</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      {camera.rating.toFixed(1)}★
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {camera.amazonAsin && getAmazonLink(camera.amazonAsin) ? (
                      <a
                        href={getAmazonLink(camera.amazonAsin) || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs font-medium"
                      >
                        View
                      </a>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Pet Cameras
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.slice(0, 6).map((camera) => (
            <div
              key={camera.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <img
                  src={camera.imageUrl}
                  alt={`${camera.brand} ${camera.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {camera.brand}
                  <br />
                  <span className="text-base font-semibold text-gray-700">
                    {camera.model}
                  </span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">{camera.summary}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${camera.price}
                  </span>
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">
                    {camera.rating.toFixed(1)}★
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold mr-1">
                      {camera.treatDispenser ? "✓" : "✗"}
                    </span>
                    <span>Treat Dispenser</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold mr-1">
                      {camera.laserToy ? "✓" : "✗"}
                    </span>
                    <span>Laser Toy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold mr-1">
                      {camera.barkAlert ? "✓" : "✗"}
                    </span>
                    <span>Bark Alert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold mr-1">
                      {camera.nightVision ? "✓" : "✗"}
                    </span>
                    <span>Night Vision</span>
                  </div>
                </div>
                {camera.amazonAsin && getAmazonLink(camera.amazonAsin) ? (
                  <a
                    href={getAmazonLink(camera.amazonAsin) || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-2"
                  >
                    View on Amazon
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Expert Guides & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/pet-cameras/best-pet-cameras-with-treat-dispenser"
            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Treat Dispensers: Worth the Premium?
            </h3>
            <p className="text-gray-600 mb-4">
              Compare interactive pet cameras with treat dispensers. Learn how
              they work and whether they justify the cost for training and
              engagement.
            </p>
            <span className="text-blue-600 hover:underline font-medium">
              Read Article →
            </span>
          </Link>

          <Link
            href="/pet-cameras/pet-camera-vs-security-camera"
            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Pet Camera vs Security Camera
            </h3>
            <p className="text-gray-600 mb-4">
              Understand the differences between pet cameras and security
              cameras. Learn what features matter for monitoring pets versus
              home security.
            </p>
            <span className="text-blue-600 hover:underline font-medium">
              Read Article →
            </span>
          </Link>

          <Link
            href="/pet-cameras/do-pet-cameras-help-with-separation-anxiety"
            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Pet Cameras & Separation Anxiety
            </h3>
            <p className="text-gray-600 mb-4">
              Explore whether pet cameras and remote interaction can reduce
              separation anxiety. Learn what science says about effectiveness.
            </p>
            <span className="text-blue-600 hover:underline font-medium">
              Read Article →
            </span>
          </Link>

          <Link
            href="/pet-cameras/pet-camera-cloud-storage-costs"
            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Cloud Storage Costs Explained
            </h3>
            <p className="text-gray-600 mb-4">
              Compare free vs paid cloud storage plans for pet cameras. Understand
              what's included and when paid tiers are worth the investment.
            </p>
            <span className="text-blue-600 hover:underline font-medium">
              Read Article →
            </span>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Still Deciding?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Check out our expert buying guide for pet cameras to narrow down your
          options based on your specific needs, budget, and pet's personality.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          View Buying Guide
        </button>
      </section>
    </div>
  );
}
