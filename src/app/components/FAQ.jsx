"use client";
import React, { useState } from 'react';
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

const faqs = [
    {
        question: "How do you price frontend development projects?",
        answer: "I offer transparent hourly rates starting from £35/hour for basic tasks to £60/hour for specialized AI development. Rates vary based on complexity and expertise required. I provide detailed time estimates and transparent billing for all projects."
    },
    {
        question: "What is your process for React/Next.js web apps?",
        answer: "My process includes discovery, planning, development with regular check-ins, and launch with support. I specialize in React and Next.js development for UK businesses, ensuring modern, scalable solutions that drive results."
    },
    {
        question: "Do you provide AI integration services for UK businesses?",
        answer: "Yes, I specialize in ChatGPT API integration and AI solutions for UK startups and agencies. From custom chatbots to content generation systems, I help businesses leverage AI to improve user engagement and automate processes."
    },
    {
        question: "Can you work with remote teams and international clients?",
        answer: "Absolutely! I work with remote teams and international clients while being based in London. I'm experienced in collaborative development workflows and can integrate seamlessly with your existing team and processes."
    },
    {
        question: "What makes you different from other freelance frontend developers?",
        answer: "I combine modern frontend development with AI integration expertise. As a SaaS specialist UK, I understand the unique needs of UK businesses and deliver scalable solutions that grow with your company."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        Common questions about my frontend development and AI integration services.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-3 lg:space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card cursor-pointer hover:shadow-lg transition-all duration-300"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="p-4 lg:p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base sm:text-lg font-bold text-white pr-4">
                                        {faq.question}
                                    </h3>
                                    <div className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-slate-700/50"
                                    >
                                        <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="text-center mt-8 lg:mt-12"
                >
                    <Link
                        href="/contact"
                        className="btn btn-primary btn-lg"
                    >
                        View Full FAQ
                    </Link>
                </motion.div>
            </div>
        </section>
    );
} 