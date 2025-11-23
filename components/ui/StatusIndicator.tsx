import React from "react";

interface StatusIndicatorProps {
  status: "running" | "down";
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => (
  <div className="flex items-center gap-2">
    <div
      className={`relative w-2 h-2 rounded-full ${
        status === "running" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {status === "running" && (
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      )}
    </div>
    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
      {status === "running" ? "Operational" : "Down"}
    </span>
  </div>
);
