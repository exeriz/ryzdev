import { Logo } from "@/components/Logo";
import { Button } from "@/components/Buttons/Button";
import { Svg } from "@/components/Optimizing/Svg";

interface SidebarButtons {
  name: string;
  url: string;
  icon: string;
}

const sidebarButtons: SidebarButtons[] = [
  {
    name: "Introduce",
    url: "/introduction",
    icon: "M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"
  },
  {
    name: "GitHub",
    url: "https://github.com/ryzmdn",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ryzmdn",
    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
];

interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

const socialMedia: SocialMedia[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/ryzmdn",
    icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ryzmdn",
    icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
  },
  {
    name: "X",
    url: "https://x.com/ryzmdn",
    icon: "M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
  },
  {
    name: "Behance",
    url: "https://www.behance.net/ryzmdn",
    icon: "M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/ryzmdn",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
  }
];

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
      <div className="relative flex items-center gap-x-1 mt-8 mb-6 bg-blue-600/10 dark:bg-blue-500/10 px-3 py-1 text-sm/6 font-medium text-blue-600 dark:text-blue-400 ring-1 ring-blue-600/10 hover:ring-blue-600/20 dark:ring-blue-500/20 dark:hover:ring-blue-500/30 ring-inset rounded-full">
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
      <div className="flex flex-wrap justify-center items-center gap-3.5 mt-8 sm:gap-x-4 lg:justify-start">
        {sidebarButtons.map(button => (
          <Button
            key={button.name}
            variant="default"
            href={button.url}
            className="group text-xs/6 text-gray-700 dark:text-gray-300 px-2.5 py-0.5 hover:bg-blue-400/10"
          >
            <Svg
              width={16}
              height={16}
              draw={[button.icon]}
              className="group-hover:text-blue-300"
            />
            {button.name}
          </Button>
        ))}
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
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Svg width={18} height={18} draw={[item.icon]} current />
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
