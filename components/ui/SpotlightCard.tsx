"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SpotlightCard({
  children,
}: Props) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      transition-all
      duration-500

      hover:-translate-y-2
      hover:shadow-2xl

      dark:border-slate-800
      dark:bg-slate-900
      "
    >
      <div
        className="
        absolute
        inset-0
        opacity-0
        transition
        duration-500

        group-hover:opacity-100

        bg-gradient-to-br
        from-blue-500/5
        to-cyan-500/5
        "
      />

      <div className="relative">

        {children}

      </div>

    </div>
  );
}