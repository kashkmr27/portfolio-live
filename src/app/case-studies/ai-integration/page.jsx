import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: "AI Integration for UK FinTech — Boosted User Retention by 30% | React + Next.js",
    description: "How I built an AI-powered customer service chatbot for a UK FinTech startup using OpenAI GPT-4. Next.js, TypeScript, real-time processing. 30% boost in user retention, 50% faster support resolution.",
    keywords: "AI Integration Case Study, ChatGPT API Developer UK, Frontend Developer London, OpenAI Integration, FinTech Development, Customer Service AI, Next.js Developer, TypeScript Developer, AI Chatbot Development, UK Web Developer",
    openGraph: {
        title: "AI Integration for UK FinTech — Boosted User Retention by 30%",
        description: "How I built an AI-powered customer service chatbot for a UK FinTech startup using OpenAI GPT-4. Real-time processing, intelligent responses.",
        url: "https://akashbuilds.com/case-studies/ai-integration",
        siteName: "Akash Kumar - Frontend Developer UK",
        images: [
            {
                url: "/images/case-studies/fintech-card/fintech-dashboard.png",
                width: 1200,
                height: 630,
                alt: "AI-powered customer service dashboard for UK FinTech"
            }
        ],
        locale: "en_GB",
        type: "website"
    }
};

export default function AIIntegrationCaseStudy() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">


                {/* Hero Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center px-4 py-24 lg:py-32">
                        <div className="mb-6">
                            <Link href="/case-studies" className="text-violet-500 hover:underline text-base font-medium">
                                &larr; Back to all Case Studies
                            </Link>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            AI Integration for UK FinTech
                            <br />
                            <span className="text-gradient">Boosted User Retention by 30%</span>
                        </h1>

                        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Built an AI-powered customer service chatbot for a UK FinTech startup using OpenAI GPT-4.
                            Real-time processing with intelligent responses and seamless human handoff capabilities.
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">React</span>
                            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">Next.js</span>
                            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">OpenAI GPT-4</span>
                            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">TypeScript</span>
                        </div>

                        {/* Hero Image */}
                        <div className="mt-12">
                            <Image
                                src="/images/case-studies/fintech-card/fintech-dashboard.png"
                                alt="AI-powered customer service dashboard for UK FinTech, React Next.js development"
                                width={1200}
                                height={630}
                                className="rounded-2xl shadow-2xl w-full"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
                            />
                        </div>
                    </div>
                </section>

                {/* Project Overview */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Project Overview
                        </h2>
                        <div className="card p-8">
                            <p className="text-lg text-white/80 mb-6 leading-relaxed">
                                A UK-based FinTech startup needed to scale their customer service operations without
                                increasing headcount. They required an AI solution that could handle complex financial
                                queries while maintaining the personal touch their customers expected.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed">
                                <strong className="text-violet-300">Client:</strong> UK FinTech startup specializing in digital banking
                                <br />
                                <strong className="text-violet-300">Challenge:</strong> Create an AI chatbot that could understand complex financial queries and provide accurate responses
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features/Tech Stack */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-16">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Features & Tech Stack
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold text-white mb-3">AI-Powered Responses</h3>
                                <p className="text-white/80 text-sm">OpenAI GPT-4 integration with custom prompt engineering for accurate financial responses</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold text-white mb-3">Real-time Processing</h3>
                                <p className="text-white/80 text-sm">WebSocket connections for instant responses and live conversation tracking</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">🔄</div>
                                <h3 className="text-xl font-bold text-white mb-3">Smart Handoff</h3>
                                <p className="text-white/80 text-sm">Intelligent escalation system that seamlessly transfers complex queries to human agents</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">📊</div>
                                <h3 className="text-xl font-bold text-white mb-3">Analytics Dashboard</h3>
                                <p className="text-white/80 text-sm">Comprehensive analytics to track performance, response times, and customer satisfaction</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold text-white mb-3">Security & Compliance</h3>
                                <p className="text-white/80 text-sm">GDPR-compliant data handling with end-to-end encryption and secure API communication</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">🏗️</div>
                                <h3 className="text-xl font-bold text-white mb-3">Scalable Architecture</h3>
                                <p className="text-white/80 text-sm">Built with Next.js and TypeScript for performance, maintainability, and future scalability</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Business Results */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Results & Impact
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card text-center p-6">
                                <div className="text-3xl font-bold text-violet-400 mb-2">30%</div>
                                <div className="text-sm text-white/70">User Retention Boost</div>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl font-bold text-violet-400 mb-2">50%</div>
                                <div className="text-sm text-white/70">Faster Resolution</div>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl font-bold text-violet-400 mb-2">40%</div>
                                <div className="text-sm text-white/70">Cost Reduction</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Snapshot */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-16">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Process Snapshot
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="card text-center p-6">
                                <div className="text-2xl mb-4">🔍</div>
                                <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
                                <p className="text-white/80 text-sm">Requirements analysis and API integration planning</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-2xl mb-4">⚙️</div>
                                <h3 className="text-lg font-bold text-white mb-2">Build</h3>
                                <p className="text-white/80 text-sm">AI integration with OpenAI GPT-4 and real-time processing</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-2xl mb-4">🧪</div>
                                <h3 className="text-lg font-bold text-white mb-2">Test</h3>
                                <p className="text-white/80 text-sm">Comprehensive testing and performance optimization</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-2xl mb-4">🚀</div>
                                <h3 className="text-lg font-bold text-white mb-2">Launch</h3>
                                <p className="text-white/80 text-sm">Deployment and ongoing support and maintenance</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Testimonial */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-16">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Client Testimonial
                        </h2>
                        <div className="card p-8">
                            <blockquote className="text-xl text-white/90 italic mb-6 leading-relaxed">
                                &ldquo;Akash delivered an exceptional AI integration that transformed our customer service operations.
                                The chatbot handles complex financial queries with remarkable accuracy, and the seamless handoff
                                to human agents ensures our customers always get the help they need. The 30% boost in user retention
                                exceeded our expectations.&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-violet-600/20 rounded-full flex items-center justify-center">
                                    <span className="text-violet-400 font-bold text-lg">J</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">John Davis</div>
                                    <div className="text-sm text-violet-300">CTO, UK FinTech Startup</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-16">
                        <div className="card card-lg text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Want Results Like This?
                            </h2>
                            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                                Book a consultation for your React/AI project and let&apos;s discuss how I can help
                                transform your business with modern web development and AI integration.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="/contact"
                                    className="btn btn-primary btn-lg"
                                    aria-label="Book a consultation for AI integration services"
                                >
                                    Book a Consultation
                                </Link>
                                <Link
                                    href="/services/ai-integration"
                                    className="btn btn-secondary btn-lg"
                                    aria-label="Learn more about AI integration services"
                                >
                                    View AI Services
                                </Link>
                            </div>

                            <p className="text-sm text-white/60">
                                Ready to boost your business with AI? Get in touch for a free consultation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Related Case Studies */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-16">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            See More Case Studies Like This
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Link
                                href="/case-studies/easytripai"
                                className="card h-full hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/case-studies/easytripai/travel-ai.webp"
                                        alt="EasyTripAI case study"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                                    EasyTripAI - AI Travel Planner
                                </h3>
                                <p className="text-white/80 text-sm">React, Next.js, OpenAI GPT-4</p>
                            </Link>
                            <Link
                                href="/portfolio"
                                className="card h-full hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/portfolio/innov.webp"
                                        alt="Portfolio showcase"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                                    View All Projects
                                </h3>
                                <p className="text-white/80 text-sm">Explore more of my work</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
} 