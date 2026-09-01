import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContainerLayout from "../layouts/container-layout";
import TitleContentBlock from "../contents/title-content-block";
import { routes } from "../../lib/routes";

export interface BrandItem {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface BrandShowcaseProps {
  title: string;
  subtitle?: string;
  brands: BrandItem[];
  disclaimer?: string;
  disclaimerLinkLabel?: string;
}

const BrandShowcase: React.FC<BrandShowcaseProps> = ({
  title,
  subtitle,
  brands,
  disclaimer = "Some exclusions apply.",
  disclaimerLinkLabel = "Click here",
}) => {
  return (
    <>
      <ContainerLayout className="mb-8">
        <TitleContentBlock
          isCenter={false}
          description={subtitle}
          title={title}
        />
      </ContainerLayout>

      <ContainerLayout>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="-ml-3">
            {brands.map((brand) => (
              <CarouselItem
                key={brand.id}
                className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8"
              >
                <Link
                  href={`/brands/${brand.slug}`}
                  className="relative block w-full aspect-[3/4] overflow-hidden rounded-sm group"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 768px) 33vw, 12vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/70 to-transparent" />
                  <span className="absolute top-2.5 left-0 right-0 text-center px-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                      {brand.name}
                    </span>
                  </span>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {brands.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 size-8 [&_svg]:size-4" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 size-8 [&_svg]:size-4" />
            </>
          )}
        </Carousel>

        <p className="text-center text-sm text-neutral-700 mt-4">
          {disclaimer}{" "}
          <Link href={routes.products} className="underline hover:no-underline">
            {disclaimerLinkLabel}
          </Link>{" "}
          for details
        </p>
      </ContainerLayout>
    </>
  );
};

export default BrandShowcase;
