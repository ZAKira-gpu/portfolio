"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="#4F46E5"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="#9333EA"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#06B6D4" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-grid-black/[0.02] dark:bg-grid-white/[0.02]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <div className="animate-float">
            <h2 className="max-w-80 text-center text-xs md:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-200 text-glow">
              {t("hero.tagline")}
            </h2>
          </div>

          <div className="animate-floatSlow">
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words={t("hero.title")}
            />
          </div>

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl text-neutral-600 dark:text-white-100 animate-drift">
            {t("hero.description")}
          </p>

          <div className="animate-float md:mt-10">
            <Link href="#about">
              <MagicButton
                title={t("hero.cta")}
                icon={<FaLocationArrow />}
                position="right"
                asChild
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
