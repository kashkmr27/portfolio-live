"use client";
import React from 'react';
import { motion } from 'framer-motion';

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

const skillCategories = [
    {
        title: "Frontend Core",
        skills: [
            {
                icon: "⚛️",
                name: "React & Next.js",
                description: "Building modern React applications and Next.js solutions for UK businesses. Focus on performance, SEO, and user experience.",
                keywords: ["React developer UK", "Next.js developer", "frontend development"]
            },
            {
                icon: "🔒",
                name: "TypeScript",
                description: "Type-safe development ensuring code quality and maintainability for long-term projects and remote teams.",
                keywords: ["TypeScript developer", "type-safe development", "code quality"]
            },
            {
                icon: "🎨",
                name: "Tailwind CSS",
                description: "Rapid UI development with utility-first CSS framework. Consistent design systems for scalable applications.",
                keywords: ["Tailwind CSS", "UI development", "design systems"]
            }
        ]
    },
    {
        title: "AI Integration",
        skills: [
            {
                icon: "🤖",
                name: "ChatGPT API",
                description: "Custom AI chatbots and content generation systems that enhance user engagement for UK businesses.",
                keywords: ["ChatGPT API developer", "AI integration", "chatbot development"]
            },
            {
                icon: "🔮",
                name: "OpenAI Integration",
                description: "Advanced AI model integration and fine-tuning for specific business requirements and automation.",
                keywords: ["OpenAI integration", "AI models", "automation"]
            }
        ]
    },
    {
        title: "Modern Tooling",
        skills: [
            {
                icon: "📝",
                name: "Git & GitHub",
                description: "Version control and collaborative development workflows for remote teams and UK-based projects.",
                keywords: ["Git workflow", "collaborative development", "remote teams"]
            },
            {
                icon: "☁️",
                name: "Vercel Deployment",
                description: "Seamless deployment and hosting solutions with automatic scaling for UK businesses.",
                keywords: ["Vercel deployment", "hosting solutions", "automatic scaling"]
            }
        ]
    }
];

export default function SkillsTechnologies() {
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
                        Skills & Technologies
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Modern tools and frameworks I use to deliver exceptional results for UK businesses.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8 lg:space-y-12"
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            variants={itemVariants}
                            className="space-y-6 lg:space-y-8"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 lg:mb-8">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        variants={itemVariants}
                                        className="card p-4 lg:p-6 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="text-2xl lg:text-3xl mb-3 lg:mb-4">{skill.icon}</div>
                                        <h4 className="text-base sm:text-lg font-bold text-white mb-2">{skill.name}</h4>
                                        <p className="text-white/80 text-xs sm:text-sm mb-3 lg:mb-4">{skill.description}</p>

                                        {/* Keywords for SEO */}
                                        <div className="flex flex-wrap gap-1">
                                            {skill.keywords.map((keyword, keywordIndex) => (
                                                <span
                                                    key={keywordIndex}
                                                    className="px-2 py-1 bg-violet-500/10 text-violet-300 text-xs rounded border border-violet-500/20"
                                                >
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 