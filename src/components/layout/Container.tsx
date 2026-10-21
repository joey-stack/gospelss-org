"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn("w-full max-w-7xl mx-auto px-6", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
