const WORDPRESS_API_URL = 'https://darkcyan-pony-605661.hostingersite.com/wp-json/wp/v2';

function optimizeImageUrl(originalUrl, imageId) {
    if (!originalUrl) return null;

    // For now, we'll use the original URL but with our domain structure
    // In production, you'd want to download and serve images from your CDN
    const fileName = originalUrl.split('/').pop();
    return `/api/optimize-image?url=${encodeURIComponent(originalUrl)}&id=${imageId}&filename=${fileName}`;
}

/**
 * Process content and optimize all images
 */
function processContentImages(content) {
    if (!content) return content;

    // Replace WordPress image URLs with our optimized URLs
    let processedContent = content;

    // Find all img tags and replace their src attributes
    processedContent = processedContent.replace(
        /<img([^>]*?)src="([^"]*?)"([^>]*?)>/gi,
        (match, before, src, after) => {
            if (src.includes('darkcyan-pony-605661.hostingersite.com')) {
                const imageId = src.match(/\/(\d+)\//)?.[1] || 'unknown';
                const optimizedSrc = optimizeImageUrl(src, imageId);
                return `<img${before}src="${optimizedSrc}"${after}>`;
            }
            return match;
        }
    );

    return processedContent;
}

/**
 * Fetch all blog posts from WordPress
 */
export async function fetchBlogPosts() {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/posts?per_page=10&_embed`);
        const posts = await response.json();

        return posts.map(post => ({
            id: post.id,
            slug: post.slug,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
            content: processContentImages(post.content.rendered),
            publishDate: post.date,
            modifiedDate: post.modified,
            author: post.author,
            featuredMedia: post.featured_media,
            categories: post.categories,
            tags: post.tags,
            link: post.link,
            status: post.status
        }));
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

/**
 * Fetch a single blog post by slug
 */
export async function fetchBlogPost(slug) {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`);
        const posts = await response.json();

        if (posts.length === 0) {
            return null;
        }

        const post = posts[0];
        return {
            id: post.id,
            slug: post.slug,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
            content: processContentImages(post.content.rendered),
            publishDate: post.date,
            modifiedDate: post.modified,
            author: post.author,
            featuredMedia: post.featured_media,
            categories: post.categories,
            tags: post.tags,
            link: post.link,
            status: post.status
        };
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}

/**
 * Fetch featured media (images) for a post
 */
export async function fetchFeaturedMedia(mediaId) {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/media/${mediaId}`);
        const media = await response.json();

        const originalUrl = media.source_url;
        const optimizedUrl = optimizeImageUrl(originalUrl, mediaId);

        return {
            id: media.id,
            url: optimizedUrl || originalUrl,
            originalUrl: originalUrl,
            alt: media.alt_text || media.title?.rendered || '',
            caption: media.caption?.rendered || '',
            title: media.title?.rendered || '',
            description: media.description?.rendered || '',
            sizes: media.media_details?.sizes || {},
            width: media.media_details?.width || 0,
            height: media.media_details?.height || 0,
            // Provide different size URLs for responsive images
            thumbnail: optimizeImageUrl(media.media_details?.sizes?.thumbnail?.source_url || media.source_url, mediaId),
            medium: optimizeImageUrl(media.media_details?.sizes?.medium?.source_url || media.source_url, mediaId),
            large: optimizeImageUrl(media.media_details?.sizes?.large?.source_url || media.source_url, mediaId),
            full: optimizeImageUrl(media.source_url, mediaId)
        };
    } catch (error) {
        console.error('Error fetching featured media:', error);
        return null;
    }
}

/**
 * Fetch author information
 */
export async function fetchAuthor(authorId) {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/users/${authorId}`);
        const author = await response.json();

        return {
            id: author.id,
            name: author.name,
            slug: author.slug,
            description: author.description,
            avatar: author.avatar_urls
        };
    } catch (error) {
        console.error('Error fetching author:', error);
        return null;
    }
}

/**
 * Fetch categories
 */
export async function fetchCategories() {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/categories`);
        const categories = await response.json();

        return categories.map(category => ({
            id: category.id,
            name: category.name,
            slug: category.slug,
            description: category.description,
            count: category.count
        }));
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

/**
 * Parse HTML content and extract table of contents
 */
export function extractTableOfContents(content) {
    const headings = [];
    const regex = /<h[2-6][^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-6]>/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        headings.push({
            id: match[1],
            title: match[2].replace(/<[^>]*>/g, ''),
            level: parseInt(match[0].match(/<h([2-6])/)[1])
        });
    }

    return headings;
}

/**
 * Clean HTML content for display
 */
export function cleanHtmlContent(content) {
    // Remove WordPress-specific classes and attributes but preserve structure
    let cleanedContent = content
        .replace(/class="[^"]*"/g, '')
        .replace(/id="[^"]*"/g, '')
        .replace(/<div[^>]*>/g, '')
        .replace(/<\/div>/g, '')
        .replace(/<figure[^>]*>/g, '')
        .replace(/<\/figure>/g, '')
        .replace(/<figcaption[^>]*>/g, '')
        .replace(/<\/figcaption>/g, '');

    // Add custom styling to WordPress Table of Contents
    cleanedContent = cleanedContent
        .replace(/<ul[^>]*>([\s\S]*?table\s+of\s+contents[\s\S]*?)<\/ul>/gi, '<ul class="wordpress-toc">$1</ul>')
        .replace(/<ol[^>]*>([\s\S]*?table\s+of\s+contents[\s\S]*?)<\/ol>/gi, '<ol class="wordpress-toc">$1</ol>');

    // Clean up extra whitespace and empty elements
    cleanedContent = cleanedContent
        .replace(/\s+/g, ' ')
        .replace(/>\s+</g, '><')
        .replace(/<p>\s*<\/p>/g, '')
        .replace(/<h[1-6]>\s*<\/h[1-6]>/g, '');

    return cleanedContent;
} 