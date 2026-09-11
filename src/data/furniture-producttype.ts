import { IFurnitureProductType } from "../types/types";

export const FurnitureProductType: IFurnitureProductType[] = [
  {
    id: "type-001",
    name: "Sofa",
    slug: "sofa",
    image_url: [
      {
        id: "categories/sofa",
        url: "/images/Retreat-101(1+2+2).png",
      },
    ],
    is_active: true,
    sort_order: 1,
    meta_title: "Sofa Furniture",
    meta_description:
      "Explore our collection of stylish and comfortable sofas.",
    created_at: new Date(),
    updated_at: new Date(),
  },

  {
    id: "type-002",
    name: "Table",
    slug: "table",
    image_url: [
      {
        id: "categories/table",
        url: "/images/products/farmhouse-table-1.webp",
      },
    ],
    is_active: true,
    sort_order: 2,
    meta_title: "Table Furniture",
    meta_description:
      "Discover modern and durable tables for your home and office.",
    created_at: new Date(),
    updated_at: new Date(),
  },

  {
    id: "type-003",
    name: "Bed",
    slug: "bed",
    image_url: [
      {
        id: "categories/bed",
        url: "/images/products/platform-bed-1.webp",
      },
    ],
    is_active: true,
    sort_order: 3,
    meta_title: "Bed Furniture",
    meta_description: "Find comfortable and stylish beds for your bedroom.",
    created_at: new Date(),
    updated_at: new Date(),
  },

  {
    id: "type-005",
    name: "Bookshelf",
    slug: "bookshelf",
    image_url: [
      {
        id: "categories/bookshelf",
        url: "/images/products/bookshelf-1.webp",
      },
    ],
    is_active: true,
    sort_order: 5,
    meta_title: "Bookshelf Furniture",
    meta_description:
      "Organize your books and belongings with stylish bookshelves.",
    created_at: new Date(),
    updated_at: new Date(),
  },

  {
    id: "type-006",
    name: "Desk",
    slug: "desk",
    image_url: [
      {
        id: "categories/desk",
        url: "/images/Retreat-101(1+2+2).png",
      },
    ],
    is_active: true,
    sort_order: 6,
    meta_title: "Desk Furniture",
    meta_description: "Explore functional and modern desks for work and study.",
    created_at: new Date(),
    updated_at: new Date(),
  },
  // {
  //   id: "type-004",
  //   name: "writing desk",
  //   slug: "writing-desk",
  //   image_url: [
  //     {
  //       id: "categories/chair",
  //       url: "/images/products/office-chair-1.webp",
  //     },
  //   ],
  //   is_active: true,
  //   sort_order: 4,
  //   meta_title: "Chair Furniture",
  //   meta_description: "Browse comfortable and stylish chairs for every space.",
  //   created_at: new Date(),
  //   updated_at: new Date(),
  // },
];
