import { Box } from "lucide-react";
import React from "react";
import type { IDimensions, ISizeOption } from "@/src/types/generic";

interface Props {
  data?: ISizeOption[];
}

const DIMENSION_LABELS: Partial<Record<keyof IDimensions, string>> = {
  length: "Length",
  width: "Width",
  height: "Height",
  depth: "Depth",
  diameter: "Diameter",
  seat_height: "Seat Height",
  seat_width: "Seat Width",
  seat_depth: "Seat Depth",
  armrest_height: "Armrest Height",
  backrest_height: "Backrest Height",
  leg_height: "Leg Height",
  mattress_length: "Mattress Length",
  mattress_width: "Mattress Width",
  drawer_width: "Drawer Width",
  drawer_height: "Drawer Height",
  drawer_depth: "Drawer Depth",
};

const DimensionRow = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) => (
  <div className="flex items-center justify-between py-1.5 border-b border-dashed border-text-secondary/20 last:border-b-0">
    <span className="text-sm md:text-base text-text-secondary">{label}</span>
    <span className="text-sm md:text-base font-semibold text-text-primary">
      {value} {unit}
    </span>
  </div>
);

const DimensionsList = ({ dimensions }: { dimensions: IDimensions }) => {
  const unitCode = dimensions.unit?.code ?? "";

  const entries = (Object.keys(DIMENSION_LABELS) as (keyof IDimensions)[])
    .map((key) => {
      const value = dimensions[key];
      if (typeof value !== "number") return null;
      return (
        <DimensionRow
          key={key}
          label={DIMENSION_LABELS[key]!}
          value={value}
          unit={unitCode}
        />
      );
    })
    .filter(Boolean);

  if (entries.length === 0) {
    return (
      <p className="text-sm text-text-secondary">
        Dimensions will be updated shortly.
      </p>
    );
  }

  return <div className="flex flex-col">{entries}</div>;
};

const Dimension3DimageSection: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) return null;

  const active = data.find((item) => item.is_default) ?? data[0];

  return (
    <section className="bg-primary-dark/5 rounded-xl p-3 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-1 bg-bg rounded-lg px-5 py-4 text-text-secondary">
          <h3 className="text-2xl font-bold flex items-center gap-2 font-secondary mb-2 text-text-primary">
            Dimensions
          </h3>

          {active?.dimensions ? (
            <DimensionsList dimensions={active.dimensions} />
          ) : (
            "Dimensions will be updated shortly."
          )}
        </div>

        <div className="md:col-span-2 bg-bg rounded-lg px-5 py-4 text-text-secondary">
          <h3 className="text-2xl font-bold flex items-center gap-2 font-secondary mb-2 text-text-primary">
            <Box size={32} />
            3D View
          </h3>
          <div className="flex items-center justify-center min-h-[220px] md:min-h-[300px] rounded-lg border-2 border-dashed border-text-secondary/20">
            <div className="flex flex-col items-center gap-2 text-text-secondary">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-text-secondary/40 flex items-center justify-center">
                <span className="text-lg font-bold">3D</span>
              </div>
              <p className="text-sm md:text-base">3D View Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dimension3DimageSection;
