import {
  IColorOption,
  IFabric,
  IFaq,
  IImage,
  IVideo,
  ISizeOption,
  IDimensions,
  IPriceRange,
  IMaterialOption,
  IFeature,
  IWarranty,
  ICapacityOption,
  CurrencyCode,
  IProductVariant,
} from "./generic";
import { TiptapDocument } from "./tiptap";

export interface IBannerData {
  id: string;
  title: string;
  subtitle: string;
  video_url?: string;
  image_url?: string;
}
export interface IFurnitureProductType {
  id: string;
  name: string;
  slug: string;
  subtitle?: string;
  description?: string;
  banner_images?: IImage[];
  thumbnail_image?: IImage;
  available_types?: string[];
  usage_areas?: string[];
  suitable_for?: string[];
  material_types?: string[];
  material_options?: IMaterialOption[];
  size_options?: ISizeOption[];
  color_options?: IColorOption[];
  capacity_options?: ICapacityOption[];
  price_range?: IPriceRange;
  features?: IFeature[];
  warranty?: IWarranty;
  care_instructions?: string[];
  customizable?: boolean;
  made_to_order?: boolean;
  assembly_required?: boolean;
  is_active: boolean;
  sort_order: number;
  meta_title?: string;
  meta_description?: string;
  faq?: IFaq[];
  created_at: Date;
  updated_at: Date;
}

export interface Ifurniture_product {
  id: string;
  name: string;
  subtitle: string;
  slug: string;
  category: string[];
  productType: string;
  short_description?: string;
  description_content?: TiptapDocument;

  furniture_type_id?: string; // Foreign Key -> IFurnitureType._id
  collection_id?: string;
  tags?: string[];

  images_url: IImage[];
  video_url?: IVideo[];
  inclusion_icons?: string[]; // URLs or keys for feature badges
  model_3d_url?: string;

  price?: number;
  compare_at_price?: number;
  discount?: number;
  price_range: string;
  price_range_structured?: IPriceRange;
  currency?: CurrencyCode;
  is_available?: boolean;
  stock_quantity?: number;

  has_variants?: boolean;
  variants?: IProductVariant[];
  color?: IColorOption[]; // Active selected colors
  color_options?: IColorOption[]; // Full available palette options
  fabric?: IFabric[];
  materials?: IMaterialOption[];
  size_options?: ISizeOption[];
  capacity_options?: ICapacityOption[];

  dimensions?: IDimensions[];
  features?: IFeature[];
  seating_capacity?: number[];
  weight_capacity_kg?: number;
  environment?: ("indoor" | "outdoor" | "semi_outdoor")[];

  is_customizable?: boolean;
  assembly_required?: boolean;
  assembly_estimated_minutes?: number;
  is_adjustable?: boolean;
  is_foldable?: boolean;
  is_stackable?: boolean;
  is_reclining?: boolean;

  warranty?: IWarranty;
  care_instructions?: string[];
  maintenance_instructions?: string[];

  faqs?: IFaq[];

  rating?: number;
  created_at?: Date;
  updated_at?: Date;
}
