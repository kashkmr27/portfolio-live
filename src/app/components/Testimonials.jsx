import Image from 'next/image';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Anthony Seminara",
            role: "CEO, TechStartup London",
            image: "/images/testimonial/Anthony-Seminara.jpeg",
            content: "Akash delivered an exceptional React application for our London team. His expertise as a frontend developer UK made the entire process seamless. The Next.js solution exceeded our expectations.",
            rating: 5
        },
        {
            name: "Vince Stevenson",
            role: "Director, Edutech",
            image: "/images/testimonial/Vince-Stevenson.jpeg",
            content: "Working with Akash was a game-changer for our project. His AI integration skills, especially with ChatGPT API, helped us launch ahead of schedule. A true SaaS specialist UK.",
            rating: 5
        },
        {
            name: "Prashant Sutar",
            role: "Founder, Crawlmagic",
            image: "/images/testimonial/prashant-sutar.webp",
            content: "Akash&apos;s technical skills and communication are top-notch. He transformed our vision into a beautiful, functional web application. The best freelance frontend developer we&apos;ve worked with.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="section-lg bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">What Clients & Colleagues Say</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Hear from UK businesses and remote teams who&apos;ve experienced my work firsthand.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-white/80 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 