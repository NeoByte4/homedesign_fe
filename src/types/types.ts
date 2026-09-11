import {
  IFabric,
  IFaq,
  IImage,
  IProduct_Color,
  IVideo,
  ProductDimensions,
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
  image_url?: IImage[];
  is_active: boolean;
  sort_order: number;
  meta_title?: string;
  meta_description?: string;
  created_at: Date;
  updated_at: Date;
  faq?: IFaq[];
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
  color?: IProduct_Color[];
  fabric?: IFabric[];
  description_content?: TiptapDocument;
  dimensions?: ProductDimensions[];
  inclusion_icons?: string[];
}
