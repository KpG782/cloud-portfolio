import React from "react";
import { Gauge, Cloud, Server, Database } from "lucide-react";

export const InfrastructureOverview: React.FC = () => {
  return (
    <div className="bg-[#161b22] border border-gray-800/50 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-100">
        <Gauge className="w-5 h-5 text-orange-500" />
        Infrastructure Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* AWS Cloud */}
        <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-200">AWS Cloud</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Region</span>
              <span className="text-gray-300 font-mono">ap-southeast-2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Services</span>
              <span className="text-gray-300 font-mono">EC2 • S3 • RDS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Cost</span>
              <span className="text-green-500 font-mono">$0.85/mo</span>
            </div>
          </div>
        </div>

        {/* Docker/Easypanel */}
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Server className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-200">Easypanel VPS</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Region</span>
              <span className="text-gray-300 font-mono">Singapore</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Containers</span>
              <span className="text-gray-300 font-mono">4 Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">SSL</span>
              <span className="text-green-500 font-mono">Let&apos;s Encrypt</span>
            </div>
          </div>
        </div>

        {/* Total Infrastructure */}
        <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-200">Total Resources</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Services</span>
              <span className="text-gray-300 font-mono">5 Deployed</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Uptime</span>
              <span className="text-green-500 font-mono">99.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Total Cost</span>
              <span className="text-gray-300 font-mono">~$2.00/mo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
