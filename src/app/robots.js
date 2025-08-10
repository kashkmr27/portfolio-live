export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/private/', '/api/', '/cgi-bin/'],
            },
            { userAgent: 'Googlebot', allow: '/' },
            { userAgent: 'Googlebot-Image', allow: '/' },
            { userAgent: 'Bingbot', allow: '/' },
            { userAgent: 'DuckDuckBot', allow: '/' },
            { userAgent: 'Applebot', allow: '/' },
            { userAgent: 'Bravebot', allow: '/' },

            // AI search/retrieval
            { userAgent: 'OAI-SearchBot', allow: '/' },
            { userAgent: 'Claude-User', allow: '/' },
            { userAgent: 'Claude-SearchBot', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'Perplexity-User', allow: '/' },

            // Opt-out of model training / broad collectors
            { userAgent: 'GPTBot', disallow: '/' },
            { userAgent: 'ClaudeBot', disallow: '/' },
            { userAgent: 'Google-Extended', disallow: '/' },
            { userAgent: 'Applebot-Extended', disallow: '/' },
            { userAgent: 'CCBot', disallow: '/' },
        ],
        sitemap: 'https://akashbuilds.com/sitemap.xml',
    };
} 