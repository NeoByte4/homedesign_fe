import React from "react";
import Link from "next/link";
import { Ifurniture_product } from "@/src/types/types";
import ContainerLayout from "../layouts/container-layout";
import TitleContentBlock from "../contents/title-content-block";
import StyledButton from "../ui/styled-button";
import ProductCard from "../cards/product/product-card";

interface props {
  subtitle?: string;
  title: string;
  description: string;
  morePlansUrl: string;
  morePlansLabel?: string;
  data: Ifurniture_product[];
}

const ProductListSection: React.FC<props> = ({
  subtitle,
  title,
  description,
  morePlansUrl,
  morePlansLabel = "See More Tours",
  data,
}) => {
  return (
    <section className="">
      <ContainerLayout>
        <TitleContentBlock
          isCenter={true}
          subtitle={subtitle}
          title={title}
          description={description}
        />
      </ContainerLayout>

      <ContainerLayout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 mt-16 gap-y-10">
        {data.map((product) => (
          <div key={product.id} className="last:hidden xl:last:block">
            <ProductCard
              name={product.name}
              category={product.category}
              subtitle={product.subtitle}
              image={product.images_url[0].url}
              rating={product.rating}
              slug={product.id}
              discount={product.discount}
              price={product.price}
              price_range={product.price_range}
              isPopular={false}
              inclusion_icons={product.inclusion_icons}
            />
          </div>
        ))}
      </ContainerLayout>

      <ContainerLayout className="grid place-items-center mt-12">
        <Link href={morePlansUrl}>
          <StyledButton>{morePlansLabel}</StyledButton>
        </Link>
      </ContainerLayout>
    </section>
  );
};

export default ProductListSection;
