import type { Metadata } from "next";
import { Fraunces, Inter, Poppins } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

/** The geometric sans the hero headline and credential stamp are set in. */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Sheila Gracia Angelina — Senior System Analyst in Jakarta. Requirement engineering, system analysis and design, database management, and QA for government, education, and non-profit platforms.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sheilagracia.vercel.app"),
  title: {
    default: "Sheila Gracia Angelina — Senior System Analyst",
    template: "%s · Sheila Gracia Angelina",
  },
  description,
  keywords: [
    "System Analyst",
    "Business Analyst",
    "Requirement Engineering",
    "Laravel",
    "SQL Server",
    "UAT",
    "Jakarta",
  ],
  authors: [{ name: "Sheila Gracia Angelina" }],
  openGraph: {
    title: "Sheila Gracia Angelina — Senior System Analyst",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Sheila Gracia Angelina",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheila Gracia Angelina — Senior System Analyst",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${fraunces.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
