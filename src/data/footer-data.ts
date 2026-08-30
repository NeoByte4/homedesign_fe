import { Mail, MapPin, Phone } from "lucide-react";
import { siteDetails } from "./site-details";

export const footerData = {
  bottom_message_text: "Proud Member of Council of Australian Tour Operators",
  contact: [
    {
      name: "Email Us",
      href: `mailto:${siteDetails.email}`,
      label: `${siteDetails.email}`,
      icon: Mail,
      description: "For detailed inquiries and bespoke requests.",
    },
    {
      name: "Location",
      href: `https://maps.google.com/?q=${siteDetails.location}`,
      label: `${siteDetails.location}`,
      icon: MapPin,
      description: "Visit our office: Mon-Fri, 9:00am - 5:00pm.",
    },
    {
      name: "Phone",
      href: `tel:${siteDetails.phone}`,
      label: `${siteDetails.phone}`,
      icon: Phone,
      description: "Immediate assistance and quick consultations.",
    },
  ],
  socials: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/470155786174865",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/prestigetravelcorporation/",
    },
    {
      label: "Tiktok",
      url: "https://www.tiktok.com/@prestige.travel.c",
    },
  ],
  info: {
    title: "We Are Here",
    description: "Feel free to contact us if you have any queries.",
  },
  paymentPartners: [
    {
      label: "PayPal",
      img: "/logos/paypal.png",
    },
    {
      label: "Skrill",
      img: "/logos/skrill.png",
    },
    {
      label: "Stripe",
      img: "/logos/stripe.png",
    },
    {
      label: "Visa",
      img: "/logos/visa.png",
    },
    {
      label: "WooCommerce",
      img: "/logos/woo.png",
    },
    {
      label: "Travel Pay",
      img: "/logos/travel-pay.png",
    },
  ],
};
