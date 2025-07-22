import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../../components/TrustBadgeGrid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

// SEO-optimized metadata for AI services
export const metadata = {
    title: "AI Integration Developer UK | ChatGPT API & Custom AI Solutions",
    description: "Hire a UK-based AI integration specialist for ChatGPT API implementations, custom AI features, and AI-powered web applications. Free consultation available.",
    keywords: [
        "AI Integration Developer",
        "ChatGPT API Developer",
        "Custom AI Solutions UK",
        "OpenAI Integration Expert",
        "AI Web Development",
        "ChatGPT Implementation Service",
        "AI Developer UK",
        "AI for Startups",
        "Travel AI Developer",
        "Real-time AI Processing"
    ],
    openGraph: {
        title: "AI Integration Services UK | ChatGPT API & Custom AI Development",
        description: "Expert AI integration services for UK businesses. Specializing in ChatGPT API, custom AI features, and AI-powered web applications.",
        type: "website",
        url: "https://akashbuilds.com/services/ai-integration",
        siteName: "AkashBuilds - AI Integration Developer",
        images: [{
            url: "https://akashbuilds.com/og-ai-integration.jpg",
            width: 1200,
            height: 630,
            alt: "AI Integration Developer UK"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Integration Services UK | ChatGPT API & Custom AI Development",
        description: "Hire a UK-based AI specialist for ChatGPT implementations and custom AI solutions.",
        images: ["https://akashbuilds.com/twitter-ai-integration.jpg"]
    },
    alternates: {
        canonical: "https://akashbuilds.com/services/ai-integration"
    }
};

// Structured data for AI services
const aiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Integration Services",
    "description": "Professional AI integration services including ChatGPT API implementations, custom AI solutions, and AI-powered web applications.",
    "provider": {
        "@type": "Person",
        "name": "Akash Kumar",
        "jobTitle": "AI Integration Developer",
        "url": "https://akashbuilds.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressRegion": "England",
            "addressCountry": "UK"
        }
    },
    "serviceType": [
        "AI Integration",
        "ChatGPT API Development",
        "Custom AI Solutions"
    ],
    "areaServed": {
        "@type": "Country",
        "name": "UK"
    },
    "offers": {
        "@type": "Offer",
        "name": "AI Integration Package",
        "price": "499",
        "priceCurrency": "GBP",
        "description": "Basic ChatGPT API integration starting from £499"
    }
};

// AI solutions offered
const aiSolutions = [
    {
        title: "ChatGPT API Integration",
        description: "Seamless implementation for chatbots, content generation, and customer support",
        icon: "💬",
        price: "From £499"
    },
    {
        title: "AI-Powered Search",
        description: "Intelligent semantic search with natural language processing",
        icon: "🔍",
        price: "From £799"
    },
    {
        title: "Personalization Engines",
        description: "User-specific recommendations based on behavior analysis",
        icon: "🎯",
        price: "From £899"
    },
    {
        title: "Automated Content Systems",
        description: "Dynamic content generation for products, blogs, and marketing",
        icon: "📝",
        price: "From £699"
    }
];

// AI integration process
const aiProcess = [
    {
        step: "1",
        title: "AI Strategy Session",
        description: "Identify high-impact AI opportunities for your business"
    },
    {
        step: "2",
        title: "Proof of Concept",
        description: "Develop a working prototype to demonstrate value"
    },
    {
        step: "3",
        title: "Data Pipeline Setup",
        description: "Create secure connections between your data and AI models"
    },
    {
        step: "4",
        title: "Custom Implementation",
        description: "Build and integrate AI features into your platform"
    },
    {
        step: "5",
        title: "Optimization & Scaling",
        description: "Refine AI performance and prepare for growth"
    }
];

// Technologies
const aiTechnologies = [
    { name: "ChatGPT API", icon: "💬" },
    { name: "OpenAI", icon: "🔮" },
    { name: "Gemini API", icon: "🌟" },
    { name: "LangChain", icon: "⛓️" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "Vector Databases", icon: "🗃️" },
    { name: "Python", icon: "🐍" },
    { name: "Next.js", icon: "🚀" }
];

