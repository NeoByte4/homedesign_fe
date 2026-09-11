import React from "react";
import Link from "next/link";
import Image from "next/image";
import StyledButton from "../../ui/styled-button";
import HeadingText from "../../ui/heading-text";
import { ShoppingCart } from "lucide-react";

interface Props {
  name: string;
  image: string;
  href: string;
}

const FurnitureProductCard: React.FC<Props> = ({ name, image, href }) => {
  return (
    <div className="h-full overflow-hidden rounded-lg relative group/productCard">
      <Link aria-label={`Navigate to ${name} details page`} href={href}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
          quality={75}
        />

        <div className="absolute inset-0 p-3 bg-black/20 group-hover/productCard:bg-black/30 transition-all">
          <div className="flex h-full items-end justify-between">
            <HeadingText level={6} heading={3}>
              <StyledButton variant="secondary">{name}</StyledButton>
            </HeadingText>

            <StyledButton icon={ShoppingCart}></StyledButton>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default FurnitureProductCard;
