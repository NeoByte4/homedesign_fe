import React from "react";
import Link from "next/link";
import Image from "next/image";
import StyledButton from "../../ui/styled-button";
import { ShoppingCart } from "lucide-react";
import HeadingText from "../../ui/heading-text";

interface Props {
  location: string;
  image: string;
  href: string;
}

const TopProductCard: React.FC<Props> = ({ location, image, href }) => {
  return (
    <div className="h-full overflow-hidden rounded-lg relative group/destCard">
      <Link aria-label={`Navigate to ${location} details page`} href={href}>
        <Image
          src={image}
          alt={location}
          width={300}
          height={300}
          className="w-full h-full object-cover"
          quality={75}
        />

        <div className="absolute inset-0 p-3 bg-black/20 group-hover/destCard:bg-black/30 transition-all">
          <div className="flex h-full items-end justify-between">
            <HeadingText
              aria-label={`Navigate to ${location} details page`}
              level={6}
              heading={3}
            >
              <StyledButton variant="secondary" showIcon={false}>
                {location}
              </StyledButton>
            </HeadingText>

            <StyledButton icon={ShoppingCart} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopProductCard;
