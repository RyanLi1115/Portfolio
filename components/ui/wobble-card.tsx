"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface WobbleCardProps {
  containerClassName?: string;
  className?: string;
  children: React.ReactNode;
}

export function WobbleCard({ containerClassName, className, children }: WobbleCardProps) {
  return (
    <div
      className={cn(
        "group/card relative h-full w-full rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg",
        containerClassName
      )}
    >
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 blur-sm" />
    </div>
  );
}
