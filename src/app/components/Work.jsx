import Link from 'next/link';

export default function Work() {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-header__title">How I Work</h2>
                    <p className="section-header__description">
                        A proven process that delivers exceptional results for my clients
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-violet-400">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
                        <p className="text-white/70">
                            Understanding your goals, requirements, and target audience to create the perfect solution.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-violet-400">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Planning</h3>
                        <p className="text-white/70">
                            Creating detailed wireframes, user flows, and technical architecture for your project.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-violet-400">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Development</h3>
                        <p className="text-white/70">
                            Building your application with modern technologies, clean code, and best practices.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-violet-400">4</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Launch</h3>
                        <p className="text-white/70">
                            Deploying your project with thorough testing, optimization, and ongoing support.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/contact" className="btn btn-primary btn-lg">
                        Start Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
} 