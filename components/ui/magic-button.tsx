"use client";

import { cn } from "@/lib/utils";

type MagicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  asChild?: boolean;
};

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  asChild = false,
}: MagicButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60",
        otherClasses
      )}
      onClick={handleClick}
      tabIndex={asChild ? -1 : undefined}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4F46E5_0%,#9333EA_50%,#06B6D4_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg glass-morphism px-7 text-sm font-medium text-neutral-700 dark:text-white backdrop-blur-3xl hover:scale-105 transition-transform duration-300"
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
