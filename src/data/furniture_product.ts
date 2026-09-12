import { Ifurniture_product } from "../types/types";

export const furniture_product: Ifurniture_product[] = [
  {
    id: "sofa-001",
    name: "Mid-Century Modern Sofa",
    category: ["Sofas", "Living Room", "Seating"],
    subtitle: "Elegant 3-seater with tapered legs",
    productType: "sofa",
    slug: "sofa_12",
    short_description:
      "A timeless 3-seater sofa featuring solid wood tapered legs, high-density foam cushions, and premium upholstery. Perfect for modern and transitional living spaces.",
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
          attrs: { level: 3 },
          content: [{ type: "text", text: "Features" }],
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
                    { type: "text", text: "High-density foam cushions" },
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
                    { type: "text", text: "Removable and washable covers" },
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
                    { type: "text", text: "Seats up to 3 people comfortably" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    furniture_type_id: "ft-sofa-001",
    collection_id: "col-mid-century-2024",
    tags: ["mid-century", "modern", "3-seater", "living-room", "premium"],
    images_url: [
      { id: "img-sofa-001-1", url: "/images/Retreat-101(1+2+2).png" },
      { id: "img-sofa-001-2", url: "/images/products/mid-century-sofa-1.webp" },
      { id: "img-sofa-001-3", url: "/images/products/mid-century-sofa-3.webp" },
    ],
    video_url: [
      { id: "video-sofa-001", url: "/videos/products/mid-century-sofa.mp4" },
    ],
    inclusion_icons: ["Sectional Sofas"],
    model_3d_url: "/models/3d/mid-century-sofa.glb",
    price: 1399,
    compare_at_price: 1649,
    discount: 15,
    price_range: "RS: 1,299 - 1,599",
    price_range_structured: {
      minimum: 1299,
      maximum: 1599,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 24,
    has_variants: true,
    variants: [
      {
        sku: "SOF-MCM-TEAL-STD",
        variant_name: "Teal / Standard",
        color_id: "color-004",
        fabric_id: "fabric-003",
        size_code: "STD",
        price: 1399,
        compare_at_price: 1649,
        stock_quantity: 8,
        is_available: true,
        image: {
          id: "img-sofa-001-var-teal",
          url: "/images/products/mid-century-sofa-1.webp",
        },
        weight_kg: 45,
      },
      {
        sku: "SOF-MCM-MUSTARD-STD",
        variant_name: "Mustard Yellow / Standard",
        color_id: "color-005",
        fabric_id: "fabric-004",
        size_code: "STD",
        price: 1399,
        compare_at_price: 1649,
        stock_quantity: 10,
        is_available: true,
        image: {
          id: "img-sofa-001-var-mustard",
          url: "/images/products/mid-century-sofa-1.webp",
        },
        weight_kg: 45,
      },
      {
        sku: "SOF-MCM-NAVY-STD",
        variant_name: "Navy Blue / Standard",
        color_id: "color-006",
        fabric_id: "fabric-003",
        size_code: "STD",
        price: 1399,
        compare_at_price: 1649,
        stock_quantity: 6,
        is_available: true,
        image: {
          id: "img-sofa-001-var-navy",
          url: "/images/products/mid-century-sofa-3.webp",
        },
        weight_kg: 45,
      },
    ],
    color: [
      { id: "color-004", name: "Teal", color_code: "#008080" },
      { id: "color-005", name: "Mustard Yellow", color_code: "#E1AD01" },
      { id: "color-006", name: "Navy Blue", color_code: "#000080" },
    ],
    color_options: [
      {
        id: "color-004",
        name: "Teal",
        color_code: "#008080",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-005",
        name: "Mustard Yellow",
        color_code: "#E1AD01",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-006",
        name: "Navy Blue",
        color_code: "#000080",
        is_active: true,
        sort_order: 3,
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
    materials: [
      {
        id: "mat-001",
        category: "Frame",
        name: "Solid Beech Wood",
        subtype: "Hardwood",
        description:
          "Kiln-dried solid beech wood frame for durability and stability",
        properties: ["Durable", "Sustainable", "Insect-resistant"],
      },
      {
        id: "mat-002",
        category: "Upholstery",
        name: "Premium Wool Blend",
        subtype: "Fabric",
        description: "60% wool, 40% polyester blend for softness and longevity",
        properties: ["Stain-resistant", "Breathable", "Soft-touch"],
      },
      {
        id: "mat-003",
        category: "Cushion",
        name: "High-Density Foam",
        subtype: "Polyurethane",
        description: "35 density foam with memory foam top layer",
        properties: ["Shape-retaining", "Comfortable", "Hypoallergenic"],
      },
    ],
    size_options: [
      {
        name: "Standard",
        code: "STD",
        dimensions: {
          name: "Standard",
          width: 84,
          depth: 35,
          height: 32,
          seat_width: 68,
          seat_depth: 24,
          seat_height: 18,
          armrest_height: 24,
          backrest_height: 68,
          unit: { name: "Inches", code: "in" },
        },
        description: "Standard 3-seater configuration",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Seating Capacity",
        value: 3,
        unit: "people",
        description: "Comfortably seats 3 adults",
      },
    ],
    dimensions: [
      {
        name: "Standard",
        width: 84,
        depth: 35,
        height: 32,
        seat_width: 68,
        seat_depth: 24,
        seat_height: 18,
        armrest_height: 24,
        backrest_height: 68,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-001",
        name: "Solid Wood Frame",
        description:
          "Kiln-dried beech wood frame ensures long-lasting durability",
        icon: "tree",
      },
      {
        id: "feat-002",
        name: "Removable Covers",
        description: "Machine-washable covers for easy maintenance",
        icon: "wash",
      },
      {
        id: "feat-003",
        name: "Tapered Legs",
        description: "Iconic mid-century tapered wooden legs",
        icon: "leg",
      },
      {
        id: "feat-004",
        name: "High-Density Foam",
        description: "35-density foam cushions retain shape over time",
        icon: "comfort",
      },
    ],
    seating_capacity: [3],
    weight_capacity_kg: 300,
    environment: ["indoor"],
    is_customizable: true,
    assembly_required: true,
    assembly_estimated_minutes: 15,
    is_adjustable: false,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 5,
      unit: "year",
      description:
        "5-year limited warranty covering frame and manufacturing defects",
    },
    care_instructions: [
      "Vacuum regularly with upholstery attachment",
      "Spot clean with mild detergent and water",
      "Professional cleaning recommended every 12 months",
      "Avoid direct sunlight to prevent fading",
    ],
    maintenance_instructions: [
      "Tighten leg bolts every 6 months",
      "Rotate cushions weekly for even wear",
      "Keep away from heat sources",
    ],
    faqs: [
      {
        title: "What material is used?",
        description:
          "The sofa is made from premium wool blend fabric and solid beech wood frame.",
      },
      {
        title: "Is delivery available?",
        description:
          "Yes, delivery is available within Kathmandu Valley. Free delivery for orders above RS 1,000.",
      },
      {
        title: "Can I customize the fabric?",
        description:
          "Yes, this sofa is customizable. Choose from our wool blend or cotton canvas options.",
      },
      {
        title: "Is assembly required?",
        description:
          "Minimal assembly is required. Legs need to be attached, which takes approximately 15 minutes.",
      },
    ],
    rating: 4.5,
    created_at: new Date("2024-01-15T08:00:00Z"),
    updated_at: new Date("2024-12-01T10:30:00Z"),
  },

  {
    id: "table-001",
    name: "Farmhouse Dining Table",
    category: ["Dining Tables"],
    productType: "table",
    slug: "table_1e",
    subtitle: "Solid wood dining table with cross base",
    short_description:
      "A beautifully crafted rustic farmhouse dining table made from premium solid wood with a sturdy cross-base design. Seats 6-8 people comfortably.",
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
          attrs: { level: 3 },
          content: [{ type: "text", text: "Features" }],
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
                    { type: "text", text: "Solid hardwood construction" },
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
                    { type: "text", text: "Cross-base design for stability" },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Seats 6-8 people" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", text: "Sustainable wood sourcing" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    furniture_type_id: "ft-table-001",
    collection_id: "col-farmhouse-2024",
    tags: ["farmhouse", "rustic", "dining", "solid-wood", "6-seater"],
    images_url: [
      { id: "img-table-001-1", url: "/images/products/farmhouse-table-1.webp" },
      { id: "img-table-001-2", url: "/images/products/farmhouse-table-2.webp" },
      { id: "img-table-001-3", url: "/images/products/farmhouse-table-3.webp" },
    ],
    video_url: [
      { id: "video-table-001", url: "/videos/products/farmhouse-table.mp4" },
    ],
    inclusion_icons: ["setup", "delivery"],
    model_3d_url: "/models/3d/farmhouse-table.glb",
    price: 999,
    compare_at_price: 1110,
    discount: 10,
    price_range: "RS: 899 - 1,299",
    price_range_structured: {
      minimum: 899,
      maximum: 1299,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 15,
    has_variants: true,
    variants: [
      {
        sku: "TBL-FRM-OAK-STD",
        variant_name: "Natural Oak / Standard",
        color_id: "color-007",
        fabric_id: "fabric-005",
        size_code: "STD",
        price: 999,
        compare_at_price: 1110,
        stock_quantity: 6,
        is_available: true,
        image: {
          id: "img-table-001-var-oak",
          url: "/images/products/farmhouse-table-1.webp",
        },
        weight_kg: 55,
      },
      {
        sku: "TBL-FRM-GRAY-STD",
        variant_name: "Weathered Gray / Standard",
        color_id: "color-008",
        fabric_id: "fabric-006",
        size_code: "STD",
        price: 999,
        compare_at_price: 1110,
        stock_quantity: 5,
        is_available: true,
        image: {
          id: "img-table-001-var-gray",
          url: "/images/products/farmhouse-table-2.webp",
        },
        weight_kg: 55,
      },
      {
        sku: "TBL-FRM-WALNUT-STD",
        variant_name: "Dark Walnut / Standard",
        color_id: "color-009",
        fabric_id: "fabric-005",
        size_code: "STD",
        price: 1099,
        compare_at_price: 1220,
        stock_quantity: 4,
        is_available: true,
        image: {
          id: "img-table-001-var-walnut",
          url: "/images/products/farmhouse-table-3.webp",
        },
        weight_kg: 55,
      },
    ],
    color: [
      { id: "color-007", name: "Natural Oak", color_code: "#C49A6C" },
      { id: "color-008", name: "Weathered Gray", color_code: "#B0A8A0" },
      { id: "color-009", name: "Dark Walnut", color_code: "#5C4033" },
    ],
    color_options: [
      {
        id: "color-007",
        name: "Natural Oak",
        color_code: "#C49A6C",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-008",
        name: "Weathered Gray",
        color_code: "#B0A8A0",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-009",
        name: "Dark Walnut",
        color_code: "#5C4033",
        is_active: true,
        sort_order: 3,
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
    materials: [
      {
        id: "mat-004",
        category: "Tabletop",
        name: "Solid Oak Wood",
        subtype: "Hardwood",
        description: "Premium kiln-dried oak with natural grain finish",
        properties: ["Scratch-resistant", "Durable", "Natural grain"],
      },
      {
        id: "mat-005",
        category: "Base",
        name: "Solid Pine Wood",
        subtype: "Softwood",
        description: "Reinforced pine cross-base for maximum stability",
        properties: ["Stable", "Lightweight", "Cost-effective"],
      },
    ],
    size_options: [
      {
        name: "Standard",
        code: "STD",
        dimensions: {
          name: "Standard",
          width: 78,
          depth: 40,
          height: 30,
          unit: { name: "Inches", code: "in" },
        },
        description: "Standard 6-8 seater dining table",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Seating Capacity",
        value: 8,
        unit: "people",
        description: "Comfortably seats 6-8 adults",
      },
    ],
    dimensions: [
      {
        name: "Standard",
        width: 78,
        depth: 40,
        height: 30,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-005",
        name: "Cross-Base Design",
        description: "Sturdy cross-base provides exceptional stability",
        icon: "structure",
      },
      {
        id: "feat-006",
        name: "Sustainable Wood",
        description: "Sourced from responsibly managed forests",
        icon: "leaf",
      },
      {
        id: "feat-007",
        name: "Natural Grain Finish",
        description: "Hand-finished to highlight natural wood grain",
        icon: "grain",
      },
    ],
    seating_capacity: [6, 8],
    weight_capacity_kg: 200,
    environment: ["indoor"],
    is_customizable: false,
    assembly_required: true,
    assembly_estimated_minutes: 20,
    is_adjustable: false,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 3,
      unit: "year",
      description: "3-year warranty against manufacturing defects",
    },
    care_instructions: [
      "Dust regularly with a soft dry cloth",
      "Use coasters to prevent water rings",
      "Apply wood conditioner every 6 months",
      "Avoid harsh chemicals and abrasives",
    ],
    maintenance_instructions: [
      "Tighten base bolts every 3 months",
      "Keep away from direct heat sources",
      "Use felt pads under decorative items",
    ],
    faqs: [
      {
        title: "What wood is used?",
        description:
          "The tabletop is made from solid oak wood, and the base is solid pine wood.",
      },
      {
        title: "Is assembly required?",
        description:
          "Yes, minimal assembly is required. The cross-base needs to be attached to the tabletop, taking about 20 minutes.",
      },
      {
        title: "Can I use it outdoors?",
        description:
          "This table is designed for indoor use. For outdoor use, we recommend applying a weatherproof sealant.",
      },
    ],
    rating: 4.7,
    created_at: new Date("2024-02-10T09:00:00Z"),
    updated_at: new Date("2024-11-28T14:20:00Z"),
  },

  {
    id: "bed-001",
    name: "Upholstered Platform Bed",
    productType: "bed",
    slug: "bed_hc",
    category: ["King Size Beds"],
    subtitle: "Modern headboard with button tufting",
    short_description:
      "A luxurious upholstered platform bed featuring a plush button-tufted headboard and sturdy wooden slat support system. No box spring needed.",
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
          attrs: { level: 3 },
          content: [{ type: "text", text: "Features" }],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Button-tufted headboard" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", text: "Wooden slat support system" },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "No box spring needed" }],
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
    furniture_type_id: "ft-bed-001",
    collection_id: "col-upholstered-2024",
    tags: ["upholstered", "platform-bed", "modern", "tufted", "king-size"],
    images_url: [
      { id: "img-bed-001-1", url: "/images/products/platform-bed-1.webp" },
      { id: "img-bed-001-2", url: "/images/products/platform-bed-2.webp" },
      { id: "img-bed-001-3", url: "/images/products/platform-bed-3.webp" },
    ],
    video_url: [
      { id: "video-bed-001", url: "/videos/products/platform-bed.mp4" },
    ],
    inclusion_icons: ["delivery", "servicing"],
    model_3d_url: "/models/3d/platform-bed.glb",
    price: 1799,
    compare_at_price: 2045,
    discount: 12,
    price_range: "RS: 1,499 - 2,199",
    price_range_structured: {
      minimum: 1499,
      maximum: 2199,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 12,
    has_variants: true,
    variants: [
      {
        sku: "BED-UPL-BLUSH-QUEEN",
        variant_name: "Blush Pink / Queen",
        color_id: "color-010",
        fabric_id: "fabric-007",
        size_code: "QUEEN",
        price: 1799,
        compare_at_price: 2045,
        stock_quantity: 4,
        is_available: true,
        image: {
          id: "img-bed-001-var-blush",
          url: "/images/products/platform-bed-1.webp",
        },
        weight_kg: 60,
      },
      {
        sku: "BED-UPL-SLATE-QUEEN",
        variant_name: "Slate Gray / Queen",
        color_id: "color-011",
        fabric_id: "fabric-008",
        size_code: "QUEEN",
        price: 1799,
        compare_at_price: 2045,
        stock_quantity: 5,
        is_available: true,
        image: {
          id: "img-bed-001-var-slate",
          url: "/images/products/platform-bed-2.webp",
        },
        weight_kg: 60,
      },
      {
        sku: "BED-UPL-CREAM-QUEEN",
        variant_name: "Cream Beige / Queen",
        color_id: "color-012",
        fabric_id: "fabric-007",
        size_code: "QUEEN",
        price: 1799,
        compare_at_price: 2045,
        stock_quantity: 3,
        is_available: true,
        image: {
          id: "img-bed-001-var-cream",
          url: "/images/products/platform-bed-3.webp",
        },
        weight_kg: 60,
      },
    ],
    color: [
      { id: "color-010", name: "Blush Pink", color_code: "#FFB6C1" },
      { id: "color-011", name: "Slate Gray", color_code: "#708090" },
      { id: "color-012", name: "Cream Beige", color_code: "#F5F5DC" },
    ],
    color_options: [
      {
        id: "color-010",
        name: "Blush Pink",
        color_code: "#FFB6C1",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-011",
        name: "Slate Gray",
        color_code: "#708090",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-012",
        name: "Cream Beige",
        color_code: "#F5F5DC",
        is_active: true,
        sort_order: 3,
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
    materials: [
      {
        id: "mat-006",
        category: "Frame",
        name: "Solid Rubberwood",
        subtype: "Hardwood",
        description: "Durable rubberwood frame with reinforced joints",
        properties: ["Strong", "Eco-friendly", "Stable"],
      },
      {
        id: "mat-007",
        category: "Upholstery",
        name: "Premium Velvet",
        subtype: "Fabric",
        description: "Soft-touch velvet with stain-resistant treatment",
        properties: ["Luxurious", "Soft", "Stain-resistant"],
      },
      {
        id: "mat-008",
        category: "Slats",
        name: "Plywood Slats",
        subtype: "Engineered Wood",
        description: "Flexible plywood slats for optimal mattress support",
        properties: ["Flexible", "Durable", "Ventilated"],
      },
    ],
    size_options: [
      {
        name: "Queen",
        code: "QUEEN",
        dimensions: {
          name: "Queen",
          width: 62,
          depth: 84,
          height: 48,
          unit: { name: "Inches", code: "in" },
        },
        description: "Queen size - 60 x 80 inches mattress",
        is_default: true,
        is_available: true,
      },
      {
        name: "King",
        code: "KING",
        dimensions: {
          name: "King",
          width: 78,
          depth: 84,
          height: 48,
          unit: { name: "Inches", code: "in" },
        },
        description: "King size - 76 x 80 inches mattress",
        is_default: false,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Weight Capacity",
        value: 350,
        unit: "kg",
        description: "Supports up to 350 kg",
      },
    ],
    dimensions: [
      {
        name: "Queen",
        width: 62,
        depth: 84,
        height: 48,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-008",
        name: "Button-Tufted Headboard",
        description: "Elegant button tufting adds a touch of luxury",
        icon: "headboard",
      },
      {
        id: "feat-009",
        name: "No Box Spring Needed",
        description: "Wooden slat system provides direct mattress support",
        icon: "slat",
      },
      {
        id: "feat-010",
        name: "Noise-Free Design",
        description: "Reinforced joints and felt pads eliminate squeaking",
        icon: "quiet",
      },
    ],
    seating_capacity: [],
    weight_capacity_kg: 350,
    environment: ["indoor"],
    is_customizable: true,
    assembly_required: true,
    assembly_estimated_minutes: 30,
    is_adjustable: false,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 5,
      unit: "year",
      description: "5-year warranty on frame and slats",
    },
    care_instructions: [
      "Vacuum upholstery monthly",
      "Spot clean with mild upholstery cleaner",
      "Rotate mattress every 3 months",
      "Avoid direct sunlight",
    ],
    maintenance_instructions: [
      "Check and tighten all bolts every 6 months",
      "Inspect slats for damage annually",
      "Keep headboard away from moisture",
    ],
    faqs: [
      {
        title: "Does it require a box spring?",
        description:
          "No, the wooden slat system provides direct support for your mattress, eliminating the need for a box spring.",
      },
      {
        title: "What sizes are available?",
        description:
          "This bed is available in Queen and King sizes. Contact us for custom sizes.",
      },
      {
        title: "Is the headboard adjustable?",
        description:
          "The headboard is fixed. However, the tufted design provides comfortable back support for reading or watching TV.",
      },
    ],
    rating: 4.6,
    created_at: new Date("2024-03-05T10:00:00Z"),
    updated_at: new Date("2024-12-05T16:45:00Z"),
  },

  {
    id: "chair-002",
    name: "Ergonomic Office Chair",
    category: ["Dining Tables", "Office Tables", "Coffee Tables"],
    productType: "chair",
    slug: "chair_yh2",
    subtitle: "Adjustable mesh back with lumbar support",
    short_description:
      "A fully adjustable ergonomic office chair with breathable mesh back, adjustable lumbar support, and 3D armrests. Designed for all-day comfort.",
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
          attrs: { level: 3 },
          content: [{ type: "text", text: "Features" }],
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
                    { type: "text", text: "Adjustable lumbar support" },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Breathable mesh backrest" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "3D adjustable armrests" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Smooth-rolling casters" }],
                },
              ],
            },
          ],
        },
      ],
    },
    furniture_type_id: "ft-chair-002",
    collection_id: "col-ergonomic-2024",
    tags: ["ergonomic", "office-chair", "mesh", "adjustable", "lumbar-support"],
    images_url: [
      { id: "img-chair-002-1", url: "/images/products/office-chair-1.webp" },
      { id: "img-chair-002-2", url: "/images/products/office-chair-2.webp" },
      { id: "img-chair-002-3", url: "/images/products/office-chair-3.webp" },
    ],
    video_url: [
      { id: "video-chair-002", url: "/videos/products/office-chair.mp4" },
    ],
    inclusion_icons: ["setup", "servicing"],
    model_3d_url: "/models/3d/ergonomic-chair.glb",
    price: 399,
    compare_at_price: 499,
    discount: 20,
    price_range: "RS: 349 - 499",
    price_range_structured: {
      minimum: 349,
      maximum: 499,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 45,
    has_variants: true,
    variants: [
      {
        sku: "CHR-ERG-BLACK-STD",
        variant_name: "Black Mesh / Standard",
        color_id: "color-013",
        fabric_id: "fabric-009",
        size_code: "STD",
        price: 399,
        compare_at_price: 499,
        stock_quantity: 20,
        is_available: true,
        image: {
          id: "img-chair-002-var-black",
          url: "/images/products/office-chair-1.webp",
        },
        weight_kg: 18,
      },
      {
        sku: "CHR-ERG-CHARCOAL-STD",
        variant_name: "Charcoal / Standard",
        color_id: "color-014",
        fabric_id: "fabric-009",
        size_code: "STD",
        price: 399,
        compare_at_price: 499,
        stock_quantity: 15,
        is_available: true,
        image: {
          id: "img-chair-002-var-charcoal",
          url: "/images/products/office-chair-2.webp",
        },
        weight_kg: 18,
      },
      {
        sku: "CHR-ERG-BLUE-STD",
        variant_name: "Blue / Standard",
        color_id: "color-015",
        fabric_id: "fabric-010",
        size_code: "STD",
        price: 429,
        compare_at_price: 536,
        stock_quantity: 10,
        is_available: true,
        image: {
          id: "img-chair-002-var-blue",
          url: "/images/products/office-chair-3.webp",
        },
        weight_kg: 18,
      },
    ],
    color: [
      { id: "color-013", name: "Black Mesh", color_code: "#2C2C2C" },
      { id: "color-014", name: "Charcoal", color_code: "#36454F" },
      { id: "color-015", name: "Blue", color_code: "#4A7B9D" },
    ],
    color_options: [
      {
        id: "color-013",
        name: "Black Mesh",
        color_code: "#2C2C2C",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-014",
        name: "Charcoal",
        color_code: "#36454F",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-015",
        name: "Blue",
        color_code: "#4A7B9D",
        is_active: true,
        sort_order: 3,
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
    materials: [
      {
        id: "mat-009",
        category: "Frame",
        name: "Nylon Frame",
        subtype: "Polymer",
        description: "High-strength nylon frame with reinforced structure",
        properties: ["Lightweight", "Durable", "Flexible"],
      },
      {
        id: "mat-010",
        category: "Backrest",
        name: "Breathable Mesh",
        subtype: "Fabric",
        description: "Elastic mesh for superior airflow and comfort",
        properties: ["Breathable", "Elastic", "Supportive"],
      },
      {
        id: "mat-011",
        category: "Base",
        name: "Aluminum Alloy",
        subtype: "Metal",
        description: "Polished aluminum base for stability and style",
        properties: ["Corrosion-resistant", "Sturdy", "Premium"],
      },
      {
        id: "mat-012",
        category: "Casters",
        name: "PU Casters",
        subtype: "Polyurethane",
        description: "Soft polyurethane casters for smooth, quiet rolling",
        properties: ["Quiet", "Floor-friendly", "Smooth"],
      },
    ],
    size_options: [
      {
        name: "Standard",
        code: "STD",
        dimensions: {
          name: "Standard",
          width: 28,
          depth: 28,
          height: 48,
          seat_width: 20,
          seat_depth: 20,
          seat_height: 20,
          armrest_height: 10,
          diameter: 27,
          backrest_height: 20,
          unit: { name: "Inches", code: "in" },
        },
        description: "Standard office chair configuration",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Weight Capacity",
        value: 120,
        unit: "kg",
        description: "Supports up to 120 kg",
      },
    ],
    dimensions: [
      {
        name: "Standard",
        width: 28,
        depth: 28,
        height: 48,
        seat_width: 20,
        seat_depth: 20,
        seat_height: 20,
        armrest_height: 10,
        diameter: 27,
        backrest_height: 20,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-011",
        name: "Adjustable Lumbar Support",
        description:
          "Height-adjustable lumbar support for optimal lower back comfort",
        icon: "lumbar",
      },
      {
        id: "feat-012",
        name: "Breathable Mesh Back",
        description: "Elastic mesh promotes airflow to keep you cool",
        icon: "airflow",
      },
      {
        id: "feat-013",
        name: "3D Adjustable Armrests",
        description: "Armrests adjust in height, angle, and depth",
        icon: "armrest",
      },
      {
        id: "feat-014",
        name: "Tilt-Lock Mechanism",
        description: "Lock the backrest in 4 different positions",
        icon: "tilt",
      },
    ],
    seating_capacity: [1],
    weight_capacity_kg: 120,
    environment: ["indoor"],
    is_customizable: false,
    assembly_required: true,
    assembly_estimated_minutes: 10,
    is_adjustable: true,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 2,
      unit: "year",
      description: "2-year warranty on all components",
    },
    care_instructions: [
      "Wipe mesh with a damp cloth",
      "Clean leatherette with mild soap and water",
      "Vacuum casters regularly to remove debris",
      "Avoid using harsh chemicals",
    ],
    maintenance_instructions: [
      "Apply silicone lubricant to gas lift annually",
      "Check and tighten all screws every 6 months",
      "Replace casters if rolling becomes rough",
    ],
    faqs: [
      {
        title: "What is the weight capacity?",
        description: "This chair supports up to 120 kg (265 lbs).",
      },
      {
        title: "Is assembly difficult?",
        description:
          "No, assembly is straightforward and takes about 10 minutes. All tools and instructions are included.",
      },
      {
        title: "Does it have a headrest?",
        description:
          "No, this model does not include a headrest. The high-back design provides support up to the shoulders.",
      },
    ],
    rating: 4.8,
    created_at: new Date("2024-04-12T11:00:00Z"),
    updated_at: new Date("2024-12-08T09:15:00Z"),
  },

  {
    id: "table-002",
    name: "Minimalist Coffee Table",
    category: ["Outdoor Tables", "Bar Tables", "Meeting Tables"],
    productType: "sofa",
    slug: "sofa_h12r",
    subtitle: "Glass top with geometric metal base",
    short_description:
      "A contemporary coffee table featuring a clear tempered glass top and geometric metal base. Perfect for modern living spaces.",
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
          attrs: { level: 3 },
          content: [{ type: "text", text: "Features" }],
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
                    { type: "text", text: "Geometric metal base design" },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Easy to clean surface" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", text: "Contemporary design aesthetic" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    furniture_type_id: "ft-table-002",
    collection_id: "col-minimalist-2024",
    tags: ["minimalist", "coffee-table", "glass-top", "metal-base", "modern"],
    images_url: [
      { id: "img-table-002-1", url: "/images/products/coffee-table-1.webp" },
      { id: "img-table-002-2", url: "/images/products/coffee-table-2.webp" },
      { id: "img-table-002-3", url: "/images/products/coffee-table-3.webp" },
    ],
    video_url: [
      { id: "video-table-002", url: "/videos/products/coffee-table.mp4" },
    ],
    inclusion_icons: ["setup", "delivery", "servicing"],
    model_3d_url: "/models/3d/coffee-table.glb",
    price: 479,
    compare_at_price: 521,
    discount: 8,
    price_range: "RS: 429 - 599",
    price_range_structured: {
      minimum: 429,
      maximum: 599,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 30,
    has_variants: true,
    variants: [
      {
        sku: "TBL-CFT-CLEAR-STD",
        variant_name: "Clear Glass / Standard",
        color_id: "color-016",
        fabric_id: "fabric-011",
        size_code: "STD",
        price: 479,
        compare_at_price: 521,
        stock_quantity: 12,
        is_available: true,
        image: {
          id: "img-table-002-var-clear",
          url: "/images/products/coffee-table-1.webp",
        },
        weight_kg: 22,
      },
      {
        sku: "TBL-CFT-BLACK-STD",
        variant_name: "Black Frame / Standard",
        color_id: "color-017",
        fabric_id: "fabric-012",
        size_code: "STD",
        price: 499,
        compare_at_price: 542,
        stock_quantity: 10,
        is_available: true,
        image: {
          id: "img-table-002-var-black",
          url: "/images/products/coffee-table-2.webp",
        },
        weight_kg: 22,
      },
      {
        sku: "TBL-CFT-GOLD-STD",
        variant_name: "Gold Frame / Standard",
        color_id: "color-018",
        fabric_id: "fabric-012",
        size_code: "STD",
        price: 549,
        compare_at_price: 597,
        stock_quantity: 8,
        is_available: true,
        image: {
          id: "img-table-002-var-gold",
          url: "/images/products/coffee-table-3.webp",
        },
        weight_kg: 22,
      },
    ],
    color: [
      { id: "color-016", name: "Clear Glass", color_code: "#E8E8E8" },
      { id: "color-017", name: "Black Frame", color_code: "#1A1A1A" },
      { id: "color-018", name: "Gold Frame", color_code: "#C5A059" },
    ],
    color_options: [
      {
        id: "color-016",
        name: "Clear Glass",
        color_code: "#E8E8E8",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-017",
        name: "Black Frame",
        color_code: "#1A1A1A",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-018",
        name: "Gold Frame",
        color_code: "#C5A059",
        is_active: true,
        sort_order: 3,
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
    materials: [
      {
        id: "mat-013",
        category: "Tabletop",
        name: "Tempered Glass",
        subtype: "Glass",
        description: "10mm tempered safety glass with polished edges",
        properties: ["Scratch-resistant", "Heat-resistant", "Safe"],
      },
      {
        id: "mat-014",
        category: "Base",
        name: "Powder-Coated Steel",
        subtype: "Metal",
        description: "Geometric steel base with powder coating finish",
        properties: ["Rust-resistant", "Sturdy", "Modern"],
      },
    ],
    size_options: [
      {
        name: "Standard",
        code: "STD",
        dimensions: {
          name: "Standard",
          width: 48,
          depth: 24,
          height: 18,
          unit: { name: "Inches", code: "in" },
        },
        description: "Standard rectangular coffee table",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Weight Capacity",
        value: 50,
        unit: "kg",
        description: "Supports up to 50 kg",
      },
    ],
    dimensions: [
      {
        name: "Standard",
        width: 48,
        depth: 24,
        height: 18,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-015",
        name: "Tempered Glass Top",
        description: "10mm tempered glass for durability and safety",
        icon: "glass",
      },
      {
        id: "feat-016",
        name: "Geometric Base",
        description: "Contemporary geometric metal base design",
        icon: "geometric",
      },
      {
        id: "feat-017",
        name: "Easy to Clean",
        description: "Glass surface wipes clean easily",
        icon: "clean",
      },
    ],
    seating_capacity: [],
    weight_capacity_kg: 50,
    environment: ["indoor"],
    is_customizable: false,
    assembly_required: true,
    assembly_estimated_minutes: 5,
    is_adjustable: false,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 1,
      unit: "year",
      description: "1-year warranty on glass and base",
    },
    care_instructions: [
      "Clean glass with glass cleaner and soft cloth",
      "Wipe metal base with damp cloth",
      "Avoid placing hot items directly on glass",
      "Use coasters to prevent scratches",
    ],
    maintenance_instructions: [
      "Check base screws every 3 months",
      "Apply felt pads under glass to prevent movement",
    ],
    faqs: [
      {
        title: "Is the glass safe for children?",
        description:
          "Yes, the tempered glass is safety-rated and designed to break into small, blunt pieces if shattered.",
      },
      {
        title: "Can I use it outdoors?",
        description:
          "This coffee table is designed for indoor use. For outdoor use, we recommend a weatherproof cover.",
      },
    ],
    rating: 4.4,
    created_at: new Date("2024-05-20T13:00:00Z"),
    updated_at: new Date("2024-11-15T11:30:00Z"),
  },

  {
    id: "shelf-001",
    name: "Mid-Century Modern Bookshelf",
    slug: "bookshelf_ob3_3",
    category: [
      "Freestanding Bookshelves",
      "Ladder Bookshelves",
      "Corner Bookshelves",
    ],
    productType: "bookshelf",
    subtitle: "Five-tier wooden shelf with hairpin legs",
    short_description:
      "A stylish mid-century modern bookshelf with five spacious tiers and iconic hairpin legs. Perfect for displaying books, plants, and décor.",
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
          attrs: { level: 3 },
          content: [{ type: "text", text: "Features" }],
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
                    { type: "text", text: "Each shelf supports up to 50 lbs" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    furniture_type_id: "ft-shelf-001",
    collection_id: "col-mid-century-2024",
    tags: ["mid-century", "bookshelf", "hairpin-legs", "5-tier", "storage"],
    images_url: [
      { id: "img-shelf-001-1", url: "/images/products/bookshelf-1.webp" },
      { id: "img-shelf-001-2", url: "/images/products/bookshelf-2.webp" },
      { id: "img-shelf-001-3", url: "/images/products/bookshelf-3.webp" },
    ],
    video_url: [
      { id: "video-shelf-001", url: "/videos/products/bookshelf.mp4" },
    ],
    inclusion_icons: ["setup", "servicing"],
    model_3d_url: "/models/3d/bookshelf.glb",
    price: 349,
    compare_at_price: 411,
    discount: 15,
    price_range: "RS: 299 - 399",
    price_range_structured: {
      minimum: 299,
      maximum: 399,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 18,
    has_variants: true,
    variants: [
      {
        sku: "SHF-MCM-WALNUT-STD",
        variant_name: "Walnut / Standard",
        color_id: "color-019",
        fabric_id: "fabric-013",
        size_code: "STD",
        price: 349,
        compare_at_price: 411,
        stock_quantity: 7,
        is_available: true,
        image: {
          id: "img-shelf-001-var-walnut",
          url: "/images/products/bookshelf-1.webp",
        },
        weight_kg: 15,
      },
      {
        sku: "SHF-MCM-WHITEOAK-STD",
        variant_name: "White Oak / Standard",
        color_id: "color-020",
        fabric_id: "fabric-014",
        size_code: "STD",
        price: 349,
        compare_at_price: 411,
        stock_quantity: 6,
        is_available: true,
        image: {
          id: "img-shelf-001-var-whiteoak",
          url: "/images/products/bookshelf-2.webp",
        },
        weight_kg: 15,
      },
      {
        sku: "SHF-MCM-BLACK-STD",
        variant_name: "Matte Black / Standard",
        color_id: "color-021",
        fabric_id: "fabric-013",
        size_code: "STD",
        price: 369,
        compare_at_price: 434,
        stock_quantity: 5,
        is_available: true,
        image: {
          id: "img-shelf-001-var-black",
          url: "/images/products/bookshelf-3.webp",
        },
        weight_kg: 15,
      },
    ],
    color: [
      { id: "color-019", name: "Walnut", color_code: "#5C3A21" },
      { id: "color-020", name: "White Oak", color_code: "#C4A882" },
      { id: "color-021", name: "Matte Black", color_code: "#1E1E1E" },
    ],
    color_options: [
      {
        id: "color-019",
        name: "Walnut",
        color_code: "#5C3A21",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-020",
        name: "White Oak",
        color_code: "#C4A882",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-021",
        name: "Matte Black",
        color_code: "#1E1E1E",
        is_active: true,
        sort_order: 3,
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
    materials: [
      {
        id: "mat-015",
        category: "Shelves",
        name: "Solid Pine Wood",
        subtype: "Softwood",
        description: "Durable pine wood shelves with natural finish",
        properties: ["Lightweight", "Sturdy", "Natural grain"],
      },
      {
        id: "mat-016",
        category: "Legs",
        name: "Powder-Coated Steel",
        subtype: "Metal",
        description: "Iconic hairpin legs with powder coating",
        properties: ["Rust-resistant", "Strong", "Retro"],
      },
    ],
    size_options: [
      {
        name: "Standard",
        code: "STD",
        dimensions: {
          name: "Standard",
          width: 36,
          depth: 14,
          height: 60,
          unit: { name: "Inches", code: "in" },
        },
        description: "Standard 5-tier bookshelf",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Shelf Capacity",
        value: 22.7,
        unit: "kg",
        description: "Each shelf supports up to 50 lbs (22.7 kg)",
      },
    ],
    dimensions: [
      {
        name: "Standard",
        width: 36,
        depth: 14,
        height: 60,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-018",
        name: "Five Open Shelves",
        description: "Ample space for books, plants, and décor",
        icon: "shelf",
      },
      {
        id: "feat-019",
        name: "Hairpin Legs",
        description: "Iconic mid-century hairpin legs with non-slip caps",
        icon: "leg",
      },
      {
        id: "feat-020",
        name: "Easy Assembly",
        description: "All hardware and instructions included",
        icon: "assembly",
      },
    ],
    seating_capacity: [],
    weight_capacity_kg: 113,
    environment: ["indoor"],
    is_customizable: false,
    assembly_required: true,
    assembly_estimated_minutes: 25,
    is_adjustable: false,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 3,
      unit: "year",
      description: "3-year warranty on structure and finish",
    },
    care_instructions: [
      "Dust regularly with a soft dry cloth",
      "Wipe spills immediately with a damp cloth",
      "Avoid direct sunlight to prevent fading",
      "Use felt pads under items to prevent scratches",
    ],
    maintenance_instructions: [
      "Check and tighten leg screws every 6 months",
      "Apply wood polish every 6 months",
    ],
    faqs: [
      {
        title: "How much weight can each shelf hold?",
        description:
          "Each shelf can support up to 50 lbs (22.7 kg) when evenly distributed.",
      },
      {
        title: "Is assembly required?",
        description:
          "Yes, assembly is required but straightforward. It takes about 25 minutes with the included tools.",
      },
      {
        title: "Can this be mounted to the wall?",
        description:
          "This bookshelf is freestanding. We recommend using the included anti-tip kit for safety.",
      },
    ],
    rating: 4.3,
    created_at: new Date("2024-06-01T08:30:00Z"),
    updated_at: new Date("2024-12-10T14:00:00Z"),
  },

  {
    id: "bed-001",
    name: "Scandinavian Platform Bed",
    category: ["Panel Beds", "Storage Beds", "Canopy Beds"],
    productType: "bed",
    slug: "bed_jb_1",
    subtitle: "Minimalist queen bed with integrated storage",
    short_description:
      "A minimalist Scandinavian platform bed featuring integrated under-bed storage drawers and solid wood construction. Perfect for modern bedrooms.",
    rating: 4.8,
    inclusion_icons: ["setup", "delivery", "servicing"],
    images_url: [
      { id: "img-bed-001-1", url: "/images/products/coffee-table-1.webp" },
      { id: "img-bed-001-2", url: "/images/beds/scandinavian-platform-2.webp" },
      { id: "img-bed-001-3", url: "/images/beds/scandinavian-platform-3.webp" },
    ],
    video_url: [
      { id: "video-bed-001", url: "/videos/beds/scandinavian-platform.mp4" },
    ],
    price_range: "RS: 2,499 - 2,999",
    price: 2699,
    compare_at_price: 2999,
    discount: 10,
    price_range_structured: {
      minimum: 2499,
      maximum: 2999,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 8,
    has_variants: true,
    variants: [
      {
        sku: "BED-SCN-OAK-QUEEN",
        variant_name: "Natural Oak / Queen",
        color_id: "color-007",
        size_code: "QUEEN",
        price: 2699,
        compare_at_price: 2999,
        stock_quantity: 3,
        is_available: true,
        image: {
          id: "img-bed-001-var-oak",
          url: "/images/beds/scandinavian-platform-2.webp",
        },
        weight_kg: 65,
      },
      {
        sku: "BED-SCN-WALNUT-QUEEN",
        variant_name: "Walnut / Queen",
        color_id: "color-008",
        size_code: "QUEEN",
        price: 2799,
        compare_at_price: 3110,
        stock_quantity: 3,
        is_available: true,
        image: {
          id: "img-bed-001-var-walnut",
          url: "/images/beds/scandinavian-platform-3.webp",
        },
        weight_kg: 65,
      },
      {
        sku: "BED-SCN-WHITE-QUEEN",
        variant_name: "White / Queen",
        color_id: "color-009",
        size_code: "QUEEN",
        price: 2599,
        compare_at_price: 2888,
        stock_quantity: 2,
        is_available: true,
        image: {
          id: "img-bed-001-var-white",
          url: "/images/beds/scandinavian-platform-2.webp",
        },
        weight_kg: 65,
      },
    ],
    color: [
      { id: "color-007", name: "Natural Oak", color_code: "#C19A6B" },
      { id: "color-008", name: "Walnut", color_code: "#5C4033" },
      { id: "color-009", name: "White", color_code: "#FFFFFF" },
    ],
    color_options: [
      {
        id: "color-007",
        name: "Natural Oak",
        color_code: "#C19A6B",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-008",
        name: "Walnut",
        color_code: "#5C4033",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-009",
        name: "White",
        color_code: "#FFFFFF",
        is_active: true,
        sort_order: 3,
      },
    ],
    materials: [
      {
        id: "mat-017",
        category: "Frame",
        name: "Solid Oak Wood",
        subtype: "Hardwood",
        description: "Premium solid oak frame with natural finish",
        properties: ["Durable", "Sustainable", "Beautiful grain"],
      },
      {
        id: "mat-018",
        category: "Slats",
        name: "Birch Plywood",
        subtype: "Engineered Wood",
        description: "Flexible birch slats for mattress support",
        properties: ["Flexible", "Strong", "Ventilated"],
      },
      {
        id: "mat-019",
        category: "Drawers",
        name: "MDF with Veneer",
        subtype: "Engineered Wood",
        description: "Smooth-gliding drawers with wood veneer finish",
        properties: ["Smooth", "Durable", "Matching finish"],
      },
    ],
    size_options: [
      {
        name: "Queen",
        code: "QUEEN",
        dimensions: {
          name: "Queen",
          width: 63,
          depth: 84,
          height: 14,
          unit: { name: "Inches", code: "in" },
        },
        description: "Queen size with integrated storage",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Storage Capacity",
        value: 200,
        unit: "liters",
        description: "Two large under-bed drawers",
      },
      {
        name: "Weight Capacity",
        value: 300,
        unit: "kg",
        description: "Supports up to 300 kg",
      },
    ],
    dimensions: [
      {
        name: "Queen",
        width: 63,
        depth: 84,
        height: 14,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-021",
        name: "Integrated Storage",
        description: "Two spacious under-bed drawers for extra storage",
        icon: "storage",
      },
      {
        id: "feat-022",
        name: "Solid Wood Construction",
        description: "Durable solid oak frame with natural finish",
        icon: "wood",
      },
      {
        id: "feat-023",
        name: "Slatted Base",
        description: "Ventilated slat system extends mattress life",
        icon: "slat",
      },
      {
        id: "feat-024",
        name: "No Box Spring Needed",
        description: "Slatted base provides direct mattress support",
        icon: "nosox",
      },
    ],
    seating_capacity: [],
    weight_capacity_kg: 300,
    environment: ["indoor"],
    is_customizable: false,
    assembly_required: true,
    assembly_estimated_minutes: 45,
    is_adjustable: false,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 5,
      unit: "year",
      description: "5-year warranty on frame and drawers",
    },
    care_instructions: [
      "Dust regularly with a soft dry cloth",
      "Wipe spills immediately",
      "Avoid direct sunlight to prevent fading",
      "Use felt pads under decorative items",
    ],
    maintenance_instructions: [
      "Check and tighten all bolts every 6 months",
      "Vacuum under-bed drawers regularly",
      "Apply wood conditioner annually",
    ],
    faqs: [
      {
        title: "How much storage space do the drawers provide?",
        description:
          "The two under-bed drawers provide approximately 200 liters of total storage space.",
      },
      {
        title: "Does it require a box spring?",
        description:
          "No, the slatted base provides direct support for your mattress.",
      },
      {
        title: "Is the bed easy to assemble?",
        description:
          "Assembly takes about 45 minutes with two people. All tools and instructions are included.",
      },
    ],
    created_at: new Date("2024-07-15T09:00:00Z"),
    updated_at: new Date("2024-12-01T10:30:00Z"),
  },

  {
    id: "table-001",
    name: "Industrial Dining Table",
    category: ["Dining Tables"],
    productType: "table",
    slug: "table_b3_4",
    subtitle: "Rustic 6-seater with metal frame",
    short_description:
      "A bold industrial dining table blending rustic charm with modern design. Features a thick solid wood top and heavy-duty metal frame.",
    rating: 4.6,
    inclusion_icons: ["delivery", "servicing"],
    images_url: [
      { id: "img-table-001-1", url: "/images/products/office-chair-1.webp" },
      { id: "img-table-001-2", url: "/images/tables/industrial-dining-2.webp" },
      { id: "img-table-001-3", url: "/images/tables/industrial-dining-3.webp" },
    ],
    video_url: [
      { id: "video-table-001", url: "/videos/tables/industrial-dining.mp4" },
    ],
    price_range: "RS: 1,899 - 2,299",
    price: 2099,
    compare_at_price: 2385,
    discount: 12,
    price_range_structured: {
      minimum: 1899,
      maximum: 2299,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 10,
    has_variants: true,
    variants: [
      {
        sku: "TBL-IND-RUSTIC-STD",
        variant_name: "Rustic Brown / Standard",
        color_id: "color-010",
        size_code: "STD",
        price: 2099,
        compare_at_price: 2385,
        stock_quantity: 4,
        is_available: true,
        image: {
          id: "img-table-001-var-rustic",
          url: "/images/tables/industrial-dining-2.webp",
        },
        weight_kg: 70,
      },
      {
        sku: "TBL-IND-CHARCOAL-STD",
        variant_name: "Charcoal Black / Standard",
        color_id: "color-011",
        size_code: "STD",
        price: 2099,
        compare_at_price: 2385,
        stock_quantity: 3,
        is_available: true,
        image: {
          id: "img-table-001-var-charcoal",
          url: "/images/tables/industrial-dining-3.webp",
        },
        weight_kg: 70,
      },
      {
        sku: "TBL-IND-NATURAL-STD",
        variant_name: "Natural Wood / Standard",
        color_id: "color-012",
        size_code: "STD",
        price: 2199,
        compare_at_price: 2499,
        stock_quantity: 3,
        is_available: true,
        image: {
          id: "img-table-001-var-natural",
          url: "/images/tables/industrial-dining-2.webp",
        },
        weight_kg: 70,
      },
    ],
    color: [
      { id: "color-010", name: "Rustic Brown", color_code: "#8B4513" },
      { id: "color-011", name: "Charcoal Black", color_code: "#36454F" },
      { id: "color-012", name: "Natural Wood", color_code: "#DEB887" },
    ],
    color_options: [
      {
        id: "color-010",
        name: "Rustic Brown",
        color_code: "#8B4513",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-011",
        name: "Charcoal Black",
        color_code: "#36454F",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-012",
        name: "Natural Wood",
        color_code: "#DEB887",
        is_active: true,
        sort_order: 3,
      },
    ],
    materials: [
      {
        id: "mat-020",
        category: "Tabletop",
        name: "Solid Acacia Wood",
        subtype: "Hardwood",
        description: "Thick acacia wood top with natural grain",
        properties: ["Durable", "Scratch-resistant", "Beautiful grain"],
      },
      {
        id: "mat-021",
        category: "Frame",
        name: "Powder-Coated Steel",
        subtype: "Metal",
        description: "Heavy-duty steel frame with powder coating",
        properties: ["Rust-resistant", "Sturdy", "Industrial"],
      },
    ],
    size_options: [
      {
        name: "Standard",
        code: "STD",
        dimensions: {
          name: "Standard",
          width: 72,
          depth: 36,
          height: 30,
          unit: { name: "Inches", code: "in" },
        },
        description: "Standard 6-seater dining table",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Seating Capacity",
        value: 6,
        unit: "people",
        description: "Comfortably seats 6 adults",
      },
      {
        name: "Weight Capacity",
        value: 250,
        unit: "kg",
        description: "Supports up to 250 kg",
      },
    ],
    dimensions: [
      {
        name: "Standard",
        width: 72,
        depth: 36,
        height: 30,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-025",
        name: "Solid Wood Top",
        description: "Thick acacia wood top with natural grain",
        icon: "wood",
      },
      {
        id: "feat-026",
        name: "Heavy-Duty Metal Frame",
        description: "Powder-coated steel frame for industrial strength",
        icon: "metal",
      },
      {
        id: "feat-027",
        name: "Adjustable Leveling Feet",
        description: "Floor leveling feet for uneven surfaces",
        icon: "level",
      },
      {
        id: "feat-028",
        name: "Scratch-Resistant Finish",
        description: "Protective finish resists everyday wear",
        icon: "scratch",
      },
    ],
    seating_capacity: [6],
    weight_capacity_kg: 250,
    environment: ["indoor"],
    is_customizable: false,
    assembly_required: true,
    assembly_estimated_minutes: 30,
    is_adjustable: false,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 3,
      unit: "year",
      description: "3-year warranty on frame and finish",
    },
    care_instructions: [
      "Dust regularly with a soft dry cloth",
      "Use coasters to prevent water rings",
      "Apply wood conditioner every 6 months",
      "Avoid harsh chemicals",
    ],
    maintenance_instructions: [
      "Tighten frame bolts every 6 months",
      "Check leveling feet periodically",
      "Keep away from direct heat sources",
    ],
    faqs: [
      {
        title: "What is the tabletop material?",
        description:
          "The tabletop is made from solid acacia wood with a protective finish.",
      },
      {
        title: "Is assembly required?",
        description:
          "Yes, assembly is required. The frame needs to be attached to the tabletop, taking about 30 minutes.",
      },
    ],
    created_at: new Date("2024-08-10T10:00:00Z"),
    updated_at: new Date("2024-12-05T16:45:00Z"),
  },

  {
    id: "shelf-001",
    name: "Modular Bookshelf",
    slug: "bookshelf_bh1",
    category: ["Shelving", "Storage", "Living Room"],
    productType: "bookshelf",
    subtitle: "Versatile 5-tier unit with adjustable shelves",
    short_description:
      "A versatile modular bookshelf with five tiers and adjustable shelves. Perfect for organizing books, decor, and collectibles in any room.",
    rating: 4.4,
    inclusion_icons: ["delivery", "servicing"],
    images_url: [
      { id: "img-shelf-001-1", url: "/images/products/platform-bed-1.webp" },
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
      { id: "video-shelf-001", url: "/videos/shelves/modular-bookshelf.mp4" },
    ],
    price_range: "RS: 1,599 - 1,899",
    price: 1699,
    compare_at_price: 1888,
    discount: 10,
    price_range_structured: {
      minimum: 1599,
      maximum: 1899,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 14,
    has_variants: true,
    variants: [
      {
        sku: "SHF-MOD-ESPRESSO-STD",
        variant_name: "Espresso / Standard",
        color_id: "color-016",
        size_code: "STD",
        price: 1699,
        compare_at_price: 1888,
        stock_quantity: 5,
        is_available: true,
        image: {
          id: "img-shelf-001-var-espresso",
          url: "/images/shelves/modular-bookshelf-2.webp",
        },
        weight_kg: 25,
      },
      {
        sku: "SHF-MOD-CHALK-STD",
        variant_name: "Chalk White / Standard",
        color_id: "color-017",
        size_code: "STD",
        price: 1699,
        compare_at_price: 1888,
        stock_quantity: 5,
        is_available: true,
        image: {
          id: "img-shelf-001-var-chalk",
          url: "/images/shelves/modular-bookshelf-3.webp",
        },
        weight_kg: 25,
      },
      {
        sku: "SHF-MOD-SLATE-STD",
        variant_name: "Slate Gray / Standard",
        color_id: "color-018",
        size_code: "STD",
        price: 1799,
        compare_at_price: 1999,
        stock_quantity: 4,
        is_available: true,
        image: {
          id: "img-shelf-001-var-slate",
          url: "/images/shelves/modular-bookshelf-2.webp",
        },
        weight_kg: 25,
      },
    ],
    color: [
      { id: "color-016", name: "Espresso", color_code: "#3E2723" },
      { id: "color-017", name: "Chalk White", color_code: "#FDF5E6" },
      { id: "color-018", name: "Slate Gray", color_code: "#708090" },
    ],
    color_options: [
      {
        id: "color-016",
        name: "Espresso",
        color_code: "#3E2723",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-017",
        name: "Chalk White",
        color_code: "#FDF5E6",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-018",
        name: "Slate Gray",
        color_code: "#708090",
        is_active: true,
        sort_order: 3,
      },
    ],
    materials: [
      {
        id: "mat-022",
        category: "Frame",
        name: "Engineered Wood",
        subtype: "Particle Board with Veneer",
        description: "Durable engineered wood with wood veneer finish",
        properties: ["Sturdy", "Scratch-resistant", "Cost-effective"],
      },
      {
        id: "mat-023",
        category: "Backing",
        name: "Reinforced MDF",
        subtype: "Engineered Wood",
        description: "Reinforced MDF backing for stability",
        properties: ["Stable", "Strong", "Moisture-resistant"],
      },
    ],
    size_options: [
      {
        name: "Standard",
        code: "STD",
        dimensions: {
          name: "Standard",
          width: 30,
          depth: 12,
          height: 72,
          unit: { name: "Inches", code: "in" },
        },
        description: "Standard 5-tier modular bookshelf",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Shelf Capacity",
        value: 15,
        unit: "kg",
        description: "Each shelf supports up to 15 kg",
      },
    ],
    dimensions: [
      {
        name: "Standard",
        width: 30,
        depth: 12,
        height: 72,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-029",
        name: "5-Tier Design",
        description: "Five spacious tiers for versatile storage",
        icon: "shelf",
      },
      {
        id: "feat-030",
        name: "Adjustable Shelves",
        description: "4 adjustable shelves to customize your space",
        icon: "adjustable",
      },
      {
        id: "feat-031",
        name: "Reinforced Backing",
        description: "Sturdy backing for added stability",
        icon: "backing",
      },
      {
        id: "feat-032",
        name: "Wall Attachment Bracket",
        description: "Included bracket for anti-tip safety",
        icon: "wall",
      },
    ],
    seating_capacity: [],
    weight_capacity_kg: 75,
    environment: ["indoor"],
    is_customizable: false,
    assembly_required: true,
    assembly_estimated_minutes: 35,
    is_adjustable: true,
    is_foldable: false,
    is_stackable: false,
    is_reclining: false,
    warranty: {
      available: true,
      duration: 2,
      unit: "year",
      description: "2-year warranty on all parts",
    },
    care_instructions: [
      "Dust regularly with a soft dry cloth",
      "Wipe spills immediately with a damp cloth",
      "Avoid direct sunlight",
      "Use felt pads under heavy items",
    ],
    maintenance_instructions: [
      "Check and tighten screws every 6 months",
      "Ensure wall bracket remains secure",
    ],
    faqs: [
      {
        title: "Are the shelves adjustable?",
        description:
          "Yes, 4 of the 5 shelves are adjustable to accommodate items of different heights.",
      },
      {
        title: "Is it safe for children's rooms?",
        description:
          "Yes, the bookshelf includes a wall attachment bracket for anti-tip safety.",
      },
      {
        title: "How long does assembly take?",
        description:
          "Assembly takes approximately 35 minutes with the included tools and instructions.",
      },
    ],
    created_at: new Date("2024-09-01T08:00:00Z"),
    updated_at: new Date("2024-12-08T09:15:00Z"),
  },

  {
    id: "chair-001",
    name: "Ergonomic Office Chair",
    slug: "chair_h_h",
    category: ["Chairs", "Home Office", "Seating"],
    productType: "chair",
    subtitle: "Adjustable high-back with lumbar support",
    short_description:
      "A premium ergonomic office chair with adjustable high-back, lumbar support, and breathable mesh. Designed for all-day comfort and productivity.",
    rating: 4.9,
    inclusion_icons: ["setup", "delivery", "servicing"],
    images_url: [
      { id: "img-chair-001-1", url: "/images/Retreat-101(1+2+2).png" },
      { id: "img-chair-001-2", url: "/images/chairs/ergonomic-chair-2.webp" },
      { id: "img-chair-001-3", url: "/images/chairs/ergonomic-chair-3.webp" },
    ],
    video_url: [
      { id: "video-chair-001", url: "/videos/chairs/ergonomic-chair.mp4" },
    ],
    price_range: "RS: 1,799 - 2,199",
    price: 1999,
    compare_at_price: 2438,
    discount: 18,
    price_range_structured: {
      minimum: 1799,
      maximum: 2199,
      currency: "NPR",
    },
    currency: "NPR",
    is_available: true,
    stock_quantity: 22,
    has_variants: true,
    variants: [
      {
        sku: "CHR-ERG-HB-BLACK-STD",
        variant_name: "Black / Standard",
        color_id: "color-019",
        size_code: "STD",
        price: 1999,
        compare_at_price: 2438,
        stock_quantity: 8,
        is_available: true,
        image: {
          id: "img-chair-001-var-black",
          url: "/images/chairs/ergonomic-chair-2.webp",
        },
        weight_kg: 22,
      },
      {
        sku: "CHR-ERG-HB-GRAY-STD",
        variant_name: "Gray / Standard",
        color_id: "color-020",
        size_code: "STD",
        price: 1999,
        compare_at_price: 2438,
        stock_quantity: 8,
        is_available: true,
        image: {
          id: "img-chair-001-var-gray",
          url: "/images/chairs/ergonomic-chair-3.webp",
        },
        weight_kg: 22,
      },
      {
        sku: "CHR-ERG-HB-BURGUNDY-STD",
        variant_name: "Burgundy / Standard",
        color_id: "color-021",
        size_code: "STD",
        price: 2099,
        compare_at_price: 2560,
        stock_quantity: 6,
        is_available: true,
        image: {
          id: "img-chair-001-var-burgundy",
          url: "/images/chairs/ergonomic-chair-2.webp",
        },
        weight_kg: 22,
      },
    ],
    color: [
      { id: "color-019", name: "Black", color_code: "#1A1A1A" },
      { id: "color-020", name: "Gray", color_code: "#A9A9A9" },
      { id: "color-021", name: "Burgundy", color_code: "#800020" },
    ],
    color_options: [
      {
        id: "color-019",
        name: "Black",
        color_code: "#1A1A1A",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "color-020",
        name: "Gray",
        color_code: "#A9A9A9",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "color-021",
        name: "Burgundy",
        color_code: "#800020",
        is_active: true,
        sort_order: 3,
      },
    ],
    materials: [
      {
        id: "mat-024",
        category: "Frame",
        name: "Reinforced Nylon",
        subtype: "Polymer",
        description: "High-strength nylon frame for durability",
        properties: ["Lightweight", "Strong", "Flexible"],
      },
      {
        id: "mat-025",
        category: "Backrest",
        name: "Breathable Mesh",
        subtype: "Fabric",
        description: "Premium elastic mesh for airflow and support",
        properties: ["Breathable", "Supportive", "Durable"],
      },
      {
        id: "mat-026",
        category: "Seat",
        name: "Molded Foam",
        subtype: "Polyurethane",
        description: "High-density molded foam seat cushion",
        properties: ["Comfortable", "Shape-retaining", "Supportive"],
      },
      {
        id: "mat-027",
        category: "Base",
        name: "Aluminum Alloy",
        subtype: "Metal",
        description: "Polished aluminum base for stability",
        properties: ["Corrosion-resistant", "Sturdy", "Premium"],
      },
    ],
    size_options: [
      {
        name: "Standard",
        code: "STD",
        dimensions: {
          name: "Standard",
          width: 27,
          depth: 27,
          height: 50,
          seat_width: 20,
          seat_depth: 20,
          seat_height: 20,
          armrest_height: 10,
          diameter: 26,
          backrest_height: 30,
          unit: { name: "Inches", code: "in" },
        },
        description: "Standard high-back office chair",
        is_default: true,
        is_available: true,
      },
    ],
    capacity_options: [
      {
        name: "Weight Capacity",
        value: 150,
        unit: "kg",
        description: "Supports up to 150 kg",
      },
    ],
    dimensions: [
      {
        name: "Standard",
        width: 27,
        depth: 27,
        height: 50,
        seat_width: 20,
        seat_depth: 20,
        seat_height: 20,
        armrest_height: 10,
        diameter: 26,
        backrest_height: 30,
        unit: { name: "Inches", code: "in" },
      },
    ],
    features: [
      {
        id: "feat-033",
        name: "Adjustable Seat Height & Depth",
        description: "Customize seat position for optimal comfort",
        icon: "adjust",
      },
      {
        id: "feat-034",
        name: "360° Swivel",
        description: "Full rotation with smooth-rolling casters",
        icon: "swivel",
      },
      {
        id: "feat-035",
        name: "Tilt-Lock & Tension Control",
        description: "Lock backrest in multiple positions",
        icon: "tilt",
      },
      {
        id: "feat-036",
        name: "Adjustable Lumbar Support",
        description: "Height-adjustable lumbar support for lower back",
        icon: "lumbar",
      },
    ],
    seating_capacity: [1],
    weight_capacity_kg: 150,
    environment: ["indoor"],
    is_customizable: false,
    assembly_required: true,
    assembly_estimated_minutes: 15,
    is_adjustable: true,
    is_foldable: false,
    is_stackable: false,
    is_reclining: true,
    warranty: {
      available: true,
      duration: 3,
      unit: "year",
      description: "3-year warranty on all components",
    },
    care_instructions: [
      "Wipe mesh with a damp cloth",
      "Clean base with mild soap and water",
      "Vacuum casters regularly",
      "Avoid harsh chemicals",
    ],
    maintenance_instructions: [
      "Apply silicone lubricant to gas lift annually",
      "Check and tighten all screws every 6 months",
      "Replace casters if rolling becomes rough",
    ],
    faqs: [
      {
        title: "What is the weight capacity?",
        description: "This chair supports up to 150 kg (330 lbs).",
      },
      {
        title: "Does it have a headrest?",
        description:
          "Yes, this high-back model includes an adjustable headrest.",
      },
      {
        title: "Is the chair reclining?",
        description:
          "Yes, the backrest reclines and can be locked in multiple positions.",
      },
    ],
    created_at: new Date("2024-10-05T14:00:00Z"),
    updated_at: new Date("2024-12-10T14:00:00Z"),
  },
];
