"use client";

import { useState } from "react";
import Image from "next/image";

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  quality?: number;
  sizes?: string;
  fallbackGradient?: string;
}

export function SafeImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  priority = false,
  loading,
  quality = 85,
  sizes,
  fallbackGradient = "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div
        className={className}
        style={{
          background: fallbackGradient,
          ...(fill ? { position: "absolute", inset: 0 } : { width, height }),
        }}
        aria-label={alt}
      />
    );
  }

  const imageProps = fill
    ? {
        fill: true as const,
        sizes: sizes || "100vw",
      }
    : {
        width: width || 800,
        height: height || 600,
      };

  // Don't pass loading prop if priority is true
  const loadingProp = priority ? undefined : (loading || "lazy");

  return (
    <>
      {isLoading && (
        <div
          className={`${className} bg-slate-200 animate-pulse`}
          style={fill ? { position: "absolute", inset: 0 } : { width, height }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        priority={priority}
        {...(loadingProp && { loading: loadingProp })}
        quality={quality}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          console.warn(`Image failed to load: ${src}`);
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </>
  );
}
