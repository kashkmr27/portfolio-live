import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: "AI-Powered Travel Planner for UK Startups | React + Next.js",
    description: "How I built EasyTripAI.com—an AI-powered travel planner that delivers personalized itineraries, hidden gems, and real-time mapping. Next.js, OpenAI, MapTiler. Real results from London frontend developer.",
    keywords: "AI travel planner, React developer UK, Next.js development, OpenAI integration, UK startup, frontend developer London",
    openGraph: {
        title: "AI-Powered Travel Planner for UK Startups | React + Next.js",
        description: "How I built EasyTripAI.com—an AI-powered travel planner that delivers personalized itineraries, hidden gems, and real-time mapping.",
        url: "https://akashbuilds.com/case-studies/easytripai",
        siteName: "Akash Kumar - Frontend Developer UK",
        images: [
            {
                url: "/images/case-studies/easytripai/travel-ai.webp",
                width: 1200,
                height: 630,
                alt: "AI-powered travel planner dashboard"
            }
        ],
        locale: "en_GB",
        type: "website"
    }
};

export default function EasyTripAICaseStudy() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">


                {/* Hero Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-24 lg:py-32">
                        <div className="mb-6">
                            <Link href="/case-studies" className="text-violet-500 hover:underline text-base font-medium">
                                &larr; Back to all Case Studies
                            </Link>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            AI-Powered Travel Planner
                            <br />
                            <span className="text-gradient">for UK Startups</span>
                        </h1>

                        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Built a comprehensive AI travel planning platform using React and Next.js for a UK startup.
                            Integrated OpenAI GPT-4 for personalized itineraries and MapTiler for real-time mapping.
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">React</span>
                            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">Next.js</span>
                            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">OpenAI GPT-4</span>
                            <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">MapTiler</span>
                        </div>

                        {/* Hero Image */}
                        <div className="mt-12">
                            <Image
                                src="/images/case-studies/easytripai/travel-ai.webp"
                                alt="AI-powered travel planner dashboard for UK startups, React Next.js development"
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
                                A UK travel tech startup needed a modern web application that could generate personalized
                                travel itineraries using AI. The platform had to integrate with multiple APIs, provide
                                real-time mapping, and deliver a seamless user experience for travelers planning their trips.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed">
                                <strong className="text-violet-300">Client:</strong> UK-based travel technology startup
                                <br />
                                <strong className="text-violet-300">Challenge:</strong> Create an AI-powered travel planner that reduces planning time from 15 minutes to 30 seconds
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features/Tech Stack */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-16">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Features & Tech Stack
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold text-white mb-3">AI-Powered Itineraries</h3>
                                <p className="text-white/80 text-sm">OpenAI GPT-4 integration for personalized travel recommendations based on preferences and budget</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">🗺️</div>
                                <h3 className="text-xl font-bold text-white mb-3">Real-Time Mapping</h3>
                                <p className="text-white/80 text-sm">MapTiler integration for interactive maps with route planning and location discovery</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold text-white mb-3">Performance Optimized</h3>
                                <p className="text-white/80 text-sm">Next.js SSR and image optimization for fast loading and excellent user experience</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">📱</div>
                                <h3 className="text-xl font-bold text-white mb-3">Responsive Design</h3>
                                <p className="text-white/80 text-sm">Mobile-first approach ensuring perfect experience across all devices and screen sizes</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold text-white mb-3">Secure Authentication</h3>
                                <p className="text-white/80 text-sm">JWT-based authentication with secure user sessions and data protection</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl mb-4">📊</div>
                                <h3 className="text-xl font-bold text-white mb-3">Analytics Dashboard</h3>
                                <p className="text-white/80 text-sm">Real-time analytics and user behavior tracking for business insights</p>
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
                                <div className="text-3xl font-bold text-violet-400 mb-2">90%</div>
                                <div className="text-sm text-white/70">Reduction in planning time</div>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl font-bold text-violet-400 mb-2">50%</div>
                                <div className="text-sm text-white/70">Increase in user engagement</div>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-3xl font-bold text-violet-400 mb-2">30%</div>
                                <div className="text-sm text-white/70">Boost in user retention</div>
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
                                <p className="text-white/80 text-sm">Requirements gathering and API integration planning</p>
                            </div>
                            <div className="card text-center p-6">
                                <div className="text-2xl mb-4">⚙️</div>
                                <h3 className="text-lg font-bold text-white mb-2">Build</h3>
                                <p className="text-white/80 text-sm">React and Next.js development with AI integration</p>
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
                                &ldquo;Akash delivered an exceptional AI travel planning platform that exceeded our expectations.
                                His expertise in React and Next.js development, combined with seamless AI integration, helped us
                                launch ahead of schedule. The platform now serves thousands of users daily.&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-violet-600/20 rounded-full flex items-center justify-center">
                                    <span className="text-violet-400 font-bold text-lg">S</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Sarah Chen</div>
                                    <div className="text-sm text-violet-300">CTO, TravelTech Startup London</div>
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
                                    aria-label="Book a consultation for AI travel planning"
                                >
                                    Book a Consultation
                                </Link>
                                <a
                                    href="https://easytripai.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary btn-lg"
                                    aria-label="Visit EasyTripAI live project"
                                >
                                    Visit Live Project
                                </a>
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
                                href="/case-studies/ai-integration"
                                className="card h-full hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/case-studies/fintech-card/fintech-dashboard.png"
                                        alt="AI Integration for UK FinTech case study"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                                    AI Integration for UK FinTech
                                </h3>
                                <p className="text-white/80 text-sm">React, TypeScript, OpenAI GPT-4</p>
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