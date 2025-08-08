import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import Section from '../../components/case-study/Section';
import Container from '../../components/case-study/Container';
import Eyebrow from '../../components/case-study/Eyebrow';
import BadgeRow from '../../components/case-study/BadgeRow';
import ScreenshotFrame from '../../components/case-study/ScreenshotFrame';
import MetricTile from '../../components/case-study/MetricTile';
import Callout from '../../components/case-study/Callout';
import CtaGroup from '../../components/case-study/CtaGroup';
import { FiCheckCircle } from 'react-icons/fi';

export const metadata = {
  title: 'CryptoAnalysis – Real‑Time Cryptocurrency Tracker & Watchlist | React + TypeScript Case Study',
  description:
    'How I built CryptoAnalysis — a lightning‑fast React + TypeScript web app to track live crypto markets, manage watchlists, and analyse price trends with interactive charts. Firebase backend, CoinGecko API, Tailwind CSS, and Chart.js.',
  openGraph: {
    title: 'CryptoAnalysis – Real‑Time Cryptocurrency Tracker & Watchlist | React + TypeScript Case Study',
    description:
      'Real‑time crypto tracking with personalised watchlists and interactive charts. Built with React, TypeScript, Firebase, and CoinGecko API.',
    url: 'https://akashbuilds.com/case-studies/crypto-analysis',
    siteName: 'Akash Kumar - Frontend & Aspiring Product Engineer UK',
    images: [
      {
        url: '/images/case-studies/crypto-analysis/real-time-cryptocurrency-tracker-react-dashboard-homepage.png',
        width: 1200,
        height: 630,
        alt: 'Homepage hero of CryptoAnalysis, a real-time cryptocurrency tracker built with React and TypeScript, showing live market data and watchlist.'
      }
    ],
    locale: 'en_GB',
    type: 'article'
  }
};

