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

export const metadata = {
  title: 'ASTP website redesign — clearer UX, MODX build and technical SEO (traffic +69%, engagement +45%, conversions +18%)',
  description:
    'Redesigned ASTP on MODX: clearer membership UX, faster pages and technical SEO. Result: traffic +69%, engagement +45% and conversions +18%.',
  openGraph: {
    title:
      'ASTP website redesign — clearer UX, MODX build and technical SEO (traffic +69%, engagement +45%, conversions +18%)',
    description:
      'Redesigned ASTP on MODX: clearer membership UX, faster pages and technical SEO. Result: traffic +69%, engagement +45% and conversions +18%.',
    url: 'https://akashbuilds.com/case-studies/astp-website-redesign',
    siteName: 'Akash Kumar - Frontend & Aspiring Product Engineer UK',
    images: [
      {
        url: '/images/case-studies/astp/astp-homepage-hero-before-after-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'ASTP website redesign — hero comparison image placeholder'
      }
    ],
    locale: 'en_GB',
    type: 'article'
  },
  alternates: {
    canonical: 'https://akashbuilds.com/case-studies/astp-website-redesign-modx-ux-seo'
  }
};

export default function ASTPWebsiteRedesignCaseStudy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'ASTP website redesign — clearer UX, MODX build and technical SEO (traffic +69%, engagement +45%, conversions +18%)',
    description:
      'Redesigned ASTP on MODX: clearer membership UX, faster pages and technical SEO. Result: traffic +69%, engagement +45% and conversions +18%.',
    image: [
      'https://akashbuilds.com/images/case-studies/Real-Time-Digital-Card-Analytics-Platform.png'
    ],
    author: { '@type': 'Person', name: 'Akash Kumar' },
    datePublished: '2024-08-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://akashbuilds.com/case-studies/astp-website-redesign-modx-ux-seo'
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900 text-white">
        <JsonLd data={jsonLd} />

        {/* Hero Section */}
        <Section id="hero" className='space-y-8 lg:space-y-10 px-4 pt-28 pb-12 lg:pt-32 lg:pb-0'>
          <Container>
            <div>
              <Link href="/case-studies" className="text-violet-400 hover:underline text-sm font-medium">
                &larr; Back to Case Studies
              </Link>
            </div>

            <div className="text-center m-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                ASTP website redesign — clearer UX, MODX build and technical SEO
              </h1>
              <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
                Traffic +39%, engagement +25%, conversions +8%
              </p>

              <BadgeRow
                className="mt-6"
                items={[
                  'UI/UX Design',
                  'Figma',
                  'CMS',
                  'Technical SEO',
                  'Accessibility',
                  'Performance',
                  'Analytics'
                ]}
              />
            </div>

            <div className="max-w-5xl mx-auto">
              <ScreenshotFrame
                src="/images/case-studies/astp/astp-homepage-hero-before-after-2025.jpg"
                alt="ASTP homepage before and after redesign — clear hero and membership CTA"
                width={1200}
                height={700}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
              />
              <p className="text-center text-white/60 text-sm mt-3">Homepage: before → after. New hero with clearer value statement and single “Become an ASTP member” CTA.</p>
            </div>
          </Container>
        </Section>

        {/* Project Summary */}
        <Section id="summary" className="py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">ASTP website revamp for better experience and SEO</h2>
                <div className="space-y-6 text-white/85 text-lg leading-relaxed">
                  <p>
                    ASTP needed a SEO friendly, user friendly and clearer website so people could quickly understand membership value and join. The old
                    design was heavy with text and confusing list boxse. Pricing and calls to action were hard to find. I revamp the
                    website, and rebuilt the it in a CMS called MODX so editors could maintain content easily, and applied practical technical
                    SEO practices. This help me to achieve a better result and cleaner experience for users and measurable gains in visits, engagement and
                    sign-ups.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold my-6">The problem solving</h2>
                  <div className="space-y-6 text-white/85 text-lg leading-relaxed">
                    <p>On first site review, three things stood out:</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span>
                          <strong>It was Hard to scan content.</strong> Membership benefits were buried in long paragraphs, lines and blocky layouts —
                          people weren&apos;t finding the info they needed.
                        </span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span>
                          <strong>Confusing decision paths.</strong> Calls to action button were smaller or scattered, so visitors often left
                          without joining.
                        </span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span>
                          <strong>Technical issues.</strong> Page load, image handling and metadata meant the site wasn&apos;t getting the
                          search visibility it could.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Those issues made joining ASTP slower and less likely. Our aim was simple: make it obvious why someone should
                      join, make the decision fast, and make the site easy for both users and editors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-white/60 text-sm uppercase tracking-wide">My role</dt>
                    <dd className="text-white font-medium">Lead designer (UI/UX), Frontend development and technical SEO</dd>
                  </div>
                  <div>
                    <dt className="text-white/60 text-sm uppercase tracking-wide">Duration</dt>
                    <dd className="text-white font-medium">3 months (discovery → launch → optimisation)</dd>
                  </div>
                  <div>
                    <dt className="text-white/60 text-sm uppercase tracking-wide">Key outcomes</dt>
                    <dd className="text-white font-medium">
                      Traffic grew from 9K to 12K (+39%), engagement rose +25%, and membership conversions increased +8%.
                    </dd>
                  </div>
                </dl>
              </div>

            </div>
          </Container>
        </Section>

        <Section id="goals">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My goals for the project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {[
                'Make the homepage and membership pages communicate value in seconds.',
                'Provide a quick, side-by-side way to compare membership types.',
                'Improve accessibility and page performance so users can browse smoothly.',
                'Build maintainable templates in MODX so content updates wouldn\'t need a developer.'
              ].map((goal) => (
                <div key={goal} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                  <p className="text-white/85 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* What I did */}
        <Section id="what-i-did" className="py-12 md:py-16">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What I actually did (step by step)</h2>
            <ol className="space-y-6 max-w-4xl list-decimal list-inside">
              <li>
                <span className="text-white/85 text-lg leading-relaxed font-semibold mb-2">Discovery and quick checks</span>
                <p className="text-white/80">
                  I ran a short discovery: stakeholder interviews, analytics review and a fast content audit. This help me to confirmed the
                  homepage and membership pages which are the highest impact areas on website.
                </p>
              </li>
              <li>
                <span className="text-white/85 text-lg leading-relaxed font-semibold mb-2">Fast prioritisatio</span>
                <p className="text-white/80">
                  Due to time limitations - we agreed on a small set of changes that would move the needle quickly. Clearer hero with one call-to-action button,
                  card based membership pricing, and a comparison grid.
                </p>
              </li>
              <li>
                <span className="text-white/85 text-lg leading-relaxed font-semibold mb-2">Sketch → prototype → feedback</span>
                <p className="text-white/80 mb-4">
                  I started creating the wireframes in figma, then built higher fidelity mockups after feedback on wireframes. After that i have shared these with stakeholders, got feedback again, and
                  iterated twice before moving to build. This really help me to kept the process fast and focused.
                </p>
                <div className="max-w-4xl mx-auto">
                  <ScreenshotFrame
                    src="/images/case-studies/astp/Sketch-prototype-and-feedback.jpg"
                    alt="ASTP full revamp of website"
                    width={1200}
                    height={700}
                  />
                  <p className="text-center text-white/60 text-sm mt-3">Membership options simplified into scannable cards — bold pricing and single-action CTA.</p>
                </div>
              </li>
              <li>
                <span className="text-white/85 text-lg leading-relaxed font-semibold mb-2">Build in CMS called MODX</span>
                <p className="text-white/80">
                  I implemented modular templates (template variables) in MODX and reusable components for hero, cards, comparison table and event
                  listings. That made it straightforward for content editors to update pricing and copy without a developer.
                </p>
              </li>
              <li>
                <span className="text-white/85 text-lg leading-relaxed font-semibold mb-2">Technical SEO work</span>
                <p className="text-white/80">
                  I handled the most useful SEO fixes first. Clean meta titles and descriptions, canonical tags, og meta for socail media sharing, sitemap and robots
                  checks, image srcset and lazy loading (used <a className='underline text-purple-600' href='https://www.cloudimage.io/' target='_blank'>cloudimage.io</a>), plus structured data (Organisation, BreadcrumbList and Event where relevant).
                </p>
              </li>
              <li>
                <span className="text-white/85 text-lg leading-relaxed font-semibold mb-2">Usability checks and A/B testing</span>
                <p className="text-white/80">
                  I ran short moderated sessions (6 participants) to validate the membership flow. After launch we ran A/B tests on
                  CTA copy and card order for two weeks and adjusted based on what worked.
                </p>
              </li>
            </ol>
          </Container>
        </Section>

        {/* Design choices */}
        <Section id="design-choices">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Design choices and why they mattered</h2>
            <div className="space-y-8 max-w-4xl">
              <div>
                <h3 className="text-xl font-semibold mb-2">Clear hero and single action</h3>
                <p className="text-white/80">
                  Old homepage: a busy photo and a weak CTA. New homepage: a tight headline, single “Become an ASTP member”
                  button and a clear one-liner that tells visitors what ASTP does. This removed early hesitation and focused clicks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Card-style pricing</h3>
                <p className="text-white/80 mb-4">
                  Instead of dense paragraphs, membership options now live in clear cards: bold price, 1–2 benefit bullets and a
                  single join button. People scan cards quickly; that’s all we needed for decisions.
                </p>
                <div className="max-w-4xl mx-auto">
                  <ScreenshotFrame
                    src="/images/case-studies/astp/astp-membership-cards-pricing-benefits.jpg"
                    alt="Membership options simplified into scannable cards — bold pricing and single-action CTA."
                    width={1200}
                    height={700}
                  />
                  <p className="text-center text-white/60 text-sm mt-3">
                    Membership cards showing pricing, benefits and join buttons
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compact comparison table</h3>
                <p className="text-white/80 mb-4">
                  Long text lists were replaced with a readable side-by-side grid so users can compare features at a glance. This
                  was the single biggest usability win in testing.
                </p>
                <div className="max-w-4xl mx-auto">
                  <ScreenshotFrame
                    src="/images/case-studies/astp/astp-membership-comparison-grid-before-after.jpg"
                    alt="Side-by-side membership comparison grid — features, benefits and differences"
                    width={1200}
                    height={700}
                  />
                  <p className="text-center text-white/60 text-sm mt-3">Before and after membership comparison grid</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessibility and small refinements</h3>
                <p className="text-white/80">
                  I increased text contrast, added visible focus states for keyboard navigation, and made headings consistent so
                  screen readers can move through pages predictably.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Technical work — the practical items */}
        <Section id="technical" className="py-12 md:py-16">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical work — the practical items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {[
                'Improved meta titles/descriptions for priority pages and cleaned up duplicate content.',
                'Added structured data to help search engines show clearer results.',
                'Optimised images using cloudimage.io and srcset and lazy loading to improve load times.',
                'Fixed sitemap, meta with canonical URLs and robots were aligned with the new website structure.',
                'Making sure the frontend code light and using semantic HTML to help both speed and accessibility.'
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                  <p className="text-white/85 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Results */}
        <Section id="results">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Results (what actually changed)</h2>
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl bg-gradient-to-br from-violet-600/10 to-teal-600/10 p-8 border border-white/10">
                <div className="text-5xl font-extrabold text-violet-200 mb-2">+39%</div>
                <div className="text-white/80">Traffic: 9K → 12K (August → September)</div>
                <div className="mt-4">
                  <ScreenshotFrame
                    src="/images/case-studies/astp/astp-traffic-growth-chart-2025.png"
                    alt="ASTP traffic growth chart — visits increased"
                    width={1200}
                    height={700}
                  />
                  <p className="text-white/60 text-xs mt-2">Traffic increased from 9K → 12K (August → September). Engagement +25% and conversions +8%.)</p>
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm text-center mt-6 max-w-3xl mx-auto">
              The numbers came from Google Analytics comparisons for matched date ranges and the conversion tracking we set up for
              membership sign-ups.
            </p>
          </Container>
        </Section>

        {/* Learnings */}
        <Section id="learnings" className="py-12 md:py-16">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What I learned (and what I’d keep doing)</h2>
            <div className="space-y-4 text-white/85 max-w-4xl">
              <p>
                People respond to clarity: a single, clear CTA and scannable pricing do more than tiny copy tweaks.
              </p>
              <p>
                Technical improvements and UX changes reinforce each other. Better indexing plus better onsite clarity = more sign-ups.
              </p>
              <p>
                Building modular templates in MODX made edits less risky and quicker — good for organisations that update content often.
              </p>
            </div>
          </Container>
        </Section>

        {/* Tools & tech */}
        <Section id="tools">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tools and tech I used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {[
                'Design: Figma for wireframes and mockups.',
                'Build: MODX CMS, semantic HTML, Tailwind-like utility classes, lightweight vanilla JS.',
                'SEO & analytics: Google Analytics, Search Console, Lighthouse and schema testing tools.',
                'Testing: quick moderated usability sessions and lightweight A/B testing.'
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                  <p className="text-white/85 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>


        {/* FAQs */}
        <Section id="faqs" className="py-12 md:py-16">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">FAQs</h2>
            <div className="space-y-4 max-w-3xl">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <p className="font-semibold text-white mb-3">How long was the project?</p>
                <p className="text-white/80">About three months from initial discovery to launch, with ongoing tweaks after launch.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <p className="font-semibold text-white mb-3">Did you change membership prices to get more sign-ups?</p>
                <p className="text-white/80">No. The lift came from better clarity and a simpler path to sign-up.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <p className="font-semibold text-white mb-3">Why MODX?</p>
                <p className="text-white/80">MODX let us build flexible, reusable templates so content teams can make updates without a developer.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <p className="font-semibold text-white mb-3">How were results measured?</p>
                <p className="text-white/80">Using Google Analytics for traffic and conversion goals, plus engagement metrics and short user tests.</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section id="cta" className="py-12 md:py-16">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <CtaGroup
                primary={{ href: '/contact', label: 'Book a Consultation', ariaLabel: 'Book a consultation for your redesign/SEO project' }}
                secondary={{ href: '/services', label: 'View Services', ariaLabel: 'View services' }}
              />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}