export default function AIIntegrationPage() {
    return (
        <>
            {/* Structured Data */}
            <Script
                id="ai-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aiServiceSchema) }}
            />

            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900">
                {/* Hero Section */}
                <section className="pt-24 pb-20 md:pt-32 md:pb-28">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                                <div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-7 leading-tight">
                                        AI Integration Specialist <br />
                                        <span className="text-gradient">UK-Based ChatGPT API Developer</span>
                                    </h1>

                                    <p className="text-xl text-white/80 mb-7 leading-relaxed">
                                        Transform your business with custom AI solutions. Specializing in ChatGPT API integration, AI-powered applications, and real-time data processing for UK companies.
                                    </p>

                                    <div className="flex flex-wrap gap-4 mt-8">
                                        <Link href="/contact" className="btn btn-primary">
                                            Get AI Consultation
                                        </Link>
                                        <Link href="/case-studies/ai-integration" className="btn btn-secondary">
                                            See AI Case Study
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative flex justify-center lg:justify-end">
                                    <div className="relative">
                                        <Image
                                            src="/images/case-studies/easytripai/travel-ai.webp"
                                            alt="AI Integration Developer UK"
                                            width={550}
                                            height={450}
                                            className="rounded-2xl shadow-2xl border-2 border-indigo-500/30"
                                            priority
                                        />
                                        <div className="absolute -bottom-5 -left-5 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-indigo-400/20 shadow-lg">
                                            <div className="flex items-center gap-2">
                                                <span className="text-indigo-400 text-2xl">🚀</span>
                                                <span className="text-white font-medium">Live AI Projects</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Solutions Grid */}
                <section className="py-16 bg-slate-800/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    AI Integration Services
                                </h2>
                                <p className="text-white/80 max-w-2xl mx-auto">
                                    Custom AI solutions designed for your business needs
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {aiSolutions.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-b from-slate-800/40 to-slate-900/60 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-400/40 transition-all"
                                    >
                                        <div className="text-4xl mb-4">{solution.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                                        <p className="text-white/80 mb-4">{solution.description}</p>
                                        <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between items-center">
                                            <span className="text-indigo-400 font-medium">{solution.price}</span>
                                            <Link
                                                href="/contact"
                                                className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded-lg transition-colors"
                                            >
                                                Get Quote
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study Showcase */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="bg-slate-800/40 border border-indigo-500/20 rounded-xl overflow-hidden">
                                        <Image
                                            src="/images/case-studies/easytripai/travel-ai.webp"
                                            alt="Travel AI Case Study"
                                            width={600}
                                            height={400}
                                            className="w-full"
                                        />
                                        <div className="p-6">
                                            <span className="inline-block px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm font-medium mb-3">
                                                Case Study
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-2">Travel Planner AI</h3>
                                            <p className="text-white/80 mb-4">
                                                Custom ChatGPT API implementation that reduced itinerary planning time from 15 minutes to 30 seconds.
                                            </p>
                                            <div className="flex flex-wrap gap-8 mt-6">
                                                <div>
                                                    <div className="text-3xl font-bold text-indigo-400">40%</div>
                                                    <div className="text-white/80 text-sm">Faster planning</div>
                                                </div>
                                                <div>
                                                    <div className="text-3xl font-bold text-indigo-400">27%</div>
                                                    <div className="text-white/80 text-sm">Engagement increase</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Real-World AI Implementation
                                    </h2>
                                    <p className="text-white/80 mb-6 leading-relaxed">
                                        I specialize in building practical AI solutions that deliver measurable business results:
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start">
                                            <span className="text-indigo-400 mt-1 mr-3">✓</span>
                                            <span className="text-white/90"><strong>Travel Planner AI:</strong> ChatGPT-powered itinerary generator</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-400 mt-1 mr-3">✓</span>
                                            <span className="text-white/90"><strong>E-commerce Recommender:</strong> AI that boosted conversions by 27%</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-400 mt-1 mr-3">✓</span>
                                            <span className="text-white/90"><strong>Healthcare Chatbot:</strong> HIPAA-compliant symptom checker</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-indigo-400 mt-1 mr-3">✓</span>
                                            <span className="text-white/90"><strong>Content Generation System:</strong> Automated marketing content creation</span>
                                        </li>
                                    </ul>
                                    <Link
                                        href="/case-studies"
                                        className="btn btn-primary inline-flex items-center"
                                    >
                                        View All AI Case Studies
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Integration Process */}
                <section className="py-20 bg-gradient-to-r from-indigo-900/30 to-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    AI Implementation Process
                                </h2>
                                <p className="text-white/80 max-w-2xl mx-auto">
                                    Structured approach for successful AI integration
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute left-0 right-0 top-16 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0"></div>

                                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                                    {aiProcess.map((step, index) => (
                                        <div key={index} className="text-center">
                                            <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/30">
                                                <span className="text-indigo-400 font-bold text-xl">{step.step}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-white/80 text-sm">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-20 text-center">
                                <Link href="/contact" className="btn btn-secondary">
                                    Start Your AI Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    AI Technology Stack
                                </h2>
                                <p className="text-white/80 max-w-2xl mx-auto">
                                    Cutting-edge tools for powerful AI solutions
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {aiTechnologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="bg-slate-800/40 border border-indigo-500/10 rounded-xl p-6 text-center hover:border-indigo-400/30 transition-all"
                                    >
                                        <div className="text-4xl mb-3">{tech.icon}</div>
                                        <div className="text-white font-medium">{tech.name}</div>
                                    </div>
                                ))}
                            </div>
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
                            Simple, transparent hourly rates for AI integration services.
                        </p>
                        <div className="card p-8 max-w-md mx-auto">
                            <div className="text-4xl font-bold text-violet-400 mb-4">£50/hour</div>
                            <p className="text-white/80 mb-6">
                                Professional AI integration with ChatGPT API, OpenAI, and custom solutions
                            </p>
                            <Link href="/contact" className="btn btn-primary">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    AI Integration FAQs
                                </h2>
                                <p className="text-white/80 max-w-xl mx-auto">
                                    Common questions about implementing AI solutions
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        How quickly can you implement ChatGPT API?
                                    </h3>
                                    <p className="text-white/80">
                                        Basic implementations take 1-3 days. Custom solutions typically require 1-2 weeks. I provide a detailed timeline during our initial consultation based on your specific requirements.
                                    </p>
                                </div>

                                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        Do I need technical expertise to use AI solutions?
                                    </h3>
                                    <p className="text-white/80">
                                        Not at all. I build turnkey solutions with intuitive interfaces. For enterprise solutions, I provide comprehensive training and documentation.
                                    </p>
                                </div>

                                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        Can you work with our existing tech stack?
                                    </h3>
                                    <p className="text-white/80">
                                        Yes! I specialize in integrating AI with various platforms including WordPress, Shopify, React, Next.js, and custom systems. API-first approach ensures compatibility.
                                    </p>
                                </div>

                                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        How do you handle data privacy and security?
                                    </h3>
                                    <p className="text-white/80">
                                        All implementations follow GDPR compliance standards. I implement strict data handling protocols, encryption, and can configure on-premise solutions for sensitive data.
                                    </p>
                                </div>

                                <div className="text-center mt-10">
                                    <Link href="/contact" className="btn btn-primary">
                                        Ask More Questions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/30 to-slate-900/50 border border-indigo-500/20 rounded-3xl p-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Transform Your Business with AI?
                            </h2>
                            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                                Book a free consultation to discover how AI can solve your specific business challenges.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/contact" className="btn btn-primary btn-lg">
                                    Get Free AI Consultation
                                </Link>
                                <Link href="/case-studies" className="btn btn-secondary btn-lg">
                                    See AI Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
} 