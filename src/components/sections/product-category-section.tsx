import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ifurniture_product } from "@/src/types/types";
import ContainerLayout from "../layouts/container-layout";
import TitleContentBlock from "../contents/title-content-block";
import { routes } from "@/src/lib/routes";
import ImageCard from "../cards/product/product-category/image-card";

interface Props {
  subtitle: string;
  title: string;
  description: string;
  data: Ifurniture_product[];
}

const ProductCategorySection: React.FC<Props> = ({
  subtitle,
  title,
  description,
  data,
}) => {
  return (
    <>
      <ContainerLayout className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <TitleContentBlock
          subtitle={subtitle}
          title={title}
          description={description}
        />

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="">
            {data.map((item) => (
              <CarouselItem key={item.id} className="max-h-96">
                <ImageCard
                  image={item.images_url[0].url}
                  title={item.name}
                  description={item?.subtitle ?? ""}
                  ctaHref={`${routes.products}/${item.id}`}
                  ctaTitle="Learn More"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {data.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-2 bottom-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-2 bottom-1/2 -translate-y-1/2 z-10" />
            </>
          )}
        </Carousel>
      </ContainerLayout>
    </>
  );
};

export default ProductCategorySection;
