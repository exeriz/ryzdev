import { Logo } from "@/components/Logo";
import { Button } from "@/components/Buttons/Button";
import { socialMedia } from "@/components/Icons";
import { Svg } from "@/components/Optimizing/Svg";

export function SidebarContent() {
  return (
    <>
      <Button
        variant="link"
        href="/"
        aria-label="Link icon to return to the home page"
        className="text-xl gap-x-3"
      >
        <Logo className="inline-block h-8 w-auto" />
        <span>RyzDev</span>
      </Button>
      <div className="relative inline-flex items-center gap-x-1 rounded-full bg-gray-50 dark:bg-blue-400/10 mt-8 mb-6 px-3 py-1 text-sm/6 font-medium text-gray-600 dark:text-blue-400 ring-1 ring-gray-500/10 hover:ring-gray-500/20 dark:ring-blue-400/30 dark:hover:ring-blue-400/40 ring-inset">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-500">Open Source code is only available on GitHub.</div>
        <Button variant="default" href="https://github.com/exeriz/ryzdev" className="font-medium text-blue-500 dark:text-sky-500">
          <span aria-hidden="true" className="absolute inset-0" /> Visit <span aria-hidden="true">&rarr;</span>
        </Button>
      </div>
      <h1 className="text-4xl/tight font-semibold text-gray-950 dark:text-gray-50">
        RyzDev – Find My{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-500">
          Creativity Trail
        </span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
        Discover my journey through projects full of ideas, challenges, and
        inspiration. From simple to complex works, everything is here to see and
        appreciate.
      </p>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 lg:justify-start">
        <Button
          variant="link"
          href="/introduction"
          className="text-[13px]/6 font-medium"
        >
          <Svg
            width={16}
            height={16}
            draw={["M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"]}
          />
          Introcuce
        </Button>
        <Button
          variant="link"
          href="https://github.com/ryzmdn"
          className="text-[13px]/6 font-medium"
        >
          <Svg
            width={16}
            height={16}
            draw={["M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"]}
          />
          GitHub
        </Button>
        <Button
          variant="link"
          href="https://www.linkedin.com/in/ryzmdn"
          className="text-[13px]/6 font-medium"
        >
          <Svg
            width={16}
            height={16}
            draw={["M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"]}
          />
          LinkedIn
        </Button>
      </div>
    </>
  );
}

export function SidebarFooter() {
  return (
    <footer aria-label="Sidebar footer" className="w-full">
      <div className="flex items-center gap-x-5 text-sm/6 text-gray-600 dark:text-gray-400">
        <p>Follow me on:</p>
        <div className="inline-flex items-center gap-x-3">
          {socialMedia.map((item) => (
            <Button
              variant="link"
              key={item.name}
              href={item.url}
              aria-label={`${item.name} icon link to view my account`}
            >
              <item.icon />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function Sidebar() {
  return (
    <aside
      aria-label="Main website sidebar"
      className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-50 dark:bg-gray-950 border-b border-blue-900/10 dark:border-gray-50/10 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:border-r" />
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:flex lg:flex-col lg:before:flex-1 lg:w-96 lg:max-w-none lg:mx-0">
          <div className="relative py-16 sm:py-20 lg:py-0">
            <SidebarContent />
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
            <SidebarFooter />
          </div>
        </div>
      </div>
    </aside>
  );
}
