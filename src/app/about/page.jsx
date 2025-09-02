import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import TrustBadgeGrid from '../components/TrustBadgeGrid';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

// SEO-optimized metadata
export const metadata = {
    title: "About Akash Kumar - Frontend & Aspiring Product Engineer London",
    description: "Meet Akash Kumar, a London-based frontend developer with 5+ years experience in React, Next.js, and AI integration. Learn about my approach, skills, and commitment to UK clients.",

    openGraph: {
        title: "About Akash Kumar - Frontend & Aspiring Product Engineer London",
        description: "Meet Akash Kumar, a London-based frontend developer with 5+ years experience in React, Next.js, and AI integration.",
        type: "website",
        url: "https://akashbuilds.com/about",
        siteName: "Akash Kumar - Frontend & Aspiring Product Engineer"
    },
    twitter: {
        card: "summary",
        title: "About Akash Kumar - London Frontend Developer & AI Specialist",
        description: "Meet Akash Kumar, a London-based frontend developer with 5+ years experience in React, Next.js, and AI integration."
    },
    alternates: {
        canonical: "https://akashbuilds.com/about"
    }
};

// Structured Data Schema
const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Akash Kumar - Frontend & Aspiring Product Engineer",
    "description": "Meet Akash Kumar, a London-based frontend developer with 5+ years experience in React, Next.js, and AI integration.",
    "url": "https://akashbuilds.com/about",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://akashbuilds.com/about"
    },
    "author": {
        "@type": "Person",
        "name": "Akash Kumar",
        "jobTitle": "Front-End Engineer",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "UK"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance Engineering"
        },
        "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "AI Integration",
            "Frontend Development",
            "Web Animation",
            "UI/UX Design"
        ],
        "sameAs": [
            "https://www.linkedin.com/in/theakashkumar/",
            "https://github.com/Akashkumarweb"
        ]
    }
};

// Person Schema
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akash Kumar",
    "jobTitle": "Front-End Engineer",
    "description": "London-based frontend developer specializing in React, Next.js, and AI integration",
    "url": "https://akashbuilds.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "UK"
    },
    "knowsAbout": [
        "React Development",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "AI Integration",
        "ChatGPT API",
        "Web Animation",
        "CSS Animations",
        "Frontend Development",
        "UI/UX Design"
    ],
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance Engineering"
    },
    "sameAs": [
        "https://www.linkedin.com/in/theakashkumar/",
        "https://github.com/Akashkumarweb"
    ]
};

export default function AboutPage() {
    return (
        <>
            {/* Structured Data Scripts */}
            <Script
                id="about-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
            />
            <Script
                id="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Hero Section */}
                <section className="space-y-8 lg:space-y-10 px-4 pt-28 pb-12 lg:pt-32 lg:pb-32">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* SEO-Driven Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            About Me
                            <br />
                            <span className="text-gradient">
                                Frontend Developer in London | Specialising in React, Next.js & AI Integration
                            </span>
                        </h1>

                        {/* SEO-rich Summary */}
                        <p className="text-xl text-white/80 mb-0 leading-relaxed max-w-5xl mx-auto">
                            Hey there. I&apos;m a frontend developer crafting websites and apps for startups and agencies, right from the heart of London. My daily tools are React, Next.js, and TypeScript. I use them to build things that are quick, reliable, and actually pleasant to use.
                            I also love adding AI into the mix. This means building features like friendly chatbots or a search bar that actually understands what you need.

                            <br className="hidden md:block" />
                            <span className="text-white/60">
                                I specialise in helping UK startups, creative agencies, and remote teams build their online presence. If you are looking for a freelance frontend developer in London, a remote React.js developer, or need help with AI integration, lets talk.
                            </span>
                        </p>
                    </div>
                </section>


                {/* My Story Section */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            My Story
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                How I Got Here
                            </p>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                My career in web development started over five years ago. I&apos;ve always loved the puzzle of taking a complex problem and solving it with clean, simple code. For me, the best website is one that feels easy and obvious to use. The technology behind it should be invisible.
                            </p>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                I have started my career in Pune, India and then move to London.
                                Working from London has given me the chance to partner with fantastic businesses, both here in the UK and across the world. I especially enjoy the energy and big ideas that come from working with startups.
                            </p>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                When I&apos;m not coding, you can find me with a coffee in hand, exploring a new tech tool, or getting maybe a little too excited about the latest ways to improve a website&apos;s Google ranking. I believe the best developers never stop learning, and I&apos;m always adding new skills to my toolkit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills & Expertise */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto  px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                            My Services (Skills & Expertise)
                        </h2>
                        <p className='text-center mb-12'>My process focuses on building a strong foundation that works for your audience and your goals.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="card p-8">
                                <div className="text-3xl mb-4">⚛️</div>
                                <h3 className="text-xl font-bold text-white mb-4">React & Next.js</h3>
                                <p className="text-white/80">
                                    I use React and Next.js to build strong, scalable web applications. I focus on speed, strong SEO, and a smooth user experience to keep visitors engaged.

                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold text-white mb-4">AI Integration</h3>
                                <p className="text-white/80">
                                    I add smart features to websites using tools like the OpenAI API (ChatGPT API). This lets me create helpful elements like custom chatbots or automated systems that save you time and improve user interaction.
                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">✨</div>
                                <h3 className="text-xl font-bold text-white mb-4">Web Animation</h3>
                                <p className="text-white/80">
                                    I use Framer Motion and modern CSS to add engaging animations and micro interactions. This help you to get your site feel more dynamic and enjoyable to use without slowing it down.

                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">📱</div>
                                <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
                                <p className="text-white/80">
                                    Always use Mobile first approach ensuring perfect responsive design experience across all devices
                                    and screen sizes.
                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
                                <p className="text-white/80">
                                    Code that make sure optimizing for speed, accessibility, and Core Web Vitals to ensure
                                    the best possible user experience.
                                </p>
                            </div>
                            <div className="card p-8">
                                <div className="text-3xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold text-white mb-4">Security</h3>
                                <p className="text-white/80">
                                    Adding best practices for web security, GDPR compliance,
                                    and data protection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust & Quality */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                            Trust & Quality Guarantees
                        </h2>
                        <TrustBadgeGrid
                            badges={['verified', 'responsive', 'experience', 'satisfaction']}
                            variant="hero"
                            maxCols={4}
                            className="justify-center"
                        />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center  px-4 py-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ready to Work Together?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and how I can help bring your vision to life.
                            I&apos;m here to help you succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Start Your Project
                            </Link>
                            <Link href="/case-studies" className="btn btn-secondary btn-lg">
                                View My Work
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
} 