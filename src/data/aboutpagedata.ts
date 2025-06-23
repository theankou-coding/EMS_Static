// src/data/aboutPageData.ts
import { images } from "./imageImports";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
    website?: string;
  };
  department: "leadership" | "design" | "development" | "marketing";
  order: number;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
  longDescription?: string;
}

export interface Milestone {
  id: number;
  year: string;
  month?: string;
  title: string;
  description: string;
  image?: string;
  achievement?: string;
}

export interface Award {
  id: number;
  year: string;
  title: string;
  organization: string;
  description?: string;
  image?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

export interface AboutPageData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  story: {
    title: string;
    paragraphs: string[];
    image: string;
    facts?: {
      label: string;
      value: string;
    }[];
  };
  values: {
    title: string;
    subtitle?: string;
    items: CoreValue[];
  };
  team: {
    title: string;
    subtitle?: string;
    description?: string;
    members: TeamMember[];
  };
  journey: {
    title: string;
    subtitle?: string;
    description?: string;
    milestones: Milestone[];
  };
  awards?: {
    title: string;
    subtitle?: string;
    items: Award[];
  };
  partners?: {
    title: string;
    subtitle?: string;
    items: Partner[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}
// ========== Core Values for Event System Management ===========
const story = {
  title: "Our Inspiring Journey",
  paragraphs: [
    "Founded with the vision to simplify complex event management challenges, our platform empowers organizers to create seamless and engaging events.",
    "From humble beginnings and manual processes, we built a scalable, digital ecosystem integrating AI and automation to streamline every touchpoint of event planning.",
    "Today, our event system management platform serves hundreds of companies worldwide, making event execution resilient, collaborative, and data-driven.",
  ],
  image: images[18],
  facts: [
    { label: "Events Managed", value: "500+" },
    { label: "Active Users", value: "250+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Countries Served", value: "30" },
  ],
};
// ========== Core Values for Event System Management ===========
export const coreValues: CoreValue[] = [
  {
    id: "user-focus",
    title: "User-Focused Design",
    description:
      "We design our event management platform around the end-user for maximum ease and efficiency.",
    longDescription:
      "Our priority is to create seamless user experiences for event organizers, attendees, and speakers alike, reducing friction and increasing satisfaction throughout the event lifecycle.",
    icon: "HiUser",
    color: "blue",
  },
  {
    id: "scalability",
    title: "Scalability & Reliability",
    description:
      "Our system supports small meetings to massive conferences with robust uptime and performance.",
    longDescription:
      "Built with scalable architecture and cloud infrastructure, our platform guarantees smooth functioning regardless of event size or traffic spikes.",
    icon: "HiServer",
    color: "green",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Constantly adding new features like AI-powered recommendations and real-time analytics.",
    longDescription:
      "We innovate continuously to incorporate modern technologies such as AI, machine learning, and automation that enhance event management and participant engagement.",
    icon: "HiLightBulb",
    color: "yellow",
  },
  {
    id: "collaboration",
    title: "Collaboration & Transparency",
    description:
      "Transparent communication and collaboration tools connect all event stakeholders.",
    longDescription:
      "From organizers to vendors to attendees, our platform fosters open information flow with integrated collaboration functionalities and real-time updates.",
    icon: "HiUsers",
    color: "purple",
  },
  {
    id: "security",
    title: "Data Privacy and Security",
    description:
      "We ensure attendee and event data is protected with stringent security measures.",
    longDescription:
      "We comply with industry standards and best practices for data protection and privacy, safeguarding sensitive information at every step.",
    icon: "HiShieldCheck",
    color: "red",
  },
  {
    id: "support",
    title: "Dedicated Support",
    description:
      "World-class, responsive support team to help you at every stage.",
    longDescription:
      "Our expert support team is accessible 24/7 providing assistance, training, and troubleshooting to ensure your event runs smoothly.",
    icon: "HiSupport",
    color: "teal",
  },
];

// ========== Team Members ===========
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Emily Rodriguez",
    role: "Founder & CEO",
    bio: "Emily founded our company with a vision to simplify event management through technology that connects people seamlessly.",
    image: images[17],
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
    },
    department: "leadership",
    order: 1,
  },
  {
    id: 2,
    name: "David Park",
    role: "Head of Product",
    bio: "David designs powerful features and user-centric workflows that adapt to every kind of event.",
    image: images[18],
    socialLinks: {
      linkedin: "https://linkedin.com/in/davidpark",
    },
    department: "development",
    order: 2,
  },
  {
    id: 3,
    name: "Sofia Lee",
    role: "Lead UX Designer",
    bio: "Sofia leads the user experience team ensuring intuitive interfaces that delight users at every touchpoint.",
    image: images[16],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sofialee",
      dribbble: "https://dribbble.com/sofialee",
    },
    department: "design",
    order: 3,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Senior Software Engineer",
    bio: "Michael builds scalable backend systems powering real-time event data and analytics.",
    image: images[17],
    socialLinks: {
      github: "https://github.com/michaelchen",
    },
    department: "development",
    order: 4,
  },
];

