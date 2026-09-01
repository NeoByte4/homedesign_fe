import { Ifurniture_product } from "../types/types";

export const furniture_product: Ifurniture_product[] = [
  {
    id: "sofa-001",
    name: "Mid-Century Modern Sofa",
    category: ["Sofas", "Living Room", "Seating"],
    subtitle: "Elegant 3-seater with tapered legs",
    rating: 4.5,
    inclusion_icons: ["setup", "delivery", "servicing"],
    images_url: [
      {
        id: "img-sofa-001-1",
        url: "/images/Retreat-101(1+2+2).png",
      },
      {
        id: "img-sofa-001-2",
        url: "/images/products/mid-century-sofa-1.webp",
      },
      {
        id: "img-sofa-001-3",
        url: "/images/products/mid-century-sofa-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-sofa-001",
        url: "/videos/products/mid-century-sofa.mp4",
      },
    ],
    price_range: "RS: 1,299 - 1,599",
    price: 1399,
    discount: 15,

    color: [
      {
        id: "color-004",
        name: "Teal",
        color_code: "#008080",
      },
      {
        id: "color-005",
        name: "Mustard Yellow",
        color_code: "#E1AD01",
      },
      {
        id: "color-006",
        name: "Navy Blue",
        color_code: "#000080",
      },
    ],

    fabric: [
      {
        id: "fabric-003",
        name: "Wool Blend",
        image_url: {
          id: "fabric-img-003",
          url: "/images/fabrics/wool-blend.jpg",
        },
      },
      {
        id: "fabric-004",
        name: "Cotton Canvas",
        image_url: {
          id: "fabric-img-004",
          url: "/images/fabrics/cotton-canvas.jpg",
        },
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Elevate your living room with this timeless mid-century modern sofa that combines style and comfort.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Crafted with a sturdy wooden frame and premium upholstery, this sofa features deep seating and plush cushions that provide exceptional comfort for everyday relaxation.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Solid wood frame with tapered legs",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "High-density foam cushions",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Removable and washable covers",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Seats up to 3 people comfortably",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    dimensions: [
      {
        name: "Standard",

        overall: {
          width: 84,
          depth: 35,
          height: 32,
          unit: "in",
        },

        seating: {
          width: 68,
          depth: 24,
          height: 18,
          unit: "in",
        },

        arm: {
          width: 6,
          depth: 35,
          height: 24,
          unit: "in",
        },

        seatHeight: {
          value: 18,
          unit: "in",
        },

        backFrame: {
          width: 68,
          unit: "in",
        },

        weightCapacity: {
          value: 750,
          unit: "lb",
        },

        weight: {
          value: 120,
          unit: "lb",
        },
      },
    ],
  },
  {
    id: "table-001",
    name: "Farmhouse Dining Table",
    category: ["Tables"],
    subtitle: "Solid wood dining table with cross base",
    inclusion_icons: ["setup", "delivery"],
    rating: 4.7,
    images_url: [
      {
        id: "img-table-001-1",
        url: "/images/products/farmhouse-table-1.webp",
      },
      {
        id: "img-table-001-2",
        url: "/images/products/farmhouse-table-2.webp",
      },
      {
        id: "img-table-001-3",
        url: "/images/products/farmhouse-table-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-table-001",
        url: "/videos/products/farmhouse-table.mp4",
      },
    ],
    price_range: "RS: 899 - 1,299",
    price: 999,
    discount: 10,

    color: [
      {
        id: "color-007",
        name: "Natural Oak",
        color_code: "#C49A6C",
      },
      {
        id: "color-008",
        name: "Weathered Gray",
        color_code: "#B0A8A0",
      },
      {
        id: "color-009",
        name: "Dark Walnut",
        color_code: "#5C4033",
      },
    ],

    fabric: [
      {
        id: "fabric-005",
        name: "Solid Wood",
        image_url: {
          id: "fabric-img-005",
          url: "/images/fabrics/solid-wood.jpg",
        },
      },
      {
        id: "fabric-006",
        name: "Reclaimed Wood",
        image_url: {
          id: "fabric-img-006",
          url: "/images/fabrics/reclaimed-wood.jpg",
        },
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Bring warmth and character to your dining space with this beautifully crafted rustic farmhouse table.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Made from premium solid wood with a sturdy cross-base design, this table offers both durability and timeless style for family gatherings and dinner parties.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Solid hardwood construction",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Cross-base design for stability",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Seats 6-8 people",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Sustainable wood sourcing",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    dimensions: [
      {
        name: "Standard",

        overall: {
          width: 78,
          depth: 40,
          height: 30,
          unit: "in",
        },

        seating: {
          width: 0,
          depth: 0,
          height: 0,
          unit: "in",
        },

        arm: {
          width: 0,
          depth: 0,
          height: 0,
          unit: "in",
        },

        seatHeight: {
          value: 0,
          unit: "in",
        },

        backFrame: {
          width: 0,
          unit: "in",
        },

        weightCapacity: {
          value: 500,
          unit: "lb",
        },

        weight: {
          value: 110,
          unit: "lb",
        },
      },
    ],
  },
  {
    id: "bed-001",
    name: "Upholstered Platform Bed",
    category: ["Beds"],
    subtitle: "Modern headboard with button tufting",
    inclusion_icons: ["delivery", "servicing"],
    rating: 4.6,
    images_url: [
      {
        id: "img-bed-001-1",
        url: "/images/products/platform-bed-1.webp",
      },
      {
        id: "img-bed-001-2",
        url: "/images/products/platform-bed-2.webp",
      },
      {
        id: "img-bed-001-3",
        url: "/images/products/platform-bed-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-bed-001",
        url: "/videos/products/platform-bed.mp4",
      },
    ],
    price_range: "RS: 1,499 - 2,199",
    price: 1799,
    discount: 12,

    color: [
      {
        id: "color-010",
        name: "Blush Pink",
        color_code: "#FFB6C1",
      },
      {
        id: "color-011",
        name: "Slate Gray",
        color_code: "#708090",
      },
      {
        id: "color-012",
        name: "Cream Beige",
        color_code: "#F5F5DC",
      },
    ],

    fabric: [
      {
        id: "fabric-007",
        name: "Velvet",
        image_url: {
          id: "fabric-img-007",
          url: "/images/fabrics/velvet-bed.jpg",
        },
      },
      {
        id: "fabric-008",
        name: "Linen Blend",
        image_url: {
          id: "fabric-img-008",
          url: "/images/fabrics/linen-blend.jpg",
        },
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Transform your bedroom into a luxurious retreat with this elegantly upholstered platform bed.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Featuring a plush button-tufted headboard and sturdy wooden slats, this bed combines sophisticated design with practical functionality for a restful night's sleep.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Button-tufted headboard",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Wooden slat support system",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "No box spring needed",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Available in Queen and King sizes",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    dimensions: [
      {
        name: "Queen",

        overall: {
          width: 62,
          depth: 84,
          height: 48,
          unit: "in",
        },

        seating: {
          width: 0,
          depth: 0,
          height: 0,
          unit: "in",
        },

        arm: {
          width: 0,
          depth: 0,
          height: 0,
          unit: "in",
        },

        seatHeight: {
          value: 0,
          unit: "in",
        },

        backFrame: {
          width: 0,
          unit: "in",
        },

        weightCapacity: {
          value: 600,
          unit: "lb",
        },

        weight: {
          value: 150,
          unit: "lb",
        },
      },
    ],
  },

  {
    id: "chair-002",
    name: "Ergonomic Office Chair",
    category: ["Office Chairs"],
    subtitle: "Adjustable mesh back with lumbar support",
    inclusion_icons: ["setup", "servicing"],
    rating: 4.8,
    images_url: [
      {
        id: "img-chair-002-1",
        url: "/images/products/office-chair-1.webp",
      },
      {
        id: "img-chair-002-2",
        url: "/images/products/office-chair-2.webp",
      },
      {
        id: "img-chair-002-3",
        url: "/images/products/office-chair-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-chair-002",
        url: "/videos/products/office-chair.mp4",
      },
    ],
    price_range: "RS: 349 - 499  ",
    price: 399,
    discount: 20,

    color: [
      {
        id: "color-013",
        name: "Black Mesh",
        color_code: "#2C2C2C",
      },
      {
        id: "color-014",
        name: "Charcoal",
        color_code: "#36454F",
      },
      {
        id: "color-015",
        name: "Blue",
        color_code: "#4A7B9D",
      },
    ],

    fabric: [
      {
        id: "fabric-009",
        name: "Breathable Mesh",
        image_url: {
          id: "fabric-img-009",
          url: "/images/fabrics/breathable-mesh.jpg",
        },
      },
      {
        id: "fabric-010",
        name: "Leatherette",
        image_url: {
          id: "fabric-img-010",
          url: "/images/fabrics/leatherette.jpg",
        },
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Experience superior comfort and support with this fully adjustable ergonomic office chair.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Designed with breathable mesh back and adjustable lumbar support, this chair promotes healthy posture during long work hours. The multi-directional armrests and smooth-rolling casters add to its functionality.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Adjustable lumbar support",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Breathable mesh backrest",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "3D adjustable armrests",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Smooth-rolling casters",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    dimensions: [
      {
        name: "Standard",

        overall: {
          width: 28,
          depth: 28,
          height: 48,
          unit: "in",
        },

        seating: {
          width: 20,
          depth: 20,
          height: 20,
          unit: "in",
        },

        arm: {
          width: 3,
          depth: 10,
          height: 10,
          unit: "in",
        },

        swivelMechanism: {
          diameter: 27,
          unit: "in",
        },

        seatHeight: {
          value: 20,
          unit: "in",
        },

        backFrame: {
          width: 20,
          unit: "in",
        },

        weightCapacity: {
          value: 250,
          unit: "lb",
        },

        weight: {
          value: 45,
          unit: "lb",
        },
      },
    ],
  },
  {
    id: "table-002",
    name: "Minimalist Coffee Table",
    category: ["Tables"],
    subtitle: "Glass top with geometric metal base",
    inclusion_icons: ["setup", "delivery", "servicing"],
    rating: 4.4,
    images_url: [
      {
        id: "img-table-002-1",
        url: "/images/products/coffee-table-1.webp",
      },
      {
        id: "img-table-002-2",
        url: "/images/products/coffee-table-2.webp",
      },
      {
        id: "img-table-002-3",
        url: "/images/products/coffee-table-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-table-002",
        url: "/videos/products/coffee-table.mp4",
      },
    ],
    price_range: "RS: 429 - 599",
    price: 479,
    discount: 8,

    color: [
      {
        id: "color-016",
        name: "Clear Glass",
        color_code: "#E8E8E8",
      },
      {
        id: "color-017",
        name: "Black Frame",
        color_code: "#1A1A1A",
      },
      {
        id: "color-018",
        name: "Gold Frame",
        color_code: "#C5A059",
      },
    ],

    fabric: [
      {
        id: "fabric-011",
        name: "Tempered Glass",
        image_url: {
          id: "fabric-img-011",
          url: "/images/fabrics/tempered-glass.jpg",
        },
      },
      {
        id: "fabric-012",
        name: "Powder Coated Metal",
        image_url: {
          id: "fabric-img-012",
          url: "/images/fabrics/powder-coated-metal.jpg",
        },
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Add a touch of contemporary elegance to your living space with this minimalist coffee table.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "The combination of a clear tempered glass top and a geometric metal base creates a stunning visual statement while providing a practical surface for everyday use.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Tempered glass top for durability",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Geometric metal base design",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Easy to clean surface",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Contemporary design aesthetic",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    dimensions: [
      {
        name: "Standard",

        overall: {
          width: 48,
          depth: 24,
          height: 18,
          unit: "in",
        },

        seating: {
          width: 0,
          depth: 0,
          height: 0,
          unit: "in",
        },

        arm: {
          width: 0,
          depth: 0,
          height: 0,
          unit: "in",
        },

        seatHeight: {
          value: 0,
          unit: "in",
        },

        backFrame: {
          width: 0,
          unit: "in",
        },

        weightCapacity: {
          value: 100,
          unit: "lb",
        },

        weight: {
          value: 35,
          unit: "lb",
        },
      },
    ],
  },
  {
    id: "shelf-001",
    name: "Mid-Century Modern Bookshelf",
    category: ["Shelves & Storage"],
    subtitle: "Five-tier wooden shelf with hairpin legs",
    inclusion_icons: ["setup", "servicing"],
    rating: 4.3,
    images_url: [
      {
        id: "img-shelf-001-1",
        url: "/images/products/bookshelf-1.webp",
      },
      {
        id: "img-shelf-001-2",
        url: "/images/products/bookshelf-2.webp",
      },
      {
        id: "img-shelf-001-3",
        url: "/images/products/bookshelf-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-shelf-001",
        url: "/videos/products/bookshelf.mp4",
      },
    ],
    price_range: "RS: 299 - 399",
    price: 349,
    discount: 15,

    color: [
      {
        id: "color-019",
        name: "Walnut",
        color_code: "#5C3A21",
      },
      {
        id: "color-020",
        name: "White Oak",
        color_code: "#C4A882",
      },
      {
        id: "color-021",
        name: "Matte Black",
        color_code: "#1E1E1E",
      },
    ],

    fabric: [
      {
        id: "fabric-013",
        name: "Solid Wood",
        image_url: {
          id: "fabric-img-013",
          url: "/images/fabrics/solid-wood-shelf.jpg",
        },
      },
      {
        id: "fabric-014",
        name: "Engineered Wood with Veneer",
        image_url: {
          id: "fabric-img-014",
          url: "/images/fabrics/wood-veneer.jpg",
        },
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Display your favorite books, plants, and décor with this stylish mid-century modern bookshelf.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Featuring five spacious shelves supported by iconic hairpin legs, this piece brings retro charm to any room while offering ample storage and display space.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Five open shelves for versatile display",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Sturdy hairpin legs with non-slip caps",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Easy assembly with included hardware",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Each shelf supports up to 50 lbs",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    dimensions: [
      {
        name: "Standard",

        overall: {
          width: 36,
          depth: 14,
          height: 60,
          unit: "in",
        },

        seating: {
          width: 0,
          depth: 0,
          height: 0,
          unit: "in",
        },

        arm: {
          width: 0,
          depth: 0,
          height: 0,
          unit: "in",
        },

        seatHeight: {
          value: 0,
          unit: "in",
        },

        backFrame: {
          width: 0,
          unit: "in",
        },

        weightCapacity: {
          value: 250,
          unit: "lb",
        },

        weight: {
          value: 55,
          unit: "lb",
        },
      },
    ],
  },
  //  only domeeeyyyy
  {
    id: "bed-001",
    name: "Scandinavian Platform Bed",
    category: ["Beds", "Bedroom", "Furniture"],
    subtitle: "Minimalist queen bed with integrated storage",
    rating: 4.8,
    inclusion_icons: ["setup", "delivery", "servicing"],
    images_url: [
      {
        id: "img-bed-001-1",
        url: "/images/products/coffee-table-1.webp",
      },
      {
        id: "img-bed-001-2",
        url: "/images/beds/scandinavian-platform-2.webp",
      },
      {
        id: "img-bed-001-3",
        url: "/images/beds/scandinavian-platform-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-bed-001",
        url: "/videos/beds/scandinavian-platform.mp4",
      },
    ],
    price_range: "RS: 2,499 - 2,999",
    price: 2699,
    discount: 10,

    color: [
      {
        id: "color-007",
        name: "Natural Oak",
        color_code: "#C19A6B",
      },
      {
        id: "color-008",
        name: "Walnut",
        color_code: "#5C4033",
      },
      {
        id: "color-009",
        name: "White",
        color_code: "#FFFFFF",
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Bring a touch of Scandinavian simplicity to your bedroom with this elegant platform bed.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "The sturdy wooden frame offers exceptional durability, while the clean lines and warm tones create a calming ambiance perfect for restful sleep.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Solid wood construction with natural finish",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Built-in under-bed storage drawers",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Slatted base for mattress ventilation",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Requires no box spring",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "table-001",
    name: "Industrial Dining Table",
    category: ["Tables", "Dining Room", "Seating"],
    subtitle: "Rustic 6-seater with metal frame",
    rating: 4.6,
    inclusion_icons: ["delivery", "servicing"],
    images_url: [
      {
        id: "img-table-001-1",
        url: "/images/products/office-chair-1.webp",
      },
      {
        id: "img-table-001-2",
        url: "/images/tables/industrial-dining-2.webp",
      },
      {
        id: "img-table-001-3",
        url: "/images/tables/industrial-dining-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-table-001",
        url: "/videos/tables/industrial-dining.mp4",
      },
    ],
    price_range: "RS: 1,899 - 2,299",
    price: 2099,
    discount: 12,

    color: [
      {
        id: "color-010",
        name: "Rustic Brown",
        color_code: "#8B4513",
      },
      {
        id: "color-011",
        name: "Charcoal Black",
        color_code: "#36454F",
      },
      {
        id: "color-012",
        name: "Natural Wood",
        color_code: "#DEB887",
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Make a bold statement with this industrial dining table that blends rustic charm with modern design.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "The solid wood top paired with a robust metal base ensures durability, while the spacious surface comfortably seats six for family gatherings.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Thick solid wood top with natural grain",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Heavy-duty powder-coated metal frame",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Adjustable floor leveling feet",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Scratch-resistant protective finish",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "desk-001",
    name: "Minimalist Writing Desk",
    category: ["Desks", "Home Office", "Storage"],
    subtitle: "Compact workstation with floating shelves",
    rating: 4.7,
    inclusion_icons: ["setup", "delivery"],
    images_url: [
      {
        id: "img-desk-001-1",
        url: "/images/Retreat-101(1+2+2).png",
      },
      {
        id: "img-desk-001-2",
        url: "/images/desks/minimalist-desk-2.webp",
      },
      {
        id: "img-desk-001-3",
        url: "/images/desks/minimalist-desk-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-desk-001",
        url: "/videos/desks/minimalist-desk.mp4",
      },
    ],
    price_range: "RS: 1,099 - 1,399",
    price: 1199,
    discount: 15,

    color: [
      {
        id: "color-013",
        name: "Matte Black",
        color_code: "#2C2C2C",
      },
      {
        id: "color-014",
        name: "Birch White",
        color_code: "#F5F5DC",
      },
      {
        id: "color-015",
        name: "Graphite Gray",
        color_code: "#6B6B6B",
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Create an inspiring workspace with this minimalist desk designed for modern homes and small offices.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "The sleek design features a spacious work surface, integrated cable management, and floating shelves that keep essentials within reach while maintaining a clean aesthetic.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Engineered wood construction with durable coating",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Integrated shelf unit for storage and display",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Hidden cable tray for wire management",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Includes wall anchor for safety",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "shelf-001",
    name: "Modular Bookshelf",
    category: ["Shelving", "Storage", "Living Room"],
    subtitle: "Versatile 5-tier unit with adjustable shelves",
    rating: 4.4,
    inclusion_icons: ["delivery", "servicing"],
    images_url: [
      {
        id: "img-shelf-001-1",
        url: "/images/products/platform-bed-1.webp",
      },
      {
        id: "img-shelf-001-2",
        url: "/images/shelves/modular-bookshelf-2.webp",
      },
      {
        id: "img-shelf-001-3",
        url: "/images/shelves/modular-bookshelf-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-shelf-001",
        url: "/videos/shelves/modular-bookshelf.mp4",
      },
    ],
    price_range: "RS: 1,599 - 1,899",
    price: 1699,
    discount: 10,

    color: [
      {
        id: "color-016",
        name: "Espresso",
        color_code: "#3E2723",
      },
      {
        id: "color-017",
        name: "Chalk White",
        color_code: "#FDF5E6",
      },
      {
        id: "color-018",
        name: "Slate Gray",
        color_code: "#708090",
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Transform any room with this modular bookshelf that offers endless organization possibilities.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Featuring five spacious tiers with adjustable shelves, this unit adapts to your storage needs—perfect for books, decor, and collectibles.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "5-tier design with 4 adjustable shelves",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Sturdy construction with reinforced backing",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Wall attachment bracket for stability",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Versatile for living room, study, or bedroom",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "chair-001",
    name: "Ergonomic Office Chair",
    category: ["Chairs", "Home Office", "Seating"],
    subtitle: "Adjustable high-back with lumbar support",
    rating: 4.9,
    inclusion_icons: ["setup", "delivery", "servicing"],
    images_url: [
      {
        id: "img-chair-001-1",
        url: "/images/Retreat-101(1+2+2).png",
      },
      {
        id: "img-chair-001-2",
        url: "/images/chairs/ergonomic-chair-2.webp",
      },
      {
        id: "img-chair-001-3",
        url: "/images/chairs/ergonomic-chair-3.webp",
      },
    ],
    video_url: [
      {
        id: "video-chair-001",
        url: "/videos/chairs/ergonomic-chair.mp4",
      },
    ],
    price_range: "RS: 1,799 - 2,199",
    price: 1999,
    discount: 18,

    color: [
      {
        id: "color-019",
        name: "Black",
        color_code: "#1A1A1A",
      },
      {
        id: "color-020",
        name: "Gray",
        color_code: "#A9A9A9",
      },
      {
        id: "color-021",
        name: "Burgundy",
        color_code: "#800020",
      },
    ],

    description_content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Experience all-day comfort with this ergonomic office chair designed for long work sessions.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Featuring adjustable lumbar support, breathable mesh backrest, and multi-directional armrests, this chair promotes healthy posture while reducing fatigue.",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            level: 3,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Adjustable seat height and depth",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "360° swivel with smooth rolling casters",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Tilt-lock and tension control mechanism",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      text: "Built-in lumbar support with adjustable height",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
