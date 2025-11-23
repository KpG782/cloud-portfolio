"use client";

import React from "react";
import { BarChart3, CheckCircle2 } from "lucide-react";

interface HeaderProps {
  currentTime: string;
  mounted: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentTime, mounted }) => {
  return (
    <header className="border-b border-gray-800/50 bg-[#111318]/95 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-100">
                Cloud Computing Portfolio
              </h1>
              <p className="text-xs text-gray-500 font-mono">
                Ken Patrick Garcia • IV ACSAD • DevOps & Cloud Infrastructure
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-sm font-mono font-semibold text-gray-300">
                {mounted ? currentTime : "00:00:00"}
              </div>
              <div className="text-xs text-gray-600 font-mono">
                UTC+8 (Manila)
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-xs font-mono text-green-500">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
