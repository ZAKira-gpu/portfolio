"use client";

import Image from "next/image";
import { useState } from "react";
import { CVModal } from "./cv-modal";

export const ProfilePicture = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed top-4 sm:top-10 right-4 sm:right-8 z-[5001] animate-float group"
            >
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white/[0.3] glass-morphism glow-blue shadow-2xl group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Image
                        src="/zaki.png"
                        alt="Zaki Profile - Click to view CV"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-xs text-white bg-black/80 px-2 py-1 rounded-full">
                        View CV
                    </span>
                </div>
            </button>

            <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};
