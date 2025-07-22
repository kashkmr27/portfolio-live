export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/private/', '/api/'],
            },
        ],
        sitemap: 'https://akashbuilds.com/sitemap.xml',
        host: 'https://akashbuilds.com',
    };
} 