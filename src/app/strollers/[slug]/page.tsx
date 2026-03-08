import { getStrollerArticle, getAllStrollerArticleSlugs } from "@/data/stroller-articles";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ArticleSchema } from "@/components/JsonLd";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllStrollerArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getStrollerArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | The Family Pick`,
    description: article.description,
    alternates: {
      canonical: `https://www.thefamilypick.com/strollers/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.thefamilypick.com/strollers/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getStrollerArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.thefamilypick.com" },
    { name: "Strollers", url: "https://www.thefamilypick.com/strollers" },
    { name: article.title, url: `https://www.thefamilypick.com/strollers/${slug}` }
  ];

  // Parse markdown-style headers and format content
  const formattedContent = article.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${line.replace("## ", "")}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">${line.replace("### ", "")}</h3>`;
      }
      if (line.trim() === "") {
        return "<br />";
      }
      return `<p class="text-gray-600 mb-4">${line}</p>`;
    })
    .join("\n");

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thefamilypick.com/strollers/${slug}`}
        datePublished="2025-03-06"
        dateModified="2026-03-06"
      />
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Strollers", href: "/strollers" },
            { label: article.title, href: `/strollers/${slug}` },
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
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
      </section>

      {/* Back to Comparison */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <p className="text-gray-600 text-sm mb-6">
          This stroller guide was prepared with AI-assisted research. All
          information is based on manufacturer specifications and current market
          data. Prices and availability may change. For the most current
          information, please visit the manufacturers' websites or Amazon
          product pages.
        </p>
        <Link
          href="/strollers"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Back to Stroller Comparison
        </Link>
      </section>

      {/* Comments */}
      <Comments pagePath={`/strollers/${slug}`} siteName="thefamilypick" />
    </article>
  );
}
