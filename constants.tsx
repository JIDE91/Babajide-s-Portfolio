
import { Experience, Project, Award, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: "Babajide Ojo",
  title: "Content Writer & Pharmacist",
  email: "adebowalebabajide91@gmail.com",
  phone: "+234 816 339 5532",
  location: "Lagos, Nigeria",
  profile: "Analytical and detail-oriented Pharmacist, Academic Research Assistant, and Content Writer with proven expertise in health communication, scientific research, sports analysis, and digital storytelling. Versatile writer skilled in crafting engaging, well-researched content tailored to diverse audiences. Adept at merging academic precision with creative clarity.",
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Health and Wellness Content Writer",
    company: "MedWise Hub",
    period: "10/2025 – Present",
    highlights: [
      "Researched and developed clear, evidence-based health articles, simplifying complex medical concepts for non-medical audiences.",
      "Produce SEO-optimized content that improves readership, boosts visibility, and supports brand authority in the digital health space.",
      "Collaborate with editors and subject-matter experts to ensure accuracy, relevance, and adherence to medical writing standards.",
      "Managed blog calendar to ensure timely publication of articles, maintaining regular reader engagement."
    ]
  },
  {
    role: "Sports Blogger",
    company: "Medium",
    period: "11/2024 – Present",
    highlights: [
      "Create compelling sports articles, match analyses, player profiles, and opinion pieces tailored to football-focused audiences.",
      "Balanced entertainment and technical insight to appeal to both casual fans and football enthusiasts.",
      "Break down complex game tactics, player statistics, and performance metrics into engaging, relatable commentary.",
      "Maintain a consistent, authoritative voice that enhances audience trust and strengthens brand presence."
    ]
  },
  {
    role: "Research Assistant",
    company: "University of Lagos",
    period: "01/2025 – 10/2025",
    highlights: [
      "Conducted literature reviews, data collection, and critical analysis for health-related research projects.",
      "Assisted in developing research objectives, methodologies, and structured reports aligned with academic standards.",
      "Interpreted scientific data and synthesized complex findings into clear, evidence-based summaries.",
      "Utilized scientific databases and peer-reviewed publications to support data-driven decision-making."
    ]
  },
  {
    role: "Freelance Content and Copywriter",
    company: "Remote",
    period: "07/2024 – Present",
    highlights: [
      "Collaborate with clients to develop tailored content strategies that align with their brand goals.",
      "Optimize content for SEO by strategically including relevant keywords without compromising readability.",
      "Conduct comprehensive research on industry topics to create informative and engaging articles.",
      "Edit and proofread drafts to enhance clarity, coherence, and overall impact."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Investigation of the Gastroprotective and Antinociceptive Activities of the Leaves of Solanecio biafrae plant",
    role: "Research Assistant",
    period: "01/2025 – 10/2025",
    description: "Explored the potential gastroprotective (ulcer-preventing) and antinociceptive (pain-relieving) activities of plant extracts to protect the stomach lining and reduce pain sensation."
  },
  {
    title: "Nigeria: The Gulf of Guinea’s Energy Hub – Mapping the Pathway",
    role: "Research Paper Writer",
    period: "06/2025 – 09/2025",
    description: "An unpublished analytical policy paper exploring Nigeria's potential as a regional energy hub, identifying barriers like security and infrastructure and proposing solutions for sustainable energy."
  }
];

export const AWARDS: Award[] = [
  {
    title: "Second Runner-Up, Bode Osunkoya Prize",
    organization: "PSRG-Richardson HSSE Forum",
    date: "09/2025",
    description: "Awarded for research on Nigeria's energy hub, evaluated on innovation, technical depth, and industry impact."
  },
  {
    title: "Recognition of Service as PANS-YBC Secretary General",
    organization: "PANS-YBC 2024/2025",
    date: "09/2025",
    description: "Awarded for exemplary leadership and contributions to the coordination and administration of the Year Book Class."
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Writing and Content",
    items: ["Content Writing", "Copywriting", "Sports Journalism", "Creative Storytelling", "SEO Writing", "Proofreading & Editing", "Research-Based Writing"]
  },
  {
    category: "Technical and Digital",
    items: ["WordPress", "Google Docs", "Microsoft Word", "Grammarly", "Canva", "Social Media Drafting", "Notion"]
  },
  {
    category: "Soft Skills",
    items: ["Detail-Oriented Writing", "Analytical Thinking", "Time Management", "Team Collaboration", "Effective Communication"]
  }
];
