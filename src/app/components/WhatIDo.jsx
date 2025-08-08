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

const journeySteps = [
    {
        icon: "🔎",
        title: "Discover",
        subtitle: "UX research",
        outcome: "Validate problem–solution fit through rapid research and stakeholder interviews.",
        proof: "wireframe snapshot",
    },
    {
        icon: "🎨",
        title: "Design",
        subtitle: "Figma flows",
        outcome: "Translate insights into clear user flows and interaction patterns in Figma.",
        proof: "flow diagram",
    },
    {
        icon: "⚛️",
        title: "Build",
        subtitle: "React/Next.js",
        outcome: "Ship accessible, performant React/Next.js features with type‑safe APIs.",
        proof: "perf chart",
    },
    {
        icon: "📈",
        title: "Grow",
        subtitle: "analytics + AI",
        outcome: "Instrument analytics and integrate AI to improve activation and retention.",
        proof: "funnel snapshot",
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

                <motion.ol
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative max-w-3xl mx-auto border-l border-white/10 pl-6"
                >
                    {journeySteps.map((step, index) => (
                        <motion.li
                            key={step.title}
                            variants={itemVariants}
                            className="relative py-6"
                        >
                            <span className="absolute -left-2 top-7 w-3 h-3 rounded-full bg-violet-400 ring-4 ring-violet-400/20" aria-hidden></span>
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-violet-300 grid place-items-center text-base font-semibold">
                                    {step.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold mb-1">{step.title} <span className="text-white/60">— {step.subtitle}</span></h3>
                                    <p className="text-white/80 text-sm leading-relaxed">{step.outcome}</p>
                                    <div className="mt-2 inline-flex items-center gap-2 text-xs text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                                        {step.proof}
                                    </div>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ol>

                {/* Seal */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 flex justify-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-200 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-violet-400" />
                        Now: Frontend & Aspiring Product Engineer
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 