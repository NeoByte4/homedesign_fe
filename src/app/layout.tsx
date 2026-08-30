import { Figtree, Poppins } from "next/font/google";
import "./css/globals.css";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { siteDetails } from "../data/site-details";
import Header from "../components/global/header";
import Footer from "../components/global/footer";

const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const secondary = Figtree({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_TITLE = siteDetails.site_title;
const SITE_URL = siteDetails.SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_TITLE} ~ Mediterranean Travel Experts`,
    template: `%s ~ ${SITE_TITLE}`,
  },
  description: `${SITE_TITLE} is an Australian-owned travel wholesaler specializing in tailor-made Mediterranean tours, from private tours and honeymoons to family holidays.`,
  keywords: [
    "Mediterranean travel",
    "travel wholesaler Australia",
    "tailor-made tours",
    "private tours",
    "honeymoons",
    "family holidays",
    "leisure getaways",
    "corporate trips",
    "Greece tours",
    "Italy tours",
    "Croatia tours",
    "Spain tours",
    `${SITE_TITLE}`,
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}`,
  },
  openGraph: {
    title: `${SITE_TITLE}: Your Mediterranean Journey Awaits`,
    description: `${SITE_TITLE} specializes in crafting bespoke Mediterranean getaways with over 20 years of experience. Australian-owned and operated.`,
    url: SITE_URL,
    siteName: `${SITE_TITLE}`,
    images: [
      {
        url: `${SITE_URL}/web-app-manifest-192x192.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE}`,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_TITLE}: Mediterranean Travel Experts`,
    description: `Crafting bespoke Mediterranean tours for over two decades. Australian-owned travel wholesaler.`,
    images: [`${SITE_URL}/web-app-manifest-192x192.png`],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Prestige Travel Corporation"
        />
      </head>
      <body
        className={`${secondary.variable} ${poppins.variable} antialiased relative`}
      >
        <Header />

        {children}
        <Footer />

        <Toaster
          position="top-right"
          containerClassName="toaster-wrapper"
          toastOptions={{
            style: {
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              border: "1px solid var(--primary)",
            },
            iconTheme: {
              primary: "white",
              secondary: "var(--accent)",
            },
            success: {
              style: {
                background: "green",
                color: "white",
                border: "1px solid green",
              },
              iconTheme: {
                primary: "white",
                secondary: "green",
              },
            },
            error: {
              style: {
                background: "var(--destructive)",
                color: "white",
                border: "1px solid var(--destructive)",
              },
              iconTheme: {
                primary: "white",
                secondary: "var(--destructive)",
              },
            },
            loading: {
              style: {
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                border: "1px solid var(--primary)",
              },
              iconTheme: {
                primary: "white",
                secondary: "var(--accent)",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
