import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../../components/TrustBadgeGrid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

// SEO-optimized metadata
export const metadata = {
    title: "Frontend Development Services - React, Next.js & TypeScript London",
    description: "Professional frontend development services in London. React, Next.js, TypeScript, and modern web development. Get a free consultation for your project.",

    openGraph: {
        title: "Frontend Development Services - React, Next.js & TypeScript London",
        description: "Professional frontend development services in London. React, Next.js, TypeScript, and modern web development.",
        type: "website",
        url: "https://akashbuilds.com/services/frontend-development",
        siteName: "Akash Kumar - Frontend Developer"
    },
    twitter: {
        card: "summary",
        title: "Frontend Development Services - React, Next.js & TypeScript London",
        description: "Professional frontend development services in London. React, Next.js, TypeScript, and modern web development."
    },
    alternates: {
        canonical: "https://akashbuilds.com/services/frontend-development"
    }
};

// Service Schema
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Frontend Development",
    "description": "Professional frontend development services using React, Next.js, TypeScript, and modern web technologies",
    "provider": {
        "@type": "Person",
        "name": "Akash Kumar",
        "jobTitle": "Frontend Developer",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "UK"
        }
    },
    "serviceType": "Frontend Development",
    "areaServed": "Worldwide",
    "availableLanguage": "English",
    "offers": {
        "@type": "Offer",
        "price": "45",
        "priceCurrency": "GBP",
        "description": "Frontend development services at £45/hour"
    }
};

export default function FrontendDevelopmentPage() {
    const features = [
        {
            title: "React Development",
            description: "Custom React applications with modern hooks, context, and state management",
            icon: "⚛️"
        },
        {
            title: "Next.js Applications",
            description: "Server-side rendering, static generation, and optimized performance",
            icon: "🚀"
        },
        {
            title: "TypeScript Integration",
            description: "Type-safe development with better code quality and developer experience",
            icon: "🔒"
        },
        {
            title: "Responsive Design",
            description: "Mobile-first design that works perfectly on all devices",
            icon: "📱"
        },
        {
            title: "Performance Optimization",
            description: "Lighthouse optimization, Core Web Vitals, and fast loading times",
            icon: "⚡"
        },
        {
            title: "Modern UI/UX",
            description: "Beautiful, accessible, and user-friendly interfaces",
            icon: "🎨"
        }
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "Understanding your requirements, user needs, and technical specifications"
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Creating wireframes, mockups, and interactive prototypes"
        },
        {
            step: "03",
            title: "Development",
            description: "Building your application with modern React and Next.js"
        },
        {
            step: "04",
            title: "Testing & Optimization",
            description: "Comprehensive testing, performance optimization, and bug fixes"
        },
        {
            step: "05",
            title: "Deployment & Launch",
            description: "Deployment to production with monitoring and support"
        }
    ];

    return (
        <>
            {/* Structured Data Scripts */}
            <Script
                id="frontend-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Header />

            {/* Main Content */}
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-24 lg:py-32">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-12">
                            <ol className="flex items-center space-x-2 text-sm text-violet-300">
                                <li>
                                    <Link href="/" className="hover:text-violet-200 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-violet-400">/</span>
                                </li>
                                <li>
                                    <Link href="/services" className="hover:text-violet-200 transition-colors">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-violet-400">/</span>
                                </li>
                                <li className="text-white font-medium">Frontend Development</li>
                            </ol>
                        </nav>

                        {/* Hero Content */}
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Frontend
                                <br />
                                <span className="text-gradient">Development</span>
                            </h1>
                            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Modern, performant web applications built with React, Next.js, and TypeScript.
                                I create beautiful, responsive interfaces that deliver exceptional user experiences.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link href="/contact" className="btn btn-primary">
                                    Get Free Quote
                                </Link>
                                <Link href="/case-studies" className="btn btn-secondary">
                                    View Examples
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto">
                    <div className="max-w-6xl mx-auto px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            What I Deliver
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="card p-8">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-white/80 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            My Development Process
                        </h2>
                        <div className="space-y-8">
                            {process.map((step, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center">
                                        <span className="text-violet-400 font-bold text-lg">{step.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-white/80 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Technologies I Use
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { name: "React", icon: "⚛️" },
                                { name: "Next.js", icon: "🚀" },
                                { name: "TypeScript", icon: "🔒" },
                                { name: "Tailwind CSS", icon: "🎨" },
                                { name: "Framer Motion", icon: "✨" },
                                { name: "CSS Animations", icon: "🎬" },
                                { name: "Vercel", icon: "☁️" },
                                { name: "Git", icon: "📝" }
                            ].map((tech, index) => (
                                <div key={index} className="card text-center p-6">
                                    <div className="text-3xl mb-3">{tech.icon}</div>
                                    <div className="text-white font-semibold">{tech.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Transparent Pricing
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Simple, transparent hourly rates. No hidden fees, no surprises.
                        </p>
                        <div className="card p-8 max-w-md mx-auto">
                            <div className="text-4xl font-bold text-violet-400 mb-4">£45/hour</div>
                            <p className="text-white/80 mb-6">
                                Professional frontend development with React, Next.js, and TypeScript
                            </p>
                            <Link href="/contact" className="btn btn-primary">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Trust & Quality */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Quality Guarantees
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Every project comes with these guarantees to ensure your success.
                        </p>
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
                    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your frontend development project and create something exceptional together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get Free Consultation
                            </Link>
                            <Link href="/case-studies" className="btn btn-secondary btn-lg">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
} 