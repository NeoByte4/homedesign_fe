"use client";

import TitleContentBlock from "@/src/components/contents/title-content-block";
import ErrorTextSection from "@/src/components/notifiers/error-text-section";
import type { Ifurniture_product } from "@/src/types/types";
import { Timeline } from "../ui/material-list";

interface Props {
  materials: Ifurniture_product["materials"];
}

export const ProductMaterials = ({ materials }: Props) => {
  return (
    <>
      <div className="md:max-w-3xl mb-8">
        <TitleContentBlock
          title="Materials & Construction"
          description="Premium materials carefully selected for durability, comfort, and style — every component crafted to perfection."
        />
      </div>

      {materials && materials.length > 0 ? (
        <Timeline
          items={materials.map((mat) => ({
            badgeText: mat.category,
            title: mat.subtype ? `${mat.name} — ${mat.subtype}` : mat.name,
            description: mat.description ?? "",
            properties: mat.properties,
          }))}
        />
      ) : (
        <ErrorTextSection item="Materials" parent="product" />
      )}
    </>
  );
};
