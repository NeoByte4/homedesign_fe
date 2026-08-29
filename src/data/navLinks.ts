import { routes } from "../lib/routes";

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
  { name: "Furniture", href: routes.furniture },
  {
    name: "Home Design",
    href: routes.HomeDesign,
  },
  {
    name: "Custom Design",
    href: routes.CustomDesign,
  },
  { name: "About Us", href: routes.AboutUs },
];
