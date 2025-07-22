"use client";
import React from 'react';
import { motion } from 'framer-motion';
import TrustBadge, { trustBadges } from './TrustBadge';

const TrustBadgeGrid = ({
    badges,
    variant = 'hero',
    showTooltip = true,
    className = '',
    maxCols = 4
}) => {
    const getGridCols = () => {
        switch (maxCols) {
            case 2:
                return 'grid-cols-2';
            case 3:
                return 'grid-cols-2 md:grid-cols-3';
            case 4:
                return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
            case 5:
                return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
            case 6:
                return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
            default:
                return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
        }
    };

    const getGap = () => {
        switch (variant) {
            case 'hero':
                return 'gap-3';
            case 'footer':
                return 'gap-2';
            case 'compact':
                return 'gap-2';
            default:
                return 'gap-3';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className={`grid ${getGridCols()} ${getGap()} ${className} items-stretch`}
        >
            {badges.map((badgeKey, index) => (
                <motion.div
                    key={badgeKey}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                >
                    <TrustBadge
                        badgeKey={badgeKey}
                        variant={variant}
                        showTooltip={showTooltip}
                        className="w-full"
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default TrustBadgeGrid; 