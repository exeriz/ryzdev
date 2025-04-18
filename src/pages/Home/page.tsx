import { useEffect, useState } from "react";
import { Container, SectionHeader } from "@/components/Layout/Container";
import { Pagination } from "@/components/Pagination";
import { Button } from "@/components/Buttons/Button";
import { Badge } from "@/components/Badge";
import { Svg } from "@/components/Optimizing/Svg";
import { Project } from "@/assets/types/project";
import { dateFormatter } from "@/utils/dateFormatter";
import { useFetch } from "@/hooks/useFetch";
import { Image } from "@/components/Optimizing/Image";
import { useFilterContext } from "@/context/FilterContent";
import Thumbnail from "@/assets/images/thumbnail.jpg";

export default function Home() {
  const { data, loading, error } = useFetch<Project>(import.meta.env.VITE_PROJECT_URL);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedVersions, setSelectedVersions] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    if (data && data.length > 0) {
      const initialVersions: { [key: number]: string } = {};
      data.forEach(project => {
        if (project.features && project.features.length > 0) {
          initialVersions[project.id] = project.features[0].version;
        }
      });
      setSelectedVersions(initialVersions);
    }
  }, [data]);

  const { category } = useFilterContext();
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const handleVersionChange = (projectId: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersions((prev) => ({ ...prev, [projectId]: event.target.value }));
  };

  let filteredProjects: Project[];

  if (!data) {
    filteredProjects = [];
  } else if (category === "all") {
    filteredProjects = data;
  } else {
    filteredProjects = data.filter((project) => project.category === category);
  }

  const sectionPerPage: number = 5;
  const totalPages = Math.ceil((filteredProjects?.length || 0) / sectionPerPage);
  const startIndex = (currentPage - 1) * sectionPerPage;
  const endIndex = startIndex + sectionPerPage;
  const currentProjects = filteredProjects?.slice(startIndex, endIndex) || [];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No projects found</div>;

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
          id={project.name.replace(/ /g, "-").toLowerCase()}
        >
          <SectionHeader date={project.created_at} />
          <Container className="text-gray-600 dark:text-gray-400">
            <section className="w-full pt-8 pb-6">
              <Image
                priority
                src={Thumbnail}
                alt={`Thumbnail for project #${project.id}: ${
                  project.name
                }, categorized as ${
                  project.category
                }. Created on ${dateFormatter.format(
                  new Date(project.created_at)
                )}. License: ${
                  project.license !== null
                    ? `${project.license}-licensed`
                    : "Not licensed"
                }.`}
                text={{
                  textTitle: project.name,
                  textLicense: project.license,
                  textVersion: project.features?.[0]?.version,
                  textCategory: project.category,
                }}
              />
            </section>

            <section className="border-b border-gray-950/10 dark:border-gray-50/10 space-y-2.5 pb-5">
              <div className="flex flex-wrap-reverse sm:items-center gap-x-5 gap-y-2.5">
                <h2 className="text-xl font-semibold text-gray-950 dark:text-gray-50">
                  {project.name}
                </h2>
                <Badge title="Project category" variant="secondary">
                  {project.category}
                </Badge>
              </div>

              <p className="text-gray-600 dark:text-gray-400">
                {project.description.summary}
              </p>

              <div className="flex flex-wrap items-center gap-2 py-2">
                <Badge title="Current project id">
                  <Svg
                    variant="outline"
                    width={12}
                    height={12}
                    draw={["M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"]}
                  />
                  Project {project.id}
                </Badge>
                <Badge title="Project release date">
                  <Svg
                    variant="outline"
                    width={12}
                    height={12}
                    draw={["M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"]}
                  />
                  {dateFormatter.format(new Date(project.created_at))}
                </Badge>
                <Badge title="Project license">
                  <Svg
                    variant="outline"
                    width={12}
                    height={12}
                    draw={["M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"]}
                  />
                  {project.license !== null ? project.license : "No license"}
                </Badge>
                {project.features?.[0]?.version && (
                  <Badge title="Current project version">
                    <Svg
                      variant="outline"
                      width={12}
                      height={12}
                      draw={["M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"]}
                    />
                    {project.features?.[0]?.version}
                  </Badge>
                )}
              </div>
            </section>

            <section className="flex flex-col gap-y-7 text-base/7 text-gray-600 dark:text-gray-400 pb-8">
              <div className="space-y-2.5 mt-6">
                {project.description.detail.map((text, idx) => (
                  <p key={`${project.id}-desc-${idx}`}>{text}</p>
                ))}
              </div>

              <div className="w-full">
                <div className="flex items-center gap-x-2">
                  <Svg
                    width={20}
                    height={20}
                    draw={["M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"]}
                    className="text-blue-500"
                  />
                  <p className="text-lg font-medium text-gray-950 dark:text-gray-50">
                    Features
                  </p>
                </div>

                {project.features && project.features.length > 0 ? (
                  <div className="rounded-md bg-gray-50 dark:bg-gray-400/10 pt-1.5 px-3.5 pb-3.5 text-gray-600 dark:text-gray-400 mt-2 ring-1 ring-gray-500/10 dark:ring-gray-400/20 ring-inset">
                    <label htmlFor={`version-${project.id}`} className="sr-only">Select Version</label>
                    <div className="mt-2 grid grid-cols-1 w-max">
                      <select 
                        id={`version-${project.id}`}
                        onChange={(e) => handleVersionChange(project.id, e)} 
                        value={selectedVersions[project.id] || ''}
                        className="col-start-1 row-start-1 w-full text-xs/6 appearance-none rounded-full bg-gray-50 dark:bg-gray-900 py-0.5 pr-8 pl-3 text-gray-800 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
                      >
                        {project.features.map((feature) => (
                          <option key={feature.version} value={feature.version}>
                            {feature.version}
                          </option>
                        ))}
                      </select>
                      
                      <Svg
                        variant="outline"
                        width={12}
                        height={12}
                        draw={["m19.5 8.25-7.5 7.5-7.5-7.5"]}
                        className="col-start-1 row-start-1 mr-2 self-center justify-self-end text-gray-500"
                      />
                    </div>

                    {selectedVersions[project.id] && (
                      <div className="mt-2">
                        {(() => {
                          const selectedFeature = project.features.find(
                            (feature) => feature.version === selectedVersions[project.id]
                          );
                          
                          if (selectedFeature?.list && selectedFeature.list.length > 0) {
                            return (
                              <div className="max-h-64 overflow-y-auto">
                                <ul className="list-disc text-sm/6 ml-5 mt-2">
                                  {selectedFeature.list.map((item, idx) => (
                                    <li key={`${project.id}-feature-${idx}`}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            );
                          } else {
                            return <p className="text-sm/6 mt-2">No features available for this version.</p>;
                          }
                        })()}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm/6 mt-2">No feature versions available.</p>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-x-2">
                  <Svg
                    width={20}
                    height={20}
                    draw={["M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"]}
                    className="text-blue-500"
                  />
                  <p className="text-lg font-medium text-gray-950 dark:text-gray-50">
                    Tags
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-2 gap-y-1.5 rounded-md bg-gray-50 dark:bg-gray-400/10 p-3 text-gray-600 dark:text-gray-400 mt-2 ring-1 ring-gray-500/10 dark:ring-gray-400/20 ring-inset">
                  {project.tags && project.tags.length > 0 ? (
                    project.tags
                      .slice()
                      .sort((a, b) => a.localeCompare(b))
                      .map((tag) => (
                        <Badge title={tag} key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))
                  ) : (
                    <p className="text-sm/6 mt-2">No tags available</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-x-2">
                  <Svg
                    width={20}
                    height={20}
                    draw={[
                      "M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",
                      "M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"
                    ]}
                    className="text-blue-500"
                  />
                  <p className="text-lg font-medium text-gray-950 dark:text-gray-50">
                    Contributors
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.contributors && project.contributors.length > 0 ? (
                    project.contributors.map((contributor) => (
                        <Button key={contributor.image} href={contributor.url}>
                          <img
                            alt={contributor.image}
                            src={contributor.image}
                            className="inline-block size-7 rounded-full"
                          />
                        </Button>
                      ))
                  ) : (
                    <p className="text-sm/6 mt-2">No contributors</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-x-4 mt-8">
                {project.homepage && (
                  <>
                    <Button
                      href={project.homepage}
                      variant="link"
                      aria-label="Link to visit demo"
                      className="hover:underline"
                    >
                      <Svg
                        variant="outline"
                        width={18}
                        height={18}
                        draw={["M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"]}
                      />
                      Demo Link
                    </Button>
                    
                    <span className="w-0.25 h-4 bg-gray-900/10 dark:bg-gray-50/10 rounded-full" aria-hidden="true" />
                  </>
                )}
                <Button
                  href={project.git}
                  variant="link"
                  aria-label="Link to visit github repository"
                  className="hover:underline"
                >
                  <Svg
                    width={17}
                    height={17}
                    draw={["M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"]}
                  />
                  Repository Link
                </Button>
              </div>
            </section>

            {index === currentProjects.length - 1 && totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChangePage={handlePagination}
              />
            )}
          </Container>
        </article>
      ))}
      
      {currentProjects.length === 0 && !loading && (
        <div className="text-center py-10">
          <p>No projects found for the selected category.</p>
        </div>
      )}
    </div>
  );
}