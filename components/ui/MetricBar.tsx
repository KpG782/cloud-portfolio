import React from "react";

interface MetricBarProps {
  label: string;
  value: number;
  color: string;
}

export const MetricBar: React.FC<MetricBarProps> = ({ label, value, color }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center">
      <span className="text-xs font-mono text-gray-500">{label}</span>
      <span className="text-xs font-mono font-semibold text-gray-300">
        {value}%
      </span>
    </div>
    <div className="h-1.5 bg-gray-800/80 rounded-full overflow-hidden">
      <div
        className={`h-full bg-linear-to-r ${color} transition-all duration-1000 ease-out rounded-full`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);
