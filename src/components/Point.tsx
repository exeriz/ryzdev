import { useId } from "react";
import { Svg } from "@/components/Optimizing/Svg";

export function Point() {
  const id = useId();

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
      <Svg
        variant="custom"
        className="absolute left-[max(0px,calc(50%-18.6rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H6M0 8H6"
              className="stroke-gray-950/15 dark:stroke-gray-50/15"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </Svg>
    </div>
  );
}