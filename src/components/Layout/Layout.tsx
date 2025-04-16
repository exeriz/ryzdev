import { ReactNode } from "react";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Point } from "@/components/Point";
import { Header } from "@/components/Layout/Header";

export function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="relative flex-auto">
        <Point />
        <div className="py-20 sm:py-24">{children}</div>
      </div>
    </>
  );
}
