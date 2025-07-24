"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SkillCard = ({ icon, title, description, impact, highlight, category }) => {
    const cardVariants = {
        initial: {
            scale: 1,
            opacity: 1,
            y: 0
        },
        hover: {
            scale: 1.02,
            y: -5,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'ai':
                return 'border-violet-500/30 bg-violet-500/5';
            case 'frontend':
                return 'border-blue-500/30 bg-blue-500/5';
            case 'tooling':
                return 'border-green-500/30 bg-green-500/5';
            default:
                return 'border-gray-500/30 bg-gray-500/5';
        }
    };

    const getCategoryTextColor = (category) => {
        switch (category) {
            case 'ai':
                return 'text-violet-400';
            case 'frontend':
                return 'text-blue-400';
            case 'tooling':
                return 'text-green-400';
            default:
                return 'text-gray-400';
        }
    };

    return (
        <motion.div
            className={`card p-6 border ${getCategoryColor(category)} ${highlight ? 'ring-2 ring-violet-500/50' : ''} hover:shadow-xl transition-all duration-300`}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`text-3xl ${highlight ? 'text-violet-400' : 'text-white/80'}`}>
                    {icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                        {description}
                    </p>

                    {/* Impact Statement */}
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className={`text-xs font-medium ${getCategoryTextColor(category)}`}>
                            {impact}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SkillsTechnologies = () => {
    // Skills data organized by category
    const frontendSkills = [
        {
            id: 1,
            icon: "⚛️",
            title: "React & Next.js",
            description: "Modern, scalable web apps with SSR and rapid prototyping. Launched a travel AI app for UK founders in 10 days.",
            impact: "Cut development time by 60% with reusable components",
            category: "frontend",
            highlight: true
        },
        {
            id: 2,
            icon: "",
            title: "TypeScript",
            description: "Robust, production-grade code for complex products. Eliminated 90% of runtime errors in client projects.",
            impact: "Reduced bug reports by 90% in production apps",
            category: "frontend"
        },
        {
            id: 3,
            icon: "",
            title: "Tailwind CSS",
            description: "Responsive, accessible UI with faster design and consistent branding. Built 15+ components in 2 days.",
            impact: "50% faster UI development with design system",
            category: "frontend"
        },
        {
            id: 4,
            icon: "⚡",
            title: "JavaScript (ES6+)",
            description: "Advanced logic, async flows, and clean architecture. Optimized API calls reducing load times by 40%.",
            impact: "40% faster page loads with optimized code",
            category: "frontend"
        },
        {
            id: 5,
            icon: "✨",
            title: "Animation & Motion",
            description: "Interactive UI with delightful micro-interactions. Increased user engagement by 35% with smooth animations.",
            impact: "35% boost in user engagement with animations",
            category: "frontend"
        }
    ];

    const aiSkills = [
        {
            id: 6,
            icon: "",
            title: "OpenAI/ChatGPT API",
            description: "Custom AI features for smarter, dynamic user experiences. Built AI-powered travel planner in 3 weeks.",
            impact: "Launched AI travel app with 50% user engagement",
            category: "ai",
            highlight: true
        },
        {
            id: 7,
            icon: "",
            title: "API Integration",
            description: "REST, GraphQL, third-party SaaS, and live data. Connected 8+ APIs for seamless user experience.",
            impact: "Connected 8+ APIs for seamless UX",
            category: "ai"
        }
    ];

    const toolingSkills = [
        {
            id: 8,
            icon: "",
            title: "Git & GitHub",
            description: "Version control and team-ready workflows. Managed 20+ concurrent features without conflicts.",
            impact: "Zero merge conflicts across 20+ features",
            category: "tooling"
        },
        {
            id: 9,
            icon: "",
            title: "Vercel / Netlify",
            description: "Instant deploys and global scaling. Reduced deployment time from hours to minutes.",
            impact: "Deployment time reduced from hours to minutes",
            category: "tooling"
        },
        {
            id: 10,
            icon: "🛡️",
            title: "Testing & Quality",
            description: "Jest, React Testing Library for rock-solid reliability. Achieved 95% test coverage on client projects.",
            impact: "95% test coverage ensuring reliability",
            category: "tooling"
        },
        {
            id: 11,
            icon: "",
            title: "Firebase / Supabase",
            description: "Rapid MVPs and authentication. Built complete auth system in 2 days for startup client.",
            impact: "Complete auth system built in 2 days",
            category: "tooling"
        }
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

                {/* Skills Grid */}
                <motion.div
                    className="space-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Frontend Core */}
                    <div>
                        <motion.h3
                            className="text-2xl font-bold text-white mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Frontend Core
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {frontendSkills.map((skill) => (
                                <SkillCard key={skill.id} {...skill} />
                            ))}
                        </div>
                    </div>

                    {/* AI Integration */}
                    <div>
                        <motion.h3
                            className="text-2xl font-bold text-white mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            AI Integration
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {aiSkills.map((skill) => (
                                <SkillCard key={skill.id} {...skill} />
                            ))}
                        </div>
                    </div>

                    {/* Modern Tooling */}
                    <div>
                        <motion.h3
                            className="text-2xl font-bold text-white mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Modern Tooling
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {toolingSkills.map((skill) => (
                                <SkillCard key={skill.id} {...skill} />
                            ))}
                        </div>
                    </div>
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