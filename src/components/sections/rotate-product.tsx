import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContainerLayout from "../layouts/container-layout";
import TitleContentBlock from "../contents/title-content-block";
import StyledButton from "../ui/styled-button";
import { routes } from "@/src/lib/routes";

interface props {
  subtitle?: string;
  title: string;
  image: string;
  description?: string | React.ReactNode;
}

const RotateProduct: React.FC<props> = ({
  subtitle,
  title,
  description,
  image,
}) => {
  return (
    <ContainerLayout className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="rounded-xl overflow-hidden order-2 md:order-1">
        <Image
          alt="About Prestige"
          src={image}
          width={600}
          height={438}
          className="w-full h-[438px] object-cover"
        />
      </div>

      <div className="order-1 md:order-2">
        <TitleContentBlock
          subtitle={subtitle}
          title={title}
          description={description}
        />

        <Link className="block mt-10" href={routes.products}>
          <StyledButton>Discover Prestige</StyledButton>
        </Link>
      </div>
    </ContainerLayout>
  );
};

export default RotateProduct;
