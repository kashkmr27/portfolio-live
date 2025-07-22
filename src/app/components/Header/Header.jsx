'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { NAV_LINKS, SERVICES_DROPDOWN } from "../../constants";

const AnimatedNavLinks = ({ handleNavClick, pathname, setServicesOpen, servicesOpen }) => {
    const servicesRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [setServicesOpen]);

    return (
        <nav className="nav">
            <ul className="nav__list">
                {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href ||
                        (link.href.startsWith('/') && pathname.startsWith(link.href)) ||
                        (link.href.startsWith('#') && pathname === '/' && link.href === '#testimonials');

                    return (
                        <li key={link.key}>
                            <Link
                                href={link.href}
                                className={`nav__link ${isActive ? 'nav__link--active' : ''}`}
                                scroll={false}
                                onClick={e => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}

                {/* Services Dropdown */}
                <li
                    className="relative"
                    ref={servicesRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                >
                    <Link
                        href="/services"
                        className={`nav__link flex items-center gap-1 ${pathname.startsWith('/services') ? 'nav__link--active' : ''}`}
                        onClick={e => handleNavClick(e, '/services')}
                    >
                        Services
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 backdrop-blur-sm">
                            <div className="p-2">
                                {SERVICES_DROPDOWN.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                        onClick={() => setServicesOpen(false)}
                                    >
                                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">{service.icon}</span>
                                        <div>
                                            <div className="text-white font-medium group-hover:text-violet-300 transition-colors">{service.title}</div>
                                            <div className="text-slate-400 text-sm">{service.description}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    const [active, setActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 86);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const sectionId = href.replace('#', '');

            if (pathname !== '/') {
                router.push(`/#${sectionId}`);
            } else {
                // Already on home: smooth scroll
                const element = document.getElementById(sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
            setActive(false); // Always close mobile menu
        } else {
            setActive(false); // Always close mobile menu
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${active ? 'header--active' : ''}`}>
            <div className="header__container">
                {/* Logo */}
                <Link href="/" id="logo" className="flex items-center" onClick={() => setActive(false)}>
                    <Image
                        src={'/images/webdevakash.webp'}
                        alt="Akash Kumar - Web developer and designer"
                        width={120}
                        height={36}
                        className="h-9 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <AnimatedNavLinks
                        handleNavClick={handleNavClick}
                        pathname={pathname}
                        setServicesOpen={setServicesOpen}
                        servicesOpen={servicesOpen}
                    />

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="btn btn-primary btn-sm"
                        onClick={() => setActive(false)}
                    >
                        Book a Consult
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                    onClick={() => setActive(!active)}
                    aria-label="Toggle navigation"
                    aria-expanded={active}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${active ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${active ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${active ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${active ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setActive(false)}
                ></div>

                {/* Mobile Menu */}
                <div className={`absolute top-0 right-0 w-80 h-full bg-gradient-to-b from-slate-900 to-slate-800 border-l border-white/10 transform transition-transform duration-300 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-8 h-full flex flex-col">
                        {/* Mobile Logo */}
                        <div className="mb-12">
                            <Link href="/" onClick={() => setActive(false)}>
                                <Image
                                    src={'/images/webdevakash.webp'}
                                    alt="Akash Kumar"
                                    width={100}
                                    height={30}
                                    className="h-8 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Mobile Navigation Links */}
                        <nav className="flex-1">
                            <ul className="space-y-6">
                                {NAV_LINKS.map((link) => {
                                    const isActive = pathname === link.href ||
                                        (link.href.startsWith('/') && pathname.startsWith(link.href)) ||
                                        (link.href.startsWith('#') && pathname === '/' && link.href === '#testimonials');

                                    return (
                                        <li key={link.key}>
                                            <Link
                                                href={link.href}
                                                className={`block text-lg font-medium transition-colors duration-200 ${isActive
                                                    ? 'text-violet-400'
                                                    : 'text-white hover:text-violet-400'
                                                    }`}
                                                scroll={false}
                                                onClick={e => handleNavClick(e, link.href)}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}

                                {/* Mobile Services Dropdown */}
                                <li>
                                    <div className="space-y-3">
                                        <Link
                                            href="/services"
                                            className="text-lg font-medium text-white hover:text-violet-400 transition-colors"
                                            onClick={() => setActive(false)}
                                        >
                                            Services
                                        </Link>
                                        {SERVICES_DROPDOWN.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                className="flex items-center gap-3 pl-6 py-2 text-white/80 hover:text-white transition-colors"
                                                onClick={() => setActive(false)}
                                            >
                                                <span className="text-lg">{service.icon}</span>
                                                <div>
                                                    <div className="font-medium">{service.title}</div>
                                                    <div className="text-sm text-white/60">{service.description}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </nav>

                        {/* Mobile CTA */}
                        <div className="mb-8">
                            <Link
                                href="/contact"
                                className="btn btn-primary w-full text-center"
                                onClick={() => setActive(false)}
                            >
                                Book a Consult
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 