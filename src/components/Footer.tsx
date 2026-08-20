import { site } from "@/data/content";
import { container, externalLinkProps } from "./ui";

const footerLinkClass =
  "rounded-sm underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-sand";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div
        className={`${container} flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8 text-sm text-ink/65`}
      >
        <p>
          <span className="font-semibold text-ink">{site.name}</span>
          <span aria-hidden="true" className="px-2 text-ink/40">
            /
          </span>
          {site.location}
        </p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.name}`}
              className={footerLinkClass}
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              {...externalLinkProps}
              aria-label="LinkedIn profile, opens in new tab"
              className={footerLinkClass}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.resumeHref}
              {...externalLinkProps}
              aria-label="Resume PDF, opens in new tab"
              className={footerLinkClass}
            >
              Resume
            </a>
          </li>
        </ul>

        <p>© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
