import TitleContentBlock from "@/src/components/contents/title-content-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Ruler } from "lucide-react";
import type { Ifurniture_product } from "@/src/types/types";
import { SpecRow } from "../ui/spec-row";

type Dimension = NonNullable<Ifurniture_product["dimensions"]>[number];

export const ProductDimensions = ({
  dimensions,
}: {
  dimensions?: Dimension[];
}) => {
  if (!dimensions?.length) return null;

  return (
    <div className="mt-8">
      <TitleContentBlock subSubtitle=" Dimensions" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {dimensions.map((dim, idx) => {
          const unit = dim.unit?.code ?? "";
          const isDefault = idx === 0;

          return (
            <Card key={idx} className="border shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Ruler size={16} className="text-blue-500" />
                    {dim.name ?? "Standard"}
                  </CardTitle>
                  {isDefault && (
                    <Badge variant="secondary" className="text-[10px]">
                      Default
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-1.5">
                {(dim.width || dim.depth || dim.height) && (
                  <>
                    <SpecRow label="Width" value={dim.width} unit={unit} />
                    <SpecRow label="Depth" value={dim.depth} unit={unit} />
                    <SpecRow label="Height" value={dim.height} unit={unit} />
                  </>
                )}

                {(dim.seat_width || dim.seat_depth || dim.seat_height) && (
                  <>
                    <Separator className="my-2" />
                    <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wide">
                      Seat
                    </p>
                    <SpecRow label="Width" value={dim.seat_width} unit={unit} />
                    <SpecRow label="Depth" value={dim.seat_depth} unit={unit} />
                    <SpecRow
                      label="Height"
                      value={dim.seat_height}
                      unit={unit}
                    />
                  </>
                )}

                {/* Armrest */}
                {!!dim.armrest_height && (
                  <>
                    <Separator className="my-2" />
                    <SpecRow
                      label="Armrest Height"
                      value={dim.armrest_height}
                      unit={unit}
                    />
                  </>
                )}

                {/* Backrest */}
                {!!dim.backrest_height && (
                  <SpecRow
                    label="Backrest Height"
                    value={dim.backrest_height}
                    unit={unit}
                  />
                )}

                {/* Diameter */}
                {!!dim.diameter && (
                  <>
                    <Separator className="my-2" />
                    <SpecRow
                      label="Diameter"
                      value={dim.diameter}
                      unit={unit}
                    />
                  </>
                )}

                {/* Mattress */}
                {!!dim.mattress_length && (
                  <>
                    <Separator className="my-2" />
                    <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wide">
                      Mattress
                    </p>
                    <SpecRow
                      label="Length"
                      value={dim.mattress_length}
                      unit={unit}
                    />
                    <SpecRow
                      label="Width"
                      value={dim.mattress_width}
                      unit={unit}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
