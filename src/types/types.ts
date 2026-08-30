import { IImage, IVideo } from "./generic";

export interface IHomePage {
  id: string;
  title?: string;
  subtitle?: string;
  video_url?: IVideo;
  image_url?: IImage[];
}
