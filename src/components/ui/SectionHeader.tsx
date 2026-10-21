"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  overline,
  title,
  subtitle,
  align = "left",
  theme = "dark",
  className,
  titleAs: Component = "h2",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {overline && (
        <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-brand-400 font-inter mb-4 block">
          {overline}
        </span>
      )}

      <Component
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold font-hanken tracking-tight leading-[1.08]",
          isDark ? "text-white" : "text-grey-900"
        )}
      >
        {title}
      </Component>

      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl font-inter leading-relaxed mt-4 font-normal max-w-2xl",
            isDark ? "text-grey-300" : "text-grey-600",
            isCenter && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
