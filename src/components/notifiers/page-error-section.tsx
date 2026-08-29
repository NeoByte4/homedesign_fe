import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { AlertCircle, LucideIcon } from "lucide-react";
import { routes } from "@/src/lib/routes";
import ContainerLayout from "../layouts/container-layout";
import HeadingText from "../ui/heading-text";

interface PageErrorSectionProps {
  icon?: LucideIcon;
  title?: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
    variant?: "default" | "secondary" | "outline" | "ghost";
  };
  suggestions?: { label: string; href: string }[];
}

const PageErrorSection: React.FC<PageErrorSectionProps> = ({
  icon: Icon = AlertCircle,
  title = "Something went wrong!",
  subtitle = "We couldn’t load this page at the moment. Please try again later.",
  cta = { label: "Return Home", href: "/", variant: "secondary" },
  suggestions = [
    { label: "Furniture Page", href: routes.furniture },
    { label: "Home Design Page", href: routes.HomeDesign },
    { label: "About Us Page", href: routes.AboutUs },
  ],
}) => {
  return (
    <ContainerLayout className="my-32">
      <div className="flex flex-col items-center text-center">
        {Icon && <Icon size={64} className="mb-3 text-primary-dark" />}

        <HeadingText level={2} heading={1} className="mb-4">
          {title}
        </HeadingText>

        {subtitle && <p className="text-text-secondary mb-8">{subtitle}</p>}

        {cta && (
          <Link href={cta.href}>
            <Button variant={cta.variant ?? "secondary"}>{cta.label}</Button>
          </Link>
        )}

        {suggestions.length > 0 && (
          <div className="text-sm text-gray-500 mt-12">
            <p>Maybe one of these pages can help?</p>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              {suggestions.map((s, i) => (
                <React.Fragment key={s.href}>
                  {i > 0 && <span className="text-gray-400">•</span>}
                  <Link href={s.href} className="hover:underline">
                    {s.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default PageErrorSection;
