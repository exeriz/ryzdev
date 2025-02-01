import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router";
import { clss } from "@/utils/clss";

const variantStyles = {
  primary: "bg-blue-600 text-gray-50 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
  secondary: "text-gray-950 dark:text-gray-50 bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-700",
  soft: "bg-gray-50/10 hover:bg-gray-50/20 text-gray-950 dark:text-gray-50",
  text: "bg-transparent text-gray-950 dark:text-gray-50",
};

type BaseProps = {
  variant?: keyof typeof variantStyles;
  defaultStyle?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  children?: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  (
    | Omit<ComponentPropsWithoutRef<"button">, "href" | "to">
    | Omit<ComponentPropsWithoutRef<typeof Link>, "href">
    | Omit<ComponentPropsWithoutRef<"a">, "to">
  );

export function Button({
  variant = "primary",
  defaultStyle = true,
  shadow = true,
  rounded = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const combinedClassName = clss(
    defaultStyle ? "text-sm font-semibold py-2 px-3" : "",
    variantStyles[variant],
    className,
    shadow ? "shadow-sm" : "shadow-none",
    rounded ? "rounded-full" : "rounded-md",
    "inline-flex justify-center items-center gap-x-2 cursor-pointer transition-all duration-300 ease-linear"
  );

  if ("to" in props) {
    return (
      <Link
        className={combinedClassName}
        {...(props as ComponentPropsWithoutRef<typeof Link>)}
      >
        {children}
      </Link>
    );
  }

  if ("href" in props && typeof props.href === "string") {
    const isExternalLink =
      props.href.startsWith("http://") || props.href.startsWith("https://");
    return (
      <a
        className={combinedClassName}
        {...(props as ComponentPropsWithoutRef<"a">)}
        {...(isExternalLink
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClassName}
      {...(props as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
