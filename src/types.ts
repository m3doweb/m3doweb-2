export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'E-Commerce' | 'SaaS' | 'Corporate' | 'Mobile App' | 'Branding';
  location: string;
  description: string;
  fullStory: string;
  tags: string[];
  image: string;
  year: string;
  link?: string;
  metrics?: { label: string; value: string }[];
}

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  company?: string;
  budget: string;
  service: string;
  message: string;
  createdAt?: string;
}

export interface EstimateState {
  projectType: string;
  designLevel: string;
  pagesCount: number;
  features: string[];
  timeline: string;
}
