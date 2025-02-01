import { ReactNode } from "react";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Point } from "@/components/Point";
import { Header } from "@/components/Layout/Header";
import { HelmetHeader } from "@/components/Optimizing/Helmet";
import { ScrollButton } from "@/components/Button/ScrollButton";

export function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Sidebar />
      <div className="relative flex-auto">
        <Point />
        <div className="py-20 sm:py-32">{children}</div>
      </div>
      
      <Header />
      <HelmetHeader />
      <ScrollButton />
    </>
  );
}
