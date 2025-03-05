import { Container, SectionHeader } from "@/components/Layout/Container";

export default function Changelog() {
  return (
    <article className="space-y-10 sm:space-y-16">
      <SectionHeader date={"2025-02-01"} />
      <Container className="text-base/7 text-gray-600 dark:text-gray-400">
        <h2 className="text-xl font-semibold text-gray-950 dark:text-gray-50">
          Official Release <small className="text-blue-400">v1.0.0</small>
        </h2>
        <ul className="list-disc marker:text-blue-600 dark:marker:text-blue-400 mt-5 pl-5 space-y-4 [&_strong]:font-semibold [&_strong]:text-gray-950 [&_strong]:dark:text-gray-50">
          <li>
            Addition of an "About" page that tells the story of my journey as a
            creator is now available.
          </li>
          <li>
            Improved Loading Speed by optimizing code and images to speed up
            page load times.
          </li>
          <li>
            Added a dark theme option for the user's convenience when wanting to
            change the web theme to light or dark.
          </li>
          <li>
            rojects can be grouped by categories, such as "Front-end",
            "Back-end", "Full-stack" and others, to make it easier to explore.
          </li>
          <li>
            A cleaner, more responsive, and easy-to-navigate web display on all
            devices.
          </li>
          <li>
            Optimize code for images, svg and time by applying best practices to
            speed up page load times.
          </li>
          <li>
            Added error handling when the web or content encountered an unknown
            issue.
          </li>
          <li>
            SEO optimization gets better for the web to appear on search
            engines.
          </li>
        </ul>
      </Container>
      <SectionHeader date={"2025-03-05"} />
      <Container className="text-base/7 text-gray-600 dark:text-gray-400">
        <h2 className="text-xl font-semibold text-gray-950 dark:text-gray-50">
          Optimization improvements{" "}
          <small className="text-blue-400">v1.4.8</small>
        </h2>
        <ul className="list-disc marker:text-blue-600 dark:marker:text-blue-400 mt-5 pl-5 space-y-4 [&_strong]:font-semibold [&_strong]:text-gray-950 [&_strong]:dark:text-gray-50">
          <li>Optimize image loading to be faster</li>
          <li>Customize icons and text in each project</li>
          <li>Update dependencies and lib versions to newer</li>
          <li>Optimize components for the better</li>
          <li>Adjust text size and layout for the better</li>
        </ul>
      </Container>
    </article>
  );
}
