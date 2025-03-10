import { useState } from "react";
import ErrorImage from "@/assets/images/error.jpg";
import PlaceholderImage from "@/assets/images/placeholder.jpg";
import { clss } from "@/utils/clss";
import { TextImage, TextImageProps } from '@/components/TextImage';

interface ImageProps {
  src: string;
  alt: string;
  variant?: "video" | "square";
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  text?: TextImageProps;
}

export function Image({
  src,
  alt,
  variant = "video",
  width,
  height,
  priority = false,
  quality = 75,
  text,
}: Readonly<ImageProps>) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (priority) {
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = src;
    document.head.appendChild(preloadLink);
  }

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    console.error("Error load image:", src);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const generateSrcSet = () => {
    if (!width) return undefined;
    const sizes = [0.5, 1, 1.5, 2].map((scale) => Math.round(width * scale));
    return sizes
      .map((size) => `${src}?w=${size}&q=${quality} ${size}w`)
      .join(", ");
  };

  if (variant === "square") {
    return (
      <img
        src={hasError ? PlaceholderImage : src}
        srcSet={generateSrcSet()}
        alt={hasError ? "Error load image" : alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        className={clss(
          isLoading ? "hidden" : "block",
          "object-cover will-change-transform"
        )}
      />
    )
  }

  return (
    <div className="relative overflow-hidden aspect-video rounded-xl bg-gray-50 dark:bg-gray-950">
      {isLoading && !hasError && (
        <img
          src={PlaceholderImage}
          alt="Loading..."
          className="size-full"
          title="Loading image"
        />
      )}

      {!hasError && !isLoading && variant == "video" && <TextImage {...text} />}

      <img
        src={hasError ? PlaceholderImage : src}
        srcSet={generateSrcSet()}
        alt={hasError ? "Error load image" : alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        className={clss(
          isLoading ? "hidden" : "block",
          "absolute inset-0 size-full object-cover will-change-transform"
        )}
      />

      {hasError && (
        <div className="absolute inset-0">
          <img src={ErrorImage} alt="Error" title="Error" className="size-full" />
        </div>
      )}

      {!isLoading && !hasError && variant == "video" && <div className="pointer-events-none absolute inset-0 rounded-xl bg-gray-950/25 ring-1 ring-inset ring-gray-950/5 dark:ring-gray-50/10" />}
    </div>
  );
}
