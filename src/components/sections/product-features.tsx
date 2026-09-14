import HeadingText from "../ui/heading-text";
import type { Ifurniture_product } from "@/src/types/types";

export const ProductFeatures = ({
  features,
  title = "Key Features",
}: {
  features: Ifurniture_product["features"];
  title?: string;
}) => {
  if (!features?.length) return null;

  return (
    <section className="mt-8 mb-8">
      <HeadingText level={3} className="mb-4">
        {title}
      </HeadingText>
      <ul className="space-y-4">
        {features.map((feat) => {
          return (
            <li key={feat.id} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900 block">
                  {feat.name}
                </span>
                {feat.description && (
                  <span className="text-sm text-gray-500 leading-relaxed block mt-0.5">
                    {feat.description}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
