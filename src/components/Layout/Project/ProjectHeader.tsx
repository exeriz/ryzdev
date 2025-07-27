import { Project } from "@/assets/types/project";
import { Badge } from "@/components/Badge";
import { Svg } from "@/components/Optimizing/Svg";
import { dateFormatter } from "@/utils/dateFormatter";

export function ProjectHeader({
  name,
  summary,
  id,
  created_at,
  license,
  features,
}: Readonly<{
  name: string;
  summary: string;
  id: number;
  created_at: string;
  license: string | null;
  features?: Project["features"];
}>) {
  return (
    <section className="border-b border-gray-950/10 dark:border-gray-50/10 space-y-2.5 pb-5">
      <div className="flex flex-wrap-reverse sm:items-center gap-x-5 gap-y-2.5">
        <h2 className="text-xl truncate font-semibold text-gray-950 dark:text-gray-50 sm:text-2xl">
          {name}
        </h2>
      </div>

      <p className="text-base/7 text-gray-800 dark:text-gray-200">{summary}</p>

      <div className="flex flex-wrap items-center gap-2 py-2">
        <Badge title="Current project id">
          <Svg
            variant="outline"
            width={12}
            height={12}
            draw={[
              "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5",
            ]}
          />
          Project {id}
        </Badge>
        <Badge title="Project release date">
          <Svg variant="outline" width={12} height={12} draw={["M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"]} />
          {dateFormatter.format(new Date(created_at))}
        </Badge>
        <Badge title="Project license">
          <Svg variant="outline" width={12} height={12} draw={["M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"]} />
          {license || "No license"}
        </Badge>
        {features?.[0]?.version && (
          <Badge title="Current project version">
            <Svg variant="outline" width={12} height={12} draw={["M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"]} />
            {features[0].version}
          </Badge>
        )}
      </div>
    </section>
  );
}
