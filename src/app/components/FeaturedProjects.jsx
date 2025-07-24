"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

const featuredProjects = [
    {
        title: "EasyTripAI",
        description: "AI-powered travel planner web app using Next.js and ChatGPT API for UK-based startup. Reduced planning time from 15 minutes to 30 seconds with personalized itineraries.",
        image: "/images/case-studies/easytripai/travel-ai.webp",
        tags: ["Next.js", "ChatGPT API", "AI Integration", "UK Startup"],
        projectLink: "/case-studies/easytripai",
        caseStudyLink: "/case-studies/easytripai"
    }
];

export default function FeaturedProjects() {
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
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Showcasing impactful projects that highlight my expertise as a frontend developer UK and AI integration specialist.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                >
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 sm:h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 lg:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4">{project.title}</h3>
                                <p className="text-white/80 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs font-medium rounded-full border border-violet-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href={project.projectLink}
                                        className="btn btn-primary flex-1 text-center"
                                    >
                                        View Project
                                    </Link>
                                    <Link
                                        href={project.caseStudyLink}
                                        className="btn btn-secondary flex-1 text-center"
                                    >
                                        Read Case Study
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-8 lg:mt-12"
                >
                    <Link
                        href="/portfolio"
                        className="btn btn-primary btn-lg"
                    >
                        View All Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
} 