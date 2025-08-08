"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ScreenshotFrame({ classNameWrap = '', alt = 'Screenshot', ...img }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-lg ${classNameWrap}`}
    >
      <div className="bg-gradient-to-b from-white/10 to-white/5 h-8 w-full flex items-center px-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
        </div>
      </div>
      <div className="relative">
        <Image {...img} alt={alt} className={`w-full h-auto object-contain ${img.className || ''}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" aria-hidden></div>
      </div>
    </motion.div>
  );
}
