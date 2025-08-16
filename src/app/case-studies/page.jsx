import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import TrustBadgeGrid from '../components/TrustBadgeGrid';

export const metadata = {
    title: "Case Studies | Frontend & Aspiring Product Engineer London | Akash Kumar | AI, FinTech & Digital Solutions",
    description: "Explore detailed case studies of high-impact digital solutions by London frontend developer Akash Kumar. AI travel planning, FinTech onboarding, digital transformation. Real results, proven expertise.",
    keywords: [
        "Frontend & Aspiring Product Engineer London",
        "Case Studies",
        "AI Developer UK",
        "FinTech Developer",
        "Next.js Developer",
        "React Developer London",
        "Digital Transformation",
        "Web Development Portfolio"
    ],
    openGraph: {
        title: "Case Studies | Frontend & Aspiring Product Engineer London | Akash Kumar",
        description: "Real results from AI travel planning, FinTech onboarding, and digital transformation projects. See how I deliver business impact.",
        type: "website",
        url: "https://akashkumar.dev/case-studies"
    }
};

const CASE_STUDIES = [
    {
        slug: 'easytripai',
        title: 'EasyTripAI.com – AI Trip Planner',
        client: 'Travel Tech Startup',
        summary: 'Next-gen AI-powered travel planning: Personalized itineraries, hidden gems, and real-time mapping. Built with Next.js, OpenAI, and MapTiler APIs.',
        image: '/images/case-studies/easytripai/travel-ai.webp',
        keyMetric: 'Live MVP with real user traction',
        technologies: ['Next.js', 'OpenAI API', 'MapTiler', 'Tailwind CSS'],
        category: 'AI/ML'
    },
    {
        slug: 'ai-integration',
        title: 'AI Integration for UK FinTech',
        client: 'UK FinTech Startup',
        summary: 'AI-powered customer service chatbot using OpenAI GPT-4. Real-time processing, intelligent responses, and seamless integration.',
        image: '/images/case-studies/fintech-card/fintech-dashboard.png',
        keyMetric: '30% boost in user retention',
        technologies: ['Next.js', 'OpenAI GPT-4', 'TypeScript', 'WebSockets'],
        category: 'AI/ML'
    },
    {
        slug: 'crypto-analysis',
        title: 'CryptoAnalysis – Real‑Time Crypto Tracker & Watchlist',
        client: 'Crypto SaaS',
        summary:
            'Lightning‑fast React + TypeScript app with live market data, personalised watchlists and interactive charts. Firebase, CoinGecko, Chart.js.',
        image: '/images/case-studies/crypto-analysis/real-time-cryptocurrency-tracker-react-dashboard-homepage.png',
        keyMetric: '95+ Lighthouse scores',
        technologies: ['React', 'TypeScript', 'Firebase', 'CoinGecko API'],
        category: 'Web App'
    }
];

const CaseStudyCard = ({ caseStudy, index }) => {
    return (
        <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="card h-full hover:scale-[1.02] transition-all duration-300 group"
        >
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                    src={caseStudy.image}
                    alt={`${caseStudy.title} case study thumbnail`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-violet-600/20 text-violet-300 text-xs font-semibold rounded-full">
                        {caseStudy.category}
                    </span>
                    <span className="text-sm text-white/60">{caseStudy.client}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {caseStudy.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {caseStudy.summary}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                    {caseStudy.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-2 py-1 bg-violet-500/20 border border-violet-500/30 rounded text-xs text-violet-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="text-violet-400 text-sm font-semibold">
                    {caseStudy.keyMetric}
                </div>
            </div>
        </Link>
    );
};

export default function CaseStudies() {
    return (
        <>
            <Header />
            <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900 min-h-screen">
                {/* Hero Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-24 lg:py-32">


                        {/* Hero Content */}
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Case Studies: <span className="text-gradient">High-Impact Digital Solutions</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                Detailed breakdowns of how I deliver business value through innovative frontend development,
                                AI integration, and digital transformation for UK startups and enterprises.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className="container mx-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {CASE_STUDIES.map((cs, index) => (
                                <CaseStudyCard
                                    key={cs.slug}
                                    caseStudy={cs}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-24">
                        <div className="card card-lg text-center">
                            <h2 className="text-3xl font-bold text-white mb-8">
                                Want Results Like These for Your Business?
                            </h2>
                            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                                I help UK startups and enterprises build high-performance digital solutions that drive real business impact.
                                Let&apos;s discuss your project.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="btn btn-primary btn-lg"
                                >
                                    Start Your Project
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="btn btn-secondary btn-lg"
                                >
                                    View More Work
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