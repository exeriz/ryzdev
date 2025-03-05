import { Container, SectionHeader } from "@/components/Layout/Container";

export default function Changelog() {
  return (
    <div className="space-y-10 divide-y divide-white/10 sm:space-y-16">
      <article>
        <SectionHeader date={"2025-02-01"} />
        <Container className="text-base/7 text-gray-600 dark:text-gray-400">
          <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50">
            Official Release
          </h1>
          <ul className="list-disc marker:text-blue-600 dark:marker:text-blue-400 mt-5 pl-5 space-y-4 [&_strong]:font-semibold [&_strong]:text-gray-950 [&_strong]:dark:text-gray-50">
            <li>
              <strong>Addition of an "About" Page.</strong> An "About Me" page
              that tells the story of my journey as a creator is now available.
            </li>
            <li>
              <strong>Improved Loading Speed.</strong> Optimize code and images
              to speed up page load times.
            </li>
            <li>
              <strong>Dark Mode Implementation.</strong> Added a dark theme
              option for the user's convenience when wanting to change the web
              theme to light or dark.
            </li>
            <li>
              <strong>Project Categories.</strong> Projects can be grouped by
              categories, such as "Front-end", "Back-end", "Full-stack" and
              others, to make it easier to explore.
            </li>
            <li>
              <strong>Modern UI Design.</strong> A cleaner, more responsive, and
              easy-to-navigate web display on all devices.
            </li>
            <li>
              <strong>Increased Loading Speed.</strong> Optimize code for
              images, svg and time by applying best practices to speed up page
              load times.
            </li>
            <li>
              <strong>Error handling.</strong> Added error handling when the web
              or content encountered an unknown issue.
            </li>
            <li>
              <strong>Implements SEO.</strong> SEO optimization gets better for
              the web to appear on search engines.
            </li>
          </ul>
        </Container>
      </article>
    </div>
  );
}
