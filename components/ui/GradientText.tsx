"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GradientText({
  children,
}: Props) {
  return (
    <span
      className="
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-indigo-600
      bg-clip-text
      text-transparent
      "
    >
      {children}
    </span>
  );
}