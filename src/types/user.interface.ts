import { IImage } from "./generic";

//    USER ROLE

export type UserRole = "customer" | "admin" | "manager";

//    USER STATUS

export type UserStatus = "active" | "blocked" | "pending";

//    AUTH PROVIDER

export type AuthProvider = "email" | "google" | "facebook";

//    USER ADDRESS

export interface IUserAddress {
  id: string;
  full_name: string;
  phone: string;
  province: string;
  district: string;
  city: string;
  ward_no?: number;
  street_address: string;
  landmark?: string;
  postal_code?: string;
  latitude?: number;
  longitude?: number;
  is_default: boolean;
}

//    SOCIAL LOGIN INFORMATION

export interface ISocialLogin {
  provider: AuthProvider;
  provider_id: string;
  email?: string;
  profile_image?: string;
  connected_at: Date;
}

//    USER PROFILE

export interface IUserProfile {
  gender?: "male" | "female" | "other";
  date_of_birth?: Date;
  bio?: string;
  profile_image?: IImage;
  cover_image?: IImage;
}

//    MAIN USER INTERFACE

export interface IUserData {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  password?: string;
  role: UserRole;
  status: UserStatus;
  avatar?: IImage;
  profile?: IUserProfile;
  auth_provider: AuthProvider;
  social_accounts?: ISocialLogin[];
  is_email_verified: boolean;
  is_phone_verified: boolean;
  wishlist_product_ids?: string[];
  cart_id?: string;
  addresses?: IUserAddress[];
  last_login_at?: Date;
  created_at: Date;
  updated_at: Date;
}
