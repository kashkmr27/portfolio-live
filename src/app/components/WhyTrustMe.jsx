"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
};

const tiles = [
    {
        hero: true,
        title: "Senior React Developer",
        description: "5+ years shipping production apps with React/TypeScript.",
        metric: "50+ releases",
        icon: (
            <svg className="w-8 h-8 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
            </svg>
        ),
        href: "/services/react-development",
        anchorText: "react developer london",
    },
    {
        title: "Scaled features for UK startups & Fortune 500",
        description: "",
        metric: "10M+ users touched",
        icon: (
            <svg className="w-7 h-7 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
            </svg>
        ),
        href: "/services/react-development",
        anchorText: "react developer london",
    },
    {
        title: "AI Integration Specialist",
        description: "ChatGPT/OpenAI for search, onboarding, and automation.",
        metric: "15+ AI features",
        icon: (
            <svg className="w-7 h-7 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
            </svg>
        ),
        href: "/services/ai-integration",
        anchorText: "chatgpt api developer",
    },
    {
        title: "2-Week MVP Delivery",
        description: "Rapid prototyping to validated demo.",
        metric: "95% on-time",
        icon: (
            <svg className="w-7 h-7 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
            </svg>
        ),
        href: "/services",
        anchorText: "mvp developer uk",
    },
    {
        title: "GDPR-Ready By Design",
        description: "UK/EU data handling & privacy baked in.",
        metric: "100% compliance",
        icon: (
            <svg className="w-7 h-7 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        ),
        href: "/services/ai-integration",
        anchorText: "chatgpt api developer",
    },
    {
        title: "Post-Launch Iteration",
        description: "2 weeks free support; roadmap included.",
        metric: "24/7 response window",
        icon: (
            <svg className="w-7 h-7 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
            </svg>
        ),
        href: "/contact",
        anchorText: "react developer london",
    },
];

export default function WhyTrustMe() {
    return (
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
            <div className="container-wide px-4 py-16 lg:py-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6"
                    >
                        Why Choose Me
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Bento grid of credibility signals I bring to product teams.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-6 auto-rows-[minmax(140px,auto)] gap-4"
                >
                    {tiles.map((tile, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`card group relative outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 transition-all duration-300 ${tile.hero ? 'sm:col-span-6 lg:col-span-4 lg:row-span-2' : 'sm:col-span-3 lg:col-span-2'} p-6 lg:p-7 hover:-translate-y-1`}
                        >
                            {tile.hero && (
                                <>
                                    {/* Soft blended graphic (innovative, low opacity) */}
                                    <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
                                        <div className="absolute -top-10 -left-16 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(124,58,237,0.20), transparent 70%)' }} />
                                        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(20,184,166,0.18), transparent 70%)' }} />
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-25">
                                        <Image
                                            src="/images/portfolio/3d-globe.png"
                                            alt="abstract graphic"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            style={{ objectFit: 'contain', objectPosition: 'right bottom' }}
                                            priority={false}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="flex items-start justify-between">
                                <div className="text-white/90">{tile.icon}</div>
                                <span className="badge" aria-label="metric">
                                    {tile.metric}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mt-4">{tile.title}</h3>
                            {tile.description && (
                                <p className="text-white/80 mt-2 text-sm leading-relaxed">{tile.description}</p>
                            )}
                            {tile.hero && (
                                <>
                                    <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                                        <li>Component architecture, state and data fetching patterns</li>
                                        <li>Performance: code-splitting, memoization, CWV discipline</li>
                                        <li>Type-safe tooling: TypeScript, ESLint, testing-ready</li>
                                    </ul>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="badge">React</span>
                                        <span className="badge">TypeScript</span>
                                        <span className="badge">Next.js</span>
                                    </div>
                                </>
                            )}

                            <div className="mt-5">
                                <Link
                                    href={tile.href}
                                    className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200 text-sm underline underline-offset-4"
                                    aria-label={`Learn more: ${tile.anchorText}`}
                                >
                                    {tile.anchorText}
                                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 