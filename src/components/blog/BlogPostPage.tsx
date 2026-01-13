import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LearnItem } from "@/components/learn/learn.data";
import { learnData } from "@/components/learn/learn.data";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "./MarkdownComponents";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const slugify = (title: string) =>
    title
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

function allArticles(): LearnItem[] {
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

function getMarkdownContent(slug: string): string | null {
    try {
        const filePath = path.join(process.cwd(), "content", "learn", `${slug}.md`);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { content } = matter(fileContents);
        return content;
    } catch {
        return null;
    }
}

function pickRelated(currentId: string, count: number) {
    const all = allArticles().filter((a) => a.id !== currentId);
    return all.slice(0, count);
}

export default function BlogPostPage({ slug }: { slug: string }) {
    const post = allArticles().find((a) => slugify(a.title) === slug);
    if (!post) notFound();

    const markdownContent = getMarkdownContent(slug);

    const recommended = pickRelated(post.id, 3);
    const related = pickRelated(post.id, 4);

    const metaLeft = (post.meta ?? "").split("•")[0]?.trim();
    const tags = [metaLeft || "Blog", "Business", "Marketing", "Design"].slice(
        0,
        4
    );

    // Structured Data (JSON-LD) for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        image: post.image,
        author: {
            "@type": "Organization",
            name: "Simplified Team",
            url: "https://simplified.org"
        },
        publisher: {
            "@type": "Organization",
            name: "Simplified.org",
            url: "https://simplified.org",
            logo: {
                "@type": "ImageObject",
                url: "https://simplified.org/logo.png"
            }
        },
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://simplified.org/learn/${slug}`
        },
        articleSection: metaLeft || "Tech Career",
        keywords: tags.join(", "),
    };

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://simplified.org"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Learn",
                item: "https://simplified.org/learn"
            },
            {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://simplified.org/learn/${slug}`
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
            <Navbar />
            {/* PAGE WRAP */}
            <div className="mx-auto w-full max-w-[1180px] px-5 pb-16 pt-8">
                {/* BREADCRUMB */}
                <nav className="mb-4 text-[12px] text-slate-500">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li>
                            <Link href="/" className="hover:text-slate-700">
                                Home
                            </Link>
                        </li>
                        <li className="text-slate-300">/</li>
                        <li>
                            <Link href="/learn" className="hover:text-slate-700">
                                Learn
                            </Link>
                        </li>
                        <li className="text-slate-300">/</li>
                        <li className="text-slate-700">{metaLeft || "Article"}</li>
                    </ol>
                </nav>

                {/* TITLE */}
                <header className="mb-6">
                    <h1 className="max-w-[860px] text-[34px] font-semibold leading-tight tracking-tight sm:text-[42px]">
                        {post.title}
                    </h1>
                </header>

                {/* HERO IMAGE */}
                <div className="relative mb-10 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <div className="relative aspect-[16/7] w-full">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[64px_1fr_320px]">
                    {/* SHARE RAIL */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-8 flex flex-col items-center gap-3 text-slate-400">
                            {[
                                { k: "fb", l: "f" },
                                { k: "x", l: "x" },
                                { k: "pin", l: "p" },
                                { k: "in", l: "in" },
                                { k: "copy", l: "⧉" },
                            ].map((s) => (
                                <button
                                    key={s.k}
                                    className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-500 shadow-sm hover:bg-slate-50"
                                    aria-label={`Share ${s.k}`}
                                    type="button"
                                >
                                    {s.l}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* CONTENT */}
                    <main className="min-w-0">
                        {/* MARKDOWN */}
                        {markdownContent ? (
                            <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-blockquote:border-l-purple-300 prose-code:rounded prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5">
                                <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
                                    {markdownContent}
                                </ReactMarkdown>
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                                Content for this article is coming soon.
                            </div>
                        )}

                        {/* RELATED ARTICLES */}
                        <section className="mt-14">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Related articles
                                </h3>
                                <Link
                                    href="/learn"
                                    className="text-xs font-semibold text-slate-500 hover:text-slate-700"
                                >
                                    See all
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {related.map((a) => (
                                    <Link
                                        key={a.id}
                                        href={a.href}
                                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
                                    >
                                        <div className="relative aspect-[4/3] w-full bg-slate-100">
                                            <Image
                                                src={a.image}
                                                alt={a.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                                                {(a.meta ?? "Article").split("•")[0]?.trim() ?? "Article"}
                                            </div>
                                            <div className="mt-1 line-clamp-2 text-[12px] font-semibold leading-5 text-slate-900">
                                                {a.title}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </main>

                    {/* SIDEBAR */}
                    <aside className="lg:pt-1">
                        <div className="sticky top-8 space-y-6">
                            {/* CANVA CTA CARD (right rail) */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    {[
                                        post.image,
                                        recommended[0]?.image ?? post.image,
                                        recommended[1]?.image ?? post.image,
                                    ].map((src, i) => (
                                        <div
                                            key={i}
                                            className="relative aspect-square overflow-hidden rounded-lg bg-slate-100"
                                        >
                                            <Image
                                                src={src}
                                                alt=""
                                                fill
                                                className="object-cover"
                                                sizes="120px"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AUTHOR + TAGS */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100">
                                        <Image
                                            src={post.image}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="40px"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[11px] text-slate-500">Written by</div>
                                        <div className="text-[13px] font-semibold text-slate-900">
                                            Simplified Team
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {tags.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* RECOMMENDED LIST */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <div className="text-[12px] font-semibold text-slate-900">
                                    Recommended for you
                                </div>

                                <div className="mt-4 space-y-3">
                                    {recommended.map((a) => (
                                        <Link
                                            key={a.id}
                                            href={a.href}
                                            className="group flex gap-3 rounded-xl p-2 hover:bg-slate-50"
                                        >
                                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                                                <Image
                                                    src={a.image}
                                                    alt={a.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="64px"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="line-clamp-2 text-[12px] font-semibold leading-5 text-slate-900 group-hover:underline">
                                                    {a.title}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* SMALL CTA BOX */}
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-[12px] font-semibold text-slate-900">
                                    Want more like this?
                                </div>
                                <p className="mt-1 text-[13px] leading-5 text-slate-600">
                                    Drop your newsletter / lead magnet here later.
                                </p>
                                <button
                                    className="mt-3 w-full rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </div>
    );
}
