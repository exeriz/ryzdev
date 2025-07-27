import { Project } from "@/assets/types/project";
import { Button } from "@/components/Buttons/Button";
import { SectionTitle } from "@/components/SectionTitle";

export function ProjectContributors({
  contributors,
}: Readonly<{
  contributors?: Project["contributors"];
}>) {
  const maxVisible = 5;

  const visibleContributors = contributors?.slice(0, maxVisible) || [];
  const extraCount = (contributors?.length || 0) - maxVisible;
  const showSeeAll = (contributors?.length || 0) > maxVisible;

  return (
    <div className="w-full space-y-4 my-5 py-5">
      <div className="flex justify-between items-center w-full">
        <SectionTitle icon="contributors">Contributors</SectionTitle>

        {showSeeAll && <Button variant="link">See all &rarr;</Button>}
      </div>

      <div className="flex -space-x-1 p-0.5 overflow-hidden">
        {visibleContributors.map((contributor, index) => {
          const isLastVisible = index === maxVisible - 1 && extraCount > 0;

          return (
            <div key={contributor.image} className="relative">
              <Button variant="default" href={contributor.url}>
                <img
                  src={contributor.image}
                  alt="Contributor's profile"
                  className="inline-block size-7 rounded-full ring-2 ring-gray-50 dark:ring-gray-950"
                />
              </Button>

              {isLastVisible && (
                <div className="absolute inset-0 bg-gray-950/50 flex items-center justify-center rounded-full text-xs font-semibold text-gray-100">
                  +{extraCount}
                </div>
              )}
            </div>
          );
        })}
        {!contributors?.length && (
          <p className="text-sm/6">No contributors</p>
        )}
      </div>
    </div>
  );
}
