import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../components/TrustBadgeGrid';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

// SEO-optimized metadata
export const metadata = {
    title: "About Akash Kumar - Frontend & Aspiring Product Engineer London",
    description: "Meet Akash Kumar, a London-based frontend developer with 5+ years experience in React, Next.js, and AI integration. Learn about my approach, skills, and commitment to UK clients.",

    openGraph: {
        title: "About Akash Kumar - Frontend & Aspiring Product Engineer London",
        description: "Meet Akash Kumar, a London-based frontend developer with 5+ years experience in React, Next.js, and AI integration.",
        type: "website",
        url: "https://akashbuilds.com/about",
        siteName: "Akash Kumar - Frontend & Aspiring Product Engineer"
    },
    twitter: {
        card: "summary",
        title: "About Akash Kumar - London Frontend Developer & AI Specialist",
        description: "Meet Akash Kumar, a London-based frontend developer with 5+ years experience in React, Next.js, and AI integration."
    },
    alternates: {
        canonical: "https://akashbuilds.com/about"
    }
};

// Structured Data Schema
const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Akash Kumar - Frontend & Aspiring Product Engineer",
    "description": "Meet Akash Kumar, a London-based frontend developer with 5+ years experience in React, Next.js, and AI integration.",
    "url": "https://akashbuilds.com/about",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://akashbuilds.com/about"
    },
    "author": {
        "@type": "Person",
        "name": "Akash Kumar",
        "jobTitle": "Front-End Engineer",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "UK"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance Engineering"
        },
        "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "AI Integration",
            "Frontend Development",
            "Web Animation",
            "UI/UX Design"
        ],
        "sameAs": [
            "https://www.linkedin.com/in/theakashkumar/",
            "https://github.com/Akashkumarweb"
        ]
    }
};

// Person Schema
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akash Kumar",
    "jobTitle": "Front-End Engineer",
    "description": "London-based frontend developer specializing in React, Next.js, and AI integration",
    "url": "https://akashbuilds.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "UK"
    },
    "knowsAbout": [
        "React Development",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "AI Integration",
        "ChatGPT API",
        "Web Animation",
        "CSS Animations",
        "Frontend Development",
        "UI/UX Design"
    ],
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance Engineering"
    },
    "sameAs": [
        "https://www.linkedin.com/in/theakashkumar/",
        "https://github.com/Akashkumarweb"
    ]
};

export default function AboutPage() {
    return (
        <>
            {/* Structured Data Scripts */}
            <Script
                id="about-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
            />
            <Script
                id="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="space-y-8 lg:space-y-10 px-4 pt-28 pb-12 lg:pt-32 lg:pb-32">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* SEO-Driven Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            About Akash Kumar
                            <br />
                            <span className="text-gradient">
                                Frontend Developer UK – React, Next.js & AI Integration
                            </span>
                        </h1>

                        {/* SEO-rich Summary */}
                        <p className="text-xl text-white/80 mb-0 leading-relaxed max-w-5xl mx-auto">
                            Experienced London-based frontend developer specialising in React, Next.js, TypeScript, and custom AI solutions for UK startups, agencies, and remote teams.
                            With a proven track record delivering high-performance web apps and seamless AI integrations, I help UK businesses grow through reliable, scalable technology.
                            <br className="hidden md:block" />
                            <span className="text-white/60">
                                Looking for a freelance frontend developer in London, remote React developer, or AI integration specialist? You&apos;re in the right place.
                            </span>
                        </p>
                    </div>
                </section>


                {/* My Story Section */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            My Story
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                I started my journey in web development over 5 years ago, driven by a passion for
                                creating beautiful, functional websites that solve real problems. Based in London,
                                I&apos;ve worked with clients across the UK and internationally, delivering projects that
                                exceed expectations.
                            </p>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                My approach combines technical expertise with a deep understanding of user experience.
                                I believe that great code should be invisible to users—they should only see the
                                seamless, intuitive interface that makes their lives easier.
                            </p>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                                open-source projects, or sharing knowledge with the developer community. I&apos;m always
                                learning and staying up-to-date with the latest frontend trends and best practices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills & Expertise */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Skills & Expertise
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="card p-8">
                                <div className="text-3xl mb-4">⚛️</div>
                                <h3 className="text-xl font-bold text-white mb-4">React & Next.js</h3>
                                <p className="text-white/80">
                                    Building modern, scalable applications with React and Next.js.
                                    Focus on performance, SEO, and user experience.
                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold text-white mb-4">AI Integration</h3>
                                <p className="text-white/80">
                                    Integrating AI capabilities with ChatGPT API, OpenAI, and custom solutions
                                    to enhance user experience and automate processes.
                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">✨</div>
                                <h3 className="text-xl font-bold text-white mb-4">Web Animation</h3>
                                <p className="text-white/80">
                                    Creating engaging animations and micro-interactions using Framer Motion
                                    and modern CSS techniques.
                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">📱</div>
                                <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
                                <p className="text-white/80">
                                    Mobile-first approach ensuring perfect experience across all devices
                                    and screen sizes.
                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
                                <p className="text-white/80">
                                    Optimizing for speed, accessibility, and Core Web Vitals to ensure
                                    the best possible user experience.
                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold text-white mb-4">Security</h3>
                                <p className="text-white/80">
                                    Implementing best practices for web security, GDPR compliance,
                                    and data protection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust & Quality */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                            Trust & Quality Guarantees
                        </h2>
                        <TrustBadgeGrid
                            badges={['verified', 'responsive', 'experience', 'satisfaction']}
                            variant="hero"
                            maxCols={4}
                            className="justify-center"
                        />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center  px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ready to Work Together?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and how I can help bring your vision to life.
                            I&apos;m here to help you succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Start Your Project
                            </Link>
                            <Link href="/case-studies" className="btn btn-secondary btn-lg">
                                View My Work
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
} 