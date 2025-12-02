"use client";

import { useEffect } from "react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    title: string;
}

export const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Video Container */}
            <div className="relative w-full max-w-5xl max-h-[90vh] animate-slideUp">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10 group"
                    aria-label="Close video"
                >
                    <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Video Title */}
                <div className="mb-4 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
                </div>

                {/* Video Player */}
                <div className="relative rounded-2xl overflow-hidden glass-morphism border border-white/[0.2] shadow-2xl">
                    <video
                        className="w-full h-auto max-h-[75vh]"
                        controls
                        autoPlay
                        playsInline
                        src={videoUrl}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Hint Text */}
                <p className="mt-4 text-center text-sm text-white/60">
                    Press ESC or click outside to close
                </p>
            </div>
        </div>
    );
};
