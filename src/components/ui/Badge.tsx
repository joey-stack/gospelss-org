"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "brand" | "brand-subtle" | "dark" | "neutral";
export type BadgeShape = "full" | "md" | "sm";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  shape?: BadgeShape;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  brand: "bg-brand-500 text-white",
  "brand-subtle": "bg-brand-50 text-brand-700 border border-brand-500/20",
  dark: "bg-slate-900 text-white border border-white/10",
  neutral: "bg-grey-100 text-grey-700 border border-grey-200",
};

const shapeStyles: Record<BadgeShape, string> = {
  full: "rounded-full",
  md: "rounded-md",
  sm: "rounded-sm",
};

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "brand",
  shape = "full",
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-overline uppercase tracking-[0.1em] font-semibold select-none",
        variantStyles[variant],
        shapeStyles[shape],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
