import React from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Ribbon, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Ifurniture_product } from "@/src/types/types";
import { routes } from "@/src/lib/routes";
import HeadingText from "../../ui/heading-text";
import IconText from "../../primitives/icon-text";
import LocationsList from "../../primitives/locations-list";
import ServicesIcon from "../../primitives/services-icons-list";

interface Props {
  isPopular?: boolean;
  image: Ifurniture_product["images_url"][0]["url"];
  name: Ifurniture_product["name"];
  subtitle: Ifurniture_product["subtitle"];
  rating: Ifurniture_product["rating"];
  slug: Ifurniture_product["id"];
  discount: Ifurniture_product["discount"];
  price: Ifurniture_product["price"];
  category: Ifurniture_product["category"];
  price_range: Ifurniture_product["price_range"];
  inclusion_icons?: Ifurniture_product["inclusion_icons"];
}

const ProductCard: React.FC<Props> = ({
  image,
  name,
  price_range,
  subtitle,
  rating,
  inclusion_icons,
  slug,
  discount,
  price,
  category,
}) => {
  const shouldShowDiscount = discount != null && discount > 0;
  const discountAmount =
    price != null && shouldShowDiscount ? (price * discount) / 100 : 0;

  const netPrice = price != null ? price - discountAmount : undefined;
  return (
    <div className="bg-bg hover:bg-primary-dark/2 transition-all border shadow-xs rounded-lg p-2 relative flex flex-col h-full group/card">
      <div className="w-full aspect-[1/0.65] relative">
        {category && (
          <span className="absolute inset-3 text-xs font-secondary text-primary-dark bg-bg rounded-xl w-fit h-fit px-3 py-1.5 font-semibold capitalize">
            {category}
          </span>
        )}
        <Image
          src={image}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg"
          alt={`Image for ${name}`}
        />
      </div>

      <div className="p-1 flex flex-col justify-between mt-px h-full">
        <div className="">
          {/* <div className="flex items-center justify-between text-sm font-medium font-secondary my-2">
            <IconText
              icon={MapPin}
              text={destination ? destination : "World"}
            />
            <IconText icon={Star} text={`${rating}`} />
          </div> */}

          <Link
            href={`${routes.products}/${slug}`}
            className="block w-fit hover:underline mb-2 hover:text-primary-dark"
          >
            <HeadingText level={6} heading={3}>
              {name}
            </HeadingText>
          </Link>
          {subtitle && (
            <div
              className="line-clamp-2 text-text-secondary mb-3 text-sm"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
          <LocationsList
            className="mb-4 text-xs"
            iconSize={14}
            category={category ? category : []}
          />
        </div>

        <div className="">
          {/* pricing section */}
          <div className="grid grid-cols-2 border-y border-y-primary-dark border-dashed items-center">
            {/* cols 1 */}
            <div className="p-3 border-r border-r-primary-dark border-dashed">
              <p className="font-semibold">
                {price_range ? price_range : price}
              </p>

              <div className="flex items-center flex-wrap gap-1 text-text-secondary mt-2">
                <ServicesIcon inclusion_icons={inclusion_icons} />
              </div>
            </div>
            {/* cols 2 */}
            <div className="border-l border-l-primary-dark border-dashed p-3 pl-3">
              <p className="text-text-primary text-xs capitalize">
                Limited Time Offer
              </p>
              <p>
                <span className="inline-block font-bold font-secondary text-xl text-primary-dark">
                  {netPrice != null ? `${netPrice} RS` : price_range}
                </span>

                {shouldShowDiscount && (
                  <span className="inline-block text-text-secondary line-through font-semibold text-sm ml-1">
                    {typeof price === "number"
                      ? `RS: ${price.toFixed(2)}`
                      : price}
                  </span>
                )}
              </p>
              <p className="text-error text-xs capitalize">3 Days Left</p>
            </div>
          </div>
          <Button
            type="button"
            aria-label={`Add ${name} to cart`}
            className="w-full"
          >
            Add to Cart
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
