"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SkillsTechnologies = () => {
    // Tag cloud groups with LSI/synonyms in tooltips
    const groups = [
        {
            label: 'Frontend Core',
            items: [
                { name: 'React', tooltip: 'react developer london' },
                { name: 'Next.js', tooltip: 'react developer london' },
                { name: 'TypeScript' },
                { name: 'Tailwind' },
                { name: 'Jest/RTL' },
            ],
        },
        {
            label: 'AI & Data',
            items: [
                { name: 'OpenAI', tooltip: 'chatgpt api developer' },
                { name: 'Prompting', tooltip: 'chatgpt api developer' },
                { name: 'LangChain (light)' },
                { name: 'Vector DB basics' },
                { name: 'PostHog/GA4' },
            ],
        },
        {
            label: 'UX & Motion',
            items: [
                { name: 'Figma' },
                { name: 'Design tokens' },
                { name: 'Micro-interactions' },
            ],
        },
        {
            label: 'Delivery',
            items: [
                { name: 'Vercel', tooltip: 'mvp developer uk' },
                { name: 'CI/CD' },
                { name: 'Auth' },
                { name: 'GDPR awareness' },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="px-4 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Skills & Technologies
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Frontend expertise + real AI integration, focused on rapid delivery for UK startups and side hustles.
                    </p>
                </motion.div>

                {/* Tag Cloud by Theme */}
                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {groups.map((group, idx) => (
                        <div key={group.label}>
                            <motion.h3
                                className="text-2xl font-bold text-white mb-6 text-center"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                            >
                                {group.label}
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item.name}
                                        className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/90 text-sm hover:-translate-y-0.5 transition-transform"
                                        title={item.tooltip || ''}
                                        aria-label={item.tooltip ? `${item.name} – ${item.tooltip}` : item.name}
                                        role="listitem"
                                    >
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Footer CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white/70 mb-6 text-lg">
                        Curious how these skills solve real business problems?
                    </p>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors duration-300 hover:scale-105 transform"
                        aria-label="View portfolio to see how skills solve business problems"
                    >
                        Check My Portfolio
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsTechnologies; 