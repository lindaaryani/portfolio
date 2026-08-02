"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const emptySubscribe = () => () => {};

/** True once hydrated on the client, false during SSR — avoids a theme
 * flash without triggering a synchronous setState-in-effect render. */
function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useHasMounted();

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-300
        bg-white
        text-slate-700
        shadow-sm
        transition-all
        duration-300
        hover:scale-105
        hover:bg-slate-100

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-yellow-300
        dark:hover:bg-slate-800
      "
    >
      {isDark ? (
        <HiSun size={22} />
      ) : (
        <HiMoon size={22} />
      )}
    </button>
  );
}