import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import BlogDetailClient from '../../components/BlogDetailClient';
import { fetchBlogPost, fetchAuthor, fetchFeaturedMedia, cleanHtmlContent } from '../../../lib/wordpress';

export async function generateMetadata({ params }) {
    const { slug } = params;
    const post = await fetchBlogPost(slug);

    if (!post) {
        return {
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found.'
        };
    }

    // Clean excerpt for meta description
    const cleanExcerpt = post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160);

    // Fetch featured media for OG image
    let ogImage = 'https://akashbuilds.com/images/hero-image.png'; // Default fallback

    if (post.featuredMedia) {
        try {
            const featuredMedia = await fetchFeaturedMedia(post.featuredMedia);
            if (featuredMedia && featuredMedia.url) {
                ogImage = featuredMedia.url;
            }
        } catch (error) {
            console.error('Error fetching featured media for OG image:', error);
        }
    }

    // Ensure the image URL is absolute
    if (!ogImage.startsWith('http')) {
        ogImage = `https://akashbuilds.com${ogImage}`;
    }

    return {
        title: `${post.title} - AI Integration Insights | Akash Kumar`,
        description: cleanExcerpt,

        authors: [{ name: 'Akash Kumar' }],
        openGraph: {
            title: post.title,
            description: cleanExcerpt,
            type: "article",
            url: `https://akashbuilds.com/blog/${slug}`,
            siteName: "Akash Kumar - Frontend & Aspiring Product Engineer",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                    type: 'image/jpeg',
                }
            ],
            locale: 'en_GB',
            publishedTime: post.publishDate,
            modifiedTime: post.modifiedDate,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: cleanExcerpt,
            images: [ogImage],
            creator: '@akashbuild',
            site: '@akashbuild',
        },
        alternates: {
            canonical: `https://akashbuilds.com/blog/${slug}`
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
}

export default async function BlogDetailPage({ params }) {
    const { slug } = params;
    const post = await fetchBlogPost(slug);

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

    // Fetch author and featured media
    const [author, featuredMedia] = await Promise.all([
        fetchAuthor(post.author),
        post.featuredMedia ? fetchFeaturedMedia(post.featuredMedia) : null
    ]);

    // Process the cleaned HTML content on the server side
    const cleanedContent = cleanHtmlContent(post.content);

    return (
        <BlogDetailClient
            post={post}
            author={author}
            featuredMedia={featuredMedia}
            cleanedContent={cleanedContent}
        />
    );
} 