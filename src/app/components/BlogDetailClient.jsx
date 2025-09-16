"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header/Header";
import Footer from "./Footer";
import FAQTemplateModal from "./FAQTemplateModal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BlogDetailClient({ post, author, featuredMedia, cleanedContent }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeHeading, setActiveHeading] = useState('');
    const [headings, setHeadings] = useState([]);

    // Extract headings for table of contents (only H2)
    useEffect(() => {
        if (cleanedContent) {
            const headingElements = cleanedContent.match(/<h2[^>]*>(.*?)<\/h2>/g);
            if (headingElements) {
                const extractedHeadings = headingElements.map((heading, index) => {
                    const text = heading.replace(/<[^>]*>/g, '');
                    const id = `heading-${index}`;
                    return { level: 2, text, id, element: heading };
                });
                setHeadings(extractedHeadings);
            }
        }
    }, [cleanedContent]);

    // Add IDs to headings and update content
    useEffect(() => {
        if (headings.length > 0 && cleanedContent) {
            let updatedContent = cleanedContent;
            headings.forEach((heading, index) => {
                const newId = `heading-${index}`;
                const regex = new RegExp(`<h2[^>]*>${heading.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</h2>`);
                updatedContent = updatedContent.replace(regex, `<h2 id="${newId}">${heading.text}</h2>`);
            });

            // Update the content in the DOM
            const contentElement = document.querySelector('.blog-content');
            if (contentElement) {
                contentElement.innerHTML = updatedContent;
            }
        }
    }, [headings, cleanedContent]);

    // Intersection Observer for active heading
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -80% 0px' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    // Enhanced code block functionality
    useEffect(() => {
        // Add copy buttons to all code blocks
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach((codeBlock, index) => {
            const preElement = codeBlock.parentElement;
            if (preElement && !preElement.querySelector('.copy-button')) {
                const copyButton = document.createElement('button');
                copyButton.className = 'copy-button absolute top-3 right-3 bg-slate-700/80 hover:bg-slate-600/80 text-slate-300 hover:text-white px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 opacity-0 group-hover:opacity-100';
                copyButton.textContent = 'Copy';

                copyButton.addEventListener('click', async () => {
                    try {
                        await navigator.clipboard.writeText(codeBlock.textContent || '');
                        copyButton.textContent = 'Copied!';
                        copyButton.classList.add('bg-green-600/80');
                        setTimeout(() => {
                            copyButton.textContent = 'Copy';
                            copyButton.classList.remove('bg-green-600/80');
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy code');
                        copyButton.textContent = 'Failed';
                        copyButton.classList.add('bg-red-600/80');
                        setTimeout(() => {
                            copyButton.textContent = 'Copy';
                            copyButton.classList.remove('bg-red-600/80');
                        }, 2000);
                    }
                });

                preElement.style.position = 'relative';
                preElement.classList.add('group');
                preElement.appendChild(copyButton);
            }
        });
    }, [cleanedContent]);

    // Simple code block enhancement - just add headers and preserve formatting
    useEffect(() => {
        const enhanceCodeBlocks = () => {
            console.log('Starting code block enhancement...');

            // Find all code elements
            const allCodeElements = document.querySelectorAll('.blog-content pre, .blog-content code');
            console.log('Found code elements:', allCodeElements.length);

            allCodeElements.forEach((element, index) => {
                console.log(`Element ${index}:`, {
                    tagName: element.tagName,
                    textContent: element.textContent?.substring(0, 100),
                    innerHTML: element.innerHTML?.substring(0, 100)
                });
            });

            // Process pre blocks first
            const preBlocks = document.querySelectorAll('.blog-content pre:not([data-enhanced])');
            console.log('Processing', preBlocks.length, 'pre blocks');

            preBlocks.forEach((pre, index) => {
                console.log(`Processing pre block ${index}`);

                // Ensure proper styling
                pre.style.cssText = `
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
                    color: #e2e8f0;
                    padding: 2.5rem 1.5rem 1.5rem 1.5rem;
                    margin: 2rem 0;
                    border-radius: 0.75rem;
                    font-family: 'Fira Mono', 'Menlo', 'Monaco', monospace;
                    font-size: 14px;
                    line-height: 1.5;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    overflow-x: hidden;
                    max-width: 100%;
                    border: 1px solid #475569;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
                    position: relative;
                `;

                // Add header if not already present
                if (!pre.querySelector('.code-header')) {
                    const header = document.createElement('div');
                    header.className = 'code-header';
                    header.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 2.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 1rem;
                        background: linear-gradient(90deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95));
                        border-bottom: 1px solid rgba(71, 85, 105, 0.6);
                        border-top-left-radius: 0.75rem;
                        border-top-right-radius: 0.75rem;
                    `;

                    // Add dots
                    const dots = document.createElement('div');
                    dots.style.cssText = 'display: flex; gap: 0.5rem;';
                    ['#ef4444', '#f59e0b', '#10b981'].forEach(color => {
                        const dot = document.createElement('span');
                        dot.style.cssText = `
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background: ${color};
                            box-shadow: 0 1px 2px rgba(0,0,0,0.35);
                        `;
                        dots.appendChild(dot);
                    });

                    // Add copy button
                    const copyBtn = document.createElement('button');
                    copyBtn.textContent = 'Copy';
                    copyBtn.style.cssText = `
                        background: rgba(51, 65, 85, 0.8);
                        color: #cbd5e1;
                        border: 1px solid #475569;
                        padding: 0.25rem 0.75rem;
                        border-radius: 0.375rem;
                        font-size: 0.75rem;
                        cursor: pointer;
                        font-family: 'Fira Mono', 'Menlo', 'Monaco', monospace;
                    `;

                    copyBtn.onclick = async () => {
                        try {
                            const codeContent = pre.textContent || '';
                            await navigator.clipboard.writeText(codeContent);
                            copyBtn.textContent = 'Copied!';
                            setTimeout(() => {
                                copyBtn.textContent = 'Copy';
                            }, 2000);
                        } catch (err) {
                            copyBtn.textContent = 'Failed';
                            setTimeout(() => {
                                copyBtn.textContent = 'Copy';
                            }, 2000);
                        }
                    };

                    header.appendChild(dots);
                    header.appendChild(copyBtn);
                    pre.appendChild(header);
                }

                pre.dataset.enhanced = 'true';
                console.log(`Enhanced pre block ${index}`);
            });

            // Process long inline code blocks
            const inlineCodeBlocks = document.querySelectorAll('.blog-content code:not(pre code):not([data-enhanced])');
            console.log('Processing', inlineCodeBlocks.length, 'inline code blocks');

            inlineCodeBlocks.forEach((code, index) => {
                const content = code.textContent || '';
                console.log(`Inline code ${index}: length=${content.length}, content="${content.substring(0, 50)}..."`);

                // Convert long code to code blocks
                if (content.length > 80 && (
                    /\b(function|const|let|var|import|export|useEffect|useState)\b/.test(content) ||
                    /[;{}]/.test(content) ||
                    /=>/.test(content)
                )) {
                    console.log(`Converting long inline code ${index} to code block`);

                    const newPre = document.createElement('pre');
                    newPre.textContent = content;
                    newPre.style.cssText = `
                        background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
                        color: #e2e8f0;
                        padding: 2.5rem 1.5rem 1.5rem 1.5rem;
                        margin: 2rem 0;
                        border-radius: 0.75rem;
                        font-family: 'Fira Mono', 'Menlo', 'Monaco', monospace;
                        font-size: 14px;
                        line-height: 1.5;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                        overflow-x: hidden;
                        max-width: 100%;
                        border: 1px solid #475569;
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
                        position: relative;
                    `;

                    // Add header (same as above)
                    const header = document.createElement('div');
                    header.className = 'code-header';
                    header.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 2.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 1rem;
                        background: linear-gradient(90deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95));
                        border-bottom: 1px solid rgba(71, 85, 105, 0.6);
                        border-top-left-radius: 0.75rem;
                        border-top-right-radius: 0.75rem;
                    `;

                    const dots = document.createElement('div');
                    dots.style.cssText = 'display: flex; gap: 0.5rem;';
                    ['#ef4444', '#f59e0b', '#10b981'].forEach(color => {
                        const dot = document.createElement('span');
                        dot.style.cssText = `
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background: ${color};
                            box-shadow: 0 1px 2px rgba(0,0,0,0.35);
                        `;
                        dots.appendChild(dot);
                    });

                    const copyBtn = document.createElement('button');
                    copyBtn.textContent = 'Copy';
                    copyBtn.style.cssText = `
                        background: rgba(51, 65, 85, 0.8);
                        color: #cbd5e1;
                        border: 1px solid #475569;
                        padding: 0.25rem 0.75rem;
                        border-radius: 0.375rem;
                        font-size: 0.75rem;
                        cursor: pointer;
                        font-family: 'Fira Mono', 'Menlo', 'Monaco', monospace;
                    `;

                    copyBtn.onclick = async () => {
                        try {
                            await navigator.clipboard.writeText(content);
                            copyBtn.textContent = 'Copied!';
                            setTimeout(() => copyBtn.textContent = 'Copy', 2000);
                        } catch (err) {
                            copyBtn.textContent = 'Failed';
                            setTimeout(() => copyBtn.textContent = 'Copy', 2000);
                        }
                    };

                    header.appendChild(dots);
                    header.appendChild(copyBtn);
                    newPre.appendChild(header);

                    code.parentNode.replaceChild(newPre, code);
                    newPre.dataset.enhanced = 'true';
                } else {
                    // Style short inline code
                    code.style.cssText = `
                        background: linear-gradient(135deg, #334155 0%, #475569 100%);
                        color: #fbbf24;
                        padding: 0.25em 0.5em;
                        border-radius: 0.375em;
                        font-size: 0.875em;
                        border: 1px solid #64748b;
                        font-family: 'Fira Mono', 'Menlo', 'Monaco', monospace;
                        white-space: pre-wrap;
                    `;
                    code.dataset.enhanced = 'true';
                }
            });
        };

        // Run multiple times to catch all content
        setTimeout(enhanceCodeBlocks, 100);
        setTimeout(enhanceCodeBlocks, 500);
        setTimeout(enhanceCodeBlocks, 1000);

    }, [cleanedContent]);

    // Generate schema markup
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `https://akashbuilds.com/blog/${post.slug}#article`,
                "headline": post.title,
                "description": post.excerpt.replace(/<[^>]*>/g, ''),
                "image": featuredMedia ? featuredMedia.url : "https://akashbuilds.com/og-image-blog.jpg",
                "datePublished": post.publishDate,
                "dateModified": post.modifiedDate,
                "author": {
                    "@type": "Person",
                    "name": "Akash Kumar",
                    "url": "https://akashbuilds.com/about"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Akash Kumar - Frontend & Aspiring Product Engineer",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://akashbuilds.com/images/Akash%20Kumar.png"
                    },
                    "url": "https://akashbuilds.com"
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://akashbuilds.com/blog/${post.slug}`
                },
                "articleSection": "AI Integration & Automation",
                "wordCount": post.content.replace(/<[^>]*>/g, '').split(' ').length,
                "timeRequired": "PT5M",
                "inLanguage": "en-GB"
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://akashbuilds.com/blog/${post.slug}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://akashbuilds.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://akashbuilds.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title,
                        "item": `https://akashbuilds.com/blog/${post.slug}`
                    }
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://akashbuilds.com/#organization",
                "name": "Akash Kumar - Frontend & Aspiring Product Engineer",
                "url": "https://akashbuilds.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://akashbuilds.com/images/Akash%20Kumar.png"
                },
                "description": "Professional frontend developer specializing in AI integration, automation, and digital growth for UK small businesses.",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "GB"
                },
                "sameAs": [
                    "https://linkedin.com/in/akashkumar",
                    "https://github.com/akashkumar"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://akashbuilds.com/#website",
                "url": "https://akashbuilds.com",
                "name": "Akash Kumar - Frontend & Aspiring Product Engineer",
                "description": "AI Integration & Automation Services for UK Small Businesses",
                "publisher": {
                    "@id": "https://akashbuilds.com/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://akashbuilds.com/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                }
            }
        ]
    };

    if (!post) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900">
                    <div className="container mx-auto px-4 py-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl font-bold text-white mb-6">Blog Post Not Found</h1>
                            <p className="text-white/80 mb-8">The requested blog post could not be found.</p>
                            <Link href="/blog" className="btn btn-primary">
                                Back to Blog
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-900 blog-detail-container">
                {/* Breadcrumbs */}
                <nav className="container mx-auto px-4 py-6 lg:py-8">
                    <div className="max-w-7xl mx-auto">
                        <ol className="flex items-center space-x-2 text-sm text-slate-400">
                            <li>
                                <Link href="/" className="hover:text-violet-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li className="text-slate-500">/</li>
                            <li>
                                <Link href="/blog" className="hover:text-violet-400 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li className="text-slate-500">/</li>
                            <li className="text-white font-medium truncate max-w-xs">
                                {post.title}
                            </li>
                        </ol>
                    </div>
                </nav>

                {/* Article Header */}
                <header className="container mx-auto px-4 py-8 lg:py-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Category & Date */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-slate-400 text-sm">
                                {new Date(post.publishDate).toLocaleDateString('en-GB', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="text-slate-400 text-sm">5 min read</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        {/* Featured Image */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-8 max-w-6xl mx-auto">
                            {featuredMedia ? (
                                <Image
                                    src={featuredMedia.large || featuredMedia.url}
                                    alt={featuredMedia.alt || post.title}
                                    fill
                                    className="object-cover blog-card-image"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
                                    priority
                                    quality={90}
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                    <div className="text-8xl text-slate-400">🤖</div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="container mx-auto px-4 py-4 lg:py-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Table of Contents - Only H2 Headings with Max Height */}
                        {headings.length > 0 && (
                            <div className="mb-8">
                                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-xl p-4">
                                    <h3 className="text-lg font-bold text-white mb-4 text-center">Table of Contents</h3>
                                    <nav className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                                        {headings.map((heading, index) => (
                                            <a
                                                key={heading.id}
                                                href={`#${heading.id}`}
                                                className={`block text-sm transition-all duration-200 rounded-lg px-3 py-2 hover:bg-slate-700/30 hover:translate-x-1 ${activeHeading === heading.id
                                                    ? 'text-violet-400 font-medium bg-violet-400/10 border border-violet-400/20'
                                                    : 'text-slate-300 hover:text-violet-300'
                                                    }`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <span className="text-violet-400 font-mono text-xs bg-violet-400/10 px-1.5 py-0.5 rounded">
                                                        {index + 1}
                                                    </span>
                                                    <span className="truncate">{heading.text}</span>
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        )}

                        {/* Social Sharing Buttons */}
                        <div className="mb-8">
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-xl p-4">
                                <h3 className="text-lg font-bold text-white mb-4 text-center">Share This Article</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {/* Facebook */}
                                    <button
                                        onClick={() => {
                                            const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                                            window.open(url, '_blank', 'width=600,height=400');
                                        }}
                                        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                                        title="Share on Facebook"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </button>

                                    {/* X (Twitter) */}
                                    <button
                                        onClick={() => {
                                            const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`;
                                            window.open(url, '_blank', 'width=600,height=400');
                                        }}
                                        className="p-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200"
                                        title="Share on X (Twitter)"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </button>

                                    {/* Bluesky */}
                                    <button
                                        onClick={() => {
                                            const url = `https://bsky.app/intent/compose?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`;
                                            window.open(url, '_blank');
                                        }}
                                        className="p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-200"
                                        title="Share on Bluesky"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </button>

                                    {/* LinkedIn */}
                                    <button
                                        onClick={() => {
                                            const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
                                            window.open(url, '_blank', 'width=600,height=400');
                                        }}
                                        className="p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-200"
                                        title="Share on LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </button>

                                    {/* Reddit */}
                                    <button
                                        onClick={() => {
                                            const url = `https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`;
                                            window.open(url, '_blank', 'width=600,height=400');
                                        }}
                                        className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200"
                                        title="Share on Reddit"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                                        </svg>
                                    </button>

                                    {/* Copy Link */}
                                    <button
                                        onClick={async () => {
                                            try {
                                                await navigator.clipboard.writeText(window.location.href);
                                                // You could add a toast notification here
                                                alert('Link copied to clipboard!');
                                            } catch (err) {
                                                console.error('Failed to copy link');
                                                alert('Failed to copy link');
                                            }
                                        }}
                                        className="p-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200"
                                        title="Copy link"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="max-w-5xl mx-auto">
                            <article className="blog-content prose prose-invert prose-lg max-w-none">
                                <div
                                    dangerouslySetInnerHTML={{ __html: cleanedContent }}
                                    style={{
                                        whiteSpace: 'preserve' /* Preserve whitespace from WordPress */
                                    }}
                                />
                            </article>

                            {/* Author Bio Box */}
                            <div className="mt-16 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-2xl">
                                <div className="flex flex-col md:flex-row items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-violet-500/30">
                                            <Image
                                                src="/images/Akash Kumar.png"
                                                alt="Akash Kumar"
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            Akash Kumar
                                        </h3>
                                        <p className="text-slate-300 mb-4 leading-relaxed">
                                            Professional frontend developer specializing in AI integration, automation, and digital growth for UK small businesses. Passionate about creating innovative solutions that drive real business results.
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <a
                                                href="https://linkedin.com/in/akashkumar"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 text-violet-400 hover:text-violet-300 transition-colors rounded-lg text-sm"
                                            >
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                LinkedIn
                                            </a>
                                            <a
                                                href="https://github.com/akashkumar"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 text-violet-400 hover:text-violet-300 transition-colors rounded-lg text-sm"
                                            >
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                GitHub
                                            </a>
                                            <a
                                                href="/portfolio"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 text-violet-400 hover:text-violet-300 transition-colors rounded-lg text-sm"
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                </svg>
                                                Portfolio
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                <section className="container mx-auto px-4 py-16 lg:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Link href="/blog" className="group">
                                <article className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all hover:shadow-2xl">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                        More AI Integration Insights
                                    </h3>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        Discover more articles about AI integration and automation for UK businesses.
                                    </p>
                                </article>
                            </Link>
                            <Link href="/services/ai-integration" className="group">
                                <article className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all hover:shadow-2xl">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                        AI Integration Services
                                    </h3>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        Ready to implement AI solutions? Explore our professional AI integration services.
                                    </p>
                                </article>
                            </Link>
                            <Link href="/case-studies" className="group">
                                <article className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all hover:shadow-2xl">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                        Case Studies & Success Stories
                                    </h3>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        See real-world examples of AI integration success in UK businesses.
                                    </p>
                                </article>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* FAQ Template Modal */}
            <FAQTemplateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
} 