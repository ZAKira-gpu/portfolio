"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./ui/3d-pin";
import { useLanguage } from "@/context/LanguageContext";

export const RecentProjects = () => {
  const { t, data } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        {t("projects.title")}
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {data.projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }: any) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem] animate-floatSlow"
            >
              <PinContainer title="Discover" href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden glass-morphism lg:rounded-3xl glow-purple">
                    <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                    />
                  </div>

                  <Image
                    height={300}
                    width={464}
                    src={img}
                    alt={title}
                    className={`absolute bottom-0 z-10 ${img.includes("hoopoe")
                      ? "w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-auto bottom-3 sm:bottom-5"
                      : ""
                      }`}
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon: string, i: number) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full glass-morphism glow-blue lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-sm text-cyan-400 hover:text-cyan-300 transition-colors md:text-xs lg:text-xl"
                    >
                      Source Code
                    </Link>

                    <FaLocationArrow className="ms-3" color="#06B6D4" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
