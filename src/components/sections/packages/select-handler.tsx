"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatText } from "@/src/utils/format-text";

interface Props {
  value?: string;
  options: string[];
  onChange: (s: string) => void;
  placeholder?: string;
}

const SelectHandler = ({ value, options, onChange, placeholder }: Props) => {
  if (!options?.length) return null;

  // Single option → plain label
  if (options.length === 1) {
    return (
      <span className="capitalize px-4 py-2">{formatText(options[0])}</span>
    );
  }

  return (
    <Select
      value={value}
      onValueChange={(selectedValue) => {
        if (selectedValue !== null) onChange(selectedValue);
      }}
    >
      <SelectTrigger>
        <span className="capitalize">
          <SelectValue placeholder={placeholder}>
            {value ? formatText(value) : placeholder}
          </SelectValue>
        </span>
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem className="capitalize" value={opt} key={opt}>
            {formatText(opt)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectHandler;
