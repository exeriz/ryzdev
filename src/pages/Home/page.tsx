import { useEffect, useRef, useState } from "react";
import { Container, SectionHeader } from "@/components/Layout/Container";
import { Pagination } from "@/components/Pagination";
import { Button } from "@/components/Button/Button";
import { Badge } from "@/components/Badge";
import { Svg } from "@/components/Optimizing/Svg";
import { Project } from "@/assets/types/project";
import { dateFormatter } from "@/utils/dateFormatter";
import { useFetch } from "@/hooks/useFetch";
import { Image } from "@/components/Optimizing/Image";
import { useFilterContext } from "@/context/FilterContent";
import Thumbnail from "@/assets/images/thumbnail.jpg";

export default function Home() {
  const { data, loading, error } = useFetch<Project>("https://raw.githubusercontent.com/rizumdn/ryzdev-project/refs/heads/main/projects.json");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { category } = useFilterContext();
  const filteredProjects =
    category === "all"
      ? data
      : data.filter((project) => project.category === category);

  const sectionPerPage: number = 5;
  const sectionHeightRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(filteredProjects.length / sectionPerPage);
  const startIndex = (currentPage - 1) * sectionPerPage;
  const endIndex = startIndex + sectionPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    if (!sectionHeightRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (!sectionHeightRef.current) {
        return;
      }
    });

    resizeObserver.observe(sectionHeightRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handlePagination = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full space-y-10 sm:space-y-16">
      {currentProjects.map((project, index) => (
        <article
          key={project.id}
          ref={sectionHeightRef}
          id={project.title.replace(/ /g, "-").toLowerCase()}
        >
          <SectionHeader date={project.date} />
          <Container className="text-gray-600 dark:text-gray-400">
            <section className="w-full pt-8 pb-6">
              <Image
                src={Thumbnail}
                alt={`Thumbnail for project #${project.id}: ${
                  project.title
                }, categorized as ${
                  project.category
                }. Created on ${dateFormatter.format(
                  new Date(project.date)
                )}. License: ${
                  project.license !== null
                    ? `${project.license}-licensed`
                    : "Not licensed"
                }.`}
                text={{
                  textTitle: project.title,
                  textLicense: project.license,
                  textVersion: project.version,
                  textCategory: project.category,
                }}
              />
            </section>

            <section className="border-b border-gray-950/10 dark:border-gray-50/10 space-y-2.5 pb-5">
              <div className="flex flex-wrap sm:items-center gap-5">
                <h2 className="text-xl font-semibold text-gray-950 dark:text-gray-50">
                  {project.title}
                </h2>
                <Badge title="Project category" variant="secondary">
                  {project.category}
                </Badge>
              </div>

              <p className="text-gray-600 dark:text-gray-400">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-2 py-2">
                <Badge title="Project developer">
                  <Svg
                    variant="outline"
                    stroke="#4b5563"
                    strokeDark="#9ca3af"
                    width={12}
                    height={12}
                    draw="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                  Ryzmdn
                </Badge>
                <Badge title="Project license">
                  <Svg
                    variant="outline"
                    stroke="#4b5563"
                    strokeDark="#9ca3af"
                    width={12}
                    height={12}
                    draw="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                  {project.license !== null ? project.license : "No license"}
                </Badge>
                <Badge title="Current project version">
                  <Svg
                    variant="outline"
                    stroke="#4b5563"
                    strokeDark="#9ca3af"
                    width={12}
                    height={12}
                    draw="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                  {project.version}
                </Badge>
                <Badge title="Current project id">
                  <Svg
                    variant="outline"
                    stroke="#4b5563"
                    strokeDark="#9ca3af"
                    width={12}
                    height={12}
                    draw="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
                  />
                  Project {project.id}
                </Badge>
              </div>
            </section>

            <section className="text-base/7 text-gray-600 dark:text-gray-400 pb-8">
              <div className="space-y-2.5 mt-6">
                {project.paragraph.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>

              <div className="w-full py-6">
                <div className="flex items-center gap-x-2">
                  <Svg
                    fill="#3b82f6"
                    width={20}
                    height={20}
                    draw="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  />
                  <p className="text-lg font-medium text-gray-950 dark:text-gray-50">
                    Features
                  </p>
                </div>

                {Object.entries(project.versions).map(([key, value]) => (
                  <div key={key} className="py-4">
                    <ul className="marker:text-blue-600 dark:marker:text-blue-400 list-disc pl-5 space-y-2">
                      {value.map((versionDetail) => (
                        <li key={versionDetail}>{versionDetail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-950 dark:text-gray-50">
                  Category
                </h3>

                <div className="flex flex-wrap gap-2 rounded-lg bg-gray-50 dark:bg-gray-400/10 p-3 ring-1 ring-inset ring-gray-600/10 dark:ring-gray-400/20">
                  {project.tags.map((tag) => (
                    <Badge title={tag} key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-x-2 mt-8">
                {project.url.demo && (
                  <Button
                    href={project.url.demo}
                    variant="text"
                    shadow={false}
                    aria-label="Link to visit demo"
                    className="hover:underline"
                  >
                    <Svg
                      variant="outline"
                      stroke="#4b5563"
                      strokeDark="#9ca3af"
                      width={20}
                      height={20}
                      draw="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                    Demo Link
                  </Button>
                )}
                <Button
                  href={project.url.repo}
                  variant="text"
                  shadow={false}
                  aria-label="Link to visit github repository"
                  className="hover:underline"
                >
                  <Svg
                    variant="outline"
                    stroke="#4b5563"
                    strokeDark="#9ca3af"
                    width={20}
                    height={20}
                    draw="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                  />
                  Repository Link
                </Button>
              </div>
            </section>

            {index === currentProjects.length - 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChangePage={handlePagination}
              />
            )}
          </Container>
        </article>
      ))}
    </div>
  );
}
