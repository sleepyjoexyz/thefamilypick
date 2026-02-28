'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [babyDropdownOpen, setBabyDropdownOpen] = useState(false);
  const [petDropdownOpen, setPetDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-600">The Family Pick</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Baby Gear Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium">
              Baby Gear
              <span className="text-xs ml-1">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/baby-monitors" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Baby Monitors
              </Link>
              <Link href="/strollers" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Strollers
              </Link>
              <Link href="/car-seats" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Car Seats
              </Link>
              <Link href="/high-chairs" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                High Chairs
              </Link>
            </div>
          </div>

          {/* Pet Tech Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium">
              Pet Tech
              <span className="text-xs ml-1">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/automatic-feeders" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Automatic Feeders
              </Link>
              <Link href="/pet-cameras" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Pet Cameras
              </Link>
              <Link href="/gps-trackers" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                GPS Trackers
              </Link>
              <Link href="/grooming-tools" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Grooming Tools
              </Link>
            </div>
          </div>

          {/* Our Sites */}
          <div className="text-sm text-gray-600">
            <span className="mr-2">Our Sites:</span>
            <Link href="https://thekitchenpick.com" className="text-blue-600 hover:underline mr-3">
              The Kitchen Pick
            </Link>
            <Link href="https://thegadgetpick.com" className="text-blue-600 hover:underline">
              The Gadget Pick
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600"
        >
          {mobileMenuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Baby Gear */}
            <div>
              <button
                onClick={() => setBabyDropdownOpen(!babyDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Baby Gear
                <span className={`text-xs ml-1 transition-transform ${babyDropdownOpen ? 'rotate-180 inline-block' : ''}`}>▼</span>
              </button>
              {babyDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/baby-monitors" className="block text-gray-700 hover:text-blue-600">
                    Baby Monitors
                  </Link>
                  <Link href="/strollers" className="block text-gray-700 hover:text-blue-600">
                    Strollers
                  </Link>
                  <Link href="/car-seats" className="block text-gray-700 hover:text-blue-600">
                    Car Seats
                  </Link>
                  <Link href="/high-chairs" className="block text-gray-700 hover:text-blue-600">
                    High Chairs
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Pet Tech */}
            <div>
              <button
                onClick={() => setPetDropdownOpen(!petDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Pet Tech
                <span className={`text-xs ml-1 transition-transform ${petDropdownOpen ? 'rotate-180 inline-block' : ''}`}>▼</span>
              </button>
              {petDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/automatic-feeders" className="block text-gray-700 hover:text-blue-600">
                    Automatic Feeders
                  </Link>
                  <Link href="/pet-cameras" className="block text-gray-700 hover:text-blue-600">
                    Pet Cameras
                  </Link>
                  <Link href="/gps-trackers" className="block text-gray-700 hover:text-blue-600">
                    GPS Trackers
                  </Link>
                  <Link href="/grooming-tools" className="block text-gray-700 hover:text-blue-600">
                    Grooming Tools
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Our Sites */}
            <div className="border-t border-gray-200 pt-4 text-sm">
              <div className="text-gray-600 mb-2">Our Sites:</div>
              <div className="space-y-2">
                <Link href="https://thekitchenpick.com" className="block text-blue-600 hover:underline">
                  The Kitchen Pick
                </Link>
                <Link href="https://thegadgetpick.com" className="block text-blue-600 hover:underline">
                  The Gadget Pick
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
