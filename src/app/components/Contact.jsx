"use client"
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const contactMethods = [
    {
        id: 1,
        name: 'Email',
        value: 'contact@akashbuilds.com',
        link: 'mailto:contact@akashbuilds.com',
        icon: <FiMail size="24" className="text-violet-400" />,
        description: 'Get in touch for project inquiries and consultations'
    },
    {
        id: 4,
        name: 'Calendly',
        value: 'Book 30‑min call',
        link: 'https://calendly.com/connect-akashbuilds/30min',
        icon: <span className="text-violet-400 text-xl">📅</span>,
        description: 'Schedule a quick product jam'
    },
    {
        id: 5,
        name: 'Location',
        value: 'London, UK',
        link: '#',
        icon: <span className="text-violet-400 text-xl">📍</span>,
        description: 'Response window: within 24h (business days)'
    },
    {
        id: 2,
        name: 'LinkedIn',
        value: '@theakashkumar',
        link: 'https://www.linkedin.com/in/theakashkumar/',
        icon: <FaLinkedinIn size="24" className="text-violet-400" />,
        description: 'Connect with me for professional networking'
    },
    {
        id: 3,
        name: 'Github',
        value: '@Akashkumarweb',
        link: 'https://github.com/Akashkumarweb/',
        icon: <FaGithub size="24" className="text-violet-400" />,
        description: 'View my open source projects and code'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const boxVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    whileHover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
    whileTap: { scale: 0.95 },
};

const Contact = () => {
    return (
        <div className="dark" id='contact'>
            <motion.section
                className="bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900 flex flex-col justify-center items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container-wide px-4 py-20 md:py-24 lg:py-28">
                    <div className="text-center mb-8 lg:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-3 lg:mb-4">Contact Me</h2>
                        <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                            Ready to start your project? Get in touch for a free consultation about your frontend development or AI integration needs.
                        </p>
                    </div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
                        {contactMethods.map((method) => (
                            <motion.a
                                key={method.id}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={boxVariants}
                                whileHover="whileHover"
                                whileTap="whileTap"
                                className="flex flex-col items-center gap-3 lg:gap-4 p-4 lg:p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 cursor-pointer transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-violet-500/20 rounded-full flex items-center justify-center">
                                    {method.icon}
                                </div>
                                <div>
                                    <span className="text-white text-base lg:text-lg font-semibold block">{method.name}</span>
                                    <p className="text-violet-400 text-xs lg:text-sm mt-1">{method.value}</p>
                                    <p className="text-white/70 text-xs lg:text-sm mt-2">{method.description}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Contact; 