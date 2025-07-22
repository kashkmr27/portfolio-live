import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../../components/TrustBadgeGrid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: "React Development Services - Custom React Applications & Components",
    description: "Professional React development services. Custom React applications, components, and libraries. Scalable, maintainable code with modern development practices.",
    keywords: [
        "React Development Services",
        "React Developer UK",
        "Custom React Applications",
        "React Components",
        "React Libraries",
        "React Development London",
        "React Developer"
    ],
    openGraph: {
        title: "React Development Services - Custom React Applications & Components",
        description: "Professional React development services. Custom React applications, components, and libraries.",
        type: "website",
        url: "https://akashbuilds.com/services/react-development"
    }
};

export default function ReactDevelopmentPage() {
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
                                <li className="text-white font-medium">React Development</li>
                            </ol>
                        </nav>

                        {/* Hero Content */}
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                React
                                <br />
                                <span className="text-gradient">Development</span>
                            </h1>
                            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Custom React applications, components, and libraries. Scalable, maintainable code with modern development practices.
                                Build powerful, interactive web applications that users love.
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
                            React Development Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Custom Components",
                                    description: "Reusable, maintainable React components",
                                    icon: "⚛️",
                                    price: "£45/hour"
                                },
                                {
                                    title: "State Management",
                                    description: "Redux, Context API, and modern state solutions",
                                    icon: "📊",
                                    price: "£40/hour"
                                },
                                {
                                    title: "Testing",
                                    description: "Comprehensive testing with Jest and React Testing Library",
                                    icon: "🧪",
                                    price: "£35/hour"
                                },
                                {
                                    title: "Performance",
                                    description: "Optimized React applications for speed and efficiency",
                                    icon: "⚡",
                                    price: "£40/hour"
                                },
                                {
                                    title: "Documentation",
                                    description: "Clear documentation and code comments",
                                    icon: "📚",
                                    price: "£30/hour"
                                },
                                {
                                    title: "Deployment",
                                    description: "CI/CD setup and production deployment",
                                    icon: "🚀",
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
                    <div className="max-w-4xl mx-auto text-center  px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ready to Build with React?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your React development needs and create powerful, scalable applications.
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