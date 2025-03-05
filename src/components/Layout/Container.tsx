import { ComponentPropsWithoutRef } from "react";
import { Time } from "@/components/Optimizing/Time";
import { clss } from "@/utils/clss";

function Container({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div
          className={clss(
            "mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto",
            className
          )}
          {...props}
        />
      </div>
    </section>
  );
}

function SectionHeader({ date }: Readonly<{ date: string }>) {
  return (
    <header aria-label="Section header" className="relative mb-10 xl:mb-0">
      <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
        <Time
          date={date}
          className="hidden xl:pointer-events-auto xl:block xl:text-xs xl:font-medium xl:text-gray-50/50"
        />
        <div className="h-[0.0625rem] w-3.5 bg-gray-600 dark:text-gray-400 lg:-mr-3.5 xl:mr-0" />
      </div>
      <Container>
        <div className="flex flex-col">
          <Time
            date={date}
            className="text-xs text-gray-600 dark:text-gray-400 md:text-sm xl:hidden"
          />
        </div>
      </Container>
    </header>
  );
}

export { SectionHeader, Container };
