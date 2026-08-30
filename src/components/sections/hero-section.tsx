import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Fade from "embla-carousel-fade";
import ContainerLayout from "../layouts/container-layout";
import { IHomePage } from "@/src/types/types";

interface Props {
  id?: IHomePage["id"];
  title?: IHomePage["title"];
  subtitle?: IHomePage["subtitle"];
  video_url?: IHomePage["video_url"];
  image_url?: IHomePage["image_url"];
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

  return (
    <ContainerLayout className={`pt-4 md:pt-0 ${className}`}>
      <section
        className={`relative w-full ${heightClasses[height]} max-h-[725px] rounded-lg`}
      >
        {image_url && image_url.length > 0 ? (
          <div className="absolute w-full inset-0 overflow-hidden rounded-lg">
            <Carousel
              opts={{
                loop: true,
                duration: 50,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
                Fade(),
              ]}
              className="w-full h-full"
            >
              <CarouselContent className="-ml-0">
                {image_url?.map((img, idx) => (
                  <CarouselItem
                    key={img.id}
                    className="relative h-full basis-full pl-0"
                  >
                    <Image
                      src={img.url}
                      alt={`Carousel image ${idx + 1} for ${title}`}
                      width={1920}
                      height={1080}
                      className="object-cover rounded-lg w-full h-full"
                      sizes="100vw"
                      quality={80}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ) : video_url ? (
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <video
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video_url.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <Image
            src={"/images/hero-placeholder.jpg"}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
            priority
            quality={80}
          />
        )}

        <div
          className={`absolute inset-0 ${overlayClasses[overlayOpacity]} rounded-lg`}
        />

        <div
          className={`relative z-50 h-full flex flex-col ${height === "large" ? "pt-32" : "justify-center"}`}
        >
          <ContainerLayout size="sm" className="text-center">
            <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight font-secondary max-w-4xl mx-auto">
              {title}
            </h1>

            {subtitle && (
              <div className="text-white/90 text-base sm:text-lg md:text-xl font-normal mb-8 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </div>
            )}

            {/* {ctaTitle && ctaHref && (
              <Link href={ctaHref} className="inline-block">
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  {ctaTitle}
                </Button>
              </Link>
            )} */}
          </ContainerLayout>
        </div>

        {children}
      </section>
    </ContainerLayout>
  );
};

export default HeroSection;
