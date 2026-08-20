import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Stefania Casale | Digital Communications and Client Experience";
const description = site.metaDescription;

export const metadata: Metadata = {
  // metadataBase is intentionally unset: the production URL is not decided yet.
  // Set it to `new URL("https://<final-domain>")` once the domain is known.
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
  jobTitle: "Digital Communications and Client Experience Professional",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Toronto",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/*
          The metric cards ship their zero state so the count up does not snap
          backwards at hydration. With scripting off nothing would ever count,
          so the final value is swapped in instead. Reduced motion is handled
          the same way, through Tailwind's motion-reduce variants.
        */}
        <noscript>
          <style>{`.count-up-final{visibility:visible}.count-up-live{display:none}`}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
