import {
  LayoutDashboard,
  ShoppingBag,
  Sofa,
  Boxes,
  Users,
  Truck,
  CreditCard,
  Star,
  MessageSquare,
  BriefcaseBusiness,
  BarChart3,
  Settings,
  Bell,
  LogOut,
} from "lucide-react";

export const managerSidebarMenu = [
  {
    section: "Dashboard",
    items: [
      {
        title: "Dashboard Overview",
        href: "/manager/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    section: "Store Management",
    items: [
      {
        title: "Products",
        href: "/manager/products",
        icon: Sofa,
      },
      {
        title: "Categories",
        href: "/manager/categories",
        icon: Boxes,
      },
      {
        title: "Inventory",
        href: "/manager/inventory",
        icon: Boxes,
      },
    ],
  },

  {
    section: "Sales",
    items: [
      {
        title: "Orders",
        href: "/manager/orders",
        icon: ShoppingBag,
      },
      {
        title: "Returns & Refunds",
        href: "/manager/returns",
        icon: Truck,
      },
      {
        title: "Payments",
        href: "/manager/payments",
        icon: CreditCard,
      },
    ],
  },

  {
    section: "Customers",
    items: [
      {
        title: "Customers",
        href: "/manager/customers",
        icon: Users,
      },
      {
        title: "Reviews",
        href: "/manager/reviews",
        icon: Star,
      },
      {
        title: "Support Tickets",
        href: "/manager/support",
        icon: MessageSquare,
      },
    ],
  },

  {
    section: "Careers",
    items: [
      {
        title: "Job Applications",
        href: "/manager/jobs",
        icon: BriefcaseBusiness,
      },
    ],
  },

  {
    section: "Reports",
    items: [
      {
        title: "Sales Analytics",
        href: "/manager/analytics",
        icon: BarChart3,
      },
      {
        title: "Notifications",
        href: "/manager/notifications",
        icon: Bell,
      },
      {
        title: "Settings",
        href: "/manager/settings",
        icon: Settings,
      },
    ],
  },
];

export const managerLogoutMenu = {
  title: "Logout",
  href: "/logout",
  icon: LogOut,
};
