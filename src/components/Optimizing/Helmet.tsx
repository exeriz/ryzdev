import { Helmet } from "react-helmet-async";

export function HelmetHeader() {
  return (
    <Helmet prioritizeSeoTags>
      <meta
        name="description"
        content="RyzDev is the place where all of Riz's creative journeys are documented. This website contains a comprehensive list of projects I have worked on, from the initial idea to the final result."
      />
      <meta name="application-name" content="RyzDev" />
      <meta name="author" content="Rizky Ramadhan" />
      <meta name="generator" content="React.js & Vite" />
      <meta
        name="keywords"
        content="RyzDev, React.js, JavaScript, TypeScript, Vite, Frontend Development, Portfolio, Projects, Creative Coding, Web Development, Open Source"
      />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="color-scheme" content="dark light" />
      <meta name="creator" content="Rizky Ramadhan" />
      <meta name="publisher" content="RyzDev" />
      <meta
        name="format-detection"
        content="telephone=no, address=no, email=no"
      />

      <link rel="shortcut icon" href="https://ryzdev.vercel.app/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href="https://ryzdev.vercel.app" />
      <link rel="author" href="https://www.linkedin.com/in/ryzmdn/" />
      <link rel="manifest" href="https://ryzdev.vercel.app/manifest.webmanifest" />

      <meta property="og:title" content="RyzDev | Find My Creativity Trail" />
      <meta
        property="og:description"
        content="Explore Riz's creative journey at RyzDev. A showcase of projects, from ideas to execution, in web development and beyond."
      />
      <meta property="og:url" content="https://ryzdev.vercel.app" />
      <meta property="og:site_name" content="RyzDev" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://ryzdev.vercel.app/og-image.jpg" />
      <meta property="og:image:alt" content="RyzDev Image" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="RyzDev | Find My Creativity Trail" />
      <meta
        name="twitter:description"
        content="Explore Riz's creative journey at RyzDev. A showcase of projects, from ideas to execution, in web development and beyond."
      />
      <meta
        name="twitter:image"
        content="https://ryzdev.vercel.app/og-image.jpg"
      />
      <meta name="twitter:site" content="@ryzmdn" />
      <meta name="twitter:creator" content="@ryzmdn" />

      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
      />
    </Helmet>
  );
}
