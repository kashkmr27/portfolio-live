"use client";
import { motion } from "framer-motion";

export default function ProductGuarantees() {
    return (
        <section className="bg-transparent">
            <div className="container mx-auto px-4 py-6">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-wrap items-center justify-center gap-3"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm text-white/90 border border-white/15 bg-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        Sub-7-Day Prototype
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm text-white/90 border border-white/15 bg-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Metric-Driven Launches
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm text-white/90 border border-white/15 bg-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Post-Launch Iteration
                    </span>
                </motion.div>
            </div>
        </section>
    );
}


