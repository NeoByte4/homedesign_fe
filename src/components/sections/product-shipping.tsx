import { Truck, Wrench } from "lucide-react";
import { SectionWrapper } from "../ui/section-wrapper";
import type { Ifurniture_product } from "@/src/types/types";

export const ProductShipping = ({
  assemblyRequired,
  assemblyMinutes,
}: {
  assemblyRequired?: boolean;
  assemblyMinutes?: number;
}) => (
  <div className="mt-8">
    <SectionWrapper
      title="Shipping & Assembly"
      icon={<Truck size={18} className="text-cyan-500" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
          <Truck size={20} className="text-cyan-600 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Delivery</p>
            <p className="text-xs text-text-secondary mt-0.5">
              Available within Kathmandu Valley. Free delivery for orders above
              RS 1,000.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
          <Wrench size={20} className="text-cyan-600 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Assembly</p>
            <p className="text-xs text-text-secondary mt-0.5">
              {assemblyRequired
                ? `Assembly required (~${assemblyMinutes} minutes). Tools and instructions included.`
                : "No assembly required. Ready to use."}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
);
