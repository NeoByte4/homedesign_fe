export interface IImage {
  id: string;
  url: string;
}

export interface IVideo {
  id: string;
  url: string;
}

export interface IProduct_Color {
  id: string;
  name: string;
  color_code: string;
}

export interface IFabric {
  id: string;
  name: string;
  image_url: IImage;
}

export interface ProductDimensions {
  name?: string;
  overall: {
    width: number;
    depth: number;
    height: number;
    unit: "in";
  };

  seating?: {
    width: number;
    depth: number;
    height: number;
    unit: "in";
  };

  arm?: {
    width: number;
    depth: number;
    height: number;
    unit: "in";
  };

  swivelMechanism?: {
    diameter: number;
    unit: "in";
  };

  seatHeight?: {
    value: number;
    unit: "in";
  };

  backFrame?: {
    width: number;
    unit: "in";
  };

  weightCapacity?: {
    value: number;
    unit: "lb";
  };

  weight?: {
    value: number;
    unit: "lb";
  };
}
