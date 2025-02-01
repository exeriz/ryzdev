import { ComponentPropsWithoutRef } from "react";

export interface SocialMedia {
  name: string;
  url: string;
  icon: (props: ComponentPropsWithoutRef<"svg">) => JSX.Element;
}