import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import { site, hero } from "@/data/content";
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
const description = hero.intro;

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
    addressLocality: "Mississauga",
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
