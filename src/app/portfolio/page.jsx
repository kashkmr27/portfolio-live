import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const Project = ({
    title,
    summary,
    tech,
    imageSrc,
    caseStudyLink
}) => {
    return (
        <article className="card overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden rounded-t-xl">
                <Image
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    src={imageSrc}
                    alt={`${title} - React Next.js project by UK frontend developer`}
                    width={400}
                    height={240}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((item, idx) => (
                        <span
                            key={idx}
                            className="bg-violet-500/20 text-violet-300 text-xs font-medium px-3 py-1 rounded-md border border-violet-500/30"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <Link
                    href={caseStudyLink}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
                    aria-label={`View ${title} case study`}
                >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </article>
    );
};

export default function PortfolioPage() {
    // Curated selection of key projects (6-8 max)
    const curatedProjects = [
        {
            title: 'EasyTripAI - AI Travel Planner',
            summary: 'EasyTripAI is a smart travel planning tool that creates personalised itineraries in just a few minutes. Built with React, Next.js and the OpenAI platform, it makes holiday planning fast and enjoyable, cutting down the time travellers spend searching across multiple sites.',
            tech: ['React', 'Next.js', 'OpenAI API', 'AI Integration'],
            imageSrc: '/images/case-studies/easytripai/travel-ai.webp',
            caseStudyLink: '/case-studies/easytripai'
        },
        {
            title: 'AI Integration for UK FinTech',
            summary: 'A London fintech needed quicker answers for everyday questions. I built a chatbot in React that uses GPT 4 and plugs into their existing product. It now handles common queries in seconds so the support team can focus on the tricky stuff.',
            tech: ['React', 'TypeScript', 'OpenAI GPT-4', 'AI Chat'],
            imageSrc: '/images/case-studies/fintech-card/fintech-dashboard.png',
            caseStudyLink: '/case-studies/ai-integration'
        },
        {
            title: 'CryptoAnalysis – Real‑Time Crypto Tracker',
            summary: 'CryptoAnalysis is a live crypto dashboard with prices, watchlists and simple charts. I used React with TypeScript and Firebase for auth and storage, and pulled market data from the CoinGecko API. The goal was a clean UI with clear numbers and no clutter.',
            tech: ['React', 'TypeScript', 'Firebase', 'CoinGecko API'],
            imageSrc: '/images/case-studies/crypto-analysis/real-time-cryptocurrency-tracker-react-dashboard-homepage.png',
            caseStudyLink: '/case-studies/crypto-analysis'
        },
    ];

    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="space-y-8 lg:space-y-10 px-4 pt-28 pb-12 lg:pt-32 lg:pb-">
                    <div className="max-w-4xl mx-auto">

                        {/* Hero Content */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Akash Kumar, Frontend and Aspiring Product Engineer
                                <br />
                                <span className="text-gradient">React, Next.js & AI Projects in the UK</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                I design and build web products with React, Next.js and AI for companies across the UK.
                                I work with startups, agencies and remote teams, focusing on clean interfaces, quick load times and a smooth path from idea to release. I have five years of hands on experience and I care about the details that make people stay.
                                My work helps companies across London and the wider UK grow with scalable technology that genuinely connects with their customers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {curatedProjects.map((project, index) => (
                                <Project key={index} {...project} />
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
                            Let&apos;s discuss how I can help bring your vision to life with the same
                            level of innovation and quality you see in these projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Start Your Project
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