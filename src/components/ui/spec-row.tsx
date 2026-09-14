import { cn } from "@/lib/utils";

interface SpecRowProps {
  label: string;
  value?: string | number | null;
  unit?: string;
  className?: string;
}

export const SpecRow = ({ label, value, unit, className }: SpecRowProps) => {
  if (value == null || value === "") return null;

  return (
    <div className={cn("flex items-center justify-between gap-2", className)}>
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-medium text-foreground">
        {value}
        {unit ? ` ${unit}` : ""}
      </span>
    </div>
  );
};
