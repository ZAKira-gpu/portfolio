"use client";

import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useLanguage } from "@/context/LanguageContext";

export const Clients = () => {
  const { t, data } = useLanguage();

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {t("testimonials.title")}
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={data.testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {data.companies.map(({ id, img, name, nameImg }: any) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60 animate-float">
              {name !== "Vercel" && name !== "Firebase" && (
                <Image
                  height={29}
                  width={43}
                  src={img}
                  alt={`${name}'s logo`}
                  className="w-5 md:w-10"
                />
              )}

              <Image
                height={28}
                width={131}
                src={nameImg}
                alt={name}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
