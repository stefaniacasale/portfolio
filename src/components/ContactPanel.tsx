import { contact, site } from "@/data/content";
import AccentText from "./AccentText";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, LinkedInIcon } from "./icons";
import {
  container,
  externalLinkProps,
  pillOutlineLight,
  pillSand,
} from "./ui";

export default function ContactPanel() {
  return (
    <section id="contact" className={`${container} py-16 lg:py-24`}>
      <div className="rounded-3xl bg-panel px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <SectionHeading label="Contact" tone="dark" size="lg">
          <AccentText text={contact.heading} accents={["you"]} />
        </SectionHeading>

        <p className="mt-6 max-w-xl leading-relaxed text-ivory/75">
          {contact.body}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.name}`}
            className={`${pillSand} [overflow-wrap:anywhere]`}
          >
            Email {site.email}
          </a>
          <a
            href={site.linkedin}
            {...externalLinkProps}
            aria-label="LinkedIn profile, opens in new tab"
            className={pillOutlineLight}
          >
            <LinkedInIcon />
            LinkedIn
            <ArrowUpRightIcon className="size-3.5 text-ivory/70" />
          </a>
        </div>
      </div>
    </section>
  );
}
