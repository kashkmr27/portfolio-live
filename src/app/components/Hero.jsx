"use client";
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TrustBadgeGrid from './TrustBadgeGrid';
import TrustBadgeModal from './TrustBadgeModal';

const imageVariants = {
    floating: {
        y: ["-10px", "10px"],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut"
            }
        }
    }
};

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

export default function Hero() {
    const controls = useAnimation();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        controls.start("floating");
    }, [controls]);

    return (
        <section className="section-lg relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center min-h-[80vh]">
                    {/* Content Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8 lg:space-y-10"
                    >
                        {/* Main Headline */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="text-white">Frontend Developer UK</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-violet-200 leading-relaxed">
                                React, Next.js, AI Integration Specialist, SaaS & Mobile App Developer
                            </p>
                        </motion.div>

                        {/* Supporting Line */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl"
                        >
                            I help UK startups, agencies, and remote teams build modern, scalable digital solutions.
                        </motion.p>

                        {/* Trust Badges */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <div className="w-3 h-3 bg-violet-400 rounded-full"></div>
                                <span className="text-white/90 font-medium text-sm">100% Code Ownership</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                <span className="text-white/90 font-medium text-sm">GDPR-Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <span className="text-white/90 font-medium text-sm">2-Week Support</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-6"
                        >
                            <Link
                                href="/contact"
                                className="btn btn-primary btn-lg group"
                            >
                                Start Your Project
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/portfolio"
                                className="btn btn-secondary btn-lg"
                            >
                                View My Work
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            className="relative"
                            variants={imageVariants}
                            animate={controls}
                        >
                            {/* Main Image Container */}
                            <div className="relative">
                                <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] overflow-hidden">
                                    <Image
                                        src="/images/akash-kumar-frontend-developer.png"
                                        alt="Akash Kumar - Frontend Developer UK, React and Next.js Specialist"
                                        fill
                                        priority
                                        className="object-contain object-center"
                                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 480px"
                                    />

                                    {/* Subtle gradient overlay to blend with background */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating elements for visual interest */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-violet-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl animate-pulse animation-delay-2000"></div>

                                {/* Professional badge overlay */}
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-white text-sm font-medium">Available</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tech stack floating cards */}
                            <div className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">R</span>
                                    </div>
                                    <div className="text-white text-sm font-medium">React</div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">N</span>
                                    </div>
                                    <div className="text-white text-sm font-medium">Next.js</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Trust Badge Modal */}
            <TrustBadgeModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    )
} 