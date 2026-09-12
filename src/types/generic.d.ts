export interface IImage {
  id: string;
  url: string;
  alt?: string;
}
export interface IVideo {
  id: string;
  url: string;
  thumbnail_url?: string;
  title?: string;
}

export interface IProductColor {
  id: string;
  name: string;
  color_code: string;
}

export interface IFabric {
  id: string;
  name: string;
  image_url: IImage;
}

export interface IColorOption {
  id: string;
  name: string;
  slug?: string;
  color_code?: string;
  color_image?: IImage;
  is_active?: boolean;
  sort_order?: number;
}

export type DimensionUnit = "mm" | "cm" | "m" | "in" | "ft";

export interface IUnit {
  name: string;
  code: DimensionUnit;
}

export interface IDimensions {
  name?: string;
  length?: number;
  width?: number;
  height?: number;
  depth?: number;
  diameter?: number;
  seat_height?: number;
  seat_width?: number;
  seat_depth?: number;
  armrest_height?: number;
  backrest_height?: number;
  leg_height?: number;
  mattress_length?: number;
  mattress_width?: number;
  drawer_width?: number;
  drawer_height?: number;
  drawer_depth?: number;
  unit: IUnit;
}

export interface ISizeOption {
  name: string;
  code: string;
  dimensions: IDimensions;
  description?: string;
  is_default?: boolean;
  is_available?: boolean;
}
export type CurrencyCode = "NPR" | "USD" | "INR" | "EUR" | "GBP";

export interface IPriceRange {
  minimum: number;
  maximum: number;
  currency: CurrencyCode;
}
export interface IMaterialOption {
  id: string;
  category: string;
  name: string;
  subtype?: string;
  description?: string;
  properties?: string[];
  image?: IImage;
}
export interface IFeature {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}
export interface IWarranty {
  available: boolean;
  duration?: number;
  unit?: "month" | "year";
  description?: string;
}
export interface ICapacityOption {
  name: string;
  value: number;
  unit?: string;
  description?: string;
}

export interface IFaq {
  title: string;
  description: string;
}
