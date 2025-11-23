"use client";

import React, { useState, useEffect } from "react";
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

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="min-h-screen bg-[#0b0d11] text-white">
      <Header currentTime={formattedTime} mounted={mounted} />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-6 space-y-6">
        <StatsGrid stats={stats} />
        <InfrastructureOverview />
        <ServicesDashboard
          projects={projects}
          currentTime={formattedTime}
          mounted={mounted}
        />
        <FooterSummary />
      </div>
    </div>
  );
}
