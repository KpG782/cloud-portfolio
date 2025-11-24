import React from "react";
import {
  Server,
  Cloud,
  Container,
  DollarSign,
  Mail,
  Globe,
} from "lucide-react";

export const FooterSummary: React.FC = () => {
  return (
    <>
      {/* Infrastructure Summary */}
      <div className="bg-linear-to-br from-orange-500/10 via-purple-500/10 to-blue-500/10 border border-gray-800/50 rounded-lg p-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold bg-linear-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Multi-Cloud Production Infrastructure
          </h3>
          <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Production infrastructure with AWS cloud deployment (EC2, S3, RDS)
            and Easypanel VPS hosting 4 Dockerized applications with automated
            SSL and monitoring
          </p>
          <div className="flex items-center justify-center gap-6 pt-4 flex-wrap">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Server className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-mono text-gray-500">
                  Projects
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-100">5</p>
            </div>
            <div className="w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Cloud className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-mono text-gray-500">
                  Providers
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-100">2</p>
            </div>
            <div className="w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Container className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-mono text-gray-500">
                  Containers
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-100">4</p>
            </div>
            <div className="w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                <span className="text-sm font-mono text-gray-500">
                  Monthly Cost
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-100">$2.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Footer */}
      <div className="bg-[#161b22] border border-gray-800/50 rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Section */}
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-orange-500 via-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                KG
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-100 mb-2">
                Ken Patrick A. Garcia
              </h3>
              <p className="text-base text-gray-400 mb-3">
                Full-Stack Developer | AI/ML Practitioner | Cloud Computing
                Enthusiast
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Computer Science student at{" "}
                <span className="text-orange-400 font-semibold">
                  University of Makati
                </span>
                , specializing in building modern, scalable applications.
                Currently pursuing{" "}
                <span className="text-blue-400 font-semibold">
                  DataCamp's Data Engineering Scholarship
                </span>{" "}
                while developing full-stack solutions with a focus on cloud
                architecture, AI integration, and DevOps practices.
              </p>

              {/* Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="https://kengarciaportfolio-kpg782s-projects.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all"
                >
                  <Globe className="w-4 h-4" />
                  Portfolio
                </a>
                <a
                  href="https://www.linkedin.com/in/ken-patrick-garcia-ba5430285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm font-medium text-blue-400 hover:text-blue-300 transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/KpG782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
                <a
                  href="mailto:kenpatrickgarcia123@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-gray-800/50 text-center">
            <p className="text-sm text-gray-500 font-mono">
              © 2025 Ken Patrick Garcia • IV ACSAD • Cloud Computing Portfolio
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Built with Next.js 16 • TypeScript • Tailwind CSS v4 • Deployed on
              Multi-Cloud Infrastructure
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
