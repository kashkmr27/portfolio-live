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

export default function Home() {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Hero />
                <WhyTrustMe />
                <ProductGuarantees />
                <WhatIDo />
                <SkillsTechnologies />
                <Testimonials />
                <FeaturedProjects />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
} 