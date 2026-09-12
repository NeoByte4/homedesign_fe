"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface FilterDropdownProps {
  label: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FilterDropdown = ({
  label,
  count,
  defaultOpen = false,
  children,
  className,
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("border rounded-md overflow-hidden", className)}
    >
      <CollapsibleTrigger
        className={cn(
          "flex w-full items-center justify-between h-auto px-3 py-2.5",
          "bg-bg hover:bg-muted/40",
          "rounded-none text-sm font-medium",
        )}
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          {label}
          {typeof count === "number" && count > 0 && (
            <Badge
              variant="secondary"
              className="min-w-5 h-5 px-1.5 justify-center bg-primary-dark/10 text-primary-dark hover:bg-primary-dark/10"
            >
              {count}
            </Badge>
          )}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            "text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </CollapsibleTrigger>

      <CollapsibleContent
        className={cn(
          "overflow-hidden",
          "data-[state=closed]:animate-collapsible-up",
          "data-[state=open]:animate-collapsible-down",
        )}
      >
        <div className="px-3 pb-3 pt-1 border-t">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterDropdown;
