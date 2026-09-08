import { furniture_product } from "@/src/data/furniture_product";

type Product = (typeof furniture_product)[number];

interface SelectOption {
  label: string;
  value: string;
}

export function getProductTypeOptions(products: Product[]): SelectOption[] {
  const unique = Array.from(new Set(products.map((p) => p.productType)));
  return unique.map((type) => ({ label: type, value: type }));
}

export function getCategoryOptions(products: Product[]): SelectOption[] {
  const unique = Array.from(new Set(products.flatMap((p) => p.category)));
  return unique.map((cat) => ({ label: cat, value: cat }));
}

export function getPriceOptions(products: Product[]): SelectOption[] {
  const prices = products
    .map((p) => p.price)
    .filter((p): p is number => typeof p === "number");
  if (prices.length === 0) return [];

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  if (min === max) {
    return [{ label: `RS ${min.toLocaleString()}`, value: `${min}-${max}` }];
  }

  const bucketCount = Math.min(4, prices.length);
  const bucketSize = Math.ceil((max - min) / bucketCount) || 1;
  const buckets: SelectOption[] = [];

  for (let i = 0; i < bucketCount; i++) {
    const bucketMin = min + i * bucketSize;
    const bucketMax = i === bucketCount - 1 ? max : bucketMin + bucketSize - 1;
    buckets.push({
      label: `RS ${bucketMin.toLocaleString()} - ${bucketMax.toLocaleString()}`,
      value: `${bucketMin}-${bucketMax}`,
    });
  }

  return buckets;
}

export function getRatingOptions(products: Product[]): SelectOption[] {
  const ratings = products
    .map((p) => p.rating)
    .filter((r): r is number => typeof r === "number");
  if (ratings.length === 0) return [];

  const thresholds = Array.from(
    new Set(ratings.map((r) => Math.floor(r * 2) / 2)),
  ).sort((a, b) => b - a);

  return thresholds.map((t) => ({ label: `${t} & above`, value: `${t}` }));
}

export function getProductSearchOptions(
  products: Product[],
  productType?: string,
) {
  const productTypes = getProductTypeOptions(products);

  if (!productType) {
    return {
      productTypes,
      categories: [] as SelectOption[],
      priceOptions: [] as SelectOption[],
      ratingOptions: [] as SelectOption[],
    };
  }

  const scoped = products.filter((p) => p.productType === productType);

  return {
    productTypes,
    categories: getCategoryOptions(scoped),
    priceOptions: getPriceOptions(scoped),
    ratingOptions: getRatingOptions(scoped),
  };
}
