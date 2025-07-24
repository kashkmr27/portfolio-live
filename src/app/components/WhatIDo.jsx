"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const services = [
    {
        icon: "⚛️",
        title: "Frontend Development",
        description: "Custom React and Next.js applications built for UK businesses. Modern, responsive web solutions that drive results.",
        bullets: [
            "React developer UK expertise with TypeScript and modern tooling",
            "Next.js applications optimized for performance and SEO",
            "Responsive design that works across all devices and browsers"
        ],
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        link: "/services/frontend-development"
    },
    {
        icon: "🎨",
        title: "UI/UX Design",
        description: "User-centered design that converts. From wireframes to pixel-perfect interfaces that your users will love.",
        bullets: [
            "User experience design focused on conversion and engagement",
            "Modern UI components built with design systems",
            "Accessible design that meets WCAG standards"
        ],
        tags: ["Figma", "Design Systems", "Prototyping", "Accessibility"],
        link: "/services"
    },
    {
        icon: "🤖",
        title: "AI Integration",
        description: "ChatGPT API and AI solutions that automate processes and enhance user experience for UK businesses.",
        bullets: [
            "ChatGPT API integration for chatbots and content generation",
            "OpenAI solutions tailored to your business needs",
            "AI-powered features that improve user engagement"
        ],
        tags: ["ChatGPT API", "OpenAI", "AI Integration", "Automation"],
        link: "/services/ai-integration"
    },
    {
        icon: "🚀",
        title: "SaaS Solutions",
        description: "Scalable SaaS applications built for growth. From MVP to enterprise solutions for UK startups and agencies.",
        bullets: [
            "SaaS specialist UK with focus on scalable architecture",
            "Full-stack solutions with modern tech stack",
            "Cloud deployment and infrastructure management"
        ],
        tags: ["SaaS", "Full-Stack", "Cloud", "Scalability"],
        link: "/services"
    }
];

export default function WhatIDo() {
    return (
        <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-violet-900">
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
                        What I Do
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Specializing in modern web development and AI integration for UK businesses.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-3xl lg:text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 lg:mb-4">{service.title}</h3>
                            <p className="text-white/80 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                            {/* SEO-optimized bullet points */}
                            <div className="mb-4 lg:mb-6">
                                <ul className="space-y-2">
                                    {service.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="flex items-start gap-2 text-white/80 text-xs sm:text-sm">
                                            <span className="text-violet-400 mt-1">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technology Tags */}
                            <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                                {service.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs font-medium rounded-full border border-violet-500/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={service.link}
                                className="text-violet-400 hover:text-violet-300 font-medium text-sm transition-colors inline-flex items-center gap-1"
                            >
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 