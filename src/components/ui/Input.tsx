"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  theme?: "dark" | "light";
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      error,
      helperText,
      id,
      theme = "light",
      containerClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const isDark = theme === "dark";

    return (
      <div className={cn("w-full flex flex-col", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-inter font-medium mb-2 block select-none",
              isDark ? "text-grey-300" : "text-grey-700"
            )}
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          type={type}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          className={cn(
            "w-full rounded-xl p-3.5 text-base font-inter transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
            isDark
              ? "bg-slate-900 border border-slate-700 text-white placeholder:text-grey-400"
              : "bg-white border border-grey-200 text-grey-900 placeholder:text-grey-400",
            error && "border-error focus:ring-error focus:border-transparent text-error",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-error mt-1.5 font-medium" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-grey-400 mt-1.5 font-inter">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
