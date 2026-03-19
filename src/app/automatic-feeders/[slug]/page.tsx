import {
  getAutoFeederArticle,
  getAllAutoFeederArticleSlugs,
} from "@/data/automatic-feeder-articles";
import { automaticFeeders } from "@/data/automatic-feeders";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ArticleSchema, FAQSchema } from "@/components/JsonLd";
import MarkdownContent from "@/components/MarkdownContent";
import CrossCategoryLinks from "@/components/CrossCategoryLinks";
import { extractFAQs } from "@/lib/faqUtils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllAutoFeederArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getAutoFeederArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | The Family Pick`,
    description: article.description,
    alternates: {
      canonical: `https://www.thefamilypick.com/automatic-feeders/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.thefamilypick.com/automatic-feeders/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getAutoFeederArticle(slug);

  if (!article) {
    notFound();
  }

  const faqs = extractFAQs(article.content);

  const breadcrumbItems = [
    { name: "Home", url: "https://www.thefamilypick.com" },
    { name: "Automatic Feeders", url: "https://www.thefamilypick.com/automatic-feeders" },
    { name: article.title, url: `https://www.thefamilypick.com/automatic-feeders/${slug}` }
  ];

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thefamilypick.com/automatic-feeders/${slug}`}
        datePublished="2026-03-15"
        dateModified="2026-03-18"
      />
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Automatic Feeders", href: "/automatic-feeders" },
            { label: article.title, href: `/automatic-feeders/${slug}` },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mt-2">Last updated: March 2026</p>
        <p className="text-lg text-gray-600 mt-4">{article.description}</p>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MarkdownContent content={article.content} />
      </section>

      {/* Related Products Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Automatic Feeders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automaticFeeders.slice(0, 6).map((feeder) => (
            <div key={feeder.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {feeder.brand} {feeder.model}
              </h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">
                ${feeder.price}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                ★ {feeder.rating.toFixed(1)} • {feeder.feederType}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {feeder.summary}
              </p>
              <Link
                href="/automatic-feeders"
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
          {getAllAutoFeederArticleSlugs()
            .filter((s) => s !== slug)
            .slice(0, 4)
            .map((relatedSlug) => {
              const related = getAutoFeederArticle(relatedSlug);
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/automatic-feeders/${relatedSlug}`}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-blue-600 hover:underline">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              );
            })}
        </div>
      </section>

      {/* CTA Back */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Compare Automatic Feeders?
          </h2>
          <Link
            href="/automatic-feeders"
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

      {/* Comments */}
      {/* Cross-Category Links */}
      <CrossCategoryLinks currentCategory="automatic-feeders" />


      <Comments pagePath={`/automatic-feeders/${slug}`} siteName="thefamilypick" />
    </article>
  );
}
