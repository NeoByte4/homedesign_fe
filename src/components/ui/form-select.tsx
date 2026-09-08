"use client";

import * as React from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import FormElementsWrapper from "./form-elements-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectPortal } from "@radix-ui/react-select";

interface Option {
  label: string;
  value: string;
}

interface FormSelectProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  label: string;
  options: Option[];
  control: Control<TFieldValues>;
  placeholder?: string;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export function FormSelect<TFieldValues extends FieldValues>({
  name,
  label,
  options,
  control,
  placeholder,
  rules,
  required = false,
  error,
  disabled = false,
}: FormSelectProps<TFieldValues>) {
  return (
    <FormElementsWrapper
      label={label}
      name={name}
      required={required}
      error={error}
    >
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            value={typeof field.value === "string" ? field.value : ""}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder || "Select option"} />
            </SelectTrigger>
            <SelectPortal>
              <SelectContent className="z-[1001]">
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        )}
      />
    </FormElementsWrapper>
  );
}
