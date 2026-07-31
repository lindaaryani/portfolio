"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/20
        bg-white/60
        p-8
        shadow-2xl
        backdrop-blur-xl
        dark:border-slate-700
        dark:bg-slate-900/60
        ${className}
      `}
    >
      {children}
    </div>
  );
}