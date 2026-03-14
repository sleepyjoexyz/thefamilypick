'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import DealCard from '@/components/DealCard';
import { mockDeals } from '@/data/mockDeals';

// Note: Metadata cannot be exported from client components
// See layout.tsx for SEO metadata

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Baby Gear' | 'Pet Tech'>('All');

  const filteredDeals =
    selectedCategory === 'All'
      ? mockDeals
      : mockDeals.filter((deal) => deal.category === selectedCategory);

  return (
    <main className="bg-white">
      {/* Hero + Filters — single line */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center flex-wrap gap-3">
          <h1 className="text-lg font-bold text-gray-900">The Family Pick</h1>
          <span className="text-sm text-gray-500">—</span>
          <span className="text-sm text-gray-600">Today's Best Family Deals: <span className="font-semibold">{filteredDeals.length} available</span></span>
          <div className="flex gap-2 ml-auto">
            {(['All', 'Baby Gear', 'Pet Tech'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full font-medium text-xs transition-colors ${
                  selectedCategory === category
                    ? category === 'All'
                      ? 'bg-gray-900 text-white'
                      : category === 'Baby Gear'
                        ? 'bg-blue-600 text-white'
                        : 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Grid (2/3 of viewport) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </section>

      {/* Browse Categories Section (1/3 of viewport) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Baby Gear Categories */}
          <Link href="/baby-monitors" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">📹</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition">
                Baby Monitors
              </h3>
            </div>
          </Link>

          <Link href="/strollers" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition">
                Strollers
              </h3>
            </div>
          </Link>

          <Link href="/car-seats" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition">
                Car Seats
              </h3>
            </div>
          </Link>

          <Link href="/high-chairs" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">🪑</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition">
                High Chairs
              </h3>
            </div>
          </Link>

          {/* Pet Tech Categories */}
          <Link href="/automatic-feeders" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition">
                Auto Feeders
              </h3>
            </div>
          </Link>

          <Link href="/pet-cameras" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">📷</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition">
                Pet Cameras
              </h3>
            </div>
          </Link>

          <Link href="/gps-trackers" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition">
                GPS Trackers
              </h3>
            </div>
          </Link>

          <Link href="/grooming-tools" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">✂️</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition">
                Grooming Tools
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
