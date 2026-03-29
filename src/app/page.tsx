"use client";

import Link from 'next/link';
import DealCard from '@/components/DealCard';
import EmailSignup from '@/components/EmailSignup';
import { mockDeals } from '@/data/mockDeals';
import { dealCategories } from '@/lib/dealCategories';

export default function Home() {
  const MAX_DEALS_PER_CATEGORY = 6;

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center flex-wrap gap-3">
          <h1 className="text-lg font-bold text-gray-900">The Family Pick</h1>
          <span className="text-sm text-gray-500">—</span>
          <span className="text-sm text-gray-600">Today's Best Family Deals: <span className="font-semibold">{mockDeals.length} available</span></span>
          <Link href="/deals" className="ml-auto px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Browse All Deals
          </Link>
        </div>
      </section>

      <EmailSignup />

      {/* Category Sections with Deals */}
      {dealCategories.map((cat) => {
        const allCategoryDeals = mockDeals.filter((d) => d.category === cat.name);
        const displayedDeals = allCategoryDeals.slice(0, MAX_DEALS_PER_CATEGORY);

        if (allCategoryDeals.length === 0) return null;

        return (
          <section key={cat.slug} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {cat.emoji} {cat.name} Deals
                <span className="text-sm font-normal text-gray-500 ml-2">({allCategoryDeals.length})</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4">
              {displayedDeals.map((deal) => (
                <DealCard key={deal.id} {...deal} />
              ))}
            </div>
            {allCategoryDeals.length > MAX_DEALS_PER_CATEGORY && (
              <div className="text-center">
                <Link
                  href={`/deals/${cat.slug}`}
                  className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Find more {cat.name.toLowerCase()} deals →
                </Link>
              </div>
            )}
          </section>
        );
      })}

      {/* Browse Categories Section */}
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
