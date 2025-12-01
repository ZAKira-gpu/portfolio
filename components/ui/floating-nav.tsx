"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./language-switcher";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollY } = useScroll();
  const { data } = useLanguage();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-4 sm:top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-2 sm:gap-3 md:gap-4 rounded-2xl sm:rounded-3xl glass-morphism glow-blue px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 animate-float",
          className
        )}
      >
        <LanguageSwitcher />
        {data.navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 dark:text-white-100 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
            )}
          >
            <span className="!cursor-pointer text-xs sm:text-sm md:text-base">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};
