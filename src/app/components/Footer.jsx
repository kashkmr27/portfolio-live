import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="border-t border-white/10" style={{ background: 'var(--gradient-footer)' }}>
            <div className="container">
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Description */}
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="inline-block mb-4">
                                <Image
                                    src="/images/webdevakash.webp"
                                    alt="Akash Kumar"
                                    width={120}
                                    height={36}
                                    className="h-8 w-auto"
                                />
                            </Link>
                            <p className="text-white/70 max-w-md">
                                Frontend developer specializing in React, Next.js, and AI-integrated web applications.
                                Building modern, scalable solutions for startups and agencies.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-4 text-sm">
                                <Link href="/services/react-development" className="text-white/80 hover:text-white underline underline-offset-4">
                                    Hire a Front-End & Aspiring Product Engineer
                                </Link>
                                <Link href="/services" className="text-white/80 hover:text-white underline underline-offset-4">
                                    MVP Developer UK
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" className="text-white/70 hover:text-violet-400 transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio" className="text-white/70 hover:text-violet-400 transition-colors">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-white/70 hover:text-violet-400 transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies" className="text-white/70 hover:text-violet-400 transition-colors">
                                        Case Studies
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/services/frontend-development" className="text-white/70 hover:text-violet-400 transition-colors">
                                        Frontend Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/react-development" className="text-white/70 hover:text-violet-400 transition-colors">
                                        React Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-integration" className="text-white/70 hover:text-violet-400 transition-colors">
                                        AI Integration
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} Akash Kumar. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="/privacy-policy" className="text-white/50 hover:text-violet-400 text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-white/50 hover:text-violet-400 text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>

                    <div className="mt-4 text-center text-white/60 text-xs">
                        Built with React/Next.js · Deployed on Vercel
                    </div>
                </div>
            </div>
        </footer>
    );
} 