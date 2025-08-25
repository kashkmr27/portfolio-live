import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: "Developer Tools - AI Sanitizer & Testing Utilities",
    description: "Free developer tools for AI testing, data sanitization, and ChatGPT API development. GDPR-compliant utilities for safe development.",

    openGraph: {
        title: "Developer Tools - AI Sanitizer & Testing Utilities",
        description: "Free developer tools for AI testing, data sanitization, and ChatGPT API development.",
        type: "website",
        url: "https://akashbuilds.com/tools",
        siteName: "Akash Kumar - Frontend Developer"
    },
    twitter: {
        card: "summary",
        title: "Developer Tools - AI Sanitizer & Testing Utilities",
        description: "Free developer tools for AI testing, data sanitization, and ChatGPT API development."
    },
    alternates: {
        canonical: "https://akashbuilds.com/tools"
    }
};

const tools = [
    {
        title: "AI Data Sanitizer",
        description: "Generate GDPR-compliant, anonymized test data from JSON schemas for safe ChatGPT API testing. Protect sensitive information while maintaining data structure.",
        icon: "🔒",
        href: "/tools/ai-sanitizer",
        features: [
            "GDPR-compliant anonymization",
            "Intelligent field detection",
            "Realistic test data generation",
            "Safe for ChatGPT API testing"
        ],
        category: "AI Testing"
    }
];

const ToolCard = ({ tool }) => {
    return (
        <Link
            href={tool.href}
            className="card p-6 hover:shadow-xl transition-all duration-300 group"
        >
            <div className="flex items-start space-x-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                    {tool.icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                        {tool.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                        {tool.description}
                    </p>
                    <div className="space-y-2">
                        {tool.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                                <span className="text-white/60 text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default function ToolsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            Developer Tools
                        </h1>
                        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Free utilities and tools to help developers build better AI applications,
                            test safely, and maintain GDPR compliance. Built for the modern development workflow.
                        </p>
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tools.map((tool, index) => (
                                <ToolCard key={index} tool={tool} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center px-4 py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Need a Custom Tool?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Have a specific development challenge? I can build custom tools and utilities
                            tailored to your workflow and requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Request Custom Tool
                            </Link>
                            <Link href="/services" className="btn btn-secondary btn-lg">
                                View Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
} 