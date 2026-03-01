import { getAirPurifierArticle, getAllAirPurifierArticleSlugs } from "@/data/air-purifier-articles";
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
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://thefamilypick.com/air-purifiers/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getAirPurifierArticle(slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Article Not Found</h1>
        <p className="text-gray-600 mt-2">The article you're looking for doesn't exist.</p>
        <Link href="/air-purifiers" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Air Purifiers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
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
      <Comments pagePath={`/air-purifiers/${slug}`} siteName="thefamilypick" />

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
        <Link href="/air-purifiers" className="text-blue-600 hover:underline">
          ← Back to Air Purifiers
        </Link>
      </section>
    </div>
  );
}
