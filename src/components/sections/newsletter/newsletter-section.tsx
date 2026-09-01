import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContainerLayout from "../../layouts/container-layout";
import HeadingText from "../../ui/heading-text";
import NewsletterForm from "../../form/newsletter-form";

const NewsletterSection = () => {
  return (
    <ContainerLayout className="grid md:grid-cols-2 gap-8 items-center">
      <div className="">
        <HeadingText>Join Our Exclusive Newsletter</HeadingText>
        <p className="text-text-secondary text-lg mt-2">
          Stay connected with Prestige Travel Corporation and be the first to
          receive exclusive offers, curated travel insights, and destination
          inspiration, delivered directly to your inbox
        </p>

        <div className="max-w-lg my-8">
          <NewsletterForm />
        </div>

        <p className="mt-6 text-text-secondary">
          By subscribing, you agree to our{" "}
          <Link
            href="/terms-of-service"
            className="font-medium text-text-primary hover:underline"
          >
            Terms of Services
          </Link>
          .
          <br />
          You can{" "}
          <Link href="/unsubscribe" className="hover:underline">
            unsubscribe
          </Link>{" "}
          at any time.{" "}
        </p>
      </div>
      <div className="flex items-center md:justify-end">
        <Image
          src="/images/table.jpeg"
          width={500}
          height={300}
          alt="Table image for newsletter section"
          className="w-full max-w-[500px] h-[300px] object-cover"
        />
      </div>
    </ContainerLayout>
  );
};

export default NewsletterSection;
