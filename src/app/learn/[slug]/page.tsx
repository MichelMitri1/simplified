import BlogPostPage from "@/components/blog/BlogPostPage";
import { learnData } from "@/components/learn/learn.data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function allArticles() {
  return [
    learnData.featured,
    ...learnData.secondary,
    ...learnData.engineering,
    ...learnData.qualityAssurance,
    ...learnData.uxDesign,
    ...learnData.careerAdvice,
    ...learnData.careerPath,
  ];
}

function getMarkdownMetadata(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content", "learn", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContents);
    // Extract first paragraph as description
    const firstParagraph = content.split("\n\n").find((p) => p.trim() && !p.startsWith("#"));
    return firstParagraph?.trim().substring(0, 160) || "";
  } catch {
    return "";
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allArticles().find((a) => slugify(a.title) === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const description = getMarkdownMetadata(slug) || `Learn about ${post.title} with expert insights and practical guidance from Simplified.org. Master tech skills and advance your career.`;
  const category = (post.meta ?? "").split("•")[0]?.trim() || "Tech Career";
  
  return {
    title: `${post.title} | Simplified.org Learn`,
    description,
    keywords: [
      post.title.toLowerCase(),
      category.toLowerCase(),
      "tech career",
      "career guide",
      "tech bootcamp",
      "career change",
      "2025",
      "2026",
    ],
    authors: [{ name: "Simplified Team" }],
    openGraph: {
      title: post.title,
      description,
      url: `https://simplified.org/learn/${slug}`,
      siteName: "Simplified.org",
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: ["Simplified Team"],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://simplified.org/learn/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}
