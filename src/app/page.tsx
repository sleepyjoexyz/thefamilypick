import Link from 'next/link';

export const metadata = {
  title: 'The Family Pick — Data-Driven Baby & Pet Product Comparisons',
  description: 'Expert comparisons of baby gear (monitors, strollers, car seats, high chairs) and pet tech (feeders, cameras, trackers, grooming tools). Evidence-based reviews for families.',
};

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            The Family Pick
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-2">
            Data-Driven Baby & Pet Product Comparisons
          </p>
          <p className="text-lg text-gray-500 mb-8">
            8 categories • 100+ products • 32 in-depth guides
          </p>
        </div>
      </section>

      {/* Baby Gear Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Baby Gear</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Baby Monitors */}
          <Link href="/baby-monitors" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📹</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Baby Monitors
              </h3>
              <p className="text-gray-600 text-sm">
                WiFi and non-WiFi monitors for real-time infant monitoring and peace of mind.
              </p>
              <div className="flex items-center mt-4 text-blue-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Strollers */}
          <Link href="/strollers" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Strollers
              </h3>
              <p className="text-gray-600 text-sm">
                Full-size, lightweight, and jogging strollers compared for lifestyle fit.
              </p>
              <div className="flex items-center mt-4 text-blue-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Car Seats */}
          <Link href="/car-seats" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Car Seats
              </h3>
              <p className="text-gray-600 text-sm">
                Infant and convertible car seats for safety and compatibility guidance.
              </p>
              <div className="flex items-center mt-4 text-blue-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* High Chairs */}
          <Link href="/high-chairs" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🪑</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                High Chairs
              </h3>
              <p className="text-gray-600 text-sm">
                Convertible and foldable high chairs for various spaces and budgets.
              </p>
              <div className="flex items-center mt-4 text-blue-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Pet Tech Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pet Tech</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Automatic Feeders */}
          <Link href="/automatic-feeders" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition">
                Automatic Feeders
              </h3>
              <p className="text-gray-600 text-sm">
                Smart and timed pet feeders for convenient, scheduled meal dispensing.
              </p>
              <div className="flex items-center mt-4 text-green-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Pet Cameras */}
          <Link href="/pet-cameras" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition">
                Pet Cameras
              </h3>
              <p className="text-gray-600 text-sm">
                Interactive pet cameras with treat dispensers and behavior monitoring.
              </p>
              <div className="flex items-center mt-4 text-green-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* GPS Trackers */}
          <Link href="/gps-trackers" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition">
                GPS Trackers
              </h3>
              <p className="text-gray-600 text-sm">
                GPS and Bluetooth pet trackers for real-time location monitoring.
              </p>
              <div className="flex items-center mt-4 text-green-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Grooming Tools */}
          <Link href="/grooming-tools" className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition">
                Grooming Tools
              </h3>
              <p className="text-gray-600 text-sm">
                Clippers, vacuum groomers, and grooming systems for home pet care.
              </p>
              <div className="flex items-center mt-4 text-green-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">Explore</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="bg-gray-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Trust Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Independent Reviews</h3>
              <p className="text-gray-600">
                Our comparisons are based on research, user feedback, and expert analysis—not sponsorships or marketing bias.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven</h3>
              <p className="text-gray-600">
                Every recommendation is backed by detailed specifications, pricing analysis, and real-world performance data.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Guides</h3>
              <p className="text-gray-600">
                32 in-depth buying guides cover features, costs, trade-offs, and which options suit different lifestyles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Compare Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Compare</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Rigorous Research</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Analyze product specs and features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Review user feedback and ratings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Compare pricing across retailers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Evaluate durability and value</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Transparent Comparisons</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Clear pros and cons for each option</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Real-world use case scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Cost breakdowns and value analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Recommendations for different budgets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
