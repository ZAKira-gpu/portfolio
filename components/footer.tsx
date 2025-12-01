"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto" suppressHydrationWarning>
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t("footer.title")}
        </h1>

        <p className="my-5 text-center text-neutral-600 dark:text-white-200 md:mt-10">
          {t("footer.description")}
        </p>

        <MagicButton
          title={t("footer.cta")}
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => window.location.href = `mailto:${links.ownerEmail}`}
          otherClasses="md:mt-10 animate-float"
        />
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          {t("footer.copyright")}
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg glass-morphism glow-blue backdrop-blur-lg backdrop-filter hover:scale-110 transition-transform duration-300"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
