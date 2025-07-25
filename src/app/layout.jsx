import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://akashbuilds.com/'),
    alternates: {
        canonical: '/',
        languages: {
            'en-GB': '/',
        },
    },
    title: "Akash Kumar | Frontend Developer London | React & Next.js Portfolio",
    description: "Hire a London-based frontend developer specializing in React, Next.js, and TypeScript. View Akash Kumar's portfolio, case studies, and client testimonials.",
    keywords: [
        "Frontend Developer London",
        "React Developer UK",
        "Next.js Portfolio",
        "Hire Frontend Engineer London",
        "JavaScript Developer London",
        "UI UX Designer London",
        "TypeScript Developer London",
        "Freelance Web Developer London",
        "AI Integration Developer",
        "ChatGPT API Developer",
        "Web Animation Services"
    ],
    authors: [{ name: "Akash Kumar" }],
    creator: "Akash Kumar",
    publisher: "Akash Kumar",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
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
    verification: {
        google: "W93f8YxRsmvur4zmKzQhxtn2pR22f5-FWInuiu77pd4",
    },
    openGraph: {
        title: "Akash Kumar | Frontend Developer London | React & Next.js Portfolio",
        description: "React & Next.js specialist in London, UK. Explore projects, case studies, and more.",
        url: 'https://akashbuilds.com/',
        siteName: "Akash Kumar's Portfolio",
        images: [
            {
                url: 'https://akashbuilds.com/images/hero-image.png',
                width: 1200,
                height: 630,
                alt: "Akash Kumar's Portfolio - Frontend Developer London",
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@YourTwitterHandle',
        creator: '@YourTwitterHandle',
        title: "Akash Kumar | Frontend Developer London | React & Next.js",
        description: "London-based React & Next.js frontend engineer. Explore projects, UI/UX case studies, and client testimonials.",
        images: ['https://akashbuilds.com/images/hero-image.png'],
    },
    other: {
        "google-site-verification": "W93f8YxRsmvur4zmKzQhxtn2pR22f5-FWInuiu77pd4",
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-GB">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
                <link rel="shortcut icon" href="/favicon-32x32.png" />                <meta name="theme-color" content="#7c3aed" />
                <meta name="msapplication-TileColor" content="#7c3aed" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

                {/* Person Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Akash Kumar",
                            "jobTitle": "Frontend Developer",
                            "description": "Professional frontend developer specializing in React, Next.js, and AI integration",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "London",
                                "addressCountry": "UK"
                            },
                            "url": "https://akashbuilds.com",
                            "sameAs": [
                                "https://www.linkedin.com/in/theakashkumar",
                                "https://github.com/akashkumarweb"
                            ],
                            "skills": [
                                "React",
                                "Next.js",
                                "TypeScript",
                                "JavaScript",
                                "AI Integration",
                                "ChatGPT API",
                                "Web Animation",
                                "UI Development",
                                "Web Design"
                            ],
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Freelance Frontend Developer"
                            },
                            "knowsAbout": [
                                "Frontend Development",
                                "React Development",
                                "Next.js",
                                "TypeScript",
                                "AI Integration",
                                "Web Animation"
                            ]
                        })
                    }}
                />

                {/* Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Akash Kumar - Frontend Developer",
                            "url": "https://akashbuilds.com",
                            "description": "Professional frontend development services in London, UK",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "London",
                                "addressCountry": "UK"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "email": "contact@akashbuilds.com"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/in/theakashkumar",
                                "https://github.com/akashkumarweb"
                            ]
                        })
                    }}
                />

                {/* WebSite Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Akash Kumar Portfolio",
                            "url": "https://akashbuilds.com",
                            "description": "Professional frontend developer portfolio showcasing React, Next.js, and AI integration projects",
                            "author": {
                                "@type": "Person",
                                "name": "Akash Kumar"
                            },
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://akashbuilds.com/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
            </head>
            <body className={inter.className}>
                {children}
                <GoogleAnalytics gaId="G-4KVF2Q6Q6V" />
            </body>
        </html>
    );
} 