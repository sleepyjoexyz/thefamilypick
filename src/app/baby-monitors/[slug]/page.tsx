import {
  getBabyMonitorArticle,
  getAllBabyMonitorArticleSlugs,
} from "@/data/baby-monitor-articles";
import { babyMonitors } from "@/data/baby-monitors";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBabyMonitorArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getBabyMonitorArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | The Family Pick`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://thefamilypick.com/baby-monitors/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getBabyMonitorArticle(slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <p className="text-gray-600 mt-4">
          <Link
            href="/baby-monitors"
            className="text-blue-600 hover:underline"
          >
            Back to Baby Monitors Comparison
          </Link>
        </p>
      </div>
    );
  }

  return (
    <article className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Baby Monitors", href: "/baby-monitors" },
            { label: article.title, href: `/baby-monitors/${slug}` },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <p className="text-lg text-gray-600">{article.description}</p>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          {article.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("##")) {
              const heading = paragraph.replace("## ", "");
              return (
                <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {heading}
                </h2>
              );
            }
            if (paragraph.startsWith("###")) {
              const heading = paragraph.replace("### ", "");
              return (
                <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  {heading}
                </h3>
              );
            }
            if (paragraph.startsWith("-")) {
              const items = paragraph.split("\n");
              return (
                <ul key={i} className="list-disc list-inside space-y-2 my-4">
                  {items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item.replace(/^-\s*/, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.includes("|")) {
              // Simple table rendering
              const lines = paragraph.split("\n");
              if (lines.length >= 3 && lines[1].includes("-")) {
                return (
                  <div key={i} className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <tbody>
                        {lines
                          .filter((line) => !line.includes("---") && line.trim())
                          .map((line, idx) => {
                            const cells = line
                              .split("|")
                              .map((cell) => cell.trim())
                              .filter((cell) => cell);
                            return (
                              <tr key={idx} className={idx === 0 ? "bg-gray-100" : ""}>
                                {cells.map((cell, cidx) => (
                                  <td
                                    key={cidx}
                                    className={`border border-gray-300 px-4 py-2 ${
                                      idx === 0 ? "font-bold" : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                );
              }
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed my-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </section>

      {/* Related Products Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Baby Monitors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {babyMonitors.slice(0, 6).map((monitor) => (
            <div key={monitor.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {monitor.brand} {monitor.model}
              </h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">
                ${monitor.price}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                ★ {monitor.rating.toFixed(1)} • {monitor.monitorType}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {monitor.summary}
              </p>
              <Link
                href="/baby-monitors"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium"
              >
                Compare All →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/baby-monitors/wifi-vs-non-wifi-baby-monitor"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-blue-600 hover:underline">
              WiFi vs Non-WiFi Baby Monitors
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Compare privacy, security, and reliability of connected vs closed-system monitors
            </p>
          </Link>
          <Link
            href="/baby-monitors/best-baby-monitors-for-twins"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-blue-600 hover:underline">
              Best Baby Monitors for Twins
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Multi-camera setups and split-screen solutions for monitoring multiple babies
            </p>
          </Link>
          <Link
            href="/baby-monitors/baby-monitor-security-guide"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-blue-600 hover:underline">
              Baby Monitor Security Guide
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Encryption, hacking prevention, and safe setup practices for WiFi monitors
            </p>
          </Link>
          <Link
            href="/baby-monitors/smart-baby-monitor-features-worth-paying-for"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-blue-600 hover:underline">
              Smart Features Worth Paying For
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Which features justify premium prices vs marketing hype
            </p>
          </Link>
        </div>
      </section>

      {/* CTA Back */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Compare Baby Monitors?
          </h2>
          <Link
            href="/baby-monitors"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            View Full Comparison Table
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-gray-600">
            <strong>Disclaimer:</strong> This article was prepared with AI-assisted research. All data should be independently verified before use. We earn affiliate commissions on qualifying purchases at no additional cost to you.
          </p>
        </div>
      </section>
    </article>
  );
}
