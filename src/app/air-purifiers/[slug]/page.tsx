import { getAirPurifierArticle, getAllAirPurifierArticleSlugs } from "@/data/air-purifier-articles";
import Breadcrumbs from "@/components/Breadcrumbs";
import Comments from "@/components/Comments";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ArticleSchema, FAQSchema } from "@/components/JsonLd";
import CrossCategoryLinks from "@/components/CrossCategoryLinks";
import { extractFAQs } from "@/lib/faqUtils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllAirPurifierArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getAirPurifierArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | The Family Pick`,
    description: article.description,
    alternates: {
      canonical: `https://www.thefamilypick.com/air-purifiers/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.thefamilypick.com/air-purifiers/${slug}`,

    images: [
      {
        url: 'https://www.thefamilypick.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Family Pick',
      },
    ],
    locale: 'en_US',
    siteName: 'The Family Pick',
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getAirPurifierArticle(slug);

  if (!article) {
    notFound();
  }

  const faqs = extractFAQs(article.content);

  const breadcrumbItems = [
    { name: "Home", url: "https://www.thefamilypick.com" },
    { name: "Air Purifiers", url: "https://www.thefamilypick.com/air-purifiers" },
    { name: article.title, url: `https://www.thefamilypick.com/air-purifiers/${slug}` }
  ];

  return (
    <div className="bg-white">
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.thefamilypick.com/air-purifiers/${slug}`}
        datePublished="2026-03-15"
        dateModified="2026-03-18"
      />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Air Purifiers",
              href: "/air-purifiers",
            },
            {
              label: article.title,
              href: `/air-purifiers/${slug}`,
            },
          ]}
        />
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-gray-600">
            {article.description}
          </p>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-gray-700 mb-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Comments Section */}
      {/* Cross-Category Links */}
      <CrossCategoryLinks currentCategory="air-purifiers" />


      <Comments pagePath={`/air-purifiers/${slug}`} siteName="thefamilypick" />

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getAllAirPurifierArticleSlugs()
            .filter((s) => s !== slug)
            .slice(0, 4)
            .map((relatedSlug) => {
              const related = getAirPurifierArticle(relatedSlug);
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/air-purifiers/${relatedSlug}`}
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
    </div>
  );
}
