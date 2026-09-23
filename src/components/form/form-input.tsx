"use client";

import * as React from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import FormElementsWrapper from "../ui/form-elements-wrapper";

interface FormInputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  label: string;
  control: Control<TFieldValues>;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export function FormInput<TFieldValues extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  type = "text",
  rules,
  required = false,
  error,
  disabled = false,
}: FormInputProps<TFieldValues>) {
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
          <Input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={field.value ?? ""}
            className="h-11 border-border-first bg-bg text-text-primary placeholder:text-text-secondary focus-visible:ring-primary"
          />
        )}
      />
    </FormElementsWrapper>
  );
}
