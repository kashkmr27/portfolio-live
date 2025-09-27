"use client"
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandBluesky } from 'react-icons/tb';
import { SiFigma } from 'react-icons/si';
import { useState } from 'react';

const primaryContactMethods = [
    {
        id: 1,
        name: 'Email',
        value: 'contact@akashbuilds.com',
        link: 'mailto:contact@akashbuilds.com',
        icon: <FiMail size="24" className="text-violet-400" />,
        description: 'Send me a direct message',
        isPrimary: true
    },
    {
        id: 2,
        name: 'LinkedIn',
        value: '@theakashkumar',
        link: 'https://www.linkedin.com/in/theakashkumar/',
        icon: <FaLinkedinIn size="24" className="text-violet-400" />,
        description: 'Connect with me professionally',
        isPrimary: true
    },
    {
        id: 3,
        name: 'GitHub',
        value: '@akashkumarweb',
        link: 'https://github.com/Akashkumarweb/',
        icon: <FaGithub size="24" className="text-violet-400" />,
        description: 'View my open source projects',
        isPrimary: true
    }
];

const socialMediaLinks = [
    {
        id: 1,
        name: 'X (Twitter)',
        link: 'https://x.com/akashbuild',
        icon: <FaXTwitter size="20" className="text-violet-400" />
    },
    {
        id: 2,
        name: 'Pinterest',
        link: 'https://uk.pinterest.com/akashbuilds/',
        icon: <FaPinterest size="20" className="text-violet-400" />
    },
    {
        id: 3,
        name: 'Bluesky',
        link: 'https://bsky.app/profile/akashbuilds.bsky.social',
        icon: <TbBrandBluesky size="20" className="text-violet-400" />
    },
    {
        id: 4,
        name: 'Figma',
        link: 'https://www.figma.com/@akashbuilds',
        icon: <SiFigma size="20" className="text-violet-400" />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    whileHover: { y: -5, transition: { type: 'spring', stiffness: 300 } },
};

const Contact = () => {
    const [emailRevealed, setEmailRevealed] = useState(false);

    // Anti-spam: Split email into parts and use JavaScript to reconstruct
    // This makes it harder for scrapers to find the email
    // const emailParts = ['contact', 'akashbuilds', 'com'];
    // const domain = 'akashbuilds.com';

    // const revealEmail = () => {
    //     setEmailRevealed(true);
    // };

    // const constructEmail = () => {
    //     // Additional anti-spam: Use template literals and dynamic construction
    //     const atSymbol = String.fromCharCode(64); // @ symbol
    //     const dotSymbol = String.fromCharCode(46); // . symbol
    //     return `${emailParts[0]}${atSymbol}${emailParts[1]}${dotSymbol}${emailParts[2]}`;
    // };

    return (
        <div className="dark" id='contact'>
            <motion.section
                className="bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900 py-20 lg:py-28"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container-wide px-4">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl lg:text-4xl text-white font-bold mb-4">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
                            Ready to start your project? Get in touch for a free consultation about your frontend development or AI integration needs.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        {/* Primary Contact Methods */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                            variants={itemVariants}
                        >
                            {primaryContactMethods.map((method) => (
                                <motion.a
                                    key={method.id}
                                    href={method.link}
                                    target={method.name === 'Email' ? undefined : '_blank'}
                                    rel={method.name === 'Email' ? undefined : 'noopener noreferrer'}
                                    variants={itemVariants}
                                    whileHover="whileHover"
                                    className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors">
                                            {method.icon}
                                        </div>
                                        <h3 className="text-white text-lg font-semibold mb-2">{method.name}</h3>
                                        {/* {method.name === 'Email' && !emailRevealed ? (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    revealEmail();
                                                }}
                                                className="text-violet-400 text-sm hover:text-violet-300 transition-colors"
                                            >
                                                {emailParts[0]}@[click to reveal]
                                            </button>
                                        ) : (
                                            <p className="text-violet-400 text-sm mb-2">{constructEmail()}</p>
                                        )} */}
                                        <p className="text-violet-400 text-sm mb-2">{method.value}</p>
                                        <p className="text-white/70 text-sm">{method.description}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Social Media Section */}
                        <motion.div
                            className="text-center"
                            variants={itemVariants}
                        >
                            <h3 className="text-xl text-white font-semibold mb-6">
                                Follow Me Online
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {socialMediaLinks.map((social) => (
                                    <motion.a
                                        key={social.id}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                                            {social.icon}
                                        </div>
                                        <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                                            {social.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            className="text-center mt-16"
                            variants={itemVariants}
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
                                <h3 className="text-2xl lg:text-3xl text-white font-bold mb-4">
                                    Ready to Start Your Project?
                                </h3>
                                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                                    Let&apos;s discuss how I can help bring your ideas to life with modern web technologies and exceptional user experience.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={`mailto:method.value`}
                                        className="btn btn-primary btn-lg"
                                    >
                                        Send Message
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/theakashkumar/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary btn-lg"
                                    >
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Contact; 