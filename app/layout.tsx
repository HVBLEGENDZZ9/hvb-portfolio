import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshvardhan Bhosale  | Full Stack Developer",
  description:
    "Full Stack Developer & Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
  metadataBase: new URL("https://harshvardhanbhosale.com"),

  // Basic metadata
  applicationName: "Harshvardhan Bhosale Portfolio",
  authors: [{ name: "Harshvardhan Bhosale" }],
  keywords: [
    "Full Stack Developer",
    "Java",
    "Springboot",
    "Next.js",
    "React",
    "Deep Learning",
    "Machine Learning",
    "Quantitative Finance",
  ],

  openGraph: {
    type: "website",
    url: "https://harshvardhanbhosale.com",
    title: "Harshvardhan Bhosale | Full Stack Developer",
    description:
      "Full Stack & Java developer with expertise in Spring Boot, MERN Stack, Machine learning and Quantitative Finance.",
    siteName: "Harshvardhan Bhosale",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harshvardhan Bhosale - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://harshvardhanbhosale.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
