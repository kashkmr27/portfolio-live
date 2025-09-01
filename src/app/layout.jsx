import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata = {
    metadataBase: new URL('https://akashbuilds.com/'),
    alternates: {
        canonical: '/',
        languages: {
            'en-GB': '/',
        },
    },
    title: "Akash Kumar | Frontend Developer London | React ",
    description: "Product-focused Frontend Engineer in London with expertise in React & Next.js. Discover projects, UI/UX case studies, client testimonials, and AI-driven solutions.",

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
        yandex: "your-yandex-verification",
        bing: "your-bing-verification",
    },
    openGraph: {
        title: "Akash Kumar | Frontend Developer London | React & Next.js",
        description: "London-based frontend & aspiring product engineer—React, Next.js, TypeScript. Explore Akash Kumar portfolio, case studies and client testimonials.",
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
        site: '@akashbuild',
        creator: '@akashbuild',
        title: "Akash Kumar | Frontend & Aspiring Product Engineer London | React & Next.js",
        description: "London-based React & Next.js frontend engineer. Explore projects, UI/UX case studies, and client testimonials.",
        images: ['https://akashbuilds.com/images/hero-image.png'],
    },
    other: {
        "google-site-verification": "W93f8YxRsmvur4zmKzQhxtn2pR22f5-FWInuiu77pd4",
        "msvalidate.01": "your-bing-verification",
        "yandex-verification": "your-yandex-verification",
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-GB">
            <head>
                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-M4D224Z');
                        `,
                    }}
                />

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" type="image/svg+xml" href="/favicon-ak.svg" />
                <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#7c3aed" />
                <meta name="msapplication-TileColor" content="#7c3aed" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <meta name="p:domain_verify" content="30566e8fbedf65b5b02c3cd1abb09d03" />

                {/* Person Schema: Front-End Engineer */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Akash Kumar",
                            "jobTitle": "Front-End Engineer",
                            "description": "Professional frontend developer specializing in React, Next.js, and AI integration",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "London",
                                "addressCountry": "UK"
                            },
                            "url": "https://akashbuilds.com",
                            "sameAs": [
                                "https://www.linkedin.com/in/theakashkumar",
                                "https://github.com/akashkumarweb",
                                "https://x.com/akashbuild",
                                "https://bsky.app/profile/akashbuilds.bsky.social",
                                "https://uk.pinterest.com/akashbuilds/",
                                "https://www.figma.com/@akashbuilds"
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
                                "name": "Freelance Engineering"
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

                {/* Person Schema: Product Engineer / Consultant */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Akash Kumar",
                            "jobTitle": "Product Engineer / Consultant",
                            "description": "Frontend & Aspiring Product Engineer in London helping teams design UX, ship React/Next.js, and integrate ChatGPT.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "London",
                                "addressRegion": "London",
                                "addressCountry": "UK"
                            },
                            "url": "https://akashbuilds.com",
                            "sameAs": [
                                "https://www.linkedin.com/in/theakashkumar",
                                "https://github.com/akashkumarweb",
                                "https://x.com/akashbuild",
                                "https://bsky.app/profile/akashbuilds.bsky.social",
                                "https://uk.pinterest.com/akashbuilds/",
                                "https://www.figma.com/@akashbuilds"
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
                            "name": "Akash Kumar - Frontend & Aspiring Product Engineer",
                            "url": "https://akashbuilds.com",
                            "description": "Professional frontend development services in London, UK",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "London",
                                "addressRegion": "London",
                                "addressCountry": "UK"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "email": "contact@akashbuilds.com",
                                "areaServed": "GB",
                                "availableLanguage": "en-GB"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/in/theakashkumar",
                                "https://github.com/akashkumarweb",
                                "https://x.com/akashbuild",
                                "https://bsky.app/profile/akashbuilds.bsky.social",
                                "https://uk.pinterest.com/akashbuilds/",
                                "https://www.figma.com/@akashbuilds"
                            ]
                        })
                    }}
                />

                {/* Breadcrumbs (Home › Product Engineer › Services) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://akashbuilds.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Product Engineer", "item": "https://akashbuilds.com/services" },
                                { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://akashbuilds.com/services" }
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
            <body className={`${poppins.className} global-surface`}>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-M4D224Z"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>

                <div className="decor-blob decor-blob--violet" style={{ top: '-10vh', left: '-10vw', width: '60vw', height: '60vh' }} />
                <div className="decor-blob decor-blob--teal" style={{ bottom: '-8vh', right: '-10vw', width: '55vw', height: '55vh' }} />

                {children}
                <GoogleAnalytics gaId="G-4KVF2Q6Q6V" />
            </body>
        </html>
    );
} 