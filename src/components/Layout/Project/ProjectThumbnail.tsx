import { Project } from "@/assets/types/project";
import { Svg } from "@/components/Optimizing/Svg";
import { Badge } from "@/components/Badge";

export function ProjectThumbnail({ project }: Readonly<{ project: Project }>) {
  return (
    <section className="w-full pt-8 pb-6">
      <div className="relative isolate overflow-hidden aspect-video rounded-xl bg-gray-100 dark:bg-gray-900 ring-1 ring-inset ring-gray-100 dark:ring-gray-900">
        <div className="flex flex-col justify-center items-center size-full">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
            {project.name}
          </h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            Project Development
          </p>
        </div>

        <Badge
          title="Project Category"
          variant="secondary"
          className="absolute top-5 left-5 text-[0.5rem] sm:text-xs"
        >
          {project.category}
        </Badge>
        <Badge
          title="Project Version"
          className="absolute top-5 left-28 text-[0.5rem] sm:text-xs"
        >
          Version {project.features?.[0]?.version}
        </Badge>
        <Badge
          title="Project License"
          className="absolute bottom-5 left-5 text-[0.5rem] sm:text-xs"
        >
          {project.license ?? "No"} License
        </Badge>
        <Badge
          title="Project Index"
          className="absolute top-5 right-5 text-[0.5rem] sm:text-xs"
        >
          #{project.id}
        </Badge>

        <Svg
          variant="custom"
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 size-256 opacity-50 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#0ea5e9" />
              <stop offset={1} stopColor="#0284c7" />
            </radialGradient>
          </defs>
        </Svg>
      </div>
    </section>
  );
}
