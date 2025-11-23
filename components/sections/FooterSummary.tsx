import React from "react";
import { Server, Cloud, Container, DollarSign } from "lucide-react";

export const FooterSummary: React.FC = () => {
  return (
    <div className="bg-linear-to-br from-orange-500/10 via-purple-500/10 to-blue-500/10 border border-gray-800/50 rounded-lg p-6">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold bg-linear-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Multi-Cloud Production Infrastructure
        </h3>
        <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Production infrastructure with AWS cloud deployment (EC2, S3, RDS) and
          Easypanel VPS hosting 4 Dockerized applications with automated SSL and
          monitoring
        </p>
        <div className="flex items-center justify-center gap-6 pt-4 flex-wrap">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Server className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-mono text-gray-500">Projects</span>
            </div>
            <p className="text-2xl font-bold text-gray-100">5</p>
          </div>
          <div className="w-px h-12 bg-gray-800" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Cloud className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-mono text-gray-500">Providers</span>
            </div>
            <p className="text-2xl font-bold text-gray-100">2</p>
          </div>
          <div className="w-px h-12 bg-gray-800" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Container className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-mono text-gray-500">Containers</span>
            </div>
            <p className="text-2xl font-bold text-gray-100">4</p>
          </div>
          <div className="w-px h-12 bg-gray-800" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              <span className="text-sm font-mono text-gray-500">Monthly Cost</span>
            </div>
            <p className="text-2xl font-bold text-gray-100">$2.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
