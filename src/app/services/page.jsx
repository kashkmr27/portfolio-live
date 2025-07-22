import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../components/TrustBadgeGrid';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

// SEO-optimized metadata
export const metadata = {
    title: "Web Development Services - Frontend, AI Integration & React Development London",
    description: "Professional web development services in London: React, Next.js, AI integration, ChatGPT API, web animation, and frontend development. Get a free consultation.",
    keywords: [
        "Web Development Services London",
        "Frontend Development UK",
        "React Development London",
        "AI Integration Services",
        "ChatGPT API Development",
        "Web Animation London",
        "Next.js Development UK",
        "Custom Web Applications"
    ],
    openGraph: {
        title: "Web Development Services - Frontend, AI Integration & React Development London",
        description: "Professional web development services in London: React, Next.js, AI integration, ChatGPT API, web animation, and frontend development.",
        type: "website",
        url: "https://akashbuilds.com/services",
        siteName: "Akash Kumar - Frontend Developer"
    },
    twitter: {
        card: "summary",
        title: "Web Development Services - Frontend, AI Integration & React Development London",
        description: "Professional web development services in London: React, Next.js, AI integration, ChatGPT API, web animation, and frontend development."
    },
    alternates: {
        canonical: "https://akashbuilds.com/services"
    }
};

// Structured Data Schema
const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional web development services including frontend development, React development, AI integration, and web animation",
    "url": "https://akashbuilds.com/services",
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
    "serviceType": [
        "Frontend Development",
        "React Development",
        "AI Integration",
        "Web Animation",
        "Next.js Development"
    ],
    "areaServed": "Worldwide",
    "availableLanguage": "English"
};

// Service Schema
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Comprehensive web development services including frontend development, React, AI integration, and web animation",
    "provider": {
        "@type": "Person",
        "name": "Akash Kumar",
        "jobTitle": "Frontend Developer"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Frontend Development",
                    "description": "Modern, responsive frontend development using React, Next.js, and TypeScript"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration",
                    "description": "AI integration services including ChatGPT API and OpenAI integration"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "React Development",
                    "description": "Custom React applications and components development"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Web Animation",
                    "description": "Framer Motion and modern web animation services"
                }
            }
        ]
    }
};

export default function ServicesPage() {
    const services = [
        {
            title: "Frontend Development",
            description: "Modern, responsive websites and web applications built with React, Next.js, and TypeScript. Focus on performance, accessibility, and user experience.",
            icon: "⚛️",
            href: "/services/frontend-development",
            features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
            price: "£45/hour"
        },
        {
            title: "AI Integration",
            description: "Integrate AI capabilities into your applications with ChatGPT API, OpenAI, and custom AI solutions. Automate processes and enhance user experience.",
            icon: "🤖",
            href: "/services/ai-integration",
            features: ["ChatGPT API", "OpenAI Integration", "Custom AI Solutions", "Process Automation"],
            price: "£50/hour"
        },
        {
            title: "ChatGPT API Development",
            description: "Specialized ChatGPT API integration for chatbots, content generation, and AI-powered features. Custom solutions tailored to your needs.",
            icon: "💬",
            href: "/services/chatgpt-api",
            features: ["Custom Chatbots", "Content Generation", "API Integration", "User Experience"],
            price: "£55/hour"
        },
        {
            title: "Web Animation",
            description: "Engaging web animations and micro-interactions using Framer Motion and CSS. Create memorable user experiences.",
            icon: "✨",
            href: "/services/web-animation-gsap",
            features: ["Framer Motion", "CSS Animations", "Micro-interactions", "Performance"],
            price: "£40/hour"
        },
        {
            title: "React Development",
            description: "Custom React applications, components, and libraries. Scalable, maintainable code with modern development practices.",
            icon: "⚡",
            href: "/services/react-development",
            features: ["Custom Components", "State Management", "Testing", "Documentation"],
            price: "£45/hour"
        }
    ];

    return (
        <>
            {/* Structured Data Scripts */}
            <Script
                id="services-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-12">
                            <ol className="flex items-center justify-center space-x-2 text-sm text-violet-300">
                                <li>
                                    <Link href="/" className="hover:text-violet-200 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-violet-400">/</span>
                                </li>
                                <li className="text-white font-medium">Services</li>
                            </ol>
                        </nav>

                        {/* H1 - SEO Optimized */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            Web Development
                            <br />
                            <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Professional web development services tailored to your business needs.
                            From frontend development to AI integration, I help UK businesses build
                            high-performance digital solutions.
                        </p>

                        {/* Trust Badges */}
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

                {/* Services Grid */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="card p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="text-4xl mb-6">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>

                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-3">What&apos;s Included:</h4>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-2 text-white/70">
                                                    <span className="text-violet-400">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-violet-400 font-semibold">{service.price}</span>
                                        <Link href={service.href} className="btn btn-primary">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Me */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center  px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                            Why Choose Me
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="card p-8 text-center">
                                <div className="text-3xl mb-4">🇬🇧</div>
                                <h3 className="text-xl font-bold text-white mb-4">UK-Based</h3>
                                <p className="text-white/80">
                                    Local understanding of UK business needs, GDPR compliance, and communication preferences.
                                </p>
                            </div>
                            <div className="card p-8 text-center">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold text-white mb-4">Fast Delivery</h3>
                                <p className="text-white/80">
                                    Quick turnaround times without compromising quality. I respect your deadlines.
                                </p>
                            </div>
                            <div className="card p-8 text-center">
                                <div className="text-3xl mb-4">💬</div>
                                <h3 className="text-xl font-bold text-white mb-4">Clear Communication</h3>
                                <p className="text-white/80">
                                    Regular updates, transparent pricing, and ongoing support throughout the project.
                                </p>
                            </div>
                            <div className="card p-8 text-center">
                                <div className="text-3xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
                                <p className="text-white/80">
                                    Best practices for security, performance, and maintainable code that scales.
                                </p>
                            </div>
                            <div className="card p-8 text-center">
                                <div className="text-3xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold text-white mb-4">Results-Focused</h3>
                                <p className="text-white/80">
                                    Every project is built with your business goals and user experience in mind.
                                </p>
                            </div>
                            <div className="card p-8 text-center">
                                <div className="text-3xl mb-4">🛠️</div>
                                <h3 className="text-xl font-bold text-white mb-4">Modern Tech</h3>
                                <p className="text-white/80">
                                    Latest technologies and best practices to ensure your project stays competitive.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            My Process
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery",
                                    description: "Understanding your needs, goals, and project requirements"
                                },
                                {
                                    step: "02",
                                    title: "Planning",
                                    description: "Creating a detailed roadmap, timeline, and technical approach"
                                },
                                {
                                    step: "03",
                                    title: "Development",
                                    description: "Building with regular check-ins, updates, and feedback loops"
                                },
                                {
                                    step: "04",
                                    title: "Launch",
                                    description: "Deployment, testing, and ongoing support for your success"
                                }
                            ].map((process, index) => (
                                <div key={index} className="card p-8 text-center">
                                    <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-violet-400 font-bold text-xl">{process.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                                    <p className="text-white/80">{process.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center  px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your requirements and how I can help bring your vision to life.
                            I offer free consultations to understand your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get Started
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