
export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  link?: string;
}

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
