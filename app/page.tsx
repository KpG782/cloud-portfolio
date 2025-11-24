"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/sections/Sidebar";
import { Header } from "@/components/sections/Header";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { InfrastructureOverview } from "@/components/sections/InfrastructureOverview";
import { ServicesDashboard } from "@/components/sections/ServicesDashboard";
import { FooterSummary } from "@/components/sections/FooterSummary";
import { projects, stats } from "@/lib/data";

export default function CloudPortfolioDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Manila',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div id="top" className="min-h-screen bg-[#0b0d11] text-white">
      <Sidebar />
      <div className="ml-20">
        <Header currentTime={formattedTime} mounted={mounted} />

        <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-8 space-y-10">
          <div id="stats">
            <StatsGrid stats={stats} />
          </div>
          <div id="infrastructure">
            <InfrastructureOverview />
          </div>
          <div id="services">
            <ServicesDashboard
              projects={projects}
              currentTime={formattedTime}
              mounted={mounted}
            />
          </div>
          <div id="footer">
            <FooterSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
