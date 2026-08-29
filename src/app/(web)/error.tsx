"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { routes } from "@/src/lib/routes";
import PageErrorSection from "@/src/components/notifiers/page-error-section";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <PageErrorSection
      icon={AlertCircle}
      title="Something went wrong!"
      subtitle="We couldn’t load this page right now. Please try again later."
      cta={{
        label: "Return Home",
        href: "/",
        variant: "secondary",
      }}
      suggestions={[
        { label: "Furniture Page", href: routes.furniture },
        { label: "Home Design Page", href: routes.HomeDesign },
        { label: "About Us Page", href: routes.AboutUs },
      ]}
    />
  );
}
