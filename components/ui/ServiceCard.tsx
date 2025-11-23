import React from "react";
import { ExternalLink, Github, MapPin, Clock, Activity } from "lucide-react";
import { Project } from "@/lib/types";
import { StatusIndicator } from "./StatusIndicator";
import { MetricBar } from "./MetricBar";

interface ServiceCardProps {
  project: Project;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ project }) => {
  const Icon = project.icon;
  
  return (
    <div
      className={`bg-[#161b22] border border-gray-800/50 rounded-lg p-5 hover:border-gray-700 transition-all group ${project.bgGlow}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-lg bg-linear-to-br ${project.color} flex items-center justify-center`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-100 mb-1">
              {project.name}
            </h3>
            <StatusIndicator status={project.status} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            title="View Demo"
          >
            <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-200" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            title="View Source"
          >
            <Github className="w-4 h-4 text-gray-400 hover:text-gray-200" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={`${project.id}-${tech}`}
            className="px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 rounded text-xs font-mono text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Metrics */}
      <div className="space-y-3 mb-4">
        <MetricBar
          label="CPU"
          value={project.metrics.cpu}
          color="from-blue-500 to-cyan-500"
        />
        <MetricBar
          label="Memory"
          value={project.metrics.memory}
          color="from-purple-500 to-pink-500"
        />
        <MetricBar
          label="Disk I/O"
          value={project.metrics.disk}
          color="from-orange-500 to-red-500"
        />
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-800/50 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <MapPin className="w-3 h-3 text-gray-500" />
            <p className="text-xs font-mono text-gray-500">Location</p>
          </div>
          <p className="text-xs font-semibold text-gray-300">{project.region}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-gray-500" />
            <p className="text-xs font-mono text-gray-500">Uptime</p>
          </div>
          <p className="text-xs font-semibold text-green-500">{project.uptime}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Activity className="w-3 h-3 text-gray-500" />
            <p className="text-xs font-mono text-gray-500">Response</p>
          </div>
          <p className="text-xs font-semibold text-blue-500">
            {project.responseTime}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r ${project.color} hover:opacity-90 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]`}
        >
          <ExternalLink className="w-4 h-4" />
          View Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-600 rounded-lg text-sm font-semibold text-gray-300 hover:text-white transition-all"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
