import { useTheme } from "@/context/ThemeProvider";
import { clss } from "@/utils/clss";
import { useState } from "react";

interface SvgProps {
  variant?: "outline" | "solid" | "custom";
  draw?: string[];
  viewBox?: string;
  width?: number;
  height?: number;
  strokeDark?: string;
  stroke?: string;
  fillDark?: string;
  fill?: string;
  fillHovered?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Svg({
  variant = "solid",
  draw = [],
  viewBox,
  width,
  height,
  strokeDark,
  stroke,
  fillDark,
  fill,
  fillHovered,
  className,
  children,
}: Readonly<SvgProps>) {
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode } = useTheme();

  const handleHover = (hover: boolean) => fillHovered && setIsHovered(hover);

  const strokeColor = darkMode ? strokeDark || stroke : stroke;
  const fillColor = darkMode ? fillDark || fill : fill;
  const fillHover = isHovered ? fillHovered : fillColor;
  const strokeHover = isHovered ? fillHovered : strokeColor;
  const xmlns = "http://www.w3.org/2000/svg";
  const view = variant === "custom" ? viewBox : "0 0 24 24";

  return (
    <svg
      xmlns={xmlns}
      fill={variant !== "outline" ? fillHover : "none"}
      viewBox={view}
      stroke={variant === "outline" ? strokeHover : undefined}
      strokeWidth={variant === "outline" ? 1.5 : undefined}
      width={width}
      height={height}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      aria-hidden="true"
      className={clss(
        className,
        "pointer-events-none transition-all duration-300 ease-linear"
      )}
    >
      {variant === "custom"
        ? children
        : draw.map((d) => (
            <path
              key={d}
              d={d}
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          ))}
    </svg>
  );
}
