import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
    const featuredProjects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Modern React e-commerce with AI-powered recommendations",
            image: "/images/portfolio/1.jpg",
            tags: ["React", "Next.js", "AI"],
            link: "/portfolio/ecommerce-platform"
        },
        {
            id: 2,
            title: "AI Chat Application",
            description: "Real-time chat app with ChatGPT integration",
            image: "/images/portfolio/2.jpg",
            tags: ["React", "OpenAI", "WebSocket"],
            link: "/portfolio/ai-chat-app"
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-header__title">Featured Projects</h2>
                    <p className="section-header__description">
                        A selection of my recent work showcasing modern web development
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="portfolio-card group">
                            <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-white/70 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="badge badge-primary text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link href={project.link} className="text-violet-400 hover:text-violet-300 font-medium">
                                View Project →
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/portfolio" className="btn btn-primary btn-lg">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
} 