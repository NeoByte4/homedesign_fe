import { notFound } from "next/navigation";
import { furniture_product } from "@/src/data/furniture_product";
import FurnitureStatic from "./furniture-static";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    tab?: string;
    keyword?: string;
  }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const paramsData = await searchParams;

  const productType = slug.toLowerCase();

  // Get all products for this furniture type
  const products = furniture_product.filter(
    (product) => product.productType.toLowerCase() === productType,
  );

  if (products.length === 0) {
    notFound();
  }

  const data = products[0];

  return (
    <FurnitureStatic
      data={data}
      products={products}
      tab={paramsData.tab ?? "overview"}
      slug={slug}
      searchParams={paramsData}
    />
  );
}
