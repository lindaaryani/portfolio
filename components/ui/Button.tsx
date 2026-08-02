"use client";

import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline";

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function buttonClasses(variant: Variant, className?: string) {
  return clsx(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",

    variant === "primary" &&
      "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-500/20",

    variant === "secondary" &&
      "bg-slate-800 text-white hover:bg-slate-700",

    variant === "outline" &&
      "border border-slate-300 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white",

    className
  );
}

/** Renders a real <a> when `href` is passed, otherwise a real <button>.
 * Keeps the same look either way, without ever nesting one inside the other. */
export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        href={href}
        {...anchorProps}
        className={buttonClasses(variant, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as ButtonAsButton)}
      className={buttonClasses(variant, className)}
    >
      {children}
    </button>
  );
}