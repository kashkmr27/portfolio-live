import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://akashbuilds.com/'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
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
        "Freelance Web Developer London"
    ],
    openGraph: {
        title: "Akash Kumar | Frontend Developer London | React & Next.js Portfolio",
        description: "React & Next.js specialist in London, UK. Explore projects, case studies, and more.",
        images: [
            {
                url: 'https://akashbuilds.com/images/hero-image.png',
                width: 1200,
                height: 630,
                alt: "Akash Kumar's Portfolio - Frontend Developer London",
            },
        ],
        type: 'website',
        url: 'https://akashbuilds.com/',
        site_name: "Akash Kumar's Portfolio",
    },
    twitter: {
        card: 'summary_large_image',
        site: '@YourTwitterHandle',
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
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Akash Kumar",
                            "jobTitle": "Frontend Developer",
                            "address": {
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
                                "UI Development",
                                "Web Design"
                            ],
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Available for Hire"
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