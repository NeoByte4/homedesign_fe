import Image from "next/image";
import React from "react";

import Link from "next/link";
import HeadingText from "@/src/components/ui/heading-text";
import StyledButton from "@/src/components/ui/styled-button";

interface props {
  title: string;
  description: string;
  image: string;
  ctaTitle?: string;
  ctaHref?: string;
  lineClamp?: boolean;
}

const ImageCard: React.FC<props> = ({
  title,
  description,
  image,
  ctaTitle,
  ctaHref,
  lineClamp = true,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden w-full aspect-square h-full group/card">
      <Image
        width={450}
        height={450}
        src={image}
        className="w-full h-full object-cover"
        alt={`Image for ${title}`}
      />

      <div className="absolute inset-0 bg-black/30 p-3 flex flex-col justify-end">
        <div className="h-fit bg-black/30 backdrop-blur-xl transition-all rounded-lg p-4">
          <HeadingText level={0} heading={3} className="text-bg mb-2">
            {title}
          </HeadingText>

          <p
            className={`text-primary-foreground/85 ${lineClamp ? "line-clamp-2" : ""}`}
          >
            {description}
          </p>

          {ctaHref && (
            <div className="flex justify-end mt-4">
              <Link href={ctaHref}>
                <StyledButton variant="secondary">{ctaTitle}</StyledButton>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
