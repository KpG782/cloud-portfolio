import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  status: "running" | "down";
  type: string;
  tech: string[];
  location: string;
  uptime: string;
  responseTime: string;
  requests: string;
  icon: LucideIcon;
  color: string;
  bgGlow: string;
  demoUrl: string;
  githubUrl: string;
  description: string;
  metrics?: {
    cpu: number;
    memory: number;
    disk: number;
  };
  deployment: string;
  region: string;
  cost: string;
}

export interface Stat {
  label: string;
  value: string;
  subtext: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  trend: string;
  trendUp: boolean;
}
