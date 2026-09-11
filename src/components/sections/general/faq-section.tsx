import React from "react";
import TitleContentBlock from "../../contents/title-content-block";
import ContainerLayout from "../../layouts/container-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IFaq } from "@/src/types/generic";

interface props {
  data?: IFaq[];
}

const FaqSection: React.FC<props> = ({ data }) => {
  if (!data) return null;

  return (
    <section>
      <TitleContentBlock
        title="Frequently Asked Questions"
        description="Find answers to common questions about our travel services, bookings, and more."
        isCenter={true}
      />

      <ContainerLayout className="mt-12">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {data.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx + 1}`}
              className="bg-neutral-50 rounded-xl border p-1 md:p-2 min-h-0"
            >
              <AccordionTrigger className="text-base md:text-lg font-bold px-3 py-2 md:py-3 min-h-0 font-secondary">
                {item.title}
              </AccordionTrigger>

              <AccordionContent className="px-3 pb-2 text-sm md:text-base">
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ContainerLayout>
    </section>
  );
};

export default FaqSection;
