import {
  User,
  ShoppingBag,
  MapPin,
  CreditCard,
  Heart,
  PackageX,
  Star,
  BriefcaseBusiness,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";

export const customerSidebarMenu = [
  {
    title: "My Profile",
    href: "/dashboard/profile",
    icon: User,
  },

  {
    title: "My Orders",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    title: "Address Book",
    href: "/dashboard/addresses",
    icon: MapPin,
  },
  {
    title: "Returns & Cancellations",
    href: "/dashboard/cancellations",
    icon: PackageX,
  },
  {
    title: "save items",
    href: "/dashboard/wishlist",
    icon: Heart,
  },
  {
    title: "Payment Methods",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "My Reviews",
    href: "/dashboard/reviews",
    icon: Star,
  },

  {
    title: "Support Tickets",
    href: "/dashboard/support",
    icon: MessageCircle,
  },

  {
    title: "Careers / Jobs",
    href: "/dashboard/careers",
    icon: BriefcaseBusiness,
  },

  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export const logoutMenu = {
  title: "Logout",
  href: "/logout",
  icon: LogOut,
};
