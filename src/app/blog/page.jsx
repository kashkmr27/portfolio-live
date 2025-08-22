import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { fetchBlogPosts, fetchAuthor, fetchFeaturedMedia } from '../../lib/wordpress';
import NewsletterSubscription from '../components/NewsletterSubscription';

export const metadata = {
    title: "Insights & Tutorials - AI, Automation & Digital Growth for UK Small Businesses",
    description: "Expert insights on AI integration, automation, and digital growth strategies for UK small businesses. Learn from real case studies and practical tutorials.",
    keywords: [
        "AI tutorials UK",
        "Small business automation",
        "Digital growth strategies",
        "UK business insights",
        "AI chatbot setup",
        "Business automation tips",
        "AI integration services",
        "UK small business technology"
    ],
    authors: [{ name: 'Akash Kumar' }],
    openGraph: {
        title: "Insights & Tutorials - AI, Automation & Digital Growth for UK Small Businesses",
        description: "Expert insights on AI integration, automation, and digital growth strategies for UK small businesses.",
        type: "website",
        url: "https://akashbuilds.com/blog",
        siteName: "Akash Kumar - Frontend & Aspiring Product Engineer",
        images: [
            {
                url: 'https://akashbuilds.com/og-image-blog.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Integration Insights Blog',
            }
        ],
        locale: 'en_GB',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Insights & Tutorials - AI, Automation & Digital Growth for UK Small Businesses",
        description: "Expert insights on AI integration, automation, and digital growth strategies for UK small businesses.",
        images: ['https://akashbuilds.com/og-image-blog.jpg'],
    },
    alternates: {
        canonical: "https://akashbuilds.com/blog"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default async function BlogPage() {
    // Fetch blog posts from WordPress
    const blogPosts = await fetchBlogPosts();

    // Fetch author information and featured media for each post
    const postsWithData = await Promise.all(
        blogPosts.map(async (post) => {
            const [author, featuredMedia] = await Promise.all([
                fetchAuthor(post.author),
                post.featuredMedia ? fetchFeaturedMedia(post.featuredMedia) : null
            ]);

            return {
                ...post,
                authorName: author?.name || 'Unknown Author',
                authorAvatar: author?.avatar?.thumbnail || null,
                featuredImage: featuredMedia?.url || null,
                featuredImageAlt: featuredMedia?.alt || post.title,
                featuredImageSizes: featuredMedia?.sizes || null
            };
        })
    );

    // Generate schema markup for blog listing
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://akashbuilds.com/blog#collectionpage",
                "headline": "AI Integration Insights & Tutorials",
                "description": "Expert insights on AI integration, automation, and digital growth strategies for UK small businesses.",
                "url": "https://akashbuilds.com/blog",
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": postsWithData.map((post, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "item": {
                            "@type": "Article",
                            "headline": post.title,
                            "description": post.excerpt,
                            "url": `https://akashbuilds.com/blog/${post.slug}`,
                            "datePublished": post.publishDate,
                            "author": {
                                "@type": "Person",
                                "name": post.authorName
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Akash Kumar - Frontend Developer",
                                "url": "https://akashbuilds.com"
                            }
                        }
                    }))
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://akashbuilds.com/blog#breadcrumb",
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
                    }
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://akashbuilds.com/#organization",
                "name": "Akash Kumar - Frontend Developer",
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
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="space-y-8 lg:space-y-10 px-4 pt-28 pb-12 lg:pt-32 lg:pb-0">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Insights, Tutorials & blogs
                        </h1>
                        {/* <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                            AI, automation & digital growth for UK small businesses
                        </p> */}
                        {/* <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <span className="badge badge-primary">AI Integration</span>
                            <span className="badge">Automation</span>
                            <span className="badge">Digital Growth</span>
                            <span className="badge">UK Business</span>
                        </div> */}
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12 lg:mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Latest Articles
                            </h2>
                            <p className="text-lg text-white/70 max-w-2xl mx-auto">
                                Expert insights and practical guides for small businesses
                            </p>
                        </div>

                        {/* Blog Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {postsWithData.map((post, index) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl block"
                                >
                                    {/* Featured Image */}
                                    <div className="relative h-56 lg:h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent z-10"></div>
                                        {post.featuredImage ? (
                                            <Image
                                                src={post.featuredImageSizes?.medium?.source_url || post.featuredImage}
                                                alt={post.featuredImageAlt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                                <div className="text-5xl text-slate-400">📄</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 lg:p-8">
                                        {/* Category & Date */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-medium text-violet-400 uppercase tracking-wide py-1 bg-violet-400/10 rounded-full">
                                                Blog Post
                                            </span>
                                            <span className="text-xs text-slate-400">
                                                {new Date(post.publishDate).toLocaleDateString('en-GB', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors line-clamp-2 leading-tight">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed text-base">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        {/* <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-violet-600/20 rounded-full flex items-center justify-center">
                                                    <span className="text-violet-400 text-sm font-bold">
                                                        {post.authorName.charAt(0)}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-slate-400 font-medium">{post.authorName}</span>
                                            </div>
                                            <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                                                5 min read
                                            </span>
                                        </div> */}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Load More Button */}
                        <div className="text-center mt-16 lg:mt-20">
                            <button className="btn btn-secondary btn-lg">
                                Load More Articles
                            </button>
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="container mx-auto px-4 py-16 lg:py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-3xl p-8 lg:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                                Stay Updated with AI Insights
                            </h2>
                            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Get the latest AI integration tips, automation strategies, and digital growth insights delivered to your inbox.
                            </p>
                            <NewsletterSubscription />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
} 