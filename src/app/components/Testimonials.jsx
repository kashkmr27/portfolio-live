"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Anthony Seminara",
            role: "CEO, TechStartup London",
            image: "/images/testimonial/Anthony-Seminara.jpeg",
            content: "Akash delivered an exceptional React application for our London team. His expertise as a frontend developer UK made the entire process seamless. The Next.js solution exceeded our expectations.",
            rating: 5
        },
        {
            name: "Vince Stevenson",
            role: "Director, Edutech",
            image: "/images/testimonial/Vince-Stevenson.jpeg",
            content: "Working with Akash was a game-changer for our project. His AI integration skills, especially with ChatGPT API, helped us launch ahead of schedule. A true SaaS specialist UK.",
            rating: 5
        },
        {
            name: "Prashant Sutar",
            role: "Founder, Crawlmagic",
            image: "/images/testimonial/prashant-sutar.webp",
            content: "Akash&apos;s technical skills and communication are top-notch. He transformed our vision into a beautiful, functional web application. The best freelance frontend developer we&apos;ve worked with.",
            rating: 5
        }
    ];

    const avgRating = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

    // Basic auto-scrolling carousel
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % testimonials.length);
        }, 3500);
        return () => clearInterval(intervalRef.current);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
            <div className="container-wide px-4 py-16 lg:py-24">
                {/* AggregateRating + Review schema */}
                <Script id="aggregate-rating" type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": "Akash Kumar – Frontend & Aspiring Product Engineer",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": avgRating,
                                "reviewCount": testimonials.length
                            },
                            "review": testimonials.map(t => ({
                                "@type": "Review",
                                "author": { "@type": "Person", "name": t.name },
                                "reviewBody": t.content,
                                "reviewRating": { "@type": "Rating", "ratingValue": t.rating }
                            }))
                        })
                    }}
                />

                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-2">What Clients & Colleagues Say</h2>
                    <div className="text-white/80 text-sm">
                        <span className="align-middle">Average Rating</span>
                        <span className="mx-2 text-yellow-300 font-semibold">{avgRating}/5</span>
                        <span className="align-middle">({testimonials.length} reviews)</span>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden">
                    <div className="flex items-stretch gap-6 transition-transform duration-700 ease-out"
                        style={{ transform: `translateX(calc(50% - ${(index + 0.5) * 320}px))` }}>
                        {testimonials.map((t, i) => {
                            const isActive = i === index;
                            return (
                                <div key={i} className={`shrink-0 w-[300px] card p-5 transition-all duration-500 ${isActive ? 'opacity-100 blur-0' : 'opacity-40 blur-[1px]'}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                            <Image src={t.image} alt={t.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                                            <p className="text-white/70 text-xs">{t.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(t.rating)].map((_, si) => (
                                            <svg key={si} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-white/80 leading-relaxed text-sm">&ldquo;{t.content}&rdquo;</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
} 