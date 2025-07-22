import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: "Terms of Service – Akash Kumar | Frontend Developer UK",
    description: "Review the Terms of Service for using Akash Kumar's website and digital services. Clear, UK-compliant terms for all site visitors and clients.",
    keywords: "Terms of Service, legal terms, UK frontend developer, web development terms, AI integration terms, freelance developer terms",
    openGraph: {
        title: "Terms of Service – Akash Kumar | Frontend Developer UK",
        description: "Review the Terms of Service for using Akash Kumar's website and digital services. Clear, UK-compliant terms for all site visitors and clients.",
        url: "https://akashbuilds.com/terms",
        siteName: "Akash Kumar - Frontend Developer UK",
        locale: "en_GB",
        type: "website"
    }
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "TermsOfService",
    "name": "Terms of Service",
    "description": "Terms of Service for Akash Kumar's website and digital services",
    "url": "https://akashbuilds.com/terms",
    "publisher": {
        "@type": "Person",
        "name": "Akash Kumar",
        "jobTitle": "Frontend Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Akash Kumar - Web Development"
        }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15"
};

export default function TermsOfService() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                {/* Breadcrumb Navigation */}
                <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-6">
                    <ol className="flex items-center space-x-2 text-sm text-violet-300">
                        <li>
                            <Link href="/" className="hover:text-violet-200 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <span className="text-violet-400">/</span>
                        </li>
                        <li className="text-white font-medium">Terms of Service</li>
                    </ol>
                </nav>

                {/* Hero Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-16 lg:py-32">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Terms of Service
                            </h1>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                Clear, transparent terms for using our website and digital services. Designed for UK businesses and international clients.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">UK Compliant</span>
                                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">Transparent</span>
                                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">Client-Friendly</span>
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="card p-6 mb-12">
                            <p className="text-white/80 text-center">
                                <strong className="text-violet-300">Last Updated:</strong> January 15, 2024
                            </p>
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-12">
                            {/* Introduction */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Akash Kumar&apos;s website and digital services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our services.
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    These Terms apply to all visitors, users, and clients of our website and services.
                                </p>
                            </section>

                            {/* Service Information */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Service Information</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We provide the following services:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Frontend Development:</strong> React, Next.js, and modern web applications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>AI Integration:</strong> OpenAI, ChatGPT API, and custom AI solutions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Web Consulting:</strong> Technical advice and project planning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Digital Solutions:</strong> Custom software and web applications</span>
                                    </li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    Service availability and pricing are subject to change. We reserve the right to modify or discontinue services at any time.
                                </p>
                            </section>

                            {/* Website Use */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Website Use</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    By using our website, you agree to:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Use the website for lawful purposes only</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Not interfere with or disrupt the website&apos;s functionality</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Not attempt to gain unauthorized access to our systems</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Provide accurate and truthful information when contacting us</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Respect our intellectual property rights</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Intellectual Property */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Akash Kumar and is protected by UK and international copyright laws.
                                </p>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    You may not:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Copy, reproduce, or distribute our content without permission</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Use our content for commercial purposes without authorization</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Modify or create derivative works from our content</span>
                                    </li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    For client projects, intellectual property rights are governed by individual service agreements.
                                </p>
                            </section>

                            {/* User Responsibilities */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">User Responsibilities</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    As a user of our website and services, you are responsible for:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Providing accurate and complete information</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Maintaining the confidentiality of your account information</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Not sharing sensitive information through unsecured channels</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Reporting any security concerns or issues promptly</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Complying with all applicable laws and regulations</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Limitation of Liability */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    To the maximum extent permitted by law, Akash Kumar shall not be liable for:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Indirect, incidental, or consequential damages</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Loss of profits, data, or business opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Damages resulting from third-party actions or services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Technical issues beyond our reasonable control</span>
                                    </li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    Our total liability shall not exceed the amount paid for the specific service in question.
                                </p>
                            </section>

                            {/* Disclaimers */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Disclaimers</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We provide our website and services &ldquo;as is&rdquo; without warranties of any kind:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>We do not guarantee uninterrupted or error-free service</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Information on our website is provided for general purposes only</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>We are not responsible for third-party content or services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Results may vary based on individual circumstances</span>
                                    </li>
                                </ul>
                            </section>

                            {/* External Links */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">External Links</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    Our website may contain links to external websites and services. We:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Do not endorse or control external content</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Are not responsible for external website practices</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Recommend reviewing external privacy policies and terms</span>
                                    </li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    Use external links at your own discretion and risk.
                                </p>
                            </section>

                            {/* Privacy and Data Protection */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Privacy and Data Protection</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    Your privacy is important to us. Our data collection and processing practices are governed by our Privacy Policy, which is incorporated into these Terms by reference.
                                </p>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We comply with UK and EU data protection laws, including GDPR. By using our services, you consent to our data practices as described in our Privacy Policy.
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    For detailed information about how we handle your data, please review our <Link href="/privacy-policy" className="text-violet-300 hover:text-violet-200 underline">Privacy Policy</Link>.
                                </p>
                            </section>

                            {/* Governing Law */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                                </p>
                            </section>

                            {/* Changes to Terms */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the new Terms.
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    We encourage you to review these Terms periodically for any updates.
                                </p>
                            </section>

                            {/* Contact Information */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="space-y-3 text-white/80">
                                    <p><strong className="text-violet-300">Email:</strong> contact@akashbuilds.com</p>
                                    <p><strong className="text-violet-300">Subject:</strong> Terms of Service Inquiry</p>
                                </div>
                                <p className="text-white/80 mt-6 leading-relaxed">
                                    We will respond to your inquiry within 48 hours during business days.
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
} 