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
        question: "How quickly can you ship an MVP in London?",
        answer: "Typical MVPs ship in 7–14 days. I scope core flows, build a clickable prototype, and launch a slim production slice on Vercel with auth and analytics where needed."
    },
    {
        question: "Do you build ChatGPT features for small UK businesses?",
        answer: "Yes. I integrate OpenAI/ChatGPT for onboarding, search, assistants, and automation. I focus on safe prompts, rate-limits, and measurable outcomes (activation, retention)."
    },
    {
        question: "Can you work as a front-end engineer with product responsibilities?",
        answer: "Yes. I can own UX flows, define success metrics, and iterate with analytics. I’m hands-on with React/Next.js and comfortable driving product decisions with stakeholders."
    },
    {
        question: "How do you handle GDPR and data privacy?",
        answer: "Data is minimized and region-aware. I use privacy-by-design defaults, avoid storing PII where unnecessary, and document consents. Cookies and analytics follow UK/EU guidance."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900" itemScope itemType="https://schema.org/FAQPage">
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
                            itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                        >
                            <div className="p-4 lg:p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base sm:text-lg font-bold text-white pr-4" itemProp="name">{faq.question}</h3>
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
                                        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                                    >
                                        <p className="text-white/80 leading-relaxed text-sm sm:text-base" itemProp="text">{faq.answer}</p>
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