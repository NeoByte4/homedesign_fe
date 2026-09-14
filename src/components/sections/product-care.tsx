import { AlertCircle, Check, Heart, Wrench } from "lucide-react";
import { SectionWrapper } from "../ui/section-wrapper";

interface ProductCareProps {
  careInstructions?: string[];
  maintenanceInstructions?: string[];
}

export const ProductCare = ({
  careInstructions,
  maintenanceInstructions,
}: ProductCareProps) => {
  if (!careInstructions?.length && !maintenanceInstructions?.length)
    return null;

  return (
    <div className="mt-8">
      <SectionWrapper
        title="Care & Maintenance"
        icon={<Wrench size={18} className="text-amber-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careInstructions && careInstructions.length > 0 && (
            <div>
              <p className="font-semibold text-sm mb-2 flex items-center gap-1">
                <Heart size={14} className="text-red-500" />
                Care Instructions
              </p>
              <ul className="space-y-1.5">
                {careInstructions.map((inst, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-text-secondary"
                  >
                    <Check
                      size={12}
                      className="text-green-500 mt-0.5 flex-shrink-0"
                    />
                    {inst}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {maintenanceInstructions && maintenanceInstructions.length > 0 && (
            <div>
              <p className="font-semibold text-sm mb-2 flex items-center gap-1">
                <Wrench size={14} className="text-blue-500" />
                Maintenance
              </p>
              <ul className="space-y-1.5">
                {maintenanceInstructions.map((inst, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-text-secondary"
                  >
                    <AlertCircle
                      size={12}
                      className="text-amber-500 mt-0.5 flex-shrink-0"
                    />
                    {inst}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};
