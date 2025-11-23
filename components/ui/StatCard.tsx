import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Stat } from "@/lib/types";

interface StatCardProps {
  stat: Stat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const Icon = stat.icon;
  
  return (
    <div className="bg-[#161b22] border border-gray-800/50 rounded-lg p-4 hover:border-gray-700/50 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div
          className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}
        >
          <div className={`w-5 h-5 bg-linear-to-br ${stat.color}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs font-mono">
          {stat.trendUp ? (
            <TrendingUp className="w-3.5 h-3.5 text-green-500" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5 text-red-500" />
          )}
          <span className={stat.trendUp ? "text-green-500" : "text-red-500"}>
            {stat.trend}
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-gray-100">{stat.value}</p>
        <p className="text-xs text-gray-500 font-mono uppercase tracking-wide">
          {stat.label}
        </p>
        <p className="text-xs text-gray-600">{stat.subtext}</p>
      </div>
    </div>
  );
};
