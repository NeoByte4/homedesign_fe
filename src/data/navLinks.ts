import { routes } from "../lib/routes";
import { furniture_product } from "../data/furniture_product";
import { getUniqueValues } from "../utils/get-product-categories";

export type NavLink = {
  name: string;
  href: string;
  subPages?: {
    name: string;
    slug: string;
  }[];
};

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: routes.home,
  },

  {
    name: "Home Design",
    href: routes.HomeDesign,
  },

  {
    name: "Furniture",
    href: routes.furniture,

    subPages: getUniqueValues(furniture_product, "productType").map(
      (productType) => ({
        name: String(productType),
        slug: String(productType).toLowerCase().replace(/\s+/g, "-"),
      }),
    ),
  },

  {
    name: "Custom Design",
    href: routes.CustomDesign,
  },

  {
    name: "About Us",
    href: routes.AboutUs,
  },
];
