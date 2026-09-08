import {
  IFabric,
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
export interface Ifurniture_product {
  id: string;
  name: string;
  category: string[];
  productType: string;
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
