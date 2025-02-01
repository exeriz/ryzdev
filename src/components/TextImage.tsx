import { Svg } from "@/components/Optimizing/Svg";

export interface TextImageProps {
  textTitle?: string;
  textLicense?: string;
  textVersion?: string;
  textCategory?: string;
}

export function TextImage({
  textTitle,
  textLicense,
  textVersion,
  textCategory,
}: Readonly<TextImageProps>) {
  return (
    <div className="absolute inset-0 z-10 size-full flex flex-col justify-center items-center gap-y-1 backdrop-blur-xs text-center">
      <h3 className="text-lg text-gray-200 font-semibold sm:text-xl lg:text-3xl">
        {textTitle}
      </h3>
      <p className="text-sm text-gray-300 font-medium sm:text-base/7">
        Project Development
      </p>
      <div className="absolute bottom-4 flex items-center gap-x-2 [&_p]:text-xs [&_p]:text-gray-400">
        <p>{textLicense || "No "} license</p>
        <Svg
          variant="custom"
          width={3}
          height={3}
          viewBox="0 0 2 2"
          fill="#9ca3af"
        >
          <circle r={1} cx={1} cy={1} />
        </Svg>
        <p>Version {textVersion}</p>
        <Svg
          variant="custom"
          width={3}
          height={3}
          viewBox="0 0 2 2"
          fill="#9ca3af"
        >
          <circle r={1} cx={1} cy={1} />
        </Svg>
        <p>{textCategory} development</p>
      </div>
    </div>
  );
}
