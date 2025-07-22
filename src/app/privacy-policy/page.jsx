import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: "Privacy Policy – Akash Kumar | London Frontend Developer & AI Specialist",
    description: "Read our Privacy Policy to learn how we collect, use, and protect your data on Akash Kumar's website. GDPR-compliant and UK/EU privacy standards.",
    keywords: "Privacy Policy, GDPR compliance, data protection, UK frontend developer, London web developer, AI specialist privacy",
    openGraph: {
        title: "Privacy Policy – Akash Kumar | London Frontend Developer & AI Specialist",
        description: "Read our Privacy Policy to learn how we collect, use, and protect your data on Akash Kumar's website. GDPR-compliant and UK/EU privacy standards.",
        url: "https://akashbuilds.com/privacy-policy",
        siteName: "Akash Kumar - Frontend Developer UK",
        locale: "en_GB",
        type: "website"
    }
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Akash Kumar's website and services",
    "url": "https://akashbuilds.com/privacy-policy",
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

export default function PrivacyPolicy() {
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
                        <li className="text-white font-medium">Privacy Policy</li>
                    </ol>
                </nav>

                {/* Hero Section */}
                <section className="container mx-auto">
                    <div className="max-w-4xl mx-auto px-4 py-16 lg:py-32">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                Privacy Policy
                            </h1>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                How we collect, use, and protect your personal data in compliance with UK and EU privacy standards.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">GDPR Compliant</span>
                                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">UK Data Protection</span>
                                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-lg border border-violet-500/30 text-sm font-medium">Transparent</span>
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
                                    This Privacy Policy explains how Akash Kumar (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and protects your personal information when you visit our website or use our services. We are committed to protecting your privacy and ensuring compliance with UK and EU data protection laws, including the General Data Protection Regulation (GDPR).
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    By using our website or services, you agree to the collection and use of information in accordance with this policy.
                                </p>
                            </section>

                            {/* Information We Collect */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>

                                <h3 className="text-xl font-semibold text-violet-300 mb-4">Personal Information</h3>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We may collect the following personal information when you:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Contact us:</strong> Name, email address, phone number, company name</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Book consultations:</strong> Name, email, phone, project details, scheduling preferences</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Subscribe to updates:</strong> Email address and communication preferences</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold text-violet-300 mb-4">Automatically Collected Information</h3>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    When you visit our website, we automatically collect:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Technical data:</strong> IP address, browser type, device information, operating system</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Usage data:</strong> Pages visited, time spent, click patterns, referral sources</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Cookies:</strong> Small text files stored on your device to improve your experience</span>
                                    </li>
                                </ul>
                            </section>

                            {/* How We Use Your Information */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We use your personal information for the following purposes:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Communication:</strong> Respond to your inquiries and provide customer support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Service delivery:</strong> Provide our frontend development and AI integration services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Website improvement:</strong> Analyze usage patterns to enhance user experience</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Legal compliance:</strong> Meet our legal obligations and protect our rights</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Marketing:</strong> Send relevant updates and offers (with your consent)</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Legal Basis for Processing */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Legal Basis for Processing</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    Under GDPR, we process your personal data based on the following legal grounds:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Consent:</strong> When you explicitly agree to data processing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Contract:</strong> To fulfill our service obligations to you</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Legitimate interest:</strong> To improve our services and website</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Legal obligation:</strong> To comply with applicable laws</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Data Sharing and Third Parties */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Data Sharing and Third Parties</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We may share your information with trusted third-party services:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Calendly:</strong> For scheduling consultations and meetings</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Google Analytics:</strong> To analyze website usage and performance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Email services:</strong> For communication and marketing (with consent)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Hosting providers:</strong> To store and serve our website</span>
                                    </li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    We ensure all third-party services comply with GDPR and have appropriate data protection measures in place.
                                </p>
                            </section>

                            {/* Data Security */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your personal data:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Encryption:</strong> Data transmitted over secure HTTPS connections</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Access controls:</strong> Limited access to personal data on a need-to-know basis</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Regular updates:</strong> Security measures are regularly reviewed and updated</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Data minimization:</strong> We only collect data necessary for our services</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Your Rights */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    Under GDPR, you have the following rights regarding your personal data:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Access:</strong> Request a copy of your personal data</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Rectification:</strong> Request correction of inaccurate data</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Erasure:</strong> Request deletion of your personal data</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Portability:</strong> Request your data in a structured format</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Objection:</strong> Object to processing of your data</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Withdraw consent:</strong> Withdraw consent for data processing</span>
                                    </li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    To exercise these rights, please contact us using the information provided below.
                                </p>
                            </section>

                            {/* Data Retention */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    We retain your personal data only for as long as necessary to:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Provide our services and fulfill contractual obligations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Comply with legal and regulatory requirements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span>Resolve disputes and enforce our agreements</span>
                                    </li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    When data is no longer needed, we securely delete or anonymize it.
                                </p>
                            </section>

                            {/* Cookies */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Cookies</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    Our website uses cookies to improve your experience:
                                </p>
                                <ul className="text-white/80 mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Essential cookies:</strong> Required for website functionality</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Analytics cookies:</strong> Help us understand website usage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-violet-400 mr-3 mt-1">•</span>
                                        <span><strong>Preference cookies:</strong> Remember your settings and choices</span>
                                    </li>
                                </ul>
                                <p className="text-white/80 leading-relaxed">
                                    You can control cookie settings through your browser preferences.
                                </p>
                            </section>

                            {/* Contact Information */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                                <p className="text-white/80 mb-4 leading-relaxed">
                                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                                </p>
                                <div className="space-y-3 text-white/80">
                                    <p><strong className="text-violet-300">Email:</strong> contact@akashbuilds.com</p>
                                    <p><strong className="text-violet-300">Subject:</strong> Privacy Policy Inquiry</p>
                                </div>
                                <p className="text-white/80 mt-6 leading-relaxed">
                                    We will respond to your request within 30 days of receipt.
                                </p>
                            </section>

                            {/* Changes to Privacy Policy */}
                            <section className="card p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
                                <p className="text-white/80 leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
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