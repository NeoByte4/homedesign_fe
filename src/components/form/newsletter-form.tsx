"use client";
import React, { useState } from "react";
import StyledButton from "../ui/styled-button";
import { Loader, MoveUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { INewsletterSchema } from "@/src/schemas/newsletter-validation";
import FormElementsWrapper from "../ui/form-elements-wrapper";
import { Input } from "@/components/ui/input";
const defaultValues = {
  email: "",
};
interface props {
  mode?: "row" | "col";
}

const NewsletterForm = ({ mode = "row" }: props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<INewsletterSchema>({
    defaultValues,
  });

  const onSubmit = async (formData: INewsletterSchema) => {
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex items-center gap-4 ${mode === "col" ? "flex-col" : ""}`}
    >
      <div className="flex-1 w-full">
        <FormElementsWrapper name="email" error={errors.email?.message}>
          <Input
            {...register("email")}
            placeholder={"Enter your email address"}
          />
        </FormElementsWrapper>
      </div>
      <div
        className={`${mode === "col" ? "w-full flex items-center justify-end" : ""} `}
      >
        <StyledButton
          iconStyle={isSubmitting ? "animate-spin" : ""}
          icon={isSubmitting ? Loader : MoveUpRight}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? `Subscribing...` : `Subscribe Now`}
        </StyledButton>
      </div>
    </form>
  );
};

export default NewsletterForm;
