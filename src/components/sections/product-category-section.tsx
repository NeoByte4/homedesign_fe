import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IFurnitureProductType } from "@/src/types/types";
import ContainerLayout from "../layouts/container-layout";
import TitleContentBlock from "../contents/title-content-block";
import { routes } from "@/src/lib/routes";
import ImageCard from "../cards/product/product-category/image-card";

interface Props {
  subtitle: string;
  title: string;
  description: string;
  data: IFurnitureProductType[];
}

const ProductCategorySection: React.FC<Props> = ({
  subtitle,
  title,
  description,
  data,
}) => {
  const activeData = data.filter((item) => item.is_active);

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
            {activeData.map((item) => (
              <CarouselItem key={item.id} className="max-h-96">
                <ImageCard
                  image={item.image_url?.[0]?.url ?? "/placeholder.jpg"}
                  title={item.name}
                  description={item.meta_description ?? ""}
                  ctaHref={`${routes.furniture}?productType=${item.slug}`}
                  ctaTitle="explore"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {activeData.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-2 bottom-1/2 -translate-y-1/2 z-10 size-8 [&_svg]:size-4" />

              <CarouselNext className="absolute right-2 bottom-1/2 -translate-y-1/2 z-10 size-8 [&_svg]:size-4" />
            </>
          )}
        </Carousel>
      </ContainerLayout>
    </>
  );
};

export default ProductCategorySection;
