import { getHighChairArticle, getAllHighChairArticleSlugs } from "@/data/high-chair-articles";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllHighChairArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getHighChairArticle(slug);

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
      url: `https://thefamilypick.com/high-chairs/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getHighChairArticle(slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <p className="text-gray-600 mt-4">
          <Link href="/high-chairs" className="text-blue-600 hover:underline">
            Back to high chairs
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
            { label: "High Chairs", href: "/high-chairs" },
            { label: article.title, href: `/high-chairs/${slug}` },
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
        <div className="prose prose-sm max-w-none">
          {article.content.split("\n\n").map((paragraph, i) => {
            // Handle markdown headers
            if (paragraph.startsWith("##")) {
              const headerText = paragraph.replace("##", "").trim();
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                >
                  {headerText}
                </h2>
              );
            }

            if (paragraph.startsWith("#")) {
              const headerText = paragraph.replace("#", "").trim();
              return (
                <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  {headerText}
                </h3>
              );
            }

            // Handle markdown lists
            if (paragraph.startsWith("-")) {
              const items = paragraph.split("\n").filter((line) => line.trim());
              return (
                <ul key={i} className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace("-", "").trim()}</li>
                  ))}
                </ul>
              );
            }

            // Handle markdown ordered lists
            if (/^\d+\./.test(paragraph)) {
              const items = paragraph.split("\n").filter((line) => line.trim());
              return (
                <ol key={i} className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^\d+\./, "").trim()}</li>
                  ))}
                </ol>
              );
            }

            // Handle markdown tables
            if (paragraph.includes("|")) {
              const lines = paragraph.split("\n").filter((line) => line.trim());
              if (lines.length > 2) {
                return (
                  <div key={i} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse">
                      <tbody>
                        {lines.map((line, j) => {
                          const cells = line.split("|").filter((c) => c.trim());
                          // Skip separator row
                          if (cells[0].includes("-")) return null;

                          return (
                            <tr
                              key={j}
                              className={j === 0 ? "bg-gray-100" : j % 2 === 0 ? "bg-white" : "bg-gray-50"}
                            >
                              {cells.map((cell, k) => (
                                <td
                                  key={k}
                                  className={`border border-gray-300 px-4 py-2 ${
                                    j === 0 ? "font-bold" : ""
                                  }`}
                                >
                                  {cell.trim()}
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

            // Regular paragraph
            return (
              <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </section>

      {/* Related Links */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">More High Chair Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/high-chairs"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2">Back to Comparison</h3>
            <p className="text-sm text-gray-600">
              View all 13 high chairs with interactive filters and ratings.
            </p>
          </Link>
          <Link
            href="/high-chairs/best-high-chairs-for-small-spaces"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2">Small Spaces Guide</h3>
            <p className="text-sm text-gray-600">
              Find compact and foldable options for apartments and tiny homes.
            </p>
          </Link>
          <Link
            href="/high-chairs/wooden-vs-plastic-high-chairs"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2">Materials Comparison</h3>
            <p className="text-sm text-gray-600">
              Compare wood and plastic for durability, cleaning, and aesthetics.
            </p>
          </Link>
          <Link
            href="/high-chairs/high-chair-safety-checklist"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2">Safety Guide</h3>
            <p className="text-sm text-gray-600">
              Learn harness types, stability testing, and recall information.
            </p>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          This article was prepared with AI-assisted research. It is provided for informational
          purposes only and does not constitute medical, safety, or product advice. All
          information should be independently verified before use. We may earn affiliate
          commissions from Amazon purchases made through links in this article.
        </p>
      </section>

      {/* Comments */}
      <Comments pagePath={`/high-chairs/${slug}`} siteName="thefamilypick" />
    </article>
  );
}
