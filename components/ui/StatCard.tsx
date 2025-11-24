import React from "react";
import { Stat } from "@/lib/types";

interface StatCardProps {
  stat: Stat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const Icon = stat.icon;

  return (
    <div className="bg-[#161b22] border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center shrink-0`}
        >
          <Icon className={`w-6 h-6 bg-linear-to-br ${stat.color} bg-clip-text text-transparent`} />
        </div>
        <div className="flex-1">
          <p className="text-3xl font-bold text-gray-100 mb-1">{stat.value}</p>
          <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-800/50">
        <p className="text-xs text-gray-600">{stat.subtext}</p>
        <span className="text-xs font-mono text-gray-500">{stat.trend}</span>
      </div>
    </div>
  );
};
