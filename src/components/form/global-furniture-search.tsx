"use client";

import React, { useEffect, useMemo } from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { Search as SearchIcon } from "lucide-react";
import { FormSelect } from "../ui/form-select";
import { useRouter } from "next/navigation";
import { furniture_product } from "@/src/data/furniture_product";
import { getProductSearchOptions } from "@/src/utils/get-product-search-options";
import { routes } from "@/src/lib/routes";
import { Button } from "@/components/ui/button";

interface FormValues {
  productType: string;
  category: string;
  price: string;
  rating: string;
}

function buildQueryParams(values: FormValues) {
  const params: Record<string, string> = {};

  params.productType = values.productType;
  if (values.category) {
    params.category = values.category;
  }

  if (values.price) {
    const [minPrice, maxPrice] = values.price.split("-").map((n) => n.trim());
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;
  }

  if (values.rating) {
    params.minRating = values.rating;
  }

  return new URLSearchParams(params).toString();
}

const GlobalProductSearch: React.FC = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      productType: "",
      category: "",
      price: "",
      rating: "",
    },
  });

  const selectedProductType = useWatch({ control, name: "productType" });
  const searchOptions = useMemo(
    () =>
      getProductSearchOptions(
        furniture_product,
        selectedProductType || undefined,
      ),
    [selectedProductType],
  );

  useEffect(() => {
    setValue("category", "");
    setValue("price", "");
    setValue("rating", "");
  }, [selectedProductType, setValue]);

  const isProductTypeSelected = Boolean(selectedProductType);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const queryString = buildQueryParams(data);
    router.push(`${routes.products}?${queryString}#results`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch gap-4 md:gap-6 px-6 py-4 w-full max-w-5xl mx-auto border border-[var(--color-border-first)]"
    >
      <div className="flex-1">
        <FormSelect
          name="productType"
          label="Product Type"
          options={searchOptions.productTypes}
          control={control}
          rules={{ required: "Product type is required" }}
          placeholder="Select Product Type"
          error={errors.productType?.message}
          required
        />
      </div>
      <div className="flex-1">
        <FormSelect
          name="category"
          label="Category"
          options={searchOptions.categories}
          control={control}
          placeholder={
            isProductTypeSelected
              ? "Select Category"
              : "Select product type first"
          }
          error={errors.category?.message}
          disabled={!isProductTypeSelected}
        />
      </div>
      <div className="flex-1">
        <FormSelect
          name="price"
          label="Price"
          options={searchOptions.priceOptions}
          control={control}
          placeholder={
            isProductTypeSelected ? "Select Price" : "Select product type first"
          }
          error={errors.price?.message}
          disabled={!isProductTypeSelected}
        />
      </div>
      <div className="flex-1">
        <FormSelect
          name="rating"
          label="Rating"
          options={searchOptions.ratingOptions}
          control={control}
          placeholder={
            isProductTypeSelected
              ? "Select Rating"
              : "Select product type first"
          }
          error={errors.rating?.message}
          disabled={!isProductTypeSelected}
        />
      </div>
      <div className="flex items-end w-full sm:w-auto">
        <Button type="submit">
          <SearchIcon size={18} />
          Search
        </Button>
      </div>
    </form>
  );
};

export default GlobalProductSearch;
