import { useEffect, useState } from "react";
import { Container, SectionHeader } from "@/components/Layout/Container";
import { Pagination } from "@/components/Pagination";
import { Project } from "@/assets/types/project";
import { useFetch } from "@/hooks/useFetch";
import { useFilterContext } from "@/context/FilterContent";
import { ProjectThumbnail } from "@/components/Layout/Project/ProjectThumbnail";
import { ProjectHeader } from "@/components/Layout/Project/ProjectHeader";
import { ProjectDetails } from "@/components/Layout/Project/ProjectDetails";
import { ProjectFeatures } from "@/components/Layout/Project/ProjectFeatures";
import { ProjectTags } from "@/components/Layout/Project/ProjectTags";
import { ProjectContributors } from "@/components/Layout/Project/ProjectContributors";
import { ProjectLinks } from "@/components/Layout/Project/ProjectLink";

const PROJECTS_PER_PAGE = 5;

type SelectedVersions = Record<number, string>;

function LoadingState() {
  return <div className="text-center py-10">Loading projects...</div>;
}

function ErrorState({ error }: Readonly<{ error: string }>) {
  return <div className="text-center py-10 text-red-500">Error: {error}</div>;
}

function EmptyState() {
  return <div className="text-center py-10">No projects found</div>;
}

function NoProjectsFound() {
  return (
    <div className="text-center py-10">
      No projects found for the selected category.
    </div>
  );
}

interface ProjectItemProps {
  project: Project;
  selectedVersion: string;
  onVersionChange: (projectId: number, version: string) => void;
  isLastItem: boolean;
  showPagination: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function ProjectItem({
  project,
  selectedVersion,
  onVersionChange,
  isLastItem,
  showPagination,
  currentPage,
  totalPages,
  onPageChange,
}: Readonly<ProjectItemProps>) {
  const {
    id,
    name,
    created_at,
    category,
    description,
    features,
    tags,
    contributors,
    homepage,
    git,
    license,
  } = project;

  const selectedFeature = features?.find(
    (feature) => feature.version === selectedVersion
  );

  return (
    <article id={name.replace(/ /g, "-").toLowerCase()}>
      <SectionHeader date={created_at} />
      <Container className="text-gray-600 dark:text-gray-400">
        <ProjectThumbnail project={project} />

        <ProjectHeader
          name={name}
          category={category}
          summary={description.summary}
          id={id}
          created_at={created_at}
          license={license}
          features={features}
        />

        <ProjectDetails details={description.detail} />

        <ProjectFeatures
          features={features ?? undefined}
          selectedVersion={selectedVersion}
          onVersionChange={(e) => onVersionChange(id, e.target.value)}
          selectedFeature={selectedFeature}
        />

        <ProjectTags tags={tags} />

        <ProjectContributors contributors={contributors} />

        <ProjectLinks homepage={homepage ?? undefined} git={git} />

        {isLastItem && showPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={onPageChange}
          />
        )}
      </Container>
    </article>
  );
}

export default function Home() {
  const { data: projects, loading, error } = useFetch<Project>(
    import.meta.env.VITE_PROJECT_URL
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedVersions, setSelectedVersions] = useState<SelectedVersions>({});

  const { category } = useFilterContext();

  useEffect(() => {
    if (projects && projects.length > 0) {
      const initialVersions: SelectedVersions = {};
      projects.forEach((project) => {
        if (project.features?.length) {
          initialVersions[project.id] = project.features[0].version;
        }
      });
      setSelectedVersions(initialVersions);
    }
  }, [projects]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const handleVersionChange = (
    projectId: number,
    version: string
  ) => {
    setSelectedVersions((prev) => ({ ...prev, [projectId]: version }));
  };

  const filteredProjects = projects?.filter(
    (project) => category === "all" || project.category === category
  ) || [];

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const handlePagination = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!projects?.length) return <EmptyState />;

  return (
    <div className="w-full space-y-10 sm:space-y-16">
      {currentProjects.length > 0 ? (
        currentProjects.map((project: Project, index: number) => (
          <ProjectItem
            key={project.id}
            project={project}
            selectedVersion={selectedVersions[project.id]}
            onVersionChange={handleVersionChange}
            isLastItem={index === currentProjects.length - 1}
            showPagination={totalPages > 1}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePagination}
          />
        ))
      ) : (
        <NoProjectsFound />
      )}
    </div>
  );
}
