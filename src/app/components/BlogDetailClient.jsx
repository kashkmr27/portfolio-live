"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header/Header";
import Footer from "./Footer";
import FAQTemplateModal from "./FAQTemplateModal";

export default function BlogDetailClient({ post, author, featuredMedia, cleanedContent }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Generate schema markup
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `https://akashbuilds.com/blog/${post.slug}#article`,
                "headline": post.title,
                "description": post.excerpt.replace(/<[^>]*>/g, ''),
                "image": featuredMedia ? featuredMedia.url : "https://akashbuilds.com/og-image-blog.jpg",
                "datePublished": post.publishDate,
                "dateModified": post.modifiedDate,
                "author": {
                    "@type": "Person",
                    "name": author?.name || "Akash Kumar",
                    "url": "https://akashbuilds.com/about"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Akash Kumar - Frontend & Aspiring Product Engineer",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://akashbuilds.com/images/Akash%20Kumar.png"
                    },
                    "url": "https://akashbuilds.com"
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://akashbuilds.com/blog/${post.slug}`
                },
                "articleSection": "AI Integration & Automation",

                "wordCount": post.content.replace(/<[^>]*>/g, '').split(' ').length,
                "timeRequired": "PT5M",
                "inLanguage": "en-GB"
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://akashbuilds.com/blog/${post.slug}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://akashbuilds.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://akashbuilds.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title,
                        "item": `https://akashbuilds.com/blog/${post.slug}`
                    }
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://akashbuilds.com/#organization",
                "name": "Akash Kumar - Frontend & Aspiring Product Engineer",
                "url": "https://akashbuilds.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://akashbuilds.com/images/Akash%20Kumar.png",
                    "width": 512,
                    "height": 512
                },
                "description": "Professional frontend developer specializing in AI integration, automation, and digital growth for UK small businesses.",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "GB"
                },
                "sameAs": [
                    "https://linkedin.com/in/akashkumar",
                    "https://github.com/akashkumar"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://akashbuilds.com/#website",
                "url": "https://akashbuilds.com",
                "name": "Akash Kumar - Frontend & Aspiring Product Engineer",
                "description": "AI Integration & Automation Services for UK Small Businesses",
                "publisher": {
                    "@id": "https://akashbuilds.com/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://akashbuilds.com/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                }
            }
        ]
    };

    if (!post) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                    <div className="container mx-auto px-4 py-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl font-bold text-white mb-6">Blog Post Not Found</h1>
                            <p className="text-white/80 mb-8">The requested blog post could not be found.</p>
                            <Link href="/blog" className="btn btn-primary">
                                Back to Blog
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Article Header */}
                <header className="container mx-auto px-4 py-12 lg:pt-24">
                    <div className="max-w-5xl mx-auto">
                        {/* Category & Date */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-slate-400 text-sm">
                                {new Date(post.publishDate).toLocaleDateString('en-GB', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="text-slate-400 text-sm">5 min read</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        {/* Featured Image */}
                        <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden mb-12 max-w-4xl mx-auto">
                            {featuredMedia ? (
                                <Image
                                    src={featuredMedia.large || featuredMedia.url}
                                    alt={featuredMedia.alt || post.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                    <div className="text-8xl text-slate-400">🤖</div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="container mx-auto px-4 py-12 lg:py-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: cleanedContent }} />
                    </div>
                </article>

                {/* Next Steps & Free Resources */}
                <section className="container mx-auto px-4 py-16 lg:py-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-3xl p-8 lg:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Next Steps & Free Resources
                                </h2>
                                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                                    Ready to implement your own AI chatbot? Get started with our free resources and expert guidance.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {/* FAQ Template Download */}
                                <div className="bg-gradient-to-br from-violet-800/20 to-violet-900/30 border border-violet-700/30 rounded-2xl p-6 text-center">
                                    <div className="text-4xl mb-4">📋</div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        Free FAQ Template
                                    </h3>
                                    <p className="text-slate-300 text-sm mb-6">
                                        Download our comprehensive chatbot FAQ template to streamline your AI implementation.
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="btn btn-primary btn-sm w-full"
                                    >
                                        Download Template
                                    </button>
                                </div>

                                {/* Strategy Call */}
                                <div className="bg-gradient-to-br from-slate-700/20 to-slate-800/30 border border-slate-600/30 rounded-2xl p-6 text-center">
                                    <div className="text-4xl mb-4">📞</div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        Book Strategy Call
                                    </h3>
                                    <p className="text-slate-300 text-sm mb-6">
                                        Get personalized guidance for your AI implementation with a 15-minute strategy call.
                                    </p>
                                    <Link href="/contact" className="btn btn-secondary btn-sm w-full">
                                        Book Call
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="container mx-auto px-4 py-16 lg:py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Link href="/blog" className="group">
                                <article className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all hover:shadow-2xl">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                        More AI Integration Insights
                                    </h3>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        Discover more articles about AI integration and automation for UK businesses.
                                    </p>
                                </article>
                            </Link>
                            <Link href="/services/ai-integration" className="group">
                                <article className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all hover:shadow-2xl">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                        AI Integration Services
                                    </h3>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        Ready to implement AI solutions? Explore our professional AI integration services.
                                    </p>
                                </article>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* FAQ Template Modal */}
            <FAQTemplateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
} 