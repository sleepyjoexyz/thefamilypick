import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Family Pick — Data-Driven Baby & Pet Product Comparisons',
  description: 'Expert comparisons of baby gear (monitors, strollers, car seats, high chairs) and pet tech (feeders, cameras, trackers, grooming tools). Evidence-based reviews for families.',
  alternates: {
    canonical: 'https://www.thefamilypick.com',
  },
  openGraph: {
    title: 'The Family Pick — Data-Driven Baby & Pet Product Comparisons',
    description: 'Expert comparisons of baby gear and pet technology products with detailed buying guides.',
    type: 'website',
    url: 'https://www.thefamilypick.com',
  },
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
          <p className="text-xl sm:text-2xl text-gray-600 mb-6">
            Data-Driven Baby & Pet Product Comparisons
          </p>
          <p className="text-lg text-gray-700 font-medium mb-2">
            Compare before you buy. Every spec verified. No sponsored rankings.
          </p>
          <p className="text-gray-600 mb-8">
            Evidence-based product research for families.
          </p>

          {/* Stats Section */}
          <div className="bg-white border border-gray-200 rounded-lg inline-block px-8 py-6 mb-2">
            <p className="text-sm text-gray-600 font-medium">
              <span className="text-2xl font-bold text-blue-600">8</span> categories •
              <span className="text-2xl font-bold text-blue-600 ml-2">100+</span> products •
              <span className="text-2xl font-bold text-blue-600 ml-2">32</span> in-depth guides
            </p>
          </div>
        </div>
      </section>

      {/* How We Compare Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How We Compare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Research Every Spec</h3>
              <p className="text-gray-600">
                We analyze product specifications, safety features, and real user feedback from verified sources.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Side-by-Side Comparison</h3>
              <p className="text-gray-600">
                Compare features, prices, and suitability across products in detailed comparison tables.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">You Decide — No Bias</h3>
              <p className="text-gray-600">
                We never accept sponsorships. Your decision is based on unbiased facts and your family's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Baby Gear Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Baby Gear</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Baby Monitors */}
          <Link href="/baby-monitors" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg mb-4 flex-shrink-0">
                <div className="text-2xl font-bold text-blue-600">📹</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Baby Monitors
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                WiFi and non-WiFi monitors for real-time infant monitoring.
              </p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all font-medium text-sm">
                <span>Compare</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Strollers */}
          <Link href="/strollers" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg mb-4 flex-shrink-0">
                <div className="text-2xl font-bold text-blue-600">🛒</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Strollers
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Full-size, lightweight, and jogging strollers for lifestyle fit.
              </p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all font-medium text-sm">
                <span>Compare</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Car Seats */}
          <Link href="/car-seats" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg mb-4 flex-shrink-0">
                <div className="text-2xl font-bold text-blue-600">🚗</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Car Seats
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Infant and convertible car seats for safety and compatibility.
              </p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all font-medium text-sm">
                <span>Compare</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* High Chairs */}
          <Link href="/high-chairs" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg mb-4 flex-shrink-0">
                <div className="text-2xl font-bold text-blue-600">🪑</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                High Chairs
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Convertible and foldable high chairs for various spaces and budgets.
              </p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all font-medium text-sm">
                <span>Compare</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Pet Tech Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pet Tech</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Automatic Feeders */}
          <Link href="/automatic-feeders" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg mb-4 flex-shrink-0">
                <div className="text-2xl font-bold text-green-600">🍽️</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                Automatic Feeders
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Smart and timed pet feeders for convenient meal dispensing.
              </p>
              <div className="flex items-center text-green-600 group-hover:gap-2 transition-all font-medium text-sm">
                <span>Compare</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Pet Cameras */}
          <Link href="/pet-cameras" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg mb-4 flex-shrink-0">
                <div className="text-2xl font-bold text-green-600">📷</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                Pet Cameras
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Interactive cameras with treat dispensers and behavior monitoring.
              </p>
              <div className="flex items-center text-green-600 group-hover:gap-2 transition-all font-medium text-sm">
                <span>Compare</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* GPS Trackers */}
          <Link href="/gps-trackers" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg mb-4 flex-shrink-0">
                <div className="text-2xl font-bold text-green-600">📍</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                GPS Trackers
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                GPS and Bluetooth trackers for real-time location monitoring.
              </p>
              <div className="flex items-center text-green-600 group-hover:gap-2 transition-all font-medium text-sm">
                <span>Compare</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Grooming Tools */}
          <Link href="/grooming-tools" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg mb-4 flex-shrink-0">
                <div className="text-2xl font-bold text-green-600">✂️</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                Grooming Tools
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Clippers, vacuum groomers, and grooming systems for pet care.
              </p>
              <div className="flex items-center text-green-600 group-hover:gap-2 transition-all font-medium text-sm">
                <span>Compare</span>
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
