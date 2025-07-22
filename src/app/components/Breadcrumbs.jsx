import Link from 'next/link';
import JsonLd from './JsonLd';

export default function Breadcrumbs({ items }) {
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <>
            <JsonLd data={breadcrumbData} />
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-violet-300">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {index > 0 && (
                                <span className="text-violet-400 mx-2">/</span>
                            )}
                            {index === items.length - 1 ? (
                                <span className="text-white font-medium">{item.name}</span>
                            ) : (
                                <Link
                                    href={item.url}
                                    className="hover:text-violet-200 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
} 