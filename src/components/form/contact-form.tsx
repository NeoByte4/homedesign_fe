"use client";
import React, { useState } from "react";

import StyledButton from "../ui/styled-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import FormElementsWrapper from "../ui/form-elements-wrapper";
import { Input } from "@/components/ui/input";
import { Loader, MoveUpRight } from "lucide-react";

import toast from "react-hot-toast";
import {
  contactFormSchema,
  IContactFormSchema,
} from "@/src/schemas/contact-form-validation";
import { siteDetails } from "@/src/data/site-details";

const defaultValues: IContactFormSchema = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  allowSubsciption: false,
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async (formData: IContactFormSchema) => {
    const toastId = toast.loading(
      "Processing request for your travel plans...",
    );
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`Failed to submit: ${response.status}`);

      const data = await response.json();
      toast.success(
        "Your travel plans are in safe hands. We’ll be in touch shortly!",
        {
          id: toastId,
        },
      );

      reset();
      return data;
    } catch (err) {
      toast.error(
        "Something went wrong. Please try submitting your request again!",
        {
          id: toastId,
        },
      );

      console.error(err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-lg p-4 flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormElementsWrapper
            required
            name="firstName"
            label="First Name"
            error={errors.firstName?.message}
          >
            <Input {...register("firstName")} placeholder="Alex" />
          </FormElementsWrapper>

          <FormElementsWrapper
            required
            name="lastName"
            label="Last Name"
            error={errors.lastName?.message}
          >
            <Input {...register("lastName")} placeholder="Karakou" />
          </FormElementsWrapper>
        </div>

        <FormElementsWrapper
          required
          name="email"
          label="Email"
          error={errors.email?.message}
        >
          <Input {...register("email")} placeholder={siteDetails.email} />
        </FormElementsWrapper>

        <FormElementsWrapper
          required
          name="message"
          label="Message"
          error={errors.message?.message}
        >
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className="border rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary-dark/25 bg-bg"
            placeholder="We’d love to hear about your dream destination or the experiences you’d like to include..."
          />
        </FormElementsWrapper>

        <label className="flex items-center cursor-pointer gap-2">
          <input type="checkbox" {...register("allowSubsciption")} />
          <span className="text-sm text-text-secondary">
            Keep me updated with travel ideas and exclusive deals
          </span>
        </label>

        <StyledButton
          iconStyle={isSubmitting ? "animate-spin" : ""}
          icon={isSubmitting ? Loader : MoveUpRight}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? `Submitting...` : `Let's Start Planning`}
        </StyledButton>
      </form>
    </>
  );
};

export default ContactForm;
