import React from "react";
import { Database, Clock } from "lucide-react";
import { ServiceCard } from "../ui/ServiceCard";
import { Project } from "@/lib/types";

interface ServicesDashboardProps {
  projects: Project[];
  currentTime: string;
  mounted: boolean;
}

export const ServicesDashboard: React.FC<ServicesDashboardProps> = ({
  projects,
  currentTime,
  mounted,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-100">
          <Database className="w-5 h-5 text-purple-500" />
          Service Status Dashboard
        </h2>
        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-800/30 px-3 py-1.5 rounded-lg border border-gray-800/50">
          <Clock className="w-3.5 h-3.5" />
          <span className="font-mono">
            Updated: {mounted ? currentTime : "00:00:00"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ServiceCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
