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
  category: string[];
  productType: string;
  slug: string;
  faqs?: IFaq[];
  subtitle: string;
  images_url: IImage[];
  video_url?: IVideo[];
  rating?: number;
  price_range: string;
  discount?: number;
  price?: number;
  color?: IColorOption[];
  color_options?: IColorOption[];
  fabric?: IFabric[];
  description_content?: TiptapDocument;
  dimensions?: IDimensions[];
  inclusion_icons?: string[];
}
