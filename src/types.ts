export type ProjectType =
  | 'AI Solution'
  | 'LLM Application'
  | 'Claude Implementation'
  | 'AI Automation'
  | 'Business Process Automation'
  | 'AI Integration'
  | 'Data Analytics'
  | 'AI Training'
  | 'Other';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
  tag: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  category: 'systems' | 'data' | 'ai' | 'automation' | 'workflows' | 'outcomes';
  description: string;
  icon: string;
  techs?: string[];
}

export interface ProjectCardItem {
  id: string;
  title: string;
  category: 'LLM Applications' | 'AI Automation' | 'AI Integration' | 'Data & Analytics';
  summary: string;
  objective: string;
  implementation: string;
  techStack: string[];
  outcome: string;
  statusTag?: string;
}

export interface IntegrationCategory {
  name: string;
  description: string;
  iconName: string;
  tools: {
    name: string;
    role: string;
    verified: boolean;
  }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  details: string[];
}

export interface OutcomeItem {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  businessMetricLabel: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  projectType: ProjectType;
  currentChallenge: string;
  expectedOutcome: string;
  budgetRange: string;
  timeline: string;
}