// ========== Journey Milestones ===========
export const companyMilestones: Milestone[] = [
  {
    id: 1,
    year: "2015",
    month: "March",
    title: "Company Founded",
    description:
      "Started with the goal of revolutionizing event planning with software.",
    achievement:
      "Established foundational team and initial product concept for event management.",
  },
  {
    id: 2,
    year: "2016",
    month: "August",
    title: "Beta Version Released",
    description:
      "Released the first beta of our event system management software to select customers.",
    achievement:
      "Collected user feedback and prepared for a public launch with essential features.",
  },
  {
    id: 3,
    year: "2018",
    month: "May",
    title: "First 100 Clients",
    description:
      "Achieved milestone of onboarding 100 active event organizers using our platform.",
    achievement: "Validated product-market fit and refined key workflows.",
  },
  {
    id: 4,
    year: "2020",
    month: "January",
    title: "Introduced AI Recommendations",
    description:
      "Added AI-powered session and speaker recommendations improving attendee engagement.",
    achievement:
      "Enhanced user experience and increased event satisfaction scores significantly.",
  },
  {
    id: 5,
    year: "2022",
    month: "November",
    title: "Live Virtual Events",
    description:
      "Launched support for fully virtual events with live streaming and interaction features.",
    achievement:
      "Expanded service to global clients amid growing demand for remote events.",
  },
  {
    id: 6,
    year: "2023",
    month: "July",
    title: "Global Expansion",
    description:
      "Expanded platform support to multiple languages and international markets.",
    achievement:
      "Secured partnerships and increased worldwide user adoption rapidly.",
  },
  {
    id: 7,
    year: "2024",
    month: "March",
    title: "Real-time Analytics Dashboard",
    description:
      "Deployed a comprehensive analytics suite for event performance and attendee insights.",
    achievement:
      "Empowered organizers with data-driven decision making enhancing event ROI.",
  },
  {
    id: 8,
    year: "2024",
    month: "June",
    title: "Present Day",
    description:
      "Continuing to innovate with AI-driven personalization and unparalleled support.",
    achievement:
      "Leading event system management industry with customer-centric solutions.",
  },
];

// ========== Awards ===========
export const companyAwards: Award[] = [
  {
    id: 1,
    year: "2019",
    title: "Best Event Technology",
    organization: "Global Event Awards",
    description: "Recognized for excellence in event software innovation.",
  },
  {
    id: 2,
    year: "2021",
    title: "Customer Choice Award",
    organization: "EventTech Forum",
    description:
      "Awarded by users recognizing outstanding support and platform reliability.",
  },
  {
    id: 3,
    year: "2023",
    title: "Innovation in Virtual Events",
    organization: "Tech Expo",
    description:
      "Honored for pioneering interactive virtual event capabilities.",
  },
];

// ========== Partners ===========
export const companyPartners: Partner[] = [
  {
    id: 1,
    name: "EventPro Networks",
    logo: "/images/partners/eventpro-logo.png",
    website: "https://eventpro-example.com",
    description: "Leading provider of networking solutions for events.",
  },
  {
    id: 2,
    name: "Streamline Media",
    logo: "/images/partners/streamline-logo.png",
    website: "https://streamline-media.com",
    description: "Video streaming partner for virtual events.",
  },
  {
    id: 3,
    name: "SecurePay",
    logo: "/images/partners/securepay-logo.png",
    website: "https://securepay.com",
    description: "Payment processing partner ensuring secure transactions.",
  },
];

// ========== About Page Data ===========
export const aboutPageData: AboutPageData = {
  hero: {
    title: "About Our Event Management System",
    subtitle:
      "Transforming the way companies plan, manage, and deliver world-class events.",
    backgroundImage: "/images/about/hero-event-bg.jpg",
  },
  story: {
    title: "Our Story",
    paragraphs: [
      "Founded with the vision to simplify complex event management challenges, our platform empowers organizers to create seamless and engaging events.",
      "From humble beginnings and manual processes, we built a scalable, digital ecosystem integrating AI and automation to streamline every touchpoint of event planning.",
      "Today, our event system management platform serves hundreds of companies worldwide, making event execution resilient, collaborative, and data-driven.",
    ],
    image: "/images/about/office-team.jpg",
    facts: [
      { label: "Events Managed", value: "500+" },
      { label: "Active Users", value: "250+" },
      { label: "Client Satisfied", value: "98%" },
      { label: "Countries Served", value: "30" },
    ],
  },
  values: {
    title: "Our Core Values",
    subtitle: "The principles that drive our event system innovation",
    items: coreValues,
  },
  team: {
    title: "Meet Our Team",
    subtitle: "The experts behind our powerful platform",
    description:
      "Our multidisciplinary team combines deep expertise in event planning, software engineering, and user experience design to deliver cutting-edge solutions.",
    members: teamMembers,
  },
  journey: {
    title: "Company Journey",
    subtitle: "Milestones that shaped our growth and innovation",
    description:
      "A timeline of key achievements that demonstrate our commitment to excellence in event management technology.",
    milestones: companyMilestones,
  },
  awards: {
    title: "Awards & Recognition",
    subtitle: "Honors awarded for our industry-leading solutions",
    items: companyAwards,
  },
  partners: {
    title: "Our Partners",
    subtitle: "Collaborating with industry leaders to enhance our offerings",
    items: companyPartners,
  },
  cta: {
    title: "Ready to simplify your event management?",
    subtitle:
      "Contact us today and discover how our platform can transform your events.",
    buttonText: "Get in Touch",
    buttonLink: "/contact-us",
  },
};

export default aboutPageData;
