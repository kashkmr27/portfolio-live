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

const trustFactors = [
    {
        icon: (
            <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
        ),
        title: "100% Code Ownership",
        description: "You retain full rights to every line of code I deliver.",
        link: "/services"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
        ),
        title: "GDPR Compliant",
        description: "All work meets strict UK/EU privacy and security standards.",
        link: "/services"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        ),
        title: "2-Week Support",
        description: "You get free advice and fixes for 2 weeks after launch.",
        link: "/contact"
    }
];

export default function WhyTrustMe() {
    return (
        <section className="section-lg bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
            <div className="container-wide">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Why Clients Trust Me
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Professional guarantees that ensure your project&apos;s success and your peace of mind.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {trustFactors.map((factor, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card p-8 text-center hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex justify-center mb-6">
                                {factor.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{factor.title}</h3>
                            <p className="text-white/80 mb-6 leading-relaxed">{factor.description}</p>
                            <Link
                                href={factor.link}
                                className="text-violet-400 hover:text-violet-300 font-medium text-sm transition-colors inline-flex items-center gap-1"
                            >
                                Learn more
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