import { ComponentPropsWithoutRef } from "react";
import { Time } from "@/components/Optimizing/Time";
import { Badge } from "@/components/Badge";
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
    <header aria-label="Section header" className="relative mb-8 lg:mb-6">
      <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-6 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
        <Time
          date={date}
          className="hidden pointer-events-auto text-xs/6 text-gray-500 xl:block"
        />
        <div className="h-[0.0625rem] w-3.5 bg-gray-500 lg:-mr-3.5" />
      </div>
      <Container>
        <Badge title={date}>
          <Time
            date={date}
            className="text-xs font-normal text-gray-600 dark:text-gray-400"
          />
        </Badge>
      </Container>
    </header>
  );
}

export { SectionHeader, Container };
