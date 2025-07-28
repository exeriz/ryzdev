import { Badge } from "@/components/Badge";
import { SectionTitle } from "@/components/SectionTitle";

export function ProjectTags({ tags }: Readonly<{ tags?: string[] }>) {
  return (
    <div className="space-y-4 my-5 py-5">
      <SectionTitle icon="tags">Tags</SectionTitle>

      <div className="flex flex-wrap gap-x-2 gap-y-1.5 rounded-md bg-gray-50 dark:bg-gray-400/10 p-3 text-gray-600 dark:text-gray-400 mt-2 ring-1 ring-gray-500/10 dark:ring-gray-400/20 ring-inset">
        {tags?.length ? (
          [...tags]
            .sort((a, b) => a.localeCompare(b))
            .map((tag) => (
              <Badge title={tag} key={tag} variant="secondary">
                {tag}
              </Badge>
            ))
        ) : (
          <p className="text-sm/6">No tags available</p>
        )}
      </div>
    </div>
  );
}
