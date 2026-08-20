import AccentText from "@/components/AccentText";
import ContactPanel from "@/components/ContactPanel";
import ExperienceCard from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import LogoImage, { isLogoAsset } from "@/components/LogoImage";
import MetricCard from "@/components/MetricCard";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillGroup from "@/components/SkillGroup";
import { ArrowUpRightIcon, MapPinIcon } from "@/components/icons";
import {
  container,
  externalLinkProps,
  kicker,
  section,
} from "@/components/ui";
import {
  about,
  site,
  certifications,
  education,
  experience,
  metrics,
  projects,
  skills,
} from "@/data/content";

const certificationRow = "-mx-3 flex items-start gap-4 rounded-2xl px-3 py-5";

const chip =
  "inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-ivory-warm px-2";

/** Issuer mark for a certification row. Same tile size for every issuer. */
function CertificationMark({ logo }: { logo?: string }) {
  if (!isLogoAsset(logo)) return null;

  return (
    <span className={`${chip} mt-0.5`}>
      <LogoImage src={logo} slot={26} maxWidth={72} />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main id="main" className="flex-1">
        <Hero />

        {/* Metrics */}
        <section aria-labelledby="metrics-heading" className={`${container} pb-16 lg:pb-24`}>
          <h2 id="metrics-heading" className="sr-only">
            Highlights
          </h2>
          <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <MetricCard
                key={metric.label}
                metric={metric}
                accent={index === 3}
              />
            ))}
          </div>
        </section>

        <LogoCarousel />

        {/* About */}
        <section id="about" className={`${container} ${section}`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/*
              Heading and location travel together as one block, so the grid's
              lg:items-center balances the pair against the paragraphs rather
              than centring the title alone.
            */}
            <div>
              <SectionHeading>
                <AccentText text={about.heading} accents={["me"]} />
              </SectionHeading>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-ink/70">
                <MapPinIcon className="size-4 shrink-0 text-ink" />
                {site.locationShort}
              </p>
            </div>
            <div className="space-y-6">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-loose text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`${container} ${section}`}>
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-12 flex flex-col gap-6 lg:mt-16">
            {experience.map((item) => (
              <ExperienceCard key={`${item.role}-${item.period}`} item={item} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={`${container} ${section}`}>
          <SectionHeading>Projects</SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
            {projects.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* Skills and certifications */}
        <section id="skills" className={`${container} ${section}`}>
          <SectionHeading>Skills and Certifications</SectionHeading>

          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:mt-16">
            {skills.map((group) => (
              <SkillGroup key={group.group} group={group} />
            ))}
          </div>

          <div className="mt-16">
            <h3 className={kicker}>Certifications</h3>
            <ul className="mt-6 border-t border-line">
              {certifications.map((certification) => {
                const body = (
                  <>
                    <CertificationMark logo={certification.logo} />
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold tracking-tight">
                        {certification.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink/70">
                        {certification.issuer}
                      </span>
                      {certification.year ? (
                        <span className="mt-1 block text-sm text-ink/65">
                          {certification.year}
                        </span>
                      ) : null}
                    </span>
                  </>
                );

                return (
                  <li key={certification.title} className="border-b border-line">
                    {certification.href ? (
                      <a
                        href={certification.href}
                        {...externalLinkProps}
                        aria-label={`${certification.title}, opens in new tab`}
                        className={`${certificationRow} group transition-colors duration-200 hover:bg-sand-soft/70`}
                      >
                        {body}
                        <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-ink/50 transition-colors duration-200 group-hover:text-ink" />
                      </a>
                    ) : (
                      <div className={certificationRow}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Education */}
        <section id="education" className={`${container} ${section}`}>
          <SectionHeading>Education</SectionHeading>
          <div className="mt-12 rounded-3xl border border-line bg-sand-soft p-6 sm:p-8 lg:mt-16 lg:flex lg:items-center lg:gap-10 lg:p-10">
            <span className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-line bg-ivory-warm px-5 py-4">
              <LogoImage src={education.logo} slot={52} maxWidth={160} />
            </span>
            <div className="mt-6 lg:mt-0">
              <p className="text-2xl font-bold tracking-tight text-balance">
                {education.school}
              </p>
              <p className="mt-2 text-xl font-medium tracking-tight text-balance text-ink/80">
                {education.degree}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {education.detail}
              </p>
              <p className="mt-5 text-sm font-semibold tabular-nums">
                {education.year}
              </p>
            </div>
          </div>
        </section>

        <ContactPanel />
      </main>

      <Footer />
    </>
  );
}
