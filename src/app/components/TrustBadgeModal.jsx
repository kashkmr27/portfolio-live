"use client";
import { useEffect } from 'react';

export default function TrustBadgeModal({ isOpen, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            <div className="relative bg-eerie-black border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Trust Badges</h3>
                    <p className="text-white/70 mb-6">
                        These badges represent my commitment to quality, reliability, and professional service.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <span className="text-2xl">✓</span>
                            <div className="text-left">
                                <div className="text-white font-medium">Verified Professional</div>
                                <div className="text-white/60 text-sm">Identity and credentials verified</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <span className="text-2xl">⚡</span>
                            <div className="text-left">
                                <div className="text-white font-medium">24h Response</div>
                                <div className="text-white/60 text-sm">Quick response time guaranteed</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <span className="text-2xl">🎯</span>
                            <div className="text-left">
                                <div className="text-white font-medium">5+ Years Experience</div>
                                <div className="text-white/60 text-sm">Proven track record</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <span className="text-2xl">⭐</span>
                            <div className="text-left">
                                <div className="text-white font-medium">100% Satisfaction</div>
                                <div className="text-white/60 text-sm">Client satisfaction guaranteed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 