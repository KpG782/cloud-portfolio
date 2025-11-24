import React from "react";
import { ExternalLink, MapPin, Clock, Activity } from "lucide-react";
import { Project } from "@/lib/types";
import { StatusIndicator } from "./StatusIndicator";

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
            <svg
              className="w-4 h-4 text-gray-400 hover:text-gray-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech) => (
          <span
            key={`${project.id}-${tech}`}
            className="px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 rounded text-xs font-mono text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800/50 mb-5">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <MapPin className="w-3 h-3 text-gray-500" />
            <p className="text-xs font-mono text-gray-500">Location</p>
          </div>
          <p className="text-xs font-semibold text-gray-300">
            {project.region}
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-gray-500" />
            <p className="text-xs font-mono text-gray-500">Uptime</p>
          </div>
          <p className="text-xs font-semibold text-green-500">
            {project.uptime}
          </p>
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
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
