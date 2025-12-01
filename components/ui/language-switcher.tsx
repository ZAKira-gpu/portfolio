"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = ({ className }: { className?: string }) => {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className={cn(
                "flex items-center justify-center rounded-full border border-white/[0.2] bg-black px-3 py-1 text-sm font-bold text-white transition-all hover:bg-neutral-800",
                className
            )}
        >
            {language === "en" ? "AR" : "EN"}
        </button>
    );
};
