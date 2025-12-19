"use client";

import { useState } from "react";

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

  // 如果出错，直接显示渐变背景
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

  // 直接使用img标签，因为Next.js静态导出时Image组件可能有问题
  const style = fill
    ? { position: "absolute" as const, inset: 0, width: "100%", height: "100%" }
    : { width: width || 800, height: height || 600 };

  return (
    <>
      {isLoading && (
        <div
          className={`${className} bg-slate-200 animate-pulse`}
          style={fill ? { position: "absolute", inset: 0 } : { width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300 ${fill ? "object-cover w-full h-full" : ""}`}
        style={style}
        loading={priority ? "eager" : (loading || "lazy")}
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
