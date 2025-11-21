import { LucideIcon } from "lucide-react";

export interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

export interface CaseStudyProps {
  title: string;
  subtitle: string;
  points: string[];
}

export interface IdeaProps {
  title: string;
  description: string;
  focus: string;
}