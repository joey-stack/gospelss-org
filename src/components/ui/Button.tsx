"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "outline" | "brand";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  brand:
    "bg-brand-600 hover:bg-brand-500 text-white shadow-lg hover:shadow-brand-500/25 border border-transparent",
  primary:
    "bg-brand-600 hover:bg-brand-500 text-white shadow-lg hover:shadow-brand-500/25 border border-transparent",
  secondary:
    "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 active:bg-white/25",
  outline:
    "bg-transparent text-grey-900 border border-grey-300 hover:border-grey-400 hover:bg-grey-100",
  ghost:
    "bg-transparent text-grey-700 hover:text-grey-900 hover:bg-grey-100/60 border border-transparent",
  dark:
    "bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-md",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm font-semibold rounded-full gap-2",
  md: "px-8 py-3.5 text-base font-semibold rounded-full gap-2.5",
  lg: "px-10 py-4 text-lg font-semibold rounded-full gap-3",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      icon,
      iconPosition = "left",
      children,
      href,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-full font-inter transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 select-none active:scale-[0.98]",
      variantStyles[variant],
      sizeStyles[size],
      (disabled || isLoading) && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    );

    const content = isLoading ? (
      <Loader2 className="w-5 h-5 animate-spin shrink-0" aria-label="Loading" />
    ) : (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        {children && <span>{children}</span>}
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={baseClasses} aria-disabled={disabled || isLoading}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
