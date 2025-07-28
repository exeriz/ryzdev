import { FeatureItem } from "@/assets/types/project";
import { Svg } from "@/components/Optimizing/Svg";
import { SectionTitle } from "@/components/SectionTitle";

function FeatureList({ feature }: Readonly<{ feature: FeatureItem }>) {
  if (!feature.list?.length) {
    return <p className="text-sm/6 mt-2">No features listed for this version.</p>;
  }

  return (
    <div className="max-h-64 overflow-y-auto">
      <ul className="list-disc text-sm/6 ml-5 mt-2">
        {feature.list.map((item: string, idx: number) => (
          <li key={`feature-${idx}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function VersionSelector({
  features,
  selectedVersion,
  onChange,
}: Readonly<{
  features: FeatureItem[];
  selectedVersion: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}>) {
  return (
    <div className="mt-2 grid grid-cols-1 w-max">
      <select
        value={selectedVersion}
        onChange={onChange}
        className="col-start-1 row-start-1 w-full text-xs/6 appearance-none rounded-full bg-gray-50 dark:bg-gray-900 py-0.5 pr-8 pl-3 text-gray-800 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
      >
        {features?.map((feature) => (
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
  );
}

export function ProjectFeatures({
  features,
  selectedVersion,
  onVersionChange,
  selectedFeature,
}: Readonly<{
  features?: FeatureItem[];
  selectedVersion: string;
  onVersionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedFeature?: FeatureItem;
}>) {
  if (!features?.length) {
    return <p className="text-sm/6 mt-2">No feature versions available.</p>;
  }

  return (
    <div className="w-full my-5 py-5">
      <SectionTitle icon="features">Features</SectionTitle>

      <div className="rounded-md bg-gray-50 dark:bg-gray-400/10 pt-1.5 px-3.5 pb-3.5 text-gray-600 dark:text-gray-400 mt-2 ring-1 ring-gray-500/10 dark:ring-gray-400/20 ring-inset">
        <VersionSelector
          features={features}
          selectedVersion={selectedVersion}
          onChange={onVersionChange}
        />

        {selectedFeature ? (
          <FeatureList feature={selectedFeature} />
        ) : (
          <p className="text-sm/6 mt-2">
            No features available for this version.
          </p>
        )}
      </div>
    </div>
  );
}
