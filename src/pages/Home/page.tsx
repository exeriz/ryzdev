import { useEffect, useState } from "react";
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
  const totalPages = Math.ceil(filteredProjects.length / sectionPerPage);
  const startIndex = (currentPage - 1) * sectionPerPage;
  const endIndex = startIndex + sectionPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

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
          id={project.title.replace(/ /g, "-").toLowerCase()}
        >
          <SectionHeader date={project.date} />
          <Container className="text-gray-600 dark:text-gray-400">
            <section className="w-full pt-8 pb-6">
              <Image
                priority
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
              <div className="flex flex-wrap-reverse sm:items-center gap-x-5 gap-y-2.5">
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
                <Badge title="Current project id">
                  <Svg
                    variant="outline"
                    stroke="#4b5563"
                    strokeDark="#9ca3af"
                    width={12}
                    height={12}
                    draw={["M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"]}
                  />
                  Project {project.id}
                </Badge>
                <Badge title="Project release date">
                  <Svg
                    variant="outline"
                    stroke="#4b5563"
                    strokeDark="#9ca3af"
                    width={12}
                    height={12}
                    draw={["M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"]}
                  />
                  {dateFormatter.format(new Date(project.date))}
                </Badge>
                <Badge title="Project license">
                  <Svg
                    variant="outline"
                    stroke="#4b5563"
                    strokeDark="#9ca3af"
                    width={12}
                    height={12}
                    draw={["M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"]}
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
                    draw={["M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"]}
                  />
                  {project.version}
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
                    draw={["M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"]}
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
                <div className="flex items-center gap-x-2">
                  <Svg
                    fill="#3b82f6"
                    width={20}
                    height={20}
                    draw={["M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"]}
                  />
                  <p className="text-lg font-medium text-gray-950 dark:text-gray-50">
                    Tags
                  </p>
                </div>

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
                      width={18}
                      height={18}
                      draw={["M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"]}
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
                    fill="#4b5563"
                    fillDark="#9ca3af"
                    width={17}
                    height={17}
                    draw={["M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"]}
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
