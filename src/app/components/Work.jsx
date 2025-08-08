import Link from 'next/link';

export default function Work() {
    const steps = [
        {
            title: 'Quick Call',
            bullets: [
                'Scope: goals, constraints, success metrics',
                'Timeline: 30–45 min discovery',
                'Deliverables: notes + next steps'
            ]
        },
        {
            title: 'Prototype in 7–14 Days',
            bullets: [
                'Scope: core flows, clickable demo',
                'Timeline: 1–2 weeks rapid build',
                'Deliverables: prototype + feedback plan'
            ]
        },
        {
            title: 'Launch & Iterate',
            bullets: [
                'Scope: production deploy with tracking',
                'Timeline: ship fast, improve weekly',
                'Deliverables: release + roadmap'
            ]
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-header__title">Next Steps</h2>
                    <p className="section-header__description">A simple, outcome-focused path to shipping.</p>
                </div>

                {/* Progress bar */}
                <ol className="relative max-w-3xl mx-auto border-l border-white/10 pl-6">
                    {steps.map((step, idx) => (
                        <li key={step.title} className="relative py-6 group">
                            <span className="absolute -left-2 top-7 w-3 h-3 rounded-full bg-violet-400 ring-4 ring-violet-400/20" aria-hidden></span>
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white/70 text-sm font-semibold">
                                    {idx + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold">{step.title}</h3>
                                    <ul className="mt-2 hidden group-hover:block group-focus-within:block space-y-1 text-white/80 text-sm">
                                        {step.bullets.map((b) => (
                                            <li key={b} className="flex items-start gap-2">
                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-400" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Persistent CTAs */}
                <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn btn-secondary btn-lg">Hire Me (FT)</Link>
                    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
                </div>
            </div>
        </section>
    );
}