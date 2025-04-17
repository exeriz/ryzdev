import { Button } from "@/components/Buttons/Button";

export default function ErrorPage() {
  return (
    <div className="fixed inset-0 size-full z-50 flex justify-center items-center bg-gray-50 dark:bg-gray-950">
      <div className="text-center">
        <p className="text-7xl lg:text-8xl font-semibold text-blue-600 dark:text-blue-400">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-gray-950 dark:text-gray-50 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-6 text-sm font-medium text-pretty text-gray-600 dark:text-gray-400 md:text-base">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/" className="px-3 py-1.5">
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
}
