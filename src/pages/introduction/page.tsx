import { Container } from "@/components/Layout/Container";
import { Image } from "@/components/Optimizing/Image";

const stack = [
  {
    name: "HTML",
    logo: "https://www.svgrepo.com/show/452228/html-5.svg",
  },
  {
    name: "CSS",
    logo: "https://www.svgrepo.com/show/373535/css.svg",
  },
  {
    name: "TypeScript",
    logo: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
  },
  {
    name: "React.js",
    logo: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
];

export default function About() {
  return (
    <Container className="text-base/7 text-gray-600 dark:text-gray-400">
      <p className="font-semibold text-blue-600 dark:text-blue-400">
        Introducing
      </p>
      <h1 className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-950 dark:text-gray-50 sm:text-4xl">
        RyzDev
      </h1>
      <p className="mt-6 text-lg/8">
        RyzDev (Ryzmdn Development) is a website where all of my creative
        journeys are documented. This website contains a comprehensive list of
        projects I have worked on, from the initial idea to the final result.
      </p>
      <div className="mt-10 max-w-2xl [&_p]:mt-6">
        <p>
          Ryzmdn is the username of some of my social media accounts. The main
          goal of RyzDev is to share my achievements with the world, inspire
          others, and prove that every small step in the journey can lead to
          something extraordinary. Here, you will find a wide variety of
          projects that cover a wide range of fields and show my dedication and
          passion for continuous improvement.
        </p>
        <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
          Why did I create this website?
        </h2>
        <p>
          I document all the projects I've worked on. The website is designed to
          be a kind of "digital diary" that showcases my travels in the world of
          project development, both small and large.
        </p>
        <ul className="list-disc marker:text-blue-600 dark:marker:text-blue-400 mt-8 pl-5 max-w-xl space-y-4 [&_strong]:font-semibold [&_strong]:text-gray-950 [&_strong]:dark:text-gray-50">
          <li>
            <strong>Showing Progress and Achievements.</strong> Every project I
            feature is a clear testament to the development of my abilities.
            Looking back, I can learn from the experience and see how far I've
            come.
          </li>
          <li>
            <strong>Inspiring Others.</strong> I believe that every project, no
            matter how small, has a story that can inspire. By sharing my work,
            I hope to motivate others to start and complete their own projects.
          </li>
          <li>
            <strong>As a Personal Portfolio.</strong> The website also serves as
            a digital portfolio. By visiting RyzDev, you can see my abilities,
            creativity, and dedication in various areas.
          </li>
        </ul>
        <p>
          Every project I feature on RyzDev is a manifestation of my efforts,
          learning, and hard work. I hope this website will not only become a
          portfolio, but also a source of motivation for anyone who wants to
          start or continue their own journey.
        </p>
        <p>
          I believe that everyone has a unique story in their journey. Riz's
          Commit Changelog is one of the ways I share my story, inspire, and
          remind myself that every step, no matter how small, is part of the
          process to success.
        </p>
      </div>
      <div className="mt-16 max-w-2xl [&_p]:mt-6">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
          Each project has a unique story
        </h2>
        <p>
          The projects I feature on RyzDev are not just the end product, but
          also a challenging journey, new ideas, and valuable learnings. From
          small projects that I work on as a hobby, to large projects that
          require collaboration and in-depth research, they all have a place
          here.
        </p>
        <p>
          I believe that every step in this process has meaning. Some projects
          may be simple, while others are more complex, but they all reflect my
          dedication to constantly evolving and creating something worthwhile.
        </p>
        <p>
          Every page on RyzDev is a reflection of the time, effort, and passion
          I put into every project. I hope these projects can provide
          inspiration, become learning materials, or even pave the way for
          future collaborations.
        </p>
      </div>
      <div className="w-full py-10">
        <h3 className="text-xl font-medium">Technology Used</h3>
        <div className="grid grid-cols-3 gap-8 py-8 sm:grid-cols-4">
          {stack.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-y-4 text-sm text-center">
              <Image
                priority
                variant="square"
                src={item.logo}
                alt={`${item.name} Logo`}
                width={52}
                height={52}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
