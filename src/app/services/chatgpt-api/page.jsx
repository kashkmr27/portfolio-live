import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../../components/TrustBadgeGrid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: "ChatGPT API Development Services - Custom AI Chatbots & Content Generation",
    description: "Specialized ChatGPT API development services. Custom chatbots, content generation, and AI-powered features. UK-based developer with proven results.",
    keywords: [
        "ChatGPT API Developer",
        "Custom Chatbots",
        "AI Content Generation",
        "OpenAI Integration",
        "ChatGPT Implementation",
        "AI Developer UK",
        "Chatbot Development"
    ],
    openGraph: {
        title: "ChatGPT API Development Services - Custom AI Chatbots & Content Generation",
        description: "Specialized ChatGPT API development services. Custom chatbots, content generation, and AI-powered features.",
        type: "website",
        url: "https://akashbuilds.com/services/chatgpt-api"
    }
};

export default function ChatGPTAPIPage() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 lg:py-32">
                    <div className="max-w-4xl mx-auto">
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
                                <li className="text-white font-medium">ChatGPT API</li>
                            </ol>
                        </nav>

                        {/* Hero Content */}
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                ChatGPT API
                                <br />
                                <span className="text-gradient">Development</span>
                            </h1>
                            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Specialized ChatGPT API integration for custom chatbots, content generation, and AI-powered features.
                                Tailored solutions that enhance user experience and automate processes.
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

                {/* Services Grid */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            ChatGPT API Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Custom Chatbots",
                                    description: "Tailored chatbot solutions for your specific use case",
                                    icon: "🤖",
                                    price: "£55/hour"
                                },
                                {
                                    title: "Content Generation",
                                    description: "AI-powered content creation and automation",
                                    icon: "✍️",
                                    price: "£50/hour"
                                },
                                {
                                    title: "API Integration",
                                    description: "Seamless ChatGPT API integration into existing systems",
                                    icon: "🔗",
                                    price: "£60/hour"
                                },
                                {
                                    title: "User Experience",
                                    description: "Optimized UX for AI-powered features",
                                    icon: "🎯",
                                    price: "£45/hour"
                                },
                                {
                                    title: "Testing & Optimization",
                                    description: "Comprehensive testing and performance optimization",
                                    icon: "⚡",
                                    price: "£40/hour"
                                },
                                {
                                    title: "Maintenance",
                                    description: "Ongoing support and maintenance services",
                                    icon: "🔧",
                                    price: "£35/hour"
                                }
                            ].map((service, index) => (
                                <div key={index} className="card p-8">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-violet-400 font-semibold">{service.price}</span>
                                        <Link href="/contact" className="btn btn-primary">
                                            Get Quote
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ready to Add AI to Your Platform?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your ChatGPT API needs and create a solution that enhances your user experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get Started
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