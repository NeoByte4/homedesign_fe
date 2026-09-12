"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Loader, MoveUpRight, RotateCcw, Search } from "lucide-react";
import toast from "react-hot-toast";
import StyledButton from "../ui/styled-button";
import FormElementsWrapper from "../ui/form-elements-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FilterDropdown,
  FilterCheckboxList,
  FilterRadioList,
  FilterPriceRange,
  ColorSwatchGroup,
} from "./filters";
import { FurnitureProductType } from "@/src/data/furniture_types";
import { siteDetails } from "@/src/data/site-details";
import { routes } from "@/src/lib/routes";
import {
  PRICE_MAX,
  PRICE_MIN,
  filterFormDefaults,
  filterFormSchema,
  parseFilterSearchParams,
  buildFilterSearchParams,
  type IFilterFormInput,
  type IFilterFormOutput,
} from "@/src/lib/filters/filter-schema";

const ALL_CATEGORIES = FurnitureProductType.filter((c) => c.is_active).sort(
  (a, b) => a.sort_order - b.sort_order,
);

const uniqueStrings = (values: (string | undefined)[]): string[] =>
  Array.from(new Set(values.filter(Boolean) as string[]));

const FilterPanel = () => {
  const router = useRouter();
  const pathname = usePathname() || routes.furniture;
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFilterFormInput, undefined, IFilterFormOutput>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: filterFormDefaults,
  });

  const selectedCategory = watch("category");
  const productTypesValue = watch("productTypes");
  const materialsValue = watch("materials");
  const colorsValue = watch("colors");
  const usageAreasValue = watch("usageAreas");

  useEffect(() => {
    if (!searchParams) return;
    reset(parseFilterSearchParams(searchParams));
  }, [searchParams, reset]);

  const {
    productTypeOptions,
    materialOptions,
    colorOptions,
    usageAreaOptions,
  } = useMemo(() => {
    const cats = selectedCategory
      ? ALL_CATEGORIES.filter((c) => c.slug === selectedCategory)
      : ALL_CATEGORIES;

    return {
      productTypeOptions: uniqueStrings(
        cats.flatMap((c) => c.available_types ?? []),
      ),
      materialOptions: uniqueStrings(
        cats.flatMap((c) => c.material_types ?? []),
      ),
      colorOptions: cats.flatMap((c) => c.color_options ?? []),
      usageAreaOptions: uniqueStrings(cats.flatMap((c) => c.usage_areas ?? [])),
    };
  }, [selectedCategory]);

  useEffect(() => {
    setValue("productTypes", []);
    setValue("materials", []);
    setValue("colors", []);
    setValue("usageAreas", []);
  }, [selectedCategory, setValue]);

  const onSubmit = async (formData: IFilterFormOutput) => {
    const toastId = toast.loading("Applying filters...");
    setIsSubmitting(true);
    try {
      const params = buildFilterSearchParams(formData);
      const qs = params.toString();
      console.log("🌐 Backend query:", Object.fromEntries(params.entries()));
      router.push(`${pathname}${qs ? `?${qs}` : ""}#results`, {
        scroll: false,
      });
      toast.success("Filters applied successfully.", { id: toastId });
    } catch (err) {
      toast.error("Could not apply filters. Please try again.", {
        id: toastId,
      });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset(filterFormDefaults);
    router.push(`${pathname}#results`, { scroll: false });
    toast.success("Filters cleared.");
  };
  const categoryOptions = [
    { value: "", label: "All Categories" },
    ...ALL_CATEGORIES.map((c) => ({ value: c.slug, label: c.name })),
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border rounded-lg p-4 flex flex-col gap-4 bg-bg"
    >
      {/* Keyword */}
      <FormElementsWrapper
        name="keyword"
        label="Search Products"
        error={errors.keyword?.message}
      >
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            {...register("keyword")}
            placeholder="Search sofa, table, bed..."
            className="pl-9"
          />
        </div>
      </FormElementsWrapper>

      {/* Category */}
      <FilterDropdown label="Category" count={selectedCategory ? 1 : 0}>
        <FilterRadioList
          control={control}
          name="category"
          options={categoryOptions}
          idPrefix="cat"
        />
        {errors.category?.message && (
          <p className="text-xs text-destructive mt-2">
            {errors.category.message}
          </p>
        )}
      </FilterDropdown>

      {/* Product Types */}
      {productTypeOptions.length > 0 && (
        <FilterDropdown
          label="Product Type"
          count={productTypesValue?.length ?? 0}
        >
          <FilterCheckboxList
            control={control}
            name="productTypes"
            options={productTypeOptions}
          />
        </FilterDropdown>
      )}

      {/* Materials */}
      {materialOptions.length > 0 && (
        <FilterDropdown label="Material" count={materialsValue?.length ?? 0}>
          <FilterCheckboxList
            control={control}
            name="materials"
            options={materialOptions}
          />
        </FilterDropdown>
      )}

      {/* Colours — multi-select by default */}
      {colorOptions.length > 0 && (
        <FilterDropdown label="Colour" count={colorsValue?.length ?? 0}>
          <Controller
            control={control}
            name="colors"
            render={({ field }) => (
              <ColorSwatchGroup
                options={colorOptions}
                value={field.value ?? []}
                onValueChange={field.onChange}
                size="md"
                showLabels
                maxHeight="15rem"
                columnsClassName="grid-cols-4 sm:grid-cols-5"
              />
            )}
          />
        </FilterDropdown>
      )}

      {/* Usage Areas */}
      {usageAreaOptions.length > 0 && (
        <FilterDropdown label="Usage Area" count={usageAreasValue?.length ?? 0}>
          <FilterCheckboxList
            control={control}
            name="usageAreas"
            options={usageAreaOptions}
          />
        </FilterDropdown>
      )}

      {/* Price Range */}
      <FormElementsWrapper
        name="minPrice"
        label="Price Range (NPR)"
        error={errors.minPrice?.message ?? errors.maxPrice?.message}
      >
        <FilterPriceRange
          control={control}
          register={register}
          minName="minPrice"
          maxName="maxPrice"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={1000}
          currency="NPR"
        />
      </FormElementsWrapper>

      {/* Sort By */}
      <FormElementsWrapper name="sortBy" label="Sort By">
        <select
          {...register("sortBy")}
          className="w-full border rounded-md p-2 bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-primary-dark/25"
        >
          <option value="recommended">Recommended</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="newest">Newest First</option>
        </select>
      </FormElementsWrapper>

      {/* Availability */}
      <div className="flex flex-col gap-3">
        <label className="flex items-center cursor-pointer gap-2">
          <input type="checkbox" {...register("inStockOnly")} />
          <span className="text-sm text-text-secondary">
            Show only in-stock items
          </span>
        </label>

        <label className="flex items-center cursor-pointer gap-2">
          <input type="checkbox" {...register("customizableOnly")} />
          <span className="text-sm text-text-secondary">
            Show only customizable items
          </span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <StyledButton
          iconStyle={isSubmitting ? "animate-spin" : ""}
          icon={isSubmitting ? Loader : MoveUpRight}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Applying..." : "Apply Filters"}
        </StyledButton>

        <Button
          type="button"
          variant="outline"
          onClick={handleReset}
          disabled={isSubmitting}
          className="flex-1 gap-2"
        >
          <RotateCcw size={16} />
          Reset
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Need help choosing? Email us at{" "}
        <a
          href={`mailto:${siteDetails.email}`}
          className="underline hover:text-foreground"
        >
          {siteDetails.email}
        </a>
        .
      </p>
    </form>
  );
};

export default FilterPanel;
