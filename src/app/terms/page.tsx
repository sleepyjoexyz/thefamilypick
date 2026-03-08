import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Family Pick",
  description: "Terms of Service for The Family Pick. Review our terms and conditions for using our website.",
  alternates: { canonical: "https://www.thefamilypick.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-6 text-sm">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using The Family Pick website, you accept and agree to be bound by the terms of this agreement. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Accuracy</h2>
            <p className="text-gray-700 mb-4">
              We make reasonable efforts to ensure that product information, prices, specifications, and ratings are accurate. However, product details may change frequently. We recommend verifying information on manufacturer websites and retailer listings before making purchasing decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Links</h2>
            <p className="text-gray-700 mb-4">
              The Family Pick participates in the Amazon Services LLC Associates Program and other affiliate networks. When you click product links and make a purchase, we may earn a commission. These commissions do not affect prices you pay and enable us to maintain independent, unbiased product research and recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Disclosure</h2>
            <p className="text-gray-700 mb-4">
              Our product comparisons, buying guides, and articles are created with AI-assisted research. All claims and data are independently verified from primary sources including manufacturer specifications, user reviews, and industry publications. We maintain full editorial control and responsibility for all published content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              The information provided on The Family Pick is offered as-is without warranties of any kind. We are not responsible for any damages, direct or indirect, resulting from your use of this website or reliance on our product recommendations. Product recommendations are educational and do not constitute professional advice specific to your situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Comments and Contributions</h2>
            <p className="text-gray-700 mb-4">
              By submitting comments or content to our website, you grant The Family Pick a non-exclusive license to use, reproduce, and display your content. You represent that you own or have the right to share the content you submit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              For questions about these terms, please contact us through our website's contact form or privacy page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
