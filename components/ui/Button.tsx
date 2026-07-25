import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition duration-300",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-blue-600 text-blue-600 hover:bg-blue-50"
      )}
    >
      {children}
    </button>
  );
}