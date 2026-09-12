import { IFurnitureProductType } from "../types/types";

export const FurnitureProductType: IFurnitureProductType[] = [
  {
    id: "type-001",
    name: "Sofa",
    slug: "sofa",

    subtitle: "Comfortable sofas for modern living spaces",

    description:
      "Explore our collection of modern, traditional, and contemporary sofas designed for living rooms, lounges, apartments, and commercial spaces. Each sofa is crafted with a durable hardwood frame, high-density foam cushioning, and premium upholstery options, making it a long-lasting centrepiece for your home or business.",

    banner_images: [
      {
        id: "categories/sofa",
        url: "/images/Retreat-101(1+2+2).png",
        alt: "Modern sofa furniture",
      },
    ],

    thumbnail_image: {
      id: "categories/sofa",
      url: "/images/Retreat-101(1+2+2).png",
      alt: "Modern sofa furniture",
    },

    available_types: [
      "1 Seater Sofa",
      "2 Seater Sofa",
      "3 Seater Sofa",
      "4 Seater Sofa",
      "L-Shaped Sofa",
      "Sectional Sofa",
      "Sofa Bed",
      "Recliner Sofa",
      "Loveseat",
    ],

    material_types: [
      "Solid Wood",
      "Engineered Wood",
      "Metal",
      "Fabric",
      "Velvet",
      "Leather",
      "Faux Leather",
      "High-Density Foam",
    ],

    material_options: [
      {
        id: "sofa-material-001",
        category: "Frame",
        name: "Solid Wood",
        subtype: "Seasoned Hardwood",
        description:
          "Kiln-dried hardwood frame for strength, stability, and long-term durability.",
        properties: ["Durable", "Termite Resistant", "Moisture Treated"],
      },
      {
        id: "sofa-material-002",
        category: "Upholstery",
        name: "Fabric",
        subtype: "Premium Woven Fabric",
        description:
          "Breathable, easy-to-maintain woven fabric available in multiple colourways.",
        properties: ["Breathable", "Stain Resistant", "Soft Touch"],
      },
      {
        id: "sofa-material-003",
        category: "Upholstery",
        name: "Leather",
        subtype: "Genuine Leather",
        description:
          "Premium genuine leather that develops a rich patina over time.",
        properties: ["Premium Feel", "Easy to Clean", "Long Lasting"],
      },
      {
        id: "sofa-material-004",
        category: "Cushioning",
        name: "High-Density Foam",
        subtype: "32–40 Density Foam",
        description:
          "High-density foam that retains shape and provides consistent support.",
        properties: ["Shape Retaining", "Firm Support", "Comfort"],
      },
    ],

    usage_areas: [
      "Living Room",
      "Lounge",
      "Family Room",
      "Office",
      "Reception Area",
      "Hotel",
      "Apartment",
    ],

    suitable_for: [
      "Families",
      "Couples",
      "Individuals",
      "Office Users",
      "Hotels",
      "Apartments",
    ],

    size_options: [
      {
        name: "2 Seater",
        code: "2S",
        description:
          "Compact two-seater sofa ideal for apartments and small living rooms.",
        dimensions: {
          length: 160,
          width: 85,
          height: 85,
          depth: 85,
          seat_height: 45,
          seat_width: 120,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: true,
        is_available: true,
      },
      {
        name: "3 Seater",
        code: "3S",
        description:
          "Standard three-seater sofa suitable for most family living rooms.",
        dimensions: {
          length: 210,
          width: 85,
          height: 85,
          depth: 85,
          seat_height: 45,
          seat_width: 170,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
      {
        name: "4 Seater",
        code: "4S",
        description:
          "Spacious four-seater sofa for large living rooms and lounges.",
        dimensions: {
          length: 250,
          width: 90,
          height: 85,
          depth: 90,
          seat_height: 45,
          seat_width: 210,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
    ],

    color_options: [
      {
        id: "sofa-color-001",
        name: "Charcoal",
        slug: "charcoal",
        color_code: "#36454F",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "sofa-color-002",
        name: "Beige",
        slug: "beige",
        color_code: "#F5F5DC",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "sofa-color-003",
        name: "Brown",
        slug: "brown",
        color_code: "#8B4513",
        is_active: true,
        sort_order: 3,
      },
      {
        id: "sofa-color-004",
        name: "Navy Blue",
        slug: "navy-blue",
        color_code: "#000080",
        is_active: true,
        sort_order: 4,
      },
    ],

    capacity_options: [
      {
        name: "Seating Capacity",
        value: 2,
        unit: "person",
        description: "Comfortably seats two adults.",
      },
      {
        name: "Seating Capacity",
        value: 3,
        unit: "person",
        description: "Comfortably seats three adults.",
      },
      {
        name: "Seating Capacity",
        value: 4,
        unit: "person",
        description: "Comfortably seats four adults.",
      },
    ],

    price_range: {
      minimum: 25000,
      maximum: 150000,
      currency: "NPR",
    },

    features: [
      {
        id: "sofa-feature-001",
        name: "Removable Cushions",
        description:
          "Cushion covers can be removed for easy cleaning and maintenance.",
      },
      {
        id: "sofa-feature-002",
        name: "High-Density Foam",
        description:
          "High-density foam keeps the seating firm and comfortable over time.",
      },
      {
        id: "sofa-feature-003",
        name: "Durable Frame",
        description: "Seasoned hardwood frame designed to withstand daily use.",
      },
      {
        id: "sofa-feature-004",
        name: "Custom Fabric Options",
        description:
          "Choose from a wide range of fabrics, colours, and finishes.",
      },
    ],

    warranty: {
      available: true,
      duration: 2,
      unit: "year",
      description:
        "Warranty against manufacturing defects on the frame and structure.",
    },

    care_instructions: [
      "Vacuum the upholstery regularly using a soft brush attachment to remove dust and crumbs.",
      "Wipe leather surfaces with a dry, soft cloth and condition periodically.",
      "Keep the sofa away from direct sunlight to prevent fabric fading.",
      "Rotate and fluff cushions regularly to maintain shape and even wear.",
      "Clean spills immediately with a mild soap solution and avoid harsh chemicals.",
    ],

    customizable: true,
    made_to_order: true,
    assembly_required: true,

    is_active: true,
    sort_order: 1,

    meta_title: "Sofas in Nepal | Modern & Comfortable Sofas",
    meta_description:
      "Shop modern, comfortable and customizable sofas in Nepal. Explore 2-seater, 3-seater, sectional, L-shaped and sofa beds.",

    faq: [
      {
        title: "Can I customize the sofa?",
        description:
          "Yes, selected sofa models can be customized by size, fabric, colour and configuration.",
      },
      {
        title: "Do you provide sofa delivery?",
        description:
          "Yes, sofa delivery is available depending on your location and product availability.",
      },
      {
        title: "Is assembly required after delivery?",
        description:
          "Basic assembly is required for most sofa models. Our delivery team can assist with assembly on request.",
      },
      {
        title: "How long does a made-to-order sofa take?",
        description:
          "Made-to-order sofas are typically ready within 10 to 20 working days, depending on the customization selected.",
      },
    ],

    created_at: new Date(),
    updated_at: new Date(),
  },

  // =====================================================
  // TABLE
  // =====================================================

  {
    id: "type-002",
    name: "Table",
    slug: "table",

    subtitle: "Functional tables for dining, work and everyday living",

    description:
      "Discover dining tables, coffee tables, side tables, console tables and other furniture tables designed for homes, offices and commercial spaces. Built with sturdy joinery, scratch-resistant surfaces, and premium finishes, our tables combine everyday practicality with timeless design.",

    banner_images: [
      {
        id: "categories/table",
        url: "/images/products/farmhouse-table-1.webp",
        alt: "Farmhouse table furniture",
      },
    ],

    thumbnail_image: {
      id: "categories/table",
      url: "/images/products/farmhouse-table-1.webp",
      alt: "Farmhouse table furniture",
    },

    available_types: [
      "Dining Table",
      "Coffee Table",
      "Side Table",
      "Console Table",
      "Center Table",
      "Meeting Table",
      "Conference Table",
      "Folding Table",
      "Nesting Table",
    ],

    material_types: [
      "Solid Wood",
      "Engineered Wood",
      "MDF",
      "Plywood",
      "Glass",
      "Metal",
      "Marble",
      "Stone",
    ],

    material_options: [
      {
        id: "table-material-001",
        category: "Top",
        name: "Solid Wood",
        subtype: "Seasoned Hardwood",
        description:
          "Solid hardwood table tops with a natural grain finish for lasting strength.",
        properties: ["Scratch Resistant", "Durable", "Natural Grain"],
      },
      {
        id: "table-material-002",
        category: "Top",
        name: "Engineered Wood",
        subtype: "MDF / Plywood",
        description:
          "Engineered wood surfaces with laminate or veneer finishing for a smooth, uniform look.",
        properties: ["Uniform Finish", "Moisture Resistant", "Cost Effective"],
      },
      {
        id: "table-material-003",
        category: "Top",
        name: "Glass",
        subtype: "Toughened Glass",
        description:
          "Tempered glass tops that create a light, modern appearance.",
        properties: ["Toughened", "Easy to Clean", "Modern Look"],
      },
      {
        id: "table-material-004",
        category: "Legs / Base",
        name: "Metal",
        subtype: "Powder-Coated Steel",
        description:
          "Powder-coated metal legs and bases for stability and rust resistance.",
        properties: ["Rust Resistant", "Stable", "Modern"],
      },
    ],

    usage_areas: [
      "Dining Room",
      "Living Room",
      "Kitchen",
      "Office",
      "Conference Room",
      "Meeting Room",
      "Reception Area",
    ],

    suitable_for: [
      "Families",
      "Office Users",
      "Restaurants",
      "Hotels",
      "Businesses",
      "Students",
    ],

    size_options: [
      {
        name: "4 Seater",
        code: "4S",
        description:
          "Four-seater dining table suited to compact dining rooms and kitchens.",
        dimensions: {
          length: 120,
          width: 75,
          height: 75,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: true,
        is_available: true,
      },
      {
        name: "6 Seater",
        code: "6S",
        description:
          "Six-seater dining table ideal for family dining and everyday use.",
        dimensions: {
          length: 180,
          width: 90,
          height: 75,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
      {
        name: "8 Seater",
        code: "8S",
        description:
          "Eight-seater dining table designed for large families and entertaining.",
        dimensions: {
          length: 240,
          width: 100,
          height: 75,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
    ],

    color_options: [
      {
        id: "table-color-001",
        name: "Natural Oak",
        slug: "natural-oak",
        color_code: "#C19A6B",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "table-color-002",
        name: "Walnut",
        slug: "walnut",
        color_code: "#5C4033",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "table-color-003",
        name: "Black",
        slug: "black",
        color_code: "#000000",
        is_active: true,
        sort_order: 3,
      },
      {
        id: "table-color-004",
        name: "White",
        slug: "white",
        color_code: "#FFFFFF",
        is_active: true,
        sort_order: 4,
      },
    ],

    capacity_options: [
      {
        name: "Seating Capacity",
        value: 4,
        unit: "person",
        description: "Comfortably seats four people.",
      },
      {
        name: "Seating Capacity",
        value: 6,
        unit: "person",
        description: "Comfortably seats six people.",
      },
      {
        name: "Seating Capacity",
        value: 8,
        unit: "person",
        description: "Comfortably seats eight people.",
      },
    ],

    price_range: {
      minimum: 12000,
      maximum: 120000,
      currency: "NPR",
    },

    features: [
      {
        id: "table-feature-001",
        name: "Scratch Resistant Surface",
        description:
          "Protected table top that resists everyday scratches and marks.",
      },
      {
        id: "table-feature-002",
        name: "Sturdy Construction",
        description:
          "Reinforced joinery and a stable base for long-term durability.",
      },
      {
        id: "table-feature-003",
        name: "Easy Maintenance",
        description:
          "Smooth, sealed surfaces that wipe clean with a damp cloth.",
      },
    ],

    warranty: {
      available: true,
      duration: 1,
      unit: "year",
      description: "Warranty against manufacturing defects.",
    },

    care_instructions: [
      "Wipe the table surface with a soft, damp cloth after daily use.",
      "Use coasters and placemats to prevent heat marks and water rings.",
      "Avoid placing the table in direct sunlight or damp areas.",
      "Tighten legs and hardware periodically to maintain stability.",
      "Do not use abrasive cleaners or scrubbing pads on polished surfaces.",
    ],

    customizable: true,
    made_to_order: true,
    assembly_required: true,

    is_active: true,
    sort_order: 2,

    meta_title: "Tables in Nepal | Dining, Coffee & Office Tables",
    meta_description:
      "Explore dining tables, coffee tables, office tables and more. Find durable and stylish tables for your home or business.",

    faq: [
      {
        title: "Can I choose a different table size?",
        description:
          "Yes, selected table models can be made in custom lengths, widths and heights on request.",
      },
      {
        title: "Are the tables suitable for commercial use?",
        description:
          "Yes, our tables are built for both residential and commercial environments such as restaurants, hotels and offices.",
      },
      {
        title: "Is assembly required?",
        description:
          "Most tables require basic assembly of legs or base. Assembly can be arranged during delivery.",
      },
    ],

    created_at: new Date(),
    updated_at: new Date(),
  },

  // =====================================================
  // BED
  // =====================================================

  {
    id: "type-003",
    name: "Bed",
    slug: "bed",

    subtitle: "Comfortable beds for restful bedrooms",

    description:
      "Explore modern, wooden and upholstered beds available in single, double, queen and king sizes for comfortable bedrooms. Each bed is engineered with a reinforced frame, strong slat support, and optional storage, delivering dependable comfort and lasting durability.",

    banner_images: [
      {
        id: "categories/bed",
        url: "/images/products/platform-bed-1.webp",
        alt: "Modern platform bed",
      },
    ],

    thumbnail_image: {
      id: "categories/bed",
      url: "/images/products/platform-bed-1.webp",
      alt: "Modern platform bed",
    },

    available_types: [
      "Single Bed",
      "Double Bed",
      "Queen Bed",
      "King Bed",
      "Platform Bed",
      "Storage Bed",
      "Upholstered Bed",
      "Bunk Bed",
      "Canopy Bed",
      "Sofa Bed",
    ],

    material_types: [
      "Solid Wood",
      "Engineered Wood",
      "Plywood",
      "Metal",
      "Fabric",
      "Leather",
      "MDF",
    ],

    material_options: [
      {
        id: "bed-material-001",
        category: "Frame",
        name: "Solid Wood",
        subtype: "Seasoned Hardwood",
        description:
          "Strong hardwood frame that supports the mattress evenly and resists warping.",
        properties: ["Strong", "Termite Resistant", "Long Lasting"],
      },
      {
        id: "bed-material-002",
        category: "Frame",
        name: "Engineered Wood",
        subtype: "MDF / Plywood",
        description:
          "Engineered wood panels with a smooth laminate finish for a clean, modern look.",
        properties: ["Smooth Finish", "Stable", "Cost Effective"],
      },
      {
        id: "bed-material-003",
        category: "Upholstery",
        name: "Fabric",
        subtype: "Premium Upholstery Fabric",
        description:
          "Soft upholstered headboards available in a range of colours and textures.",
        properties: ["Soft", "Breathable", "Easy to Maintain"],
      },
      {
        id: "bed-material-004",
        category: "Support",
        name: "Metal",
        subtype: "Powder-Coated Steel",
        description:
          "Powder-coated metal slats and brackets for firm mattress support.",
        properties: ["Rust Resistant", "Firm Support"],
      },
    ],

    usage_areas: [
      "Master Bedroom",
      "Guest Bedroom",
      "Children's Bedroom",
      "Hotel",
      "Hostel",
      "Apartment",
    ],

    suitable_for: [
      "Adults",
      "Couples",
      "Children",
      "Hotels",
      "Hostels",
      "Families",
    ],

    size_options: [
      {
        name: "Single",
        code: "SINGLE",
        description:
          "Single bed suited to children's rooms, hostels and guest rooms.",
        dimensions: {
          length: 200,
          width: 90,
          height: 100,
          mattress_length: 190,
          mattress_width: 90,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: true,
        is_available: true,
      },
      {
        name: "Queen",
        code: "QUEEN",
        description:
          "Queen bed offering generous sleeping space for two adults.",
        dimensions: {
          length: 210,
          width: 160,
          height: 100,
          mattress_length: 200,
          mattress_width: 150,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
      {
        name: "King",
        code: "KING",
        description:
          "King bed providing maximum comfort and space for couples.",
        dimensions: {
          length: 210,
          width: 180,
          height: 100,
          mattress_length: 200,
          mattress_width: 180,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
    ],

    color_options: [
      {
        id: "bed-color-001",
        name: "Natural Wood",
        slug: "natural-wood",
        color_code: "#A67B5B",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "bed-color-002",
        name: "Dark Walnut",
        slug: "dark-walnut",
        color_code: "#4A2C2A",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "bed-color-003",
        name: "White",
        slug: "white",
        color_code: "#FFFFFF",
        is_active: true,
        sort_order: 3,
      },
      {
        id: "bed-color-004",
        name: "Grey",
        slug: "grey",
        color_code: "#808080",
        is_active: true,
        sort_order: 4,
      },
    ],

    capacity_options: [
      {
        name: "Sleeping Capacity",
        value: 1,
        unit: "person",
        description: "Designed for single occupancy.",
      },
      {
        name: "Sleeping Capacity",
        value: 2,
        unit: "person",
        description: "Designed for double occupancy.",
      },
    ],

    price_range: {
      minimum: 18000,
      maximum: 150000,
      currency: "NPR",
    },

    features: [
      {
        id: "bed-feature-001",
        name: "Solid Wood Frame",
        description:
          "Reinforced hardwood frame that provides stable, squeak-free support.",
      },
      {
        id: "bed-feature-002",
        name: "Storage Options",
        description:
          "Optional under-bed storage to keep bedding and essentials organized.",
      },
      {
        id: "bed-feature-003",
        name: "Strong Support Structure",
        description:
          "Reinforced slats and centre support for even mattress weight distribution.",
      },
    ],

    warranty: {
      available: true,
      duration: 2,
      unit: "year",
      description: "Warranty against manufacturing defects in the bed frame.",
    },

    care_instructions: [
      "Dust the bed frame regularly with a dry, soft cloth.",
      "Wipe spills immediately to prevent moisture damage to the finish.",
      "Tighten all bolts and fittings periodically to keep the frame rigid.",
      "Use a mattress protector to keep the mattress and frame clean.",
      "Avoid dragging the bed across the floor to prevent joint damage.",
    ],

    customizable: true,
    made_to_order: true,
    assembly_required: true,

    is_active: true,
    sort_order: 3,

    meta_title: "Beds in Nepal | Single, Queen & King Size Beds",
    meta_description:
      "Shop stylish single, double, queen and king size beds in Nepal. Explore wooden, storage and upholstered bed designs.",

    faq: [
      {
        title: "Does the bed include a mattress?",
        description:
          "Mattresses are sold separately unless a specific bed and mattress package is mentioned.",
      },
      {
        title: "Can I order a bed with storage?",
        description:
          "Yes, selected bed models are available with under-bed storage drawers or a hydraulic lift-up base.",
      },
      {
        title: "Is the bed available in custom sizes?",
        description:
          "Yes, custom sizes can be produced on request to suit your room and mattress dimensions.",
      },
    ],

    created_at: new Date(),
    updated_at: new Date(),
  },

  // =====================================================
  // BOOKSHELF
  // =====================================================

  {
    id: "type-005",
    name: "Bookshelf",
    slug: "bookshelf",

    subtitle: "Stylish storage for books and everyday essentials",

    description:
      "Organize your books, décor and belongings with modern bookshelves designed for homes, offices, libraries and study spaces. With multiple shelf levels, space-saving profiles, and sturdy construction, our bookshelves keep your space tidy without compromising on style.",

    banner_images: [
      {
        id: "categories/bookshelf",
        url: "/images/products/bookshelf-1.webp",
        alt: "Modern bookshelf",
      },
    ],

    thumbnail_image: {
      id: "categories/bookshelf",
      url: "/images/products/bookshelf-1.webp",
      alt: "Modern bookshelf",
    },

    available_types: [
      "Open Bookshelf",
      "Wall Mounted Bookshelf",
      "Corner Bookshelf",
      "Ladder Bookshelf",
      "Cube Bookshelf",
      "Display Shelf",
      "Library Bookshelf",
      "Office Bookshelf",
    ],

    material_types: [
      "Solid Wood",
      "MDF",
      "Plywood",
      "Particle Board",
      "Metal",
      "Glass",
    ],

    material_options: [
      {
        id: "bookshelf-material-001",
        category: "Body",
        name: "Solid Wood",
        subtype: "Seasoned Hardwood",
        description:
          "Solid wood shelves that hold heavy books without sagging.",
        properties: ["Strong", "Natural Grain", "Long Lasting"],
      },
      {
        id: "bookshelf-material-002",
        category: "Body",
        name: "MDF",
        subtype: "Medium Density Fibreboard",
        description: "Smooth MDF panels with a uniform, paint-ready finish.",
        properties: ["Smooth Finish", "Uniform", "Easy to Paint"],
      },
      {
        id: "bookshelf-material-003",
        category: "Body",
        name: "Plywood",
        subtype: "Commercial Plywood",
        description:
          "Plywood construction that resists warping and offers good load capacity.",
        properties: ["Warp Resistant", "Strong", "Lightweight"],
      },
      {
        id: "bookshelf-material-004",
        category: "Frame",
        name: "Metal",
        subtype: "Powder-Coated Steel",
        description:
          "Powder-coated metal frames for an industrial look and extra rigidity.",
        properties: ["Rust Resistant", "Rigid", "Industrial Style"],
      },
    ],

    usage_areas: [
      "Living Room",
      "Bedroom",
      "Home Office",
      "Study Room",
      "Library",
      "Office",
      "Classroom",
    ],

    suitable_for: [
      "Students",
      "Professionals",
      "Families",
      "Book Lovers",
      "Office Users",
    ],

    size_options: [
      {
        name: "Small",
        code: "SM",
        description:
          "Compact unit suited to bedrooms, studies and small corners.",
        dimensions: {
          width: 60,
          height: 120,
          depth: 30,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: true,
        is_available: true,
      },
      {
        name: "Medium",
        code: "MD",
        description:
          "Mid-size unit providing generous shelf space for home libraries.",
        dimensions: {
          width: 80,
          height: 180,
          depth: 35,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
      {
        name: "Large",
        code: "LG",
        description:
          "Full-height unit designed for offices, libraries and large collections.",
        dimensions: {
          width: 120,
          height: 200,
          depth: 40,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
    ],

    color_options: [
      {
        id: "bookshelf-color-001",
        name: "Natural Oak",
        slug: "natural-oak",
        color_code: "#C19A6B",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "bookshelf-color-002",
        name: "Dark Brown",
        slug: "dark-brown",
        color_code: "#654321",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "bookshelf-color-003",
        name: "White",
        slug: "white",
        color_code: "#FFFFFF",
        is_active: true,
        sort_order: 3,
      },
      {
        id: "bookshelf-color-004",
        name: "Black",
        slug: "black",
        color_code: "#000000",
        is_active: true,
        sort_order: 4,
      },
    ],

    capacity_options: [
      {
        name: "Shelves",
        value: 3,
        unit: "shelves",
        description: "Three-tier shelf configuration.",
      },
      {
        name: "Shelves",
        value: 5,
        unit: "shelves",
        description: "Five-tier shelf configuration.",
      },
      {
        name: "Shelves",
        value: 7,
        unit: "shelves",
        description: "Seven-tier shelf configuration.",
      },
    ],

    price_range: {
      minimum: 5000,
      maximum: 60000,
      currency: "NPR",
    },

    features: [
      {
        id: "bookshelf-feature-001",
        name: "Multiple Storage Levels",
        description:
          "Adjustable shelf levels to accommodate books of different heights.",
      },
      {
        id: "bookshelf-feature-002",
        name: "Space Saving Design",
        description:
          "Slim footprint that makes efficient use of floor and wall space.",
      },
      {
        id: "bookshelf-feature-003",
        name: "Easy Assembly",
        description:
          "Pre-drilled panels and clear instructions for quick setup.",
      },
    ],

    warranty: {
      available: true,
      duration: 1,
      unit: "year",
      description: "Warranty against manufacturing defects.",
    },

    care_instructions: [
      "Dust shelves regularly with a soft, dry cloth.",
      "Clean wooden surfaces with a slightly damp cloth and dry immediately.",
      "Avoid overloading shelves beyond their recommended weight capacity.",
      "Anchor tall units to the wall to prevent tipping.",
      "Keep the unit away from damp walls and direct water exposure.",
    ],

    customizable: true,
    made_to_order: true,
    assembly_required: true,

    is_active: true,
    sort_order: 5,

    meta_title: "Bookshelves in Nepal | Modern & Wooden Bookshelves",
    meta_description:
      "Shop modern wooden bookshelves, wall shelves, corner shelves and office bookshelves in Nepal.",

    faq: [
      {
        title: "Can the bookshelf be wall mounted?",
        description:
          "Yes, wall-mounted and floating shelf models are available and include suitable mounting hardware.",
      },
      {
        title: "How much weight can each shelf hold?",
        description:
          "Load capacity depends on the material and size. Solid wood and plywood shelves typically hold heavier loads than particle board.",
      },
      {
        title: "Do you make custom shelf sizes?",
        description:
          "Yes, custom widths, heights and shelf counts can be produced on request.",
      },
    ],

    created_at: new Date(),
    updated_at: new Date(),
  },

  // =====================================================
  // DESK
  // =====================================================

  {
    id: "type-006",
    name: "Desk",
    slug: "desk",

    subtitle: "Functional desks for work, study and creative spaces",

    description:
      "Discover modern work desks, study desks, computer desks, executive desks and standing desks designed for productive workspaces. With ergonomic heights, cable management, and sturdy frames, our desks support focused work at home, in the office, or in commercial environments.",

    banner_images: [
      {
        id: "categories/desk",
        url: "/images/products/desk-1.webp",
        alt: "Modern work desk",
      },
    ],

    thumbnail_image: {
      id: "categories/desk",
      url: "/images/products/desk-1.webp",
      alt: "Modern work desk",
    },

    available_types: [
      "Computer Desk",
      "Study Desk",
      "Writing Desk",
      "Executive Desk",
      "Office Desk",
      "Gaming Desk",
      "Standing Desk",
      "Reception Desk",
      "Corner Desk",
      "Workstation",
    ],

    material_types: [
      "Solid Wood",
      "Engineered Wood",
      "MDF",
      "Plywood",
      "Metal",
      "Glass",
      "Laminate",
    ],

    material_options: [
      {
        id: "desk-material-001",
        category: "Top",
        name: "Engineered Wood",
        subtype: "MDF / Particle Board",
        description:
          "Smooth engineered wood top with a durable laminate finish.",
        properties: ["Scratch Resistant", "Smooth", "Cost Effective"],
      },
      {
        id: "desk-material-002",
        category: "Top",
        name: "Solid Wood",
        subtype: "Seasoned Hardwood",
        description:
          "Solid wood desktop offering premium feel and long service life.",
        properties: ["Premium", "Durable", "Natural Grain"],
      },
      {
        id: "desk-material-003",
        category: "Frame / Legs",
        name: "Metal",
        subtype: "Powder-Coated Steel",
        description:
          "Powder-coated steel frame for rigidity and stability during daily use.",
        properties: ["Rust Resistant", "Stable", "Modern"],
      },
      {
        id: "desk-material-004",
        category: "Finish",
        name: "Laminate",
        subtype: "High-Pressure Laminate",
        description:
          "Protective laminate layer that resists scratches and moisture.",
        properties: [
          "Scratch Resistant",
          "Moisture Resistant",
          "Easy to Clean",
        ],
      },
    ],

    usage_areas: [
      "Home Office",
      "Bedroom",
      "Study Room",
      "Corporate Office",
      "Gaming Room",
      "Classroom",
      "Reception Area",
    ],

    suitable_for: [
      "Students",
      "Professionals",
      "Gamers",
      "Developers",
      "Designers",
      "Office Workers",
      "Remote Workers",
    ],

    size_options: [
      {
        name: "Small",
        code: "SM",
        description:
          "Compact desk suitable for students and small home offices.",
        dimensions: {
          length: 100,
          width: 50,
          height: 75,
          depth: 50,
          leg_height: 70,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: true,
        is_available: true,
      },
      {
        name: "Medium",
        code: "MD",
        description:
          "Mid-size desk with room for a monitor, laptop and accessories.",
        dimensions: {
          length: 120,
          width: 60,
          height: 75,
          depth: 60,
          leg_height: 70,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
      {
        name: "Large",
        code: "LG",
        description:
          "Spacious desk designed for multi-monitor and executive work setups.",
        dimensions: {
          length: 160,
          width: 75,
          height: 75,
          depth: 75,
          leg_height: 70,
          unit: {
            name: "Centimeter",
            code: "cm",
          },
        },
        is_default: false,
        is_available: true,
      },
    ],

    color_options: [
      {
        id: "desk-color-001",
        name: "Natural Oak",
        slug: "natural-oak",
        color_code: "#C19A6B",
        is_active: true,
        sort_order: 1,
      },
      {
        id: "desk-color-002",
        name: "Walnut",
        slug: "walnut",
        color_code: "#5C4033",
        is_active: true,
        sort_order: 2,
      },
      {
        id: "desk-color-003",
        name: "Black",
        slug: "black",
        color_code: "#000000",
        is_active: true,
        sort_order: 3,
      },
      {
        id: "desk-color-004",
        name: "White",
        slug: "white",
        color_code: "#FFFFFF",
        is_active: true,
        sort_order: 4,
      },
    ],

    capacity_options: [
      {
        name: "Workstation Capacity",
        value: 1,
        unit: "person",
        description: "Single-user workstation configuration.",
      },
      {
        name: "Workstation Capacity",
        value: 2,
        unit: "person",
        description: "Shared two-user workstation configuration.",
      },
    ],

    price_range: {
      minimum: 7000,
      maximum: 100000,
      currency: "NPR",
    },

    features: [
      {
        id: "desk-feature-001",
        name: "Cable Management",
        description:
          "Integrated grommets and channels to keep wires organized and out of sight.",
      },
      {
        id: "desk-feature-002",
        name: "Storage Drawers",
        description:
          "Drawer units for storing stationery, documents and accessories.",
      },
      {
        id: "desk-feature-003",
        name: "Ergonomic Height",
        description:
          "Standard 75 cm working height that supports healthy posture.",
      },
      {
        id: "desk-feature-004",
        name: "Sturdy Frame",
        description: "Reinforced frame that stays stable during daily use.",
      },
    ],

    warranty: {
      available: true,
      duration: 1,
      unit: "year",
      description: "Warranty against manufacturing defects.",
    },

    care_instructions: [
      "Wipe the desk surface daily with a soft, dry or slightly damp cloth.",
      "Use a mouse pad and desk mat to reduce surface scratches.",
      "Keep liquids away from edges and wipe spills immediately.",
      "Check and tighten screws and fittings periodically.",
      "Avoid placing excessive weight on the desktop or drawer fronts.",
    ],

    customizable: true,
    made_to_order: true,
    assembly_required: true,

    is_active: true,
    sort_order: 6,

    meta_title: "Desks in Nepal | Office, Study & Computer Desks",
    meta_description:
      "Explore study desks, computer desks, office desks, gaming desks and executive desks in Nepal.",

    faq: [
      {
        title: "Can I order a desk in a custom size?",
        description:
          "Yes, custom desk lengths, depths and heights can be produced to suit your workspace.",
      },
      {
        title: "Do the desks include cable management?",
        description:
          "Most models include cable grommets or cable trays. Additional cable management accessories can be added on request.",
      },
      {
        title: "Is assembly required?",
        description:
          "Yes, desks are delivered flat-packed for safe transport and require basic assembly, which can be arranged during delivery.",
      },
    ],

    created_at: new Date(),
    updated_at: new Date(),
  },
];
