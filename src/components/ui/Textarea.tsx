"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  theme?: "dark" | "light";
  containerClassName?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      id,
      theme = "light",
      containerClassName,
      rows = 4,
      disabled,
      ...props
    },
    ref
  ) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const isDark = theme === "dark";

    return (
      <div className={cn("w-full flex flex-col", containerClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "text-sm font-inter font-medium mb-2 block select-none",
              isDark ? "text-grey-300" : "text-grey-700"
            )}
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          className={cn(
            "w-full rounded-xl p-3.5 text-base font-inter transition-all duration-200 resize-y focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
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
          <p id={`${textareaId}-error`} className="text-sm text-error mt-1.5 font-medium" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${textareaId}-helper`} className="text-xs text-grey-400 mt-1.5 font-inter">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
