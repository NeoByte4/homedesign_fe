import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { routes } from "@/src/lib/routes";
import { siteDetails } from "@/src/data/site-details";
import { furniture_product } from "@/src/data/furniture_product";
import { Ifurniture_product } from "@/src/types/types";
import ProductStatic from "./product-static";

function fetchProduct(slug: string): Ifurniture_product | null {
  return furniture_product.find((product) => product.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = fetchProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const title = `${product.name} ~ ${siteDetails.site_title}`;
  const description = `${product.subtitle} Shop this product today.`;
  const url = `${siteDetails.SITE_URL}${routes.furniture}/${slug}`;
  const imageUrl = product.images_url?.[0]?.url ?? "";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteDetails.site_title,
      images: [
        {
          url: imageUrl,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const product = fetchProduct(slug);

  if (!product) notFound();

  return <ProductStatic product={product} />;
};

export default Page;
