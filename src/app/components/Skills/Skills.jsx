export default function Skills() {
    const skills = [
        {
            category: "Frontend",
            items: [
                { name: "React", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "JavaScript", level: 95 },
                { name: "HTML/CSS", level: 90 },
                { name: "Tailwind CSS", level: 85 }
            ]
        },
        {
            category: "Backend & Tools",
            items: [
                { name: "Node.js", level: 80 },
                { name: "Git", level: 85 },
                { name: "Figma", level: 75 },
                { name: "PostgreSQL", level: 70 },
                { name: "AWS", level: 65 },
                { name: "Docker", level: 60 }
            ]
        },
        {
            category: "AI & Integration",
            items: [
                { name: "OpenAI API", level: 85 },
                { name: "ChatGPT Integration", level: 90 },
                { name: "AI Chatbots", level: 80 },
                { name: "API Development", level: 85 },
                { name: "Third-party APIs", level: 90 },
                { name: "Webhooks", level: 80 }
            ]
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-header__title">Skills & Technologies</h2>
                    <p className="section-header__description">
                        Expertise in modern web technologies and AI integration
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <div key={index} className="card">
                            <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                            <div className="space-y-4">
                                {category.items.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white/90 font-medium">{skill.name}</span>
                                            <span className="text-violet-400 text-sm font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-violet-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 