"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",

        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-500/20",

        variant === "secondary" &&
          "bg-slate-800 text-white hover:bg-slate-700",

        variant === "outline" &&
          "border border-slate-300 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white",

        className
      )}
    >
      {children}
    </button>
  );
}