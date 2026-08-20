/**
 * Single source of truth for all site copy.
 *
 * Copy rules for this file:
 * - No em dashes or en dashes anywhere. Date ranges use "to".
 * - Facts are taken verbatim from the resume. Do not embellish or reword.
 * - No phone number is stored here or anywhere in the site.
 */

export interface Site {
  name: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  resumeHref: string;
  /**
   * Optional path to a headshot in /public. When unset, the hero renders a
   * typographic monogram instead.
   */
  headshotSrc?: string;
}

export interface Hero {
  kicker: string;
  headline: string;
  intro: string;
  facts: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Strength {
  title: string;
  body: string;
}

export interface About {
  heading: string;
  paragraphs: string[];
}

export interface ImpactItem {
  org: string;
  title: string;
  period: string;
  body: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  context: string;
  period: string;
  body: string;
  tags: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Education {
  school: string;
  degree: string;
  detail: string;
  year: string;
}

export interface Contact {
  heading: string;
  body: string;
}

export const site: Site = {
  name: "Stefania Casale",
  role: "Digital communications and client experience",
  location: "Mississauga, Ontario",
  email: "stefania.casale@alumni.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/stefania-casale/",
  resumeHref: "/Stefania-Casale-Resume.pdf",
};

/**
 * Display treatment note for the UI layer: in `headline`, the words
 * "informs" and "follows through" take the italic serif accent.
 */
export const hero: Hero = {
  kicker: "Digital communications, client experience, operations",
  headline: "Communication that informs. Service that follows through.",
  intro:
    "I am a University of Toronto graduate with experience in digital communications, client support, and day to day operations. I have produced campaigns for the City of Mississauga, supported complex client requests at Wealthsimple, and coordinated student outreach at U of T.",
  facts: [
    "Based in Mississauga, Ontario",
    "Honours BA, Digital Enterprise Management, 2025",
    "Open to digital communications, marketing, and client experience roles",
  ],
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
  { value: "3.82", label: "GPA in Digital Enterprise Management, out of 4.0" },
];

export const strengths: Strength[] = [
  {
    title: "Communication",
    body: "Clear writing and presenting, from monthly reports for a cross disciplinary team to newsletters and social copy.",
  },
  {
    title: "Client experience",
    body: "More than five years of customer service and administrative work, from front desks to premium banking support.",
  },
  {
    title: "Campaign production",
    body: "Filming, editing, and publishing content in Adobe Creative Suite and Canva for city wide campaigns and student events.",
  },
  {
    title: "Analytics and reporting",
    body: "Tracking social performance in Emplifi and Excel, and turning the numbers into findings leadership can act on.",
  },
  {
    title: "Coordination",
    body: "Managing associates, mentoring students, booking spaces, and keeping multi step processes on schedule.",
  },
];

export const organizations: string[] = [
  "Wealthsimple",
  "City of Mississauga",
  "University of Toronto",
  "Massage Addict",
];

export const about: About = {
  heading: "A communicator who is comfortable with the operational side.",
  paragraphs: [
    "I completed my Honours Bachelor of Arts in Digital Enterprise Management at the University of Toronto in 2025, with a minor in Italian Language and Culture and a 3.82 GPA. My program focused on how organizations plan and manage digital products, and I added a Media Skills certificate from the Institute of Communication, Culture, Information and Technology.",
    "Outside the classroom I have spent more than five years in administrative and customer service roles. I have produced social campaigns for the City of Mississauga, guided Wealthsimple clients through complex account transfers, and led outreach for a student business association. I like work that combines clear writing, careful process, and direct contact with people.",
  ],
};

export const impact: ImpactItem[] = [
  {
    org: "City of Mississauga",
    title: "Digital campaigns for a city audience",
    period: "April 2024 to July 2024",
    body: "Produced more than 12 digital campaigns in Adobe Creative Suite, including filming and editing content for the Summer Concert Series, The Lakeview Farmers Market, and Celebrating 50 Years of Mississauga. Analyzed profile statistics through Emplifi across three months and presented findings each month to a cross disciplinary team.",
    tags: ["Adobe Creative Suite", "Emplifi", "Content production"],
  },
  {
    org: "Wealthsimple",
    title: "Complex transfers, handled carefully",
    period: "December 2025 to July 2026",
    body: "Assisted clients transferring $100K+ in assets through bank linking, Interac e-Transfer, and external account transfers. Processed complex transfers from more than 50 Canadian financial institutions across account types including RRSPs, TFSAs, RESPs, and LIRAs, and worked with Transfers Operations and Engineering through JIRA to resolve transfer issues.",
    tags: ["Client operations", "JIRA", "Process accuracy"],
  },
  {
    org: "Innovative Business Association",
    title: "Outreach that filled the room",
    period: "August 2024 to April 2025",
    body: "Curated weekly promotional content across LinkedIn, Instagram, and the association website. Helped events sell out with more than 100 registrations, managed a team of website associates, and prepared weekly newsletter outlines for the department's Media and Communication Officer.",
    tags: ["Social media", "Team coordination", "Events"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Cross-Trained Premium Banking Agent, Client Experience",
    org: "Wealthsimple",
    location: "Toronto, Ontario",
    period: "December 2025 to July 2026",
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
    bullets: [
      "Led monthly session plans for a team of 5 to 7 mentees, using administrative resources to support students' learning.",
      "Organized, planned, and booked event spaces monthly through the university's booking portal for workshops and group meetings.",
    ],
  },
  {
    role: "Senior Administrative Assistant",
    org: "Massage Addict Applewood",
    location: "Mississauga, Ontario",
    period: "May 2021 to April 2024",
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
    tags: ["Java", "Android Studio"],
  },
  {
    title: "Social Innovation Project: Eden Food for Change",
    context: "Centre for Student Engagement, University of Toronto",
    period: "September 2023 to May 2024",
    body: "Took part in a 16 week volunteer program to revitalize social media for the non profit Eden Food for Change.",
    tags: ["Social media", "Non profit"],
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Content and campaigns",
    items: [
      "Adobe Creative Suite",
      "Canva",
      "Social media content",
      "Newsletter planning",
    ],
  },
  {
    group: "Analytics and reporting",
    items: ["Emplifi", "Excel", "Marketing reports", "Presenting findings"],
  },
  {
    group: "Client and operations platforms",
    items: [
      "JIRA",
      "Booker",
      "Telus Health Portal",
      "Sun Life Portal",
      "ProviderConnect",
    ],
  },
  {
    group: "Office and collaboration",
    items: [
      "Word",
      "Outlook",
      "Scheduling and booking systems",
      "Cash handling and reporting",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Media Skills Certificate",
    issuer:
      "Institute of Communication, Culture, Information and Technology, University of Toronto Mississauga",
    year: "Issued November 2023",
  },
  {
    title: "Enterprise Risk Management coursework (MGD426)",
    issuer: "University of Toronto",
    year: "Completed risk assessment paper on a small business",
  },
  {
    title: "CPR, AED, and First Aid",
    issuer: "Canadian Red Cross",
    year: "",
  },
];

export const education: Education = {
  school: "University of Toronto",
  degree: "Honours Bachelor of Arts, Digital Enterprise Management",
  detail: "Minor in Italian Language and Culture. GPA 3.82 out of 4.0.",
  year: "2025",
};

export const contact: Contact = {
  heading: "Ready when you are.",
  body: "If you are hiring for digital communications, marketing coordination, or client experience, I would be glad to talk.",
};

export const content = {
  site,
  hero,
  metrics,
  strengths,
  organizations,
  about,
  impact,
  experience,
  projects,
  skills,
  certifications,
  education,
  contact,
};

export default content;
