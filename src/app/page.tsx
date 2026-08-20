import AccentText from "@/components/AccentText";
import ContactPanel from "@/components/ContactPanel";
import ExperienceEntry from "@/components/ExperienceEntry";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImpactCard from "@/components/ImpactCard";
import MetricCard from "@/components/MetricCard";
import Nav from "@/components/Nav";
import OrgStrip from "@/components/OrgStrip";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillGroup from "@/components/SkillGroup";
import { container, kicker, section } from "@/components/ui";
import {
  about,
  certifications,
  education,
  experience,
  impact,
  metrics,
  projects,
  skills,
  strengths,
} from "@/data/content";

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

        {/* Strengths */}
        <section className={`${container} ${section}`}>
          <SectionHeading label="What I bring">
            Five areas of strength.
          </SectionHeading>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-x-6">
            {strengths.map((strength) => (
              <div key={strength.title} className="border-t border-line pt-5">
                <h3 className="font-semibold tracking-tight">
                  {strength.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {strength.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <OrgStrip />

        {/* About */}
        <section id="about" className={`${container} ${section}`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading label="About" className="lg:sticky lg:top-28 lg:self-start">
              <AccentText text={about.heading} accents={["comfortable"]} />
            </SectionHeading>
            <div className="space-y-6">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-loose text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Selected impact */}
        <section id="impact" className={`${container} ${section}`}>
          <SectionHeading label="Selected impact">
            Work I am proud of.
          </SectionHeading>
          <div className="mt-12 flex flex-col gap-6 lg:mt-16">
            {impact.map((item, index) => (
              <ImpactCard
                key={item.title}
                item={item}
                tone={index === 1 ? "dark" : "light"}
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`${container} ${section}`}>
          <SectionHeading label="Professional experience">
            Where I have worked.
          </SectionHeading>
          <ul className="mt-12 border-b border-line lg:mt-16">
            {experience.map((item) => (
              <ExperienceEntry key={`${item.role}-${item.period}`} item={item} />
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className={`${container} ${section}`}>
          <SectionHeading label="University projects">
            Projects from my degree.
          </SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
            {projects.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* Skills, certifications, education */}
        <section id="skills" className={`${container} ${section}`}>
          <SectionHeading label="Skills and credentials">
            Tools, certifications, and education.
          </SectionHeading>

          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:mt-16">
            {skills.map((group) => (
              <SkillGroup key={group.group} group={group} />
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            <div>
              <h3 className={kicker}>Certifications</h3>
              <ul className="mt-6 border-t border-line">
                {certifications.map((certification) => (
                  <li
                    key={certification.title}
                    className="border-b border-line py-5"
                  >
                    <p className="font-semibold tracking-tight">
                      {certification.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                      {certification.issuer}
                    </p>
                    {certification.year ? (
                      <p className="mt-1 text-sm text-ink/65">
                        {certification.year}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-fit rounded-3xl border border-line bg-sand-soft p-6 sm:p-8">
              <h3 className={kicker}>Education</h3>
              <p className="mt-4 text-xl font-bold tracking-tight text-balance">
                {education.degree}
              </p>
              <p className="mt-2 font-medium text-ink/75">{education.school}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
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
