import {
  getPetCameraArticle,
  getAllPetCameraArticleSlugs,
} from "@/data/pet-camera-articles";
import { petCameras } from "@/data/pet-cameras";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { getAmazonLink } from "@/lib/utils";
import { ArticleSchema } from "@/components/JsonLd";
import MarkdownContent from "@/components/MarkdownContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPetCameraArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getPetCameraArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | The Family Pick`,
    description: article.description,
    alternates: {
      canonical: `https://www.thefamilypick.com/pet-cameras/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.thefamilypick.com/pet-cameras/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getPetCameraArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.thefamilypick.com" },
    { name: "Pet Cameras", url: "https://www.thefamilypick.com/pet-cameras" },
    { name: article.title, url: `https://www.thefamilypick.com/pet-cameras/${slug}` }
  ];

  return (
    <article className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thefamilypick.com/pet-cameras/${slug}`}
        datePublished="2025-03-06"
        dateModified="2026-03-06"
      />
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: "Pet Cameras", href: "/pet-cameras" },
            { label: article.title, href: `/pet-cameras/${slug}` },
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

      {/* Recommended Products */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Pet Cameras
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {petCameras.slice(0, 4).map((camera) => (
            <div
              key={camera.id}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {camera.brand} {camera.model}
              </h3>
              <p className="text-gray-600 mb-3 text-sm">{camera.summary}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${camera.price}
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {camera.rating.toFixed(1)}★
                </span>
              </div>
              <div className="text-xs text-gray-600 mb-4 space-y-1">
                <p>
                  {camera.resolution} • {camera.fieldOfView}° FOV
                </p>
                <p>
                  {camera.treatDispenser ? "✓ Treat Dispenser" : "No Treat Dispenser"}
                  {camera.laserToy ? " • ✓ Laser Toy" : ""}
                </p>
              </div>
              {camera.amazonAsin && getAmazonLink(camera.amazonAsin) ? (
                <a
                  href={getAmazonLink(camera.amazonAsin) || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View on Amazon
                </a>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/pet-cameras"
            className="inline-block bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            View All Pet Cameras
          </Link>
        </div>
      </section>

      {/* Navigation */}
      {/* Comments */}
      <Comments pagePath={`/pet-cameras/${slug}`} siteName="thefamilypick" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <Link
          href="/pet-cameras"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to Pet Cameras
        </Link>
      </section>
    </article>
  );
}
