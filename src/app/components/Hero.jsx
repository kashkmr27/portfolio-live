"use client";
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TrustBadgeGrid from './TrustBadgeGrid';
import TrustBadgeModal from './TrustBadgeModal';
import { FaLinkedinIn, FaGithub, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandBluesky } from 'react-icons/tb';
import { SiFigma } from 'react-icons/si';

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
    const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
    const frameRef = useState(null)[0];

    // Subtle mouse-reactive gradient (no heavy animation)
    const handleMouseMove = (e) => {
        if (frameRef) cancelAnimationFrame(frameRef);
        const target = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - target.left) / target.width) * 100;
        const y = ((e.clientY - target.top) / target.height) * 100;
        requestAnimationFrame(() => setGradientPos({ x, y }));
    };

    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900"
            onMouseMove={handleMouseMove}
            style={{
                backgroundImage: `radial-gradient(600px 300px at ${gradientPos.x}% ${gradientPos.y}%, rgba(124,58,237,0.12), transparent 60%), radial-gradient(500px 260px at ${100 - gradientPos.x}% ${100 - gradientPos.y}%, rgba(20,184,166,0.10), transparent 60%)`
            }}
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="container-wide relative z-10 hero-container">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
                    {/* Content Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8 lg:space-y-10 px-4 pt-28 pb-12 lg:pt-32 lg:pb-22"
                    >
                        {/* Overline, H1, Sub-headline */}
                        <motion.div variants={itemVariants} className="space-y-3">
                            {/* <p className="uppercase tracking-wide text-xs sm:text-sm text-white/60">Aspiring Product Engineer</p> */}
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Product focused Frontend Engineer
                            </h1>
                            <p className="text-lg sm:text-xl text-violet-200 leading-relaxed">
                                blending React, Next.js, and UI/UX
                            </p>
                        </motion.div>

                        {/* Supporting Line */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl"
                        >
                            I turn ideas into real, functional websites using React and Next.js. I care deeply about how a site feels to use, making sure it&apos;s quick, easy to navigate, and works perfectly on any device.
                        </motion.p>

                        {/* LLM hook (TL;DR) */}
                        {/* <motion.p
                            variants={itemVariants}
                            className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl"
                        >
                            Akash Kumar is a Frontend & Aspiring Product Engineer in London who designs UX, ships React/Next.js, and integrates ChatGPT for real product outcomes.
                        </motion.p> */}

                        {/* KPI chips (keep two) */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-3 sm:gap-4 pt-4"
                        >
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                                <span className="text-white/90 font-medium text-xs sm:text-sm">AI Integration Expert</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
                                <span className="text-white/90 font-medium text-xs sm:text-sm">Technical SEO</span>
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
                                Book Product Jam
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/portfolio"
                                className="btn btn-secondary btn-lg"
                            >
                                See Projects
                            </Link>
                        </motion.div>

                        {/* Social Media Links */}
                        {/* <motion.div
                            variants={itemVariants}
                            className="flex justify-center sm:justify-start gap-4 pt-6"
                        >
                            <Link
                                href="https://www.linkedin.com/in/theakashkumar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-violet-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedinIn size="20" />
                            </Link>
                            <Link
                                href="https://github.com/Akashkumarweb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-violet-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub size="20" />
                            </Link>
                            <Link
                                href="https://x.com/akashbuild"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-violet-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                                aria-label="X (Twitter) Profile"
                            >
                                <FaXTwitter size="20" />
                            </Link>
                            <Link
                                href="https://uk.pinterest.com/akashbuilds/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-violet-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                                aria-label="Pinterest Profile"
                            >
                                <FaPinterest size="20" />
                            </Link>
                            <Link
                                href="https://bsky.app/profile/akashbuilds.bsky.social"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-violet-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                                aria-label="Bluesky Profile"
                            >
                                <TbBrandBluesky size="20" />
                            </Link>
                            <Link
                                href="https://www.figma.com/@akashbuilds"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-violet-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                                aria-label="Figma Profile"
                            >
                                <SiFigma size="20" />
                            </Link>
                        </motion.div> */}
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-end self-end px-4 pt-8"
                    >
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative flex items-end">
                                <div className="relative overflow-visible">
                                    <Image
                                        src="/images/akash-kumar.png"
                                        alt="Akash Kumar - Frontend & Aspiring Product Engineer UK, React and Next.js Specialist"
                                        width={400}
                                        height={500}
                                        priority
                                        className="w-64 sm:w-80 h-auto lg:w-96 lg:h-auto object-contain"
                                        sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 480px"
                                    />

                                    {/* Subtle gradient overlay to blend with background */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
                                </div>

                                {/* Faint geometric texture behind avatar */}
                                <div className="absolute -z-10 -inset-6 rounded-2xl opacity-30"
                                    style={{
                                        backgroundImage: `repeating-linear-gradient(45deg, rgba(124,58,237,0.08) 0, rgba(124,58,237,0.08) 2px, transparent 2px, transparent 10px), repeating-linear-gradient(-45deg, rgba(20,184,166,0.06) 0, rgba(20,184,166,0.06) 2px, transparent 2px, transparent 10px)`
                                    }}
                                />

                                {/* Floating elements for visual interest */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-violet-500/20 rounded-full blur-xl animate-pulse"
                                    variants={imageVariants}
                                    animate={controls}
                                ></motion.div>
                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full blur-xl animate-pulse animation-delay-2000"
                                    variants={imageVariants}
                                    animate={controls}
                                ></motion.div>

                                {/* Professional badge overlay */}
                                <motion.div
                                    className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-1 sm:px-3 sm:py-2"
                                    variants={imageVariants}
                                    animate={controls}
                                >
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-white text-xs sm:text-sm font-medium">Available</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Tech stack floating cards - moved to better positions */}
                            <motion.div
                                className="absolute left-4 top-3/4 transform -translate-y-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                                variants={imageVariants}
                                animate={controls}
                            >
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">R</span>
                                    </div>
                                    <div className="text-white text-xs sm:text-sm font-medium">React</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-3"
                                variants={imageVariants}
                                animate={controls}
                            >
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">N</span>
                                    </div>
                                    <div className="text-white text-xs sm:text-sm font-medium">Next.js</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Trust Badge Modal */}
            <TrustBadgeModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    )
} 