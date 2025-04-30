import { Project } from "@/assets/types/project";
import { Button } from "@/components/Buttons/Button";
import { SectionTitle } from "@/components/SectionTitle";

export function ProjectContributors({
  contributors,
}: Readonly<{
  contributors?: Project["contributors"];
}>) {
  return (
    <div className="space-y-4 mt-6">
      <SectionTitle icon="contributors">Contributors</SectionTitle>

      <div className="flex flex-wrap items-center gap-2">
        {contributors?.length ? (
          contributors.map((contributor) => (
            <Button key={contributor.image} href={contributor.url}>
              <img
                alt={contributor.image}
                src={contributor.image}
                className="inline-block size-7 rounded-full"
              />
            </Button>
          ))
        ) : (
          <p className="text-sm/6">No contributors</p>
        )}
      </div>
    </div>
  );
}
