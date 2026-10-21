"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type SectionBg = "white" | "light" | "dark" | "brand-tint";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: SectionBg;
  as?: React.ElementType;
  children: React.ReactNode;
}

const bgStyles: Record<SectionBg, string> = {
  white: "bg-white text-grey-900 border-b border-grey-200",
  light: "bg-grey-50 text-grey-900 border-b border-grey-200",
  dark: "bg-slate-900 text-white border-b border-slate-800",
  "brand-tint": "bg-brand-50 text-grey-900 border-b border-brand-500/20",
};

export const Section: React.FC<SectionProps> = ({
  bg = "white",
  as: Component = "section",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn("w-full py-24 md:py-32 relative", bgStyles[bg], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Section;
