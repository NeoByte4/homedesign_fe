"use client";
import { Ifurniture_product } from "@/src/types/types";
import ContainerLayout from "../layouts/container-layout";
import TitleContentBlock from "../contents/title-content-block";
import { routes } from "@/src/lib/routes";
import TopProductCard from "../cards/product/top-products/top-product";

const spanPatterns = [
  "sm:col-span-2 lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-2",
  "hidden sm:block sm:col-span-2 lg:col-span-1",
  "hidden sm:block lg:col-span-2",
  "hidden sm:block lg:col-span-2",
];

interface Props {
  subtitle: string;
  title: string;
  description: string;
  data: Ifurniture_product[];
}

const TopProductSection: React.FC<Props> = ({
  subtitle,
  title,
  description,
  data,
}) => {
  const products = data.slice(0, 6);

  return (
    <div>
      <ContainerLayout className="mb-8">
        <TitleContentBlock
          subtitle={subtitle}
          title={title}
          description={description}
          isCenter
        />
      </ContainerLayout>

      <ContainerLayout className="bg-surface-1 p-4 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 auto-rows-[340px]">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`w-full h-full ${spanPatterns[i]}`}
            >
              <TopProductCard
                location={product.name}
                image={product.images_url[0].url}
                href={`${routes.products}/${product.id}`}
              />
            </div>
          ))}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default TopProductSection;
