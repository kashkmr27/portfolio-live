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
            summary: 'AI-powered travel planner for UK startups using React and Next.js. Personalized itineraries with OpenAI integration, reducing planning time by 90%.',
            tech: ['React', 'Next.js', 'OpenAI API', 'AI Integration'],
            imageSrc: '/images/case-studies/easytripai/travel-ai.webp',
            caseStudyLink: '/case-studies/easytripai'
        },
        {
            title: 'AI Integration for UK FinTech',
            summary: 'AI-powered customer service chatbot for UK FinTech startup. Built with React and OpenAI GPT-4, boosting user retention by 30%.',
            tech: ['React', 'TypeScript', 'OpenAI GPT-4', 'AI Chat'],
            imageSrc: '/images/case-studies/fintech-card/fintech-dashboard.png',
            caseStudyLink: '/case-studies/ai-integration'
        },
    ];

    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 lg:py-32">
                    <div className="max-w-4xl mx-auto">

                        {/* Hero Content */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Frontend Developer Portfolio
                                <br />
                                <span className="text-gradient">React, Next.js & AI Projects in the UK</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                I help UK startups, agencies, and remote teams build modern, scalable digital solutions.
                                With 5+ years of experience in React, Next.js, and AI integration, I deliver exceptional
                                user experiences that drive real business results for London-based and UK-wide clients.
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