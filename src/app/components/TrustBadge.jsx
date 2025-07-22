"use client";
import { useState } from 'react';

export const trustBadges = {
    verified: {
        title: "Verified Professional",
        description: "Identity and credentials verified",
        icon: "✓"
    },
    responsive: {
        title: "24h Response",
        description: "Quick response time guaranteed",
        icon: "⚡"
    },
    experience: {
        title: "5+ Years Experience",
        description: "Proven track record",
        icon: "🎯"
    },
    satisfaction: {
        title: "100% Satisfaction",
        description: "Client satisfaction guaranteed",
        icon: "⭐"
    }
};

export default function TrustBadge({ badgeKey, variant = 'hero', showTooltip = true, className = '' }) {
    const [showTooltipState, setShowTooltipState] = useState(false);
    const badge = trustBadges[badgeKey];

    if (!badge) {
        console.warn(`TrustBadge: Badge key "${badgeKey}" not found`);
        return null;
    }

    const getSizeClasses = () => {
        switch (variant) {
            case 'hero':
                return 'p-4 text-center';
            case 'footer':
                return 'p-2 text-center';
            case 'compact':
                return 'p-3 text-center';
            default:
                return 'p-4 text-center';
        }
    };

    return (
        <div className={`relative ${className}`}>
            <div
                className={`trust-badge ${getSizeClasses()} cursor-pointer transition-all duration-300 hover:scale-105`}
                onMouseEnter={() => setShowTooltipState(true)}
                onMouseLeave={() => setShowTooltipState(false)}
            >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <div className="text-white font-medium text-sm">{badge.title}</div>
                <div className="text-white/60 text-xs">{badge.description}</div>
            </div>

            {showTooltip && showTooltipState && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap z-10">
                    {badge.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
            )}
        </div>
    );
} 