export type ProjectCategory = 'all' | 'architecture' | 'digital' | 'brand' | 'furniture';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'architecture' | 'digital' | 'brand' | 'furniture';
  client: string;
  year: string;
  location: string;
  duration: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  materials?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceOffering {
  id: string;
  name: string;
  category: 'architecture' | 'digital' | 'brand' | 'furniture';
  description: string;
  deliverables: string[];
  typicalDuration: string;
  estimatedBudget: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  services: string[];
  budgetTier: string;
  timeline: string;
  projectOverview: string;
}
