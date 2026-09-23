import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeadingText from "../ui/heading-text";

interface Props {
  title?: string;
  description?: string | React.ReactNode;
  subtitle?: string;
  subSubtitle?: string;
  ctaTitle?: string;
  ctaLink?: string;
  isCenter?: boolean;
}

function TitleContentBlock({
  title,
  description,
  subtitle,
  subSubtitle,
  ctaTitle,
  ctaLink,
  isCenter = false,
}: Props) {
  const displaySubtitle = subtitle ?? subSubtitle;

  return (
    <div className={`${isCenter ? "text-center max-w-3xl mx-auto" : ""}`}>
      {displaySubtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {displaySubtitle}
        </p>
      )}

      {title && (
        <HeadingText level={2} className="mb-4">
          {title}
        </HeadingText>
      )}

      {description &&
        (typeof description === "string" ? (
          <div
            className="text-lg md:text-lg text-text-secondary rich_text_container"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div className="text-lg md:text-lg text-text-secondary">
            {description}
          </div>
        ))}

      {ctaLink && ctaTitle && (
        <Link className="block mt-4" href={ctaLink}>
          <Button>{ctaTitle}</Button>
        </Link>
      )}
    </div>
  );
}

export default TitleContentBlock;
