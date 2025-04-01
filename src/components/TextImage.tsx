import { Svg } from "@/components/Optimizing/Svg";

export interface TextImageProps {
  textTitle?: string | null;
  textLicense?: string | null;
  textVersion?: string | null;
  textCategory?: string | null;
}

export function TextImage({
  textTitle = "Untitled Project",
  textLicense = "No",
  textVersion = "Unknown",
  textCategory = "General",
}: Readonly<TextImageProps>) {
  return (
    <div className="absolute inset-0 z-10 size-full flex flex-col justify-center items-center gap-y-1 backdrop-blur-xs text-center">
      <h2 className="text-lg text-gray-200 font-semibold sm:text-xl lg:text-3xl">
        {textTitle}
      </h2>
      <p className="text-xs text-gray-300 font-medium sm:text-sm/7">
        Project Development
      </p>
      <div className="absolute bottom-4 flex items-center gap-x-2 [&_p]:text-[0.5rem] [&_p]:text-gray-400 sm:[&_p]:text-xs">
        <p>{textLicense} license</p>
        <Svg
          variant="custom"
          width={3}
          height={3}
          viewBox="0 0 2 2"
        >
          <circle r={1} cx={1} cy={1} />
        </Svg>
        <p>Version {textVersion}</p>
        <Svg
          variant="custom"
          width={3}
          height={3}
          viewBox="0 0 2 2"
        >
          <circle r={1} cx={1} cy={1} />
        </Svg>
        <p>{textCategory} development</p>
      </div>
    </div>
  );
}
