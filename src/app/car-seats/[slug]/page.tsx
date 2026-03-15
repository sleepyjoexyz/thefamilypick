import {
  getCarSeatArticle,
  getAllCarSeatArticleSlugs,
} from "@/data/car-seat-articles";
import { carSeats } from "@/data/car-seats";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { ArticleSchema } from "@/components/JsonLd";
import MarkdownContent from "@/components/MarkdownContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCarSeatArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getCarSeatArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | The Family Pick`,
    description: article.description,
    alternates: {
      canonical: `https://www.thefamilypick.com/car-seats/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.thefamilypick.com/car-seats/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getCarSeatArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.thefamilypick.com" },
    { name: "Car Seats", url: "https://www.thefamilypick.com/car-seats" },
    { name: article.title, url: `https://www.thefamilypick.com/car-seats/${slug}` }
  ];

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thefamilypick.com/car-seats/${slug}`}
        datePublished="2025-03-06"
        dateModified="2026-03-06"
      />
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Car Seats", href: "/car-seats" },
            { label: article.title, href: `/car-seats/${slug}` },
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

      {/* Comments */}
      <Comments pagePath={`/car-seats/${slug}`} siteName="thefamilypick" />

      {/* Back to comparison */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <Link
          href="/car-seats"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
        >
          Back to Car Seats Comparison
        </Link>
      </section>
    </article>
  );
}
