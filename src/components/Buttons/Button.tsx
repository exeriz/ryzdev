import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router";
import { clss } from "@/utils/clss";

const variantStyles = {
  primary:
    "bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-gray-200 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:text-gray-100 disabled:bg-gray-300 dark:disabled:text-gray-700 dark:disabled:bg-gray-800",
  secondary:
    "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 shadow-xs disabled:text-gray-400 disabled:bg-gray-200",
  outline:
    "bg-gray-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300 ring-1 ring-gray-300 dark:ring-gray-700 ring-inset shadow-xs disabled:text-gray-400 disabled:bg-gray-200 disabled:ring-gray-200",
  ghost:
    "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-800 dark:text-gray-200 disabled:text-gray-400 disabled:hover:bg-transparent",
  link: "text-gray-800 dark:text-gray-200 hover:underline disabled:hover:no-underline disabled:text-gray-400",
  default: "",
} as const;

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  type?: "button" | "submit" | "reset";
  rounded?: boolean;
  href?: string;
  current?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "type" | "className">;

export function Button({
  variant = "primary",
  type = "button",
  rounded = false,
  href,
  current = false,
  children,
  className,
  ...props
}: Readonly<ButtonProps>) {
  const radius = rounded ? "rounded-full" : "rounded-md";

  const baseClassName = clss(
    "inline-flex justify-center items-center gap-x-2 text-sm/6 font-medium cursor-pointer disabled:cursor-not-allowed",
    variantStyles[variant],
    variant === "link" || variant === "default" ? "" : radius,
    current ? "text-current" : "",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          className={baseClassName}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        className={baseClassName}
        to={href}
        {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, "to">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClassName}
      {...(props as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
