import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../../components/TrustBadgeGrid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: "Web Animation Services - Engaging Animations & Micro-interactions",
    description: "Professional web animation services using Framer Motion and CSS. Create engaging animations and micro-interactions that enhance user experience.",
    keywords: [
        "Web Animation Services",
        "Framer Motion",
        "CSS Animations",
        "Micro-interactions",
        "Web Animation London",
        "Animation Developer UK"
    ],
    openGraph: {
        title: "Web Animation Services - Engaging Animations & Micro-interactions",
        description: "Professional web animation services using Framer Motion and CSS. Create engaging animations and micro-interactions.",
        type: "website",
        url: "https://akashbuilds.com/services/web-animation-gsap"
    }
};

export default function WebAnimationPage() {
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
                                <li className="text-white font-medium">Web Animation</li>
                            </ol>
                        </nav>

                        {/* Hero Content */}
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Web Animation
                                <br />
                                <span className="text-gradient">Services</span>
                            </h1>
                            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Create engaging web animations and micro-interactions using Framer Motion and CSS.
                                Transform your website with smooth, performant animations that enhance user experience.
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
                            Animation Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Framer Motion",
                                    description: "React-based animations with smooth transitions and gestures",
                                    icon: "🎬",
                                    price: "£40/hour"
                                },
                                {
                                    title: "CSS Animations",
                                    description: "Lightweight CSS animations for performance-critical applications",
                                    icon: "🎨",
                                    price: "£35/hour"
                                },
                                {
                                    title: "Micro-interactions",
                                    description: "Subtle animations that provide feedback and enhance UX",
                                    icon: "⚡",
                                    price: "£30/hour"
                                },
                                {
                                    title: "Page Transitions",
                                    description: "Smooth page transitions and loading animations",
                                    icon: "🔄",
                                    price: "£35/hour"
                                },
                                {
                                    title: "Hover Effects",
                                    description: "Interactive hover animations and button effects",
                                    icon: "👆",
                                    price: "£25/hour"
                                },
                                {
                                    title: "Performance Optimization",
                                    description: "Optimized animations for 60fps performance",
                                    icon: "🚀",
                                    price: "£20/hour"
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
                            Ready to Animate Your Website?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your animation needs and create engaging experiences that delight your users.
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