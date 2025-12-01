"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/data";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  useEffect(() => {
    // Reset animation state when items change
    setStart(false);
    if (scrollerRef.current) {
      // Remove duplicated items
      const children = Array.from(scrollerRef.current.children);
      const itemCount = items.length;
      // Remove all children beyond the original items
      children.slice(itemCount).forEach(child => child.remove());
    }
    // Re-add animation
    addAnimation();
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border border-white/[0.1] bg-white shadow-input dark:bg-black dark:border-white/[0.2] glass-morphism glow-purple p-5 md:w-[60vw] md:p-16 animate-drift"
            key={idx}
            dir="auto"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className=" relative z-20 text-sm font-normal leading-[1.6] text-neutral-600 dark:text-white md:text-lg">
                {item.quote}
              </span>

              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <Image
                    height={50}
                    width={50}
                    src="/profile.svg"
                    alt="profile"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-neutral-800 dark:text-white">
                    {item.name}
                  </span>

                  <span className=" text-sm font-normal leading-[1.6] text-neutral-500 dark:text-white-200">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
