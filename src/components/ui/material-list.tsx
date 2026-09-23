import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface MaterialListItemProps {
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
  properties?: string[];
}

export interface MaterialListProps {
  items: Array<{
    title: string;
    description: string;
    properties?: string[];
  }>;
  className?: string;
}

type MaterialListItemElementProps = MaterialListItemProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "title">;

type MaterialListElementProps = MaterialListProps &
  React.HTMLAttributes<HTMLDivElement>;

const MaterialListItem = React.forwardRef<
  HTMLDivElement,
  MaterialListItemElementProps
>(
  (
    {
      title,
      description,
      index,
      properties,
      isLast = false,
      className,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "group relative flex gap-4 md:gap-6 pb-10 last:pb-0",
        className,
      )}
      {...props}
    >
      {!isLast && (
        <div
          aria-hidden
          className="absolute left-[27px] md:left-[31px] top-14 bottom-0 w-px bg-gradient-to-b from-primary-dark/40 to-primary-dark/10"
        />
      )}

      <Badge
        variant="outline"
        className="relative z-10 bg-background px-3 py-1 text-lg border-2 border-primary-dark font-secondary font-medium h-fit mt-2"
      >
        {String(index).padStart(2, "0")}
      </Badge>

      <div className="flex-1 space-y-1.5 pt-1 md:pt-2">
        <h3 className="font-secondary text-lg font-semibold tracking-tight text-text-primary md:text-xl">
          {title}
        </h3>

        {description && (
          <p className="text-sm leading-relaxed text-text-secondary md:text-base">
            {description}
          </p>
        )}

        {properties && properties.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {properties.map((prop, i) => (
              <span
                key={i}
                className="rounded-full bg-primary-dark/5 px-3 py-1 text-xs font-medium text-primary-dark ring-1 ring-inset ring-primary-dark/10"
              >
                {prop}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  ),
);
MaterialListItem.displayName = "MaterialListItem";

const MaterialList = React.forwardRef<HTMLDivElement, MaterialListElementProps>(
  ({ items, className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-0", className)} {...props}>
      {items.map((item, index) => (
        <MaterialListItem
          key={index}
          title={item.title}
          description={item.description}
          properties={item.properties}
          index={index + 1}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  ),
);
MaterialList.displayName = "MaterialList";

export { MaterialList, MaterialListItem };
