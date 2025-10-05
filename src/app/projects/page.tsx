"use client";

import React from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const ProjectIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

type Project = {
  name: string;
  description: string;
  technologies: string[];
  dateCreated: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    name: "GeoPulse",
    description:
      "Advanced geospatial intelligence platform featuring interactive world mapping and real-time satellite tracking with comprehensive geographical intelligence through React 19.1.1 and modern web technologies.",
    technologies: [
      "React 19.1.1",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "REST APIs",
      "N2YO API",
      "TopoJSON",
    ],
    dateCreated: "April 2025",
    projectUrl: "https://geo-pulse-pi.vercel.app/",
  },
  {
    name: "WealthAxis",
    description:
      "Full-stack personal finance management platform integrating real-time market analysis, cryptocurrency tracking, intelligent budgeting tools, and AI-powered financial analytics for comprehensive wealth management.",
    technologies: [
      "React 19.0",
      "Material-UI v7.0",
      "Redux Toolkit",
      "Chart.js",
      "Finnhub API",
      "CoinGecko API",
      "Google Gemini AI",
    ],
    dateCreated: "April 2025",
    projectUrl: "https://wealth-axis.vercel.app",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <HoverBorderGradient
            key={index}
            as="div"
            containerClassName="rounded-xl"
            className="bg-white dark:bg-black p-6 shadow transition duration-300 flex flex-col space-y-4"
            duration={1}
            clockwise={true}
          >
            <div className="flex items-center space-x-2">
              <ProjectIcon />
              <h2 className="text-xl font-semibold">{project.name}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Technologies:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-sm">{project.dateCreated}</p>
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              View Project
            </Link>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
