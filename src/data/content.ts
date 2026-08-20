/**
 * Single source of truth for all site copy.
 *
 * Copy rules for this file:
 * - No em dashes or en dashes anywhere. Date ranges use "to".
 * - Facts are taken verbatim from the resume. Do not embellish or reword.
 * - No phone number is stored here or anywhere in the site.
 *
 * Icon fields (`icon`, `logo`) hold either a path under /public/logos or the
 * name of a hand authored inline glyph. An item with no icon at all is a plain
 * pill: skills that are practices rather than products carry no mark.
 */

export interface Site {
  name: string;
  role: string;
  location: string;
  /** Abbreviated form, for tight spots such as the about location line. */
  locationShort: string;
  email: string;
  linkedin: string;
  resumeHref: string;
  /**
   * Search and social description. Kept separate from `hero.intro` so the page
   * copy can run as long as it needs to without overflowing the ~160 character
   * budget search engines display.
   */
  metaDescription: string;
  /**
   * Optional path to a headshot in /public. When unset, the hero renders a
   * typographic monogram instead.
   */
  headshotSrc?: string;
}

export interface Hero {
  headline: string;
  intro: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface About {
  heading: string;
  paragraphs: string[];
}

export interface Organization {
  name: string;
  logo: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  location: string;
  period: string;
  logo: string;
  bullets: string[];
}

export interface Tag {
  label: string;
  icon?: string;
  /**
   * The mark is a wordmark that already spells the name out, so the pill shows
   * the logo alone and `label` becomes the image's alt text rather than visible
   * copy. Used by the skill pills.
   */
  logoOnly?: boolean;
}

export interface ProjectItem {
  title: string;
  context: string;
  period: string;
  body: string;
  tags: Tag[];
}

export interface SkillGroup {
  group: string;
  items: Tag[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  logo?: string;
  href?: string;
}

export interface Education {
  school: string;
  degree: string;
  detail: string;
  year: string;
  logo: string;
}

export interface Contact {
  heading: string;
  body: string;
}

export const site: Site = {
  name: "Stefania Casale",
  role: "Digital communications and client experience",
  location: "Toronto, Ontario",
  locationShort: "Toronto, ON",
  email: "stefania.casale@alumni.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/stefania-casale/",
  resumeHref: "/Stefania-Casale-Resume.pdf",
  metaDescription:
    "Portfolio of Stefania Casale, a University of Toronto graduate focused on digital communications, marketing, and client experience roles in the Toronto area.",
};

/**
 * Display treatment note for the UI layer: in `headline`, the name
 * "Stefania Casale" takes the italic serif accent.
 */
export const hero: Hero = {
  headline: "Hi, I'm Stefania Casale.",
  intro:
    "I am a University of Toronto graduate with experience in digital communications, client support, and day to day operations. I have produced campaigns for the City of Mississauga, supported complex client requests at Wealthsimple, and coordinated student outreach at U of T. I am focused on roles in digital communications, marketing, and client experience.",
};

export const metrics: Metric[] = [
  {
    value: "12+",
    label: "Digital campaigns produced for the City of Mississauga",
  },
  {
    value: "$100K+",
    label: "In client asset transfers assisted at Wealthsimple",
  },
  {
    value: "100+",
    label: "Complex deposit and withdrawal inquiries managed weekly",
  },
  { value: "3.82/4.0", label: "GPA in Digital Enterprise Management" },
];

export const organizations: Organization[] = [
  { name: "Wealthsimple", logo: "/logos/wealthsimple.svg" },
  { name: "City of Mississauga", logo: "/logos/mississauga.svg" },
  { name: "University of Toronto", logo: "/logos/uoft.svg" },
  { name: "Massage Addict", logo: "/logos/massageaddict.png" },
  { name: "Innovative Business Association", logo: "/logos/iba.png" },
  { name: "Eden Food for Change", logo: "/logos/eden.png" },
  { name: "DEM Association", logo: "/logos/dem.png" },
];

export const about: About = {
  heading: "About me",
  paragraphs: [
    "I completed my Honours Bachelor of Arts in Digital Enterprise Management at the University of Toronto in 2025, with a minor in Italian Language and Culture and a 3.82 GPA. My program focused on how organizations plan and manage digital products, and I added a Media Skills certificate from the Institute of Communication, Culture, Information and Technology.",
    "Outside the classroom I have spent more than five years in administrative and customer service roles. I have produced social campaigns for the City of Mississauga, guided Wealthsimple clients through complex account transfers, and led outreach for a student business association. I like work that combines clear writing, careful process, and direct contact with people.",
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "Cross-Trained Premium Banking Agent, Client Experience",
    org: "Wealthsimple",
    location: "Toronto, Ontario",
    period: "December 2025 to July 2026",
    logo: "/logos/wealthsimple-w.png",
    bullets: [
      "Assisted clients in transferring $100K+ in assets to Wealthsimple through bank linking, Interac e-Transfer, and external account transfers.",
      "Processed complex external transfers from 50+ Canadian financial institutions, supporting RRSPs, TFSAs, RESPs, LIRAs, pensions, and corporate margin accounts, including in-kind and in-cash transfers.",
      "Managed 100+ complex deposit and withdrawal inquiries weekly, resolving transfer and account issues involving GICs, equities, mutual funds, bonds, warrants, CESG, and CLB requirements.",
      "Collaborated with Leadership, Transfers Operations, and Engineering through JIRA to investigate transfer failures and ensure accuracy of transfer details.",
    ],
  },
  {
    role: "Digital Assistant, Communications and Marketing",
    org: "City of Mississauga",
    location: "Mississauga, Ontario",
    period: "April 2024 to July 2024",
    logo: "/logos/mississauga.svg",
    bullets: [
      "Analyzed profile statistics through Emplifi and assisted the Digital Team in collecting social media outreach data over three months, presenting monthly to a cross disciplinary team.",
      "Presented analytical findings to the Director of Communications and Marketing on ways to improve community engagement.",
      "Produced 12+ digital campaigns through Adobe Suite, including editing and filming content for the Summer Concert Series, The Lakeview Farmers Market, and Celebrating 50 years of Mississauga.",
    ],
  },
  {
    role: "Front Desk Clerk",
    org: "City of Mississauga",
    location: "Mississauga, Ontario",
    period: "December 2022 to Present",
    logo: "/logos/mississauga.svg",
    bullets: [
      "Prepares, sorts, and processes daily sales reports, cash floats, and revenue deposits to municipal cash handling standards.",
      "Processes user memberships within the City of Mississauga's active membership model.",
      "Supports the administration and operations of community centres and pools by resolving customer inquiries across multiple lines of business.",
    ],
  },
  {
    role: "Outreach Director",
    org: "Innovative Business Association (IBA), University of Toronto",
    location: "Mississauga, Ontario",
    period: "August 2024 to April 2025",
    logo: "/logos/iba.png",
    bullets: [
      "Curated weekly promotional content for the association through LinkedIn, the website, and Instagram, with events selling out 100+ person registrations.",
      "Managed a team of website associates by creating and uploading relevant media content on the website.",
      "Prepared weekly e-newsletter outlines for the department's Media and Communication Officer to send to students.",
    ],
  },
  {
    role: "Student Mentor",
    org: "Institute of Communication, Culture, Information and Technology, University of Toronto",
    location: "Mississauga, Ontario",
    period: "August 2024 to April 2025",
    logo: "/logos/uoft.svg",
    bullets: [
      "Led monthly session plans for a team of 5 to 7 mentees, using administrative resources to support students' learning.",
      "Organized, planned, and booked event spaces monthly through the university's booking portal for workshops and group meetings.",
    ],
  },
  {
    role: "Marketing Associate",
    org: "DEM Association, University of Toronto",
    location: "Mississauga, Ontario",
    period: "September 2022 to May 2023",
    logo: "/logos/dem.png",
    bullets: [
      "Created, captioned, and posted material for the organization's Job Posting of the Month and additional monthly content over an 8 month period.",
      "Helped plan conferences, events, and workshops for the association.",
    ],
  },
  {
    role: "Senior Administrative Assistant",
    org: "Massage Addict Applewood",
    location: "Mississauga, Ontario",
    period: "May 2021 to April 2024",
    logo: "/logos/massageaddict.png",
    bullets: [
      "Assisted in facility management during senior level leave, including communication with external stakeholders and management of full time staff.",
      "Maintained and reviewed confidential client records, and reconciled insurance payments and client invoices daily.",
      "Applied knowledge of Booker, Telus Health Portal, Sun Life Portal, ProviderConnect, Excel, Word, and Outlook to generate daily reports.",
    ],
  },
  {
    role: "Marketing Associate",
    org: "Massage Addict Applewood",
    location: "Mississauga, Ontario",
    period: "June 2023 to September 2023",
    logo: "/logos/massageaddict.png",
    bullets: [
      "Created 10+ promotional and organic posts using Adobe Suite and Canva.",
      "Completed weekly marketing reports of social media outreach across three months, tracking viewership, likes, and shares.",
      "Communicated findings with franchisees on improvements for community engagement.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Mobile Application Project",
    context: "CCT461: Speculative Design III, University of Toronto",
    period: "January 2025 to February 2025",
    body: "Worked in a team of six students to design and build a mobile application concept in Java and Android Studio, applying user design principles and systems thinking.",
    tags: [
      { label: "Java", icon: "/logos/java.svg" },
      { label: "Android Studio", icon: "/logos/androidstudio.svg" },
    ],
  },
  {
    title: "Social Innovation Project: Eden Food for Change",
    context: "Centre for Student Engagement, University of Toronto",
    period: "September 2023 to May 2024",
    body: "Took part in a 16 week volunteer program to revitalize social media for the non profit Eden Food for Change.",
    tags: [
      { label: "Instagram", icon: "/logos/instagram.svg" },
      { label: "TikTok", icon: "/logos/tiktok.svg" },
      { label: "Non profit", icon: "heart" },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Content and campaigns",
    items: [
      { label: "Adobe Creative Suite", icon: "/logos/adobe-cc.svg" },
      { label: "Canva", icon: "/logos/canva.svg" },
      { label: "Social media content" },
      { label: "Newsletter planning" },
    ],
  },
  {
    group: "Analytics and reporting",
    items: [
      { label: "Emplifi", icon: "/logos/emplifi.svg" },
      { label: "Excel", icon: "/logos/excel.svg" },
      { label: "Marketing reports" },
      { label: "Presenting findings" },
    ],
  },
  {
    group: "Client and operations platforms",
    items: [
      { label: "JIRA", icon: "/logos/jira.svg" },
      { label: "Booker", icon: "/logos/booker.svg", logoOnly: true },
      {
        label: "Telus Health Portal",
        icon: "/logos/telus-health.svg",
        logoOnly: true,
      },
      { label: "Sun Life Portal", icon: "/logos/sunlife.png", logoOnly: true },
      {
        label: "ProviderConnect",
        icon: "/logos/providerconnect.png",
        logoOnly: true,
      },
    ],
  },
  {
    group: "Office and collaboration",
    items: [
      { label: "Word", icon: "/logos/word.svg" },
      { label: "Outlook", icon: "/logos/outlook.svg" },
      { label: "Scheduling and booking systems" },
      { label: "Cash handling and reporting" },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Media Skills Certificate",
    issuer:
      "Institute of Communication, Culture, Information and Technology, University of Toronto Mississauga",
    year: "Issued November 2023",
    logo: "/logos/uoft.svg",
    href: "https://www.linkedin.com/in/stefania-casale/overlay/Certifications/8608215/treasury/?profileId=ACoAADx15vkBhxE4RCDbRKKVV9LlII8czzsbvoI",
  },
  {
    title: "Enterprise Risk Management coursework (MGD426)",
    issuer: "University of Toronto",
    year: "Completed risk assessment paper on a small business",
    logo: "/logos/uoft.svg",
  },
  {
    title: "CPR, AED, and First Aid",
    issuer: "Canadian Red Cross",
    year: "",
    logo: "/logos/redcross.svg",
    href: "https://www.linkedin.com/in/stefania-casale/overlay/1926108187/skill-associations-details/",
  },
];

export const education: Education = {
  school: "University of Toronto",
  degree: "Honours Bachelor of Arts, Digital Enterprise Management",
  detail: "Minor in Italian Language and Culture. GPA 3.82 out of 4.0.",
  year: "2025",
  logo: "/logos/uoft.svg",
};

export const contact: Contact = {
  heading: "Ready when you are.",
  body: "If you are hiring for digital communications, marketing coordination, or client experience, I would be glad to talk.",
};

export const content = {
  site,
  hero,
  metrics,
  organizations,
  about,
  experience,
  projects,
  skills,
  certifications,
  education,
  contact,
};

export default content;