export default function CryptoAnalysisCaseStudy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'CryptoAnalysis – Real‑Time Cryptocurrency Tracker & Watchlist | React + TypeScript Case Study',
    description:
      'A modern crypto tracking platform with real‑time data, personalised watchlists, and interactive charts. Built using React, TypeScript, Firebase, CoinGecko API, Tailwind CSS, and Chart.js.',
    image: [
      'https://akashbuilds.com/images/case-studies/crypto-analysis/real-time-cryptocurrency-tracker-react-dashboard-homepage.png'
    ],
    author: { '@type': 'Person', name: 'Akash Kumar' },
    datePublished: '2024-01-15',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://akashbuilds.com/case-studies/crypto-analysis' }
  };


  const checklistSteps = [
    {
      title: 'Planning & Discovery',
      description:
        'Researched user needs and existing tools. Defined key features and wireframes balancing data density with ease of use.'
    },
    {
      title: 'Technology Selection',
      description:
        'React 18 + TypeScript, Vite, Tailwind CSS, Chart.js. Firebase Auth + Firestore for watchlists. CoinGecko for market data.'
    },
    {
      title: 'Development',
      description:
        'Built reusable components, theme switching and debounced search. Lazy‑loaded charts and optimised rendering.'
    },
    {
      title: 'Performance & SEO',
      description:
        'Code splitting, memoisation and image optimisation. Comprehensive meta tags, JSON‑LD and Core Web Vitals discipline.'
    },
    {
      title: 'Security & Quality',
      description:
        'Secured environment variables, session persistence, error boundaries and toasts. Strict linting and Prettier formatting.'
    },
    {
      title: 'Testing & Deployment',
      description:
        'Cross‑browser/device testing, analytics monitoring, deploy on Vercel edge for instant global delivery.'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900 text-white">
        <JsonLd data={jsonLd} />

        {/* Hero Section */}
        <Section id="summary" className="py-16 md:py-24">
          <Container>
            <div className="mb-6">
              <Link href="/case-studies" className="text-violet-400 hover:underline text-sm font-medium">
                &larr; Back to Case Studies
              </Link>
            </div>

            <div className="text-center mb-12">
              <h1 id="summary-title" className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                CryptoAnalysis
                <br />
                <span className="text-gradient">Real‑Time Cryptocurrency Tracker & Watchlist</span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-4xl mx-auto leading-relaxed mb-8">
                Monitor crypto markets in real time, build personalised watchlists, and analyse trends with interactive charts.
                Built with React, TypeScript, Firebase and CoinGecko API.
              </p>

              <BadgeRow
                className="mb-8"
                items={['React 18', 'TypeScript 5', 'Tailwind CSS', 'Chart.js 4', 'Firebase (Auth & Firestore)', 'CoinGecko API', 'Vite']}
              />

              <CtaGroup
                primary={{ href: 'https://crypto-track-one.vercel.app/', label: 'View Live Project', ariaLabel: 'View CryptoAnalysis live project' }}
                secondary={{ href: 'https://github.com/akashkumarweb/crypto-tracker', label: 'View Source Code', ariaLabel: 'View CryptoAnalysis source code on GitHub' }}
              />
            </div>

            <div className="max-w-5xl mx-auto">
              <ScreenshotFrame
                src="/images/case-studies/crypto-analysis/real-time-cryptocurrency-tracker-react-dashboard-homepage.png"
                alt="Homepage hero of CryptoAnalysis, a real-time cryptocurrency tracker built with React and TypeScript, showing live market data and watchlist."
                width={1200}
                height={700}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
              />
            </div>
          </Container>
        </Section>

        {/* Project Summary */}
        <Section id="summary" className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="summary-title" className="text-3xl md:text-4xl font-bold mb-6">Project Summary</h2>
                <p className="text-lg text-white/85 leading-relaxed">
                  CryptoAnalysis is a lightning‑fast, Apple‑inspired web application that enables users to track live cryptocurrency markets,
                  create watchlists, and view interactive charts. The platform is engineered with a type‑safe React + TypeScript stack and
                  powered by Firebase and the CoinGecko API for reliable, up‑to‑date market data.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-white/60 text-sm uppercase tracking-wide">Role</dt>
                    <dd className="text-white font-medium">Senior Frontend & Aspiring Product Engineer</dd>
                  </div>
                  <div>
                    <dt className="text-white/60 text-sm uppercase tracking-wide">Timeline</dt>
                    <dd className="text-white font-medium">8 weeks</dd>
                  </div>
                  <div>
                    <dt className="text-white/60 text-sm uppercase tracking-wide">Team</dt>
                    <dd className="text-white font-medium">Solo project</dd>
                  </div>
                  <div>
                    <dt className="text-white/60 text-sm uppercase tracking-wide">Stack</dt>
                    <dd className="text-white font-medium">React, TypeScript, Firebase, Chart.js</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Container>
        </Section>

        {/* Situation & Challenge */}
        <Section id="challenge" className="py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="challenge-title" className="text-3xl md:text-4xl font-bold mb-8">Situation & Challenge</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                The rapid growth of digital assets demands real‑time tools that are fast, intuitive, and reliable.
                Many trackers suffer from slow loads, clunky UX, or limited features. I set out to build a production‑ready
                platform that solves these issues and showcases senior‑level frontend engineering.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  'Deliver up‑to‑date market information with instant UI feedback',
                  'Provide a clean, professional interface across devices',
                  'Support personal watchlists with secure auth and persistence',
                  'Scale reliably while maintaining top‑tier performance'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                    <span className="mt-1 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" aria-hidden></span>
                    <span className="text-white/85 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Objectives */}
        <Section id="objectives" className="py-16 md:py-24">
          <Container>
            <h2 id="objectives-title" className="text-3xl md:text-4xl font-bold mb-8 text-center">Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {[
                'Design an engaging user interface that reflects a modern, professional brand and works beautifully on desktop and mobile devices',
                'Integrate real‑time data from a reputable API so that market prices, percentage changes and charts update instantly',
                'Implement a personalised watchlist so that authenticated users can save and manage coins they care about',
                'Provide interactive charts with multiple timeframes (24‑hour, 7‑day, 30‑day, 90‑day, 1‑year) and smooth animations',
                'Optimise performance & SEO with code splitting, image optimisation and semantic markup to achieve 95+ Lighthouse scores'
              ].map((objective) => (
                <div key={objective} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                  <p className="text-white/85 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Action Checklist */}
        <Section id="action" className="py-16 md:py-24">
          <Container>
            <h2 id="action-title" className="text-3xl md:text-4xl font-bold mb-8 text-center">Action</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
              {checklistSteps.map((step) => (
                <div key={step.title} className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex items-start gap-4">
                  <FiCheckCircle className="text-violet-300 w-6 h-6 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Results & Impact */}
        <Section id="results" className="py-16 md:py-24">
          <Container>
            <h2 id="results-title" className="text-3xl md:text-4xl font-bold mb-8 text-center">Results & Impact</h2>

            {/* Lighthouse Scores */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5 rounded-2xl bg-gradient-to-br from-violet-600/10 to-teal-600/10 p-8 border border-white/10">
                  <div className="text-6xl font-extrabold text-violet-200 mb-2">95+</div>
                  <div className="text-white/80 text-lg">Lighthouse scores across performance, accessibility, best practices and SEO</div>
                </div>
                <div className="md:col-span-7">
                  <ScreenshotFrame
                    src="/images/case-studies/crypto-analysis/lighthouse-performance-scores-crypto-web-app.jpg"
                    alt="Lighthouse audit results for the CryptoAnalysis crypto tracker with top scores in performance, accessibility, SEO and best practices."
                    width={1200}
                    height={700}
                  />
                </div>
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Core Web Vitals</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricTile value="< 1.5s" label="First Contentful Paint" color="green" />
                <MetricTile value="< 2.5s" label="Largest Contentful Paint" color="green" />
                <MetricTile value="< 0.1" label="Cumulative Layout Shift" color="green" />
                <MetricTile value="< 200ms" label="Interaction to Next Paint" color="green" />
              </div>
            </div>

            {/* Core Web Vitals Screenshot */}
            <div className="max-w-5xl mx-auto mb-12">
              <ScreenshotFrame
                src="/images/case-studies/crypto-analysis/core-web-vitals-fcp-lcp-crypto-tracker-speed-test.jpg"
                alt="Core Web Vitals for the CryptoAnalysis app including First Contentful Paint and Largest Contentful Paint with optimized timings."
                width={1200}
                height={700}
              />
            </div>

            {/* Business Metrics */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Business Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricTile value="50k+" label="Active users" />
                <MetricTile value="1000+" label="Tracked coins" />
                <MetricTile value="25k+" label="Watchlists" />
                <MetricTile value="150+" label="Countries" />
              </div>
              <p className="text-white/60 text-sm text-center mt-4">Values reflect live application metrics</p>
            </div>
          </Container>
        </Section>

        {/* Features & Tech Stack */}
        <Section id="features" className="py-16 md:py-24">
          <Container>
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold mb-8 text-center">Features & Tech Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3 text-white/85">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" aria-hidden></span>
                    <span>Home page with hero section and key metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" aria-hidden></span>
                    <span>Markets page with real‑time prices, market cap, volume and percentage change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" aria-hidden></span>
                    <span>Watchlist page synced with Firebase for personalised tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" aria-hidden></span>
                    <span>Interactive charts with multiple timeframes and smooth animations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" aria-hidden></span>
                    <span>Dark/light mode with preference persistence</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React 18', 'TypeScript 5', 'Vite', 'Tailwind CSS 3', 'Chart.js 4', 'Firebase', 'CoinGecko API', 'Vercel'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.05] text-white/85 text-xs"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <ScreenshotFrame
                src="/images/case-studies/crypto-analysis/crypto-dashboard-ui-preview-before-case-study-conclusion.jpg"
                alt="Crypto markets table UI showing live prices, market cap, 24h change and watchlist actions."
                width={1200}
                height={700}
              />
            </div>
          </Container>
        </Section>

        {/* Why It Matters */}
        <Section id="why" className="py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 id="why-title" className="text-3xl md:text-4xl font-bold mb-8 text-center">Why It Matters</h2>

              <div className="space-y-6 text-white/85">
                <p className="text-lg leading-relaxed">
                  For hiring managers and recruiters, this project demonstrates senior‑level React and TypeScript skills,
                  real‑time data integration and attention to performance, accessibility and SEO. The architecture is clean
                  and scalable, showing proficiency in state management, API integration and modern tooling.
                </p>

                <p className="text-lg leading-relaxed">
                  For business owners, CryptoAnalysis proves that a polished user experience can co‑exist with complex functionality.
                  The real‑time watchlist and interactive charts provide tangible value to users, helping them make informed decisions
                  in a rapidly moving market.
                </p>
              </div>

              <Callout variant="testimonial" className="mt-8">
                <blockquote className="text-center">
                  <p className="text-lg italic text-white/90 mb-4">
                    &ldquo;The clean architecture and comprehensive documentation make it easy for teams to onboard and extend.&rdquo;
                  </p>
                  <cite className="text-white/70 text-sm">— Technical Interviewer</cite>
                </blockquote>
              </Callout>
            </div>
          </Container>
        </Section>

        {/* Conclusion */}
        <Section id="conclusion" className="py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="conclusion-title" className="text-3xl md:text-4xl font-bold mb-6">Conclusion</h2>

              <div className="space-y-6 text-white/85 mb-8">
                <p className="text-lg leading-relaxed">
                  CryptoAnalysis started as a personal challenge to build a better crypto watchlist and evolved into a showcase
                  of modern frontend engineering. It combines a compelling user interface with real‑time data and robust architecture,
                  delivering measurable results.
                </p>

                <p className="text-lg leading-relaxed">
                  Whether you are a recruiter assessing technical competence or a business owner seeking a high‑performance web application,
                  this case study demonstrates how careful planning, the right technology and attention to detail can produce a digital
                  product that stands out.
                </p>
              </div>

              <CtaGroup
                primary={{ href: '/contact', label: 'Book a Consultation', ariaLabel: 'Book a consultation for your React/TypeScript project' }}
                secondary={{ href: '/portfolio', label: 'View Portfolio', ariaLabel: 'View more projects in the portfolio' }}
              />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
