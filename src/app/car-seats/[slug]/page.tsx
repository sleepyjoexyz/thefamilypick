import {
  getCarSeatArticle,
  getAllCarSeatArticleSlugs,
} from "@/data/car-seat-articles";
import { carSeats } from "@/data/car-seats";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

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
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://thefamilypick.com/car-seats/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = (await params).slug;
  const article = getCarSeatArticle(slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <p className="text-gray-600 mt-4">
          <Link
            href="/car-seats"
            className="text-blue-600 hover:underline"
          >
            Back to car seats
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
            if (paragraph.startsWith("|")) {
              // Handle tables
              const lines = paragraph.split("\n");
              const headerCells = lines[0]
                .split("|")
                .map((cell) => cell.trim())
                .filter((cell) => cell);
              const bodyRows = lines
                .slice(2)
                .map((line) =>
                  line
                    .split("|")
                    .map((cell) => cell.trim())
                    .filter((cell) => cell)
                );

              return (
                <div key={i} className="overflow-x-auto my-6">
                  <table className="w-full border-collapse text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        {headerCells.map((cell, j) => (
                          <th
                            key={j}
                            className="border border-gray-300 px-4 py-2 text-left font-bold"
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bodyRows.map((row, j) => (
                        <tr
                          key={j}
                          className={j % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              className="border border-gray-300 px-4 py-2"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (paragraph.startsWith("-")) {
              // Handle lists
              const items = paragraph
                .split("\n")
                .filter((item) => item.trim().startsWith("-"))
                .map((item) => item.replace(/^-\s*/, ""));

              return (
                <ul key={i} className="list-disc list-inside my-4 space-y-1">
                  {items.map((item, j) => (
                    <li key={j} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.trim()) {
              return (
                <p key={i} className="text-gray-700 leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>
      </section>

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
