import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../components/TrustBadgeGrid';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: "Contact Akash Kumar - Frontend & Aspiring Product Engineer, AI Integration Specialist London",
    description: "Get in touch for React, Next.js, and AI integration projects. Free consultation available. UK-based frontend developer for startups and agencies.",

    openGraph: {
        title: "Contact Akash Kumar - Frontend & Aspiring Product Engineer, AI Integration Specialist London",
        description: "Get in touch for React, Next.js, and AI integration projects. Free consultation available.",
        type: "website",
        url: "https://akashbuilds.com/contact",
        siteName: "Akash Kumar - Frontend & Aspiring Product Engineer"
    },
    twitter: {
        card: "summary",
        title: "Contact Akash Kumar - Frontend Developer & AI Integration Specialist London",
        description: "Get in touch for React, Next.js, and AI integration projects. Free consultation available."
    },
    alternates: {
        canonical: "https://akashbuilds.com/contact"
    }
};

// Structured Data for Contact Page
const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Akash Kumar",
    "description": "Contact page for Akash Kumar - Frontend & Aspiring Product Engineer and AI Integration Specialist",
    "url": "https://akashbuilds.com/contact",
    "mainEntity": {
        "@type": "Person",
        "name": "Akash Kumar",
        "jobTitle": "Front-End Engineer",
        "email": "akash@akashbuilds.com",
        "url": "https://akashbuilds.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "UK"
        },
        "sameAs": [
            "https://linkedin.com/in/akashbuilds",
            "https://github.com/akashbuilds"
        ]
    }
};

// FAQ Schema
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How quickly do you respond to inquiries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "I typically respond within 24 hours during business days. For urgent projects, I aim to respond within 4-6 hours."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer free consultations?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, I offer a free 30-minute consultation to discuss your project requirements and how I can help bring your vision to life."
            }
        },
        {
            "@type": "Question",
            "name": "What information should I include in my project brief?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Please include your project goals, target audience, timeline, budget range, and any specific features or technologies you have in mind."
            }
        },
        {
            "@type": "Question",
            "name": "Do you work with international clients?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, I work with clients worldwide. I'm based in London but collaborate remotely with teams across different time zones."
            }
        }
    ]
};

export default function ContactPage() {
    return (
        <>
            {/* Structured Data Scripts */}
            <Script
                id="contact-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-24 lg:py-32">
                        {/* Hero Content */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Let&apos;s Work
                                <br />
                                <span className="text-gradient">Together</span>
                            </h1>
                            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Ready to bring your vision to life? Whether you need a custom React application,
                                AI integration, or a complete web solution, I&apos;m here to help.
                                Let&apos;s discuss your project and create something exceptional.
                            </p>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mb-16">
                            <TrustBadgeGrid
                                badges={['verified', 'responsive', 'experience', 'satisfaction']}
                                variant="hero"
                                maxCols={4}
                                className="justify-center"
                            />
                        </div>
                    </div>
                </section>

                {/* Contact Methods Section */}
                <section className="container mx-auto">
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                            {/* Email Contact */}
                            <div className="card p-8 text-center">
                                <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Email</h3>
                                <p className="text-white/80 mb-4">Direct communication for project inquiries</p>
                                <a
                                    href="mailto:contact@akashbuilds.com"
                                    className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
                                >
                                    contact@akashbuilds.com
                                </a>
                            </div>

                            {/* Calendly Booking */}
                            <div className="card p-8 text-center">
                                <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Schedule a Call</h3>
                                <p className="text-white/80 mb-4">Free 30-minute consultation</p>
                                <a
                                    href="https://calendly.com/connect-akashbuilds/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Book Consultation
                                </a>
                            </div>

                            {/* Location */}
                            <div className="card p-8 text-center">
                                <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Location</h3>
                                <p className="text-white/80 mb-4">Based in London, UK</p>
                                <p className="text-violet-400 font-medium">Remote work worldwide</p>
                            </div>
                        </div>

                        {/* Calendly Widget Section */}
                        <div className="card p-8 mb-16">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-4">Book Your Free Consultation</h2>
                                <p className="text-white/80 max-w-2xl mx-auto">
                                    Let&apos;s discuss your project requirements, timeline, and how I can help bring your vision to life.
                                    Choose a time that works best for you.
                                </p>
                            </div>
                            <div className="calendly-inline-widget"
                                data-url="https://calendly.com/connect-akashbuilds/30min"
                                style={{ minWidth: '320px', height: '700px' }}>
                            </div>
                            <Script
                                src="https://assets.calendly.com/assets/external/widget.js"
                                strategy="lazyOnload"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="card p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-4">Connect With Me</h2>
                                <p className="text-white/80">
                                    Follow my work and stay updated with the latest in frontend development and AI integration.
                                </p>
                            </div>
                            <div className="flex justify-center gap-6">
                                <a
                                    href="https://linkedin.com/in/akashbuilds"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-violet-500 transition-colors group"
                                    aria-label="LinkedIn Profile"
                                >
                                    <svg className="w-6 h-6 text-white group-hover:text-violet-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="text-white font-medium">LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/akashbuilds"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-violet-500 transition-colors group"
                                    aria-label="GitHub Profile"
                                >
                                    <svg className="w-6 h-6 text-white group-hover:text-violet-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="text-white font-medium">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="card p-6">
                                <h3 className="text-lg font-bold text-white mb-3">
                                    How quickly do you respond to inquiries?
                                </h3>
                                <p className="text-white/80">
                                    I typically respond within 24 hours during business days. For urgent projects, I aim to respond within 4-6 hours.
                                </p>
                            </div>

                            <div className="card p-6">
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Do you offer free consultations?
                                </h3>
                                <p className="text-white/80">
                                    Yes, I offer a free 30-minute consultation to discuss your project requirements and how I can help bring your vision to life.
                                </p>
                            </div>

                            <div className="card p-6">
                                <h3 className="text-lg font-bold text-white mb-3">
                                    What information should I include in my project brief?
                                </h3>
                                <p className="text-white/80">
                                    Please include your project goals, target audience, timeline, budget range, and any specific features or technologies you have in mind.
                                </p>
                            </div>

                            <div className="card p-6">
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Do you work with international clients?
                                </h3>
                                <p className="text-white/80">
                                    Yes, I work with clients worldwide. I&apos;m based in London but collaborate remotely with teams across different time zones.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center px-4 py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Whether you have a clear vision or just an idea, I&apos;m here to help bring it to life.
                            Let&apos;s create something amazing together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://calendly.com/connect-akashbuilds/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                Book Free Consultation
                            </a>
                            <Link href="/case-studies" className="btn btn-secondary btn-lg">
                                View My Work
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
} 