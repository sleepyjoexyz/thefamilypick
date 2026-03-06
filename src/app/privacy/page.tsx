import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Family Pick",
  description: "Privacy policy for The Family Pick. Learn how we collect, use, and protect your information.",
  alternates: { canonical: "https://thefamilypick.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-6 text-sm">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              The Family Pick collects information to improve your experience on our website. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Information you voluntarily provide (name, email) when commenting or contacting us</li>
              <li>Information collected automatically through cookies and analytics (IP address, browser type, pages visited)</li>
              <li>Usage data and interactions with product comparisons and filters</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
            <p className="text-gray-700 mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Improve and optimize our website and user experience</li>
              <li>Analyze trends and usage patterns</li>
              <li>Respond to user inquiries and comments</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to track usage and enhance functionality. You can control cookies through your browser settings. Third-party services like Google Analytics and Vercel may also use cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use services including Google Analytics, Vercel Analytics, and Amazon Associates. These services may collect information about your browsing habits. Please review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Amazon Associates Disclosure</h2>
            <p className="text-gray-700 mb-4">
              The Family Pick is a participant in the Amazon Services LLC Associates Program. We earn commissions from qualifying purchases. This does not affect product prices or our recommendation methodology.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Disclosure</h2>
            <p className="text-gray-700 mb-4">
              Our product comparisons and articles are prepared with AI-assisted research. All data is independently verified from manufacturer sources and user reviews before publication. We maintain editorial independence in our recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this privacy policy or your information, please contact us through our website's contact form.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
