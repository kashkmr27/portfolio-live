import Hero from './components/Hero';
import TrustBadgeGrid from './components/TrustBadgeGrid';
import Work from './components/Work';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import WhyTrustMe from './components/WhyTrustMe';
import ProductGuarantees from './components/ProductGuarantees';
import WhatIDo from './components/WhatIDo';
import SkillsTechnologies from './components/SkillsTechnologies';
import FeaturedProjects from './components/FeaturedProjects';
import FAQ from './components/FAQ';
import Script from 'next/script';

// FAQ Schema for homepage
const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How quickly can you ship an MVP in London?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typical MVPs ship in 7–14 days. I scope core flows, build a clickable prototype, and launch a slim production slice on Vercel with auth and analytics where needed."
            }
        },
        {
            "@type": "Question",
            "name": "Do you build ChatGPT features for small UK businesses?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. I integrate OpenAI/ChatGPT for onboarding, search, assistants, and automation. I focus on safe prompts, rate-limits, and measurable outcomes (activation, retention)."
            }
        },
        {
            "@type": "Question",
            "name": "Can you work as a front-end engineer with product responsibilities?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. I can own UX flows, define success metrics, and iterate with analytics. I'm hands-on with React/Next.js and comfortable driving product decisions with stakeholders."
            }
        },
        {
            "@type": "Question",
            "name": "How do you handle GDPR and data privacy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Data is minimized and region-aware. I use privacy-by-design defaults, avoid storing PII where unnecessary, and document consents. Cookies and analytics follow UK/EU guidance."
            }
        }
    ]
};

export default function Home() {
    return (
        <div className="wrapper">
            {/* FAQ Structured Data */}
            <Script
                id="homepage-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(homepageFaqSchema)
                }}
            />

            <Header />
            <main>
                <Hero />
                <FeaturedProjects />
                <WhyTrustMe />
                <ProductGuarantees />
                <WhatIDo />
                <SkillsTechnologies />
                <Testimonials />

                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
} 