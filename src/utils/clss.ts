import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function clss(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
