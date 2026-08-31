import {
  IFabric,
  IImage,
  IProduct_Color,
  IVideo,
  ProductDimensions,
} from "./generic";
import { TiptapDocument } from "./tiptap";

export interface IHomePage {
  id: string;
  title?: string;
  subtitle?: string;
  video_url?: IVideo;
  image_url?: IImage[];
}
export interface Ifurniture_product {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  images_url: IImage[];
  video_url?: IVideo[];
  price_range: string;
  discount?: number;
  price?: number;
  color?: IProduct_Color[];
  fabric?: IFabric[];
  description_content?: TiptapDocument;
  dimensions?: ProductDimensions[];
}
