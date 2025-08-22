'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { NAV_LINKS, SERVICES_DROPDOWN, TOOLS_DROPDOWN } from "../../constants";

const AnimatedNavLinks = ({ handleNavClick, pathname, setServicesOpen, servicesOpen, setToolsOpen, toolsOpen }) => {
    const servicesRef = useRef(null);
    const toolsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
            if (toolsRef.current && !toolsRef.current.contains(event.target)) {
                setToolsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [setServicesOpen, setToolsOpen]);

    return (
        <nav className="nav">
            <ul className="nav__list">
                {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href ||
                        (link.href.startsWith("/") && pathname.startsWith(link.href));

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
                                        className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                        onClick={() => setServicesOpen(false)}
                                    >

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

                {/* Tools Dropdown */}
                <li
                    className="relative"
                    ref={toolsRef}
                    onMouseEnter={() => setToolsOpen(true)}
                    onMouseLeave={() => setToolsOpen(false)}
                >
                    <Link
                        href="/tools"
                        className={`nav__link flex items-center gap-1 ${pathname.startsWith('/tools') ? 'nav__link--active' : ''}`}
                        onClick={e => handleNavClick(e, '/tools')}
                    >
                        Tools
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    {toolsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 backdrop-blur-sm">
                            <div className="p-2">
                                {TOOLS_DROPDOWN.map((tool) => (
                                    <Link
                                        key={tool.href}
                                        href={tool.href}
                                        className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                                        onClick={() => setToolsOpen(false)}
                                    >

                                        <div>
                                            <div className="text-white font-medium group-hover:text-violet-300 transition-colors">{tool.title}</div>
                                            <div className="text-slate-400 text-sm">{tool.description}</div>
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
    const [toolsOpen, setToolsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 86);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        if (href === pathname) {
            e.preventDefault();
        }
        setActive(false);
        setMobileServicesOpen(false);
        setMobileToolsOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${active ? 'header--active' : ''}`}>
            <div className="header__container">
                {/* Logo */}
                <Link href="/" id="logo" className="flex items-center" onClick={() => setActive(false)}>
                    <Image
                        src={'/images/Akash Kumar.png'}
                        alt="Akash Kumar - Frontend & Aspiring Product Engineer"
                        width={150}
                        height={45}
                        className="h-12 w-auto drop-shadow-[0_4px_16px_rgba(124,58,237,0.25)]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <AnimatedNavLinks
                        handleNavClick={handleNavClick}
                        pathname={pathname}
                        setServicesOpen={setServicesOpen}
                        servicesOpen={servicesOpen}
                        setToolsOpen={setToolsOpen}
                        toolsOpen={toolsOpen}
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
                    className="absolute inset-0 bg-black/90 backdrop-blur-lg"
                    onClick={() => setActive(false)}
                ></div>

                {/* Mobile Menu */}
                <div className={`absolute top-0 right-0 w-80 h-screen bg-slate-900/95 backdrop-blur-xl border-l border-white/20 transform transition-transform duration-300 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-8 h-screen flex flex-col">
                        {/* Mobile Logo */}
                        <div className="mb-12">
                            <Link href="/" onClick={() => setActive(false)}>
                                <Image
                                    src={'/images/Akash Kumar.png'}
                                    alt="Akash Kumar - Frontend & Aspiring Product Engineer"
                                    width={120}
                                    height={36}
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Mobile Navigation Links */}
                        <nav className="flex-1">
                            <ul className="space-y-6">
                                {NAV_LINKS.map((link) => {
                                    const isActive = pathname === link.href ||
                                        (link.href.startsWith("/") && pathname.startsWith(link.href));

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
                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="flex items-center justify-between w-full text-lg font-medium text-white hover:text-violet-400 transition-colors"
                                        >
                                            Services
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {mobileServicesOpen && (
                                            <div className="space-y-2 pl-4 border-l border-white/20">
                                                {SERVICES_DROPDOWN.map((service) => (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        className="flex items-center py-2 text-white/80 hover:text-white transition-colors"
                                                        onClick={() => {
                                                            setActive(false);
                                                            setMobileServicesOpen(false);
                                                        }}
                                                    >
                                                        <div>
                                                            <div className="font-medium">{service.title}</div>
                                                            <div className="text-sm text-white/60">{service.description}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </li>

                                {/* Mobile Tools Dropdown */}
                                <li>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                                            className="flex items-center justify-between w-full text-lg font-medium text-white hover:text-violet-400 transition-colors"
                                        >
                                            Tools
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${mobileToolsOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {mobileToolsOpen && (
                                            <div className="space-y-2 pl-4 border-l border-white/20">
                                                {TOOLS_DROPDOWN.map((tool) => (
                                                    <Link
                                                        key={tool.href}
                                                        href={tool.href}
                                                        className="flex items-center py-2 text-white/80 hover:text-white transition-colors"
                                                        onClick={() => {
                                                            setActive(false);
                                                            setMobileToolsOpen(false);
                                                        }}
                                                    >
                                                        <div>
                                                            <div className="font-medium">{tool.title}</div>
                                                            <div className="text-sm text-white/60">{tool.description}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
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