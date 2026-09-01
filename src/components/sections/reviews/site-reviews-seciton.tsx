import { reviews } from "@/src/data/reviews";
import ContainerLayout from "../../layouts/container-layout";
import TitleContentBlock from "../../contents/title-content-block";
import ReviewCard from "../../cards/reviews-card";
import { routes } from "@/src/lib/routes";
import Link from "next/link";
import StyledButton from "../../ui/styled-button";

interface props {
  subtitle?: string;
  title?: string;
  description?: string;
}

const SiteReviewSection: React.FC<props> = ({
  subtitle = "Testimonial",
  title = "What Our Partners and Travellers Say",
  description = "From our valued travel advisors to discerning travellers, their experiences reflect the care, expertise, and attention to detail that define every Prestige Travel Corporation journey.",
}) => {
  const currentItems = reviews.slice(0, 6);

  return (
    <div className="relative">
      <ContainerLayout>
        <TitleContentBlock
          subtitle={subtitle}
          title={title}
          description={description}
          isCenter={true}
        />
      </ContainerLayout>

      <ContainerLayout className="relative mt-12">
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-bg/80 via-bg/50 to-transparent" />

        <section className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {currentItems.map((review) => (
            <div key={review.id} className="mb-6 break-inside-avoid">
              <ReviewCard {...review} />
            </div>
          ))}
        </section>
      </ContainerLayout>

      <ContainerLayout className="grid place-items-center mt-6">
        <Link href={routes.reviews}>
          <StyledButton>Show More Reviews</StyledButton>
        </Link>
      </ContainerLayout>
    </div>
  );
};

export default SiteReviewSection;
