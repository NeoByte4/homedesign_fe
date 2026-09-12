import { z } from "zod";

/* --------------------------------------------------------------------------
   Constants
-------------------------------------------------------------------------- */

export const PRICE_MIN = 0;
export const PRICE_MAX = 200000;

export const SORT_BY_VALUES = [
  "recommended",
  "price-asc",
  "price-desc",
  "name-asc",
  "newest",
] as const;

export type SortBy = (typeof SORT_BY_VALUES)[number];

/* --------------------------------------------------------------------------
   Schema
-------------------------------------------------------------------------- */

export const filterFormSchema = z
  .object({
    keyword: z.string(),
    category: z.string(),
    productTypes: z.array(z.string()),
    materials: z.array(z.string()),
    colors: z.array(z.string()),
    usageAreas: z.array(z.string()),
    minPrice: z.coerce.number().min(PRICE_MIN).max(PRICE_MAX),
    maxPrice: z.coerce.number().min(PRICE_MIN).max(PRICE_MAX),
    sortBy: z.enum(SORT_BY_VALUES),
    inStockOnly: z.boolean(),
    customizableOnly: z.boolean(),
  })
  .refine((data) => data.maxPrice >= data.minPrice, {
    message: "Max price must be greater than or equal to min price",
    path: ["maxPrice"],
  });

/* --------------------------------------------------------------------------
   Types
-------------------------------------------------------------------------- */

/** What RHF manages internally (pre-coercion). */
export type IFilterFormInput = z.input<typeof filterFormSchema>;

/** What the resolver produces after validation (minPrice/maxPrice are numbers). */
export type IFilterFormOutput = z.output<typeof filterFormSchema>;

/* --------------------------------------------------------------------------
   Defaults
-------------------------------------------------------------------------- */

export const filterFormDefaults: IFilterFormInput = {
  keyword: "",
  category: "",
  productTypes: [],
  materials: [],
  colors: [],
  usageAreas: [],
  minPrice: PRICE_MIN,
  maxPrice: PRICE_MAX,
  sortBy: "recommended",
  inStockOnly: false,
  customizableOnly: false,
};

/* --------------------------------------------------------------------------
   URL <-> Form helpers (shared by client & server)
-------------------------------------------------------------------------- */

/**
 * Parse a `URLSearchParams` object into form-shaped values.
 * Used both for hydrating the form from the URL and for validating
 * incoming query params on the server.
 */
export function parseFilterSearchParams(
  searchParams: URLSearchParams | ReadonlyURLSearchParamsLike,
): IFilterFormInput {
  const getArray = (key: string) =>
    searchParams
      .getAll(key)
      .flatMap((v) => v.split(","))
      .filter(Boolean);

  const get = (key: string) => searchParams.get(key);

  return {
    keyword: get("keyword") ?? "",
    category: get("category") ?? "",
    productTypes: getArray("productTypes"),
    materials: getArray("materials"),
    colors: getArray("colors"),
    usageAreas: getArray("usageAreas"),
    minPrice: Number(get("minPrice") ?? PRICE_MIN),
    maxPrice: Number(get("maxPrice") ?? PRICE_MAX),
    sortBy: (get("sortBy") as SortBy) ?? "recommended",
    inStockOnly: get("inStockOnly") === "true",
    customizableOnly: get("customizableOnly") === "true",
  };
}

/** Minimal shape Next.js `ReadonlyURLSearchParams` shares with `URLSearchParams`. */
interface ReadonlyURLSearchParamsLike {
  getAll(key: string): string[];
  get(key: string): string | null;
}

/**
 * Serialize validated form values into a `URLSearchParams` object,
 * omitting anything that matches the default so URLs stay clean.
 */
export function buildFilterSearchParams(
  values: IFilterFormOutput,
): URLSearchParams {
  const params = new URLSearchParams();

  if (values.keyword) params.set("keyword", values.keyword);
  if (values.category) params.set("category", values.category);

  if (values.productTypes?.length)
    params.set("productTypes", values.productTypes.join(","));
  if (values.materials?.length)
    params.set("materials", values.materials.join(","));
  if (values.colors?.length) params.set("colors", values.colors.join(","));
  if (values.usageAreas?.length)
    params.set("usageAreas", values.usageAreas.join(","));

  if (values.minPrice > PRICE_MIN)
    params.set("minPrice", String(values.minPrice));
  if (values.maxPrice < PRICE_MAX)
    params.set("maxPrice", String(values.maxPrice));

  if (values.sortBy !== "recommended") params.set("sortBy", values.sortBy);
  if (values.inStockOnly) params.set("inStockOnly", "true");
  if (values.customizableOnly) params.set("customizableOnly", "true");

  return params;
}
