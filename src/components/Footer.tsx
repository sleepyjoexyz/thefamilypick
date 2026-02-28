import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <div className="text-white text-xl font-bold mb-2">The Family Pick</div>
            <p className="text-sm text-gray-400">
              Data-driven comparisons of baby gear and pet technology products
            </p>
          </div>

          {/* Baby Gear Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Baby Gear</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/baby-monitors" className="text-gray-400 hover:text-white transition">
                  Baby Monitors
                </Link>
              </li>
              <li>
                <Link href="/strollers" className="text-gray-400 hover:text-white transition">
                  Strollers
                </Link>
              </li>
              <li>
                <Link href="/car-seats" className="text-gray-400 hover:text-white transition">
                  Car Seats
                </Link>
              </li>
              <li>
                <Link href="/high-chairs" className="text-gray-400 hover:text-white transition">
                  High Chairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Pet Tech Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pet Tech</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/automatic-feeders" className="text-gray-400 hover:text-white transition">
                  Automatic Feeders
                </Link>
              </li>
              <li>
                <Link href="/pet-cameras" className="text-gray-400 hover:text-white transition">
                  Pet Cameras
                </Link>
              </li>
              <li>
                <Link href="/gps-trackers" className="text-gray-400 hover:text-white transition">
                  GPS Trackers
                </Link>
              </li>
              <li>
                <Link href="/grooming-tools" className="text-gray-400 hover:text-white transition">
                  Grooming Tools
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Sites */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-semibold mb-4">Our Sites</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="https://thekitchenpick.com" className="text-gray-400 hover:text-white transition">
              The Kitchen Pick
            </Link>
            <Link href="https://thegadgetpick.com" className="text-gray-400 hover:text-white transition">
              The Gadget Pick
            </Link>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-xs text-gray-500">
            The Family Pick is a participant in the Amazon Services LLC Associates Program and other affiliate advertising programs.
            We earn a commission from qualifying purchases. This helps support our research and enables us to provide independent,
            unbiased product reviews.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 The Family Pick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
