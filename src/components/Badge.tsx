import { clss } from "@/utils/clss";

const variantClasses = {
  primary: "bg-gray-50 dark:bg-gray-400/10 text-gray-600 dark:text-gray-400 ring-gray-600/10 dark:ring-gray-400/20",
  secondary: "bg-blue-50 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 ring-blue-600/10 dark:ring-blue-400/30",
};

type BadgeProps = {
  variant?: keyof typeof variantClasses;
  className?: string;
  title: string;
  children: React.ReactNode;
};

export function Badge({
  variant = "primary",
  className,
  title,
  children,
}: Readonly<BadgeProps>) {
  const computedClassName = clss(
    "inline-flex items-center gap-x-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
    variantClasses[variant],
    className
  );

  return (
    <span className={clss(computedClassName, "w-max cursor-default")} title={title}>
      {children}
    </span>
  );
}
