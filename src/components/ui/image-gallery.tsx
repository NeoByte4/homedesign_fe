"use client";

import Image from "next/image";

interface ImageGalleryProps {
  images: { id: string; url: string }[];
  productName: string;
  discount?: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const ImageGallery = ({
  images,
  productName,
  discount,
  selectedIndex,
  onSelect,
}: ImageGalleryProps) => {
  const heroImage =
    images[selectedIndex]?.url ?? images[0]?.url ?? "/placeholder.jpg";
  const shouldShowDiscount = discount != null && discount > 0;

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-lg aspect-[4/3] relative">
        <Image
          src={heroImage}
          width={500}
          height={500}
          alt={`Image for ${productName}`}
          className="w-full h-full object-cover"
          quality={75}
        />
        {shouldShowDiscount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => onSelect(idx)}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                selectedIndex === idx
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={img.url}
                width={64}
                height={64}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
