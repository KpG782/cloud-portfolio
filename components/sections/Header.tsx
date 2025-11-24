"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
              <Image
                src="/clouds-cloud-svgrepo-com.svg"
                alt="Cloud"
                width={28}
                height={28}
                className="brightness-0 invert"
              />
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
