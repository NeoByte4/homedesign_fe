import { servicesIcons } from "@/src/data/services-icons";
import React from "react";

const ServicesIcon = ({
  inclusion_icons,
  iconSize = 20,
}: {
  inclusion_icons?: string[];
  iconSize?: number;
}) => {
  if (!inclusion_icons || inclusion_icons.length === 0) return;

  return (
    <>
      {inclusion_icons?.map((icn: string) => {
        const IconObj = servicesIcons.find((t) => t.key === icn);
        if (!IconObj) return null;
        const Icon = IconObj.icon;
        return <Icon key={icn} size={iconSize} />;
      })}
    </>
  );
};

export default ServicesIcon;
