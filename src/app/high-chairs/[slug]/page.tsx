import { getHighChairArticle, getAllHighChairArticleSlugs } from "@/data/high-chair-articles";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ArticleSchema } from "@/components/JsonLd";
import MarkdownContent from "@/components/MarkdownContent";
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
    alternates: {
      canonical: `https://www.thefamilypick.com/high-chairs/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.thefamilypick.com/high-chairs/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getHighChairArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.thefamilypick.com" },
    { name: "High Chairs", url: "https://www.thefamilypick.com/high-chairs" },
    { name: article.title, url: `https://www.thefamilypick.com/high-chairs/${slug}` }
  ];

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thefamilypick.com/high-chairs/${slug}`}
        datePublished="2025-03-06"
        dateModified="2026-03-06"
      />
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
        <p className="text-sm text-gray-500 mt-2">Last updated: March 2026</p>
        <p className="text-lg text-gray-600 mt-4">{article.description}</p>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MarkdownContent content={article.content} />
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
