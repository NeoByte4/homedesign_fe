import { LucideIcon, PackageCheck, Truck, Wrench } from "lucide-react";

export interface IServicesIcons {
  key: string;
  icon: LucideIcon;
}
export const servicesIcons = [
  { key: "setup", icon: PackageCheck },
  { key: "delivery", icon: Truck },
  { key: "servicing", icon: Wrench },
];
