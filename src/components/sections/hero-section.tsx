import React from "react";
import Image from "next/image";
import ContainerLayout from "../layouts/container-layout";
import { IBannerData } from "@/src/types/types";

interface Props {
  id?: IBannerData["id"];
  title?: IBannerData["title"];
  subtitle?: IBannerData["subtitle"];
  video_url?: IBannerData["video_url"];
  image_url?: IBannerData["image_url"];
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
  overlayOpacity?: "light" | "medium" | "dark";
  height?: "small" | "medium" | "large";
}

const HeroSection: React.FC<Props> = ({
  imageAlt = "Hero background",
  title,
  subtitle,
  video_url,
  image_url,
  children,
  className = "",
  overlayOpacity = "medium",
  height = "medium",
}) => {
  const overlayClasses = {
    light: "bg-black/20",
    medium: "bg-black/45",
    dark: "bg-black/60",
  };

  const heightClasses = {
    small: children ? "h-[50vh] md:h-[60vh]" : "h-[30vh] md:h-[35vh]",
    medium: children ? "h-[50vh] md:h-[75vh]" : "h-[50vh] md:h-[60vh]",
    large: children ? "h-[65vh] md:h-[90vh]" : "h-[60vh] md:h-[70vh]",
  };

  const hasVideo = !!video_url;
  const hasImage = !!image_url;

  return (
    <ContainerLayout className={`pt-4 md:pt-0 ${className}`}>
      <section
        className={`relative w-full ${heightClasses[height]} max-h-[725px] rounded-lg overflow-hidden`}
      >
        {hasVideo ? (
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : hasImage ? (
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <Image
              src={image_url}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              quality={80}
            />
          </div>
        ) : (
          <div className="absolute inset-0">
            <Image
              src="/images/hero-placeholder.jpg"
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              quality={80}
            />
          </div>
        )}
        <div
          className={`absolute inset-0 ${overlayClasses[overlayOpacity]} rounded-lg`}
        />
        <div
          className={`relative z-50 h-full flex flex-col ${
            height === "large" ? "pt-32" : "justify-center"
          }`}
        >
          <ContainerLayout size="sm" className="text-center">
            {title && (
              <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight font-secondary max-w-4xl mx-auto">
                {title}
              </h1>
            )}

            {subtitle && (
              <div className="text-white/90 text-base sm:text-lg md:text-xl font-normal mb-8 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </div>
            )}
          </ContainerLayout>
        </div>

        {children}
      </section>
    </ContainerLayout>
  );
};

export default HeroSection;
