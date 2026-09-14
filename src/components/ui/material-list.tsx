// timeline.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface TimelineItemProps {
  badgeText: string;
  title: string;
  description: string;
  isLast?: boolean;
  children?: React.ReactNode;
}

export interface TimelineProps {
  items: Array<{
    badgeText: string;
    title: string;
    description: string;
    properties?: string[];
  }>;
  className?: string;
}

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  TimelineItemProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      badgeText,
      title,
      description,
      children,
      isLast = false,
      className,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn("relative flex gap-4 md:gap-6 pb-8", className)}
      {...props}
    >
      {!isLast && (
        <div className="absolute left-[38px] md:left-[42px] top-10 h-full w-px border border-primary-dark/30" />
      )}

      <Badge
        variant="outline"
        className="relative z-10 bg-background px-3 py-1 text-sm md:text-base border-2 border-primary-dark/50 font-secondary font-medium h-fit mt-1 min-w-[70px] md:min-w-[85px] justify-center text-center"
      >
        {badgeText}
      </Badge>

      <div className="flex-1 space-y-2 pt-0.5">
        <div>
          <h3 className="text-xl font-semibold tracking-tight font-secondary text-text-primary">
            {title}
          </h3>
        </div>

        <div className="text-text-secondary text-sm md:text-base">
          {description}
        </div>

        {children}
      </div>
    </div>
  ),
);
TimelineItem.displayName = "TimelineItem";

const Timeline = React.forwardRef<
  HTMLDivElement,
  TimelineProps & React.HTMLAttributes<HTMLDivElement>
>(({ items, className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props}>
    {items.map((item, index) => (
      <TimelineItem
        key={index}
        badgeText={item.badgeText}
        title={item.title}
        description={item.description}
        isLast={index === items.length - 1}
      >
        {item.properties && item.properties.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.properties.map((prop, i) => (
              <span
                key={i}
                className="text-xs bg-primary-dark/5 text-primary-dark px-2 py-1 rounded-md font-medium"
              >
                {prop}
              </span>
            ))}
          </div>
        )}
      </TimelineItem>
    ))}
  </div>
));
Timeline.displayName = "Timeline";

export { Timeline, TimelineItem };
