import { Project } from "@/assets/types/project";
import { Image } from "@/components/Optimizing/Image";
import { dateFormatter } from "@/utils/dateFormatter";
import Thumbnail from "@/assets/images/thumbnail.jpg";

export function ProjectThumbnail({ project }: Readonly<{ project: Project }>) {
  const altText = `Thumbnail for project #${project.id}: ${project.name}, 
      categorized as ${project.category}. Created on ${dateFormatter.format(
    new Date(project.created_at)
  )}. License: ${
    project.license ? `${project.license}-licensed` : "Not licensed"
  }.`;

  return (
    <section className="w-full pt-8 pb-6">
      <Image
        priority
        src={Thumbnail}
        alt={altText}
        text={{
          textTitle: project.name,
          textLicense: project.license,
          textVersion: project.features?.[0]?.version,
          textCategory: project.category,
        }}
      />
    </section>
  );
}
