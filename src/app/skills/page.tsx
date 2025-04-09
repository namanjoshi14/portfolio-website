"use client";

import React from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import {
  Cloud,
  Code,
  Database,
  Server,
  Terminal,
  Wrench,
  LayoutDashboard,
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  tooltip?: string;
};

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 mr-1 inline-block" />,
    skills: [
      { name: "Microsoft Azure", icon: <Cloud /> },
      { name: "Amazon Web Services (AWS)", icon: <Cloud /> },
      { name: "Google Cloud Platform (GCP)", icon: <Cloud /> },
      { name: "Cloud Computing", icon: <Cloud /> },
      { name: "Cloud Migration", icon: <Cloud /> },
      { name: "Cloud Strategy", icon: <Cloud /> },
      { name: "Cloud-Native Architecture", icon: <Cloud /> },
    ],
  },
  {
    title: "Frontend Development",
    icon: <LayoutDashboard className="w-5 h-5 mr-1 inline-block" />,
    skills: [
      { name: "React.js", icon: <Code /> },
      { name: "Next.js", icon: <Code /> },
      { name: "Redux.js", icon: <Code /> },
      { name: "TypeScript", icon: <Code /> },
      { name: "Tailwind CSS", icon: <Code /> },
      { name: "Material-UI", icon: <Code /> },
      { name: "Storybook.js", icon: <Code /> },
      { name: "Aceternity UI", icon: <Code /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-5 h-5 mr-1 inline-block" />,
    skills: [
      { name: "Node.js", icon: <Server /> },
      { name: "Express.js", icon: <Server /> },
      { name: "MongoDB", icon: <Database /> },
      { name: "MySQL", icon: <Database /> },
      { name: "REST APIs", icon: <Server /> },
      { name: "Swagger API", icon: <Server /> },
      { name: "Postman API", icon: <Server /> },
      {
        name: "API Integration",
        icon: <Server />,
        tooltip: "Application Programming Interfaces (API)",
      },
    ],
  },
  {
    title: "Tooling & Ops",
    icon: <Wrench className="w-5 h-5 mr-1 inline-block" />,
    skills: [
      { name: "Git", icon: <Wrench /> },
      { name: "GitHub", icon: <Wrench /> },
      { name: "Sentry", icon: <Wrench /> },
      { name: "Clerk", icon: <Wrench /> },
      { name: "Keycloak", icon: <Wrench /> },
      { name: "npm", icon: <Wrench /> },
      { name: "Version Control", icon: <Wrench /> },
      { name: "Dependency Management", icon: <Wrench /> },
      { name: "Package Management", icon: <Wrench /> },
    ],
  },
  {
    title: "Programming & Logic",
    icon: <Terminal className="w-5 h-5 mr-1 inline-block" />,
    skills: [
      { name: "Java", icon: <Terminal /> },
      { name: "JavaScript", icon: <Terminal /> },
      { name: "Data Structures", icon: <Terminal /> },
      { name: "Algorithms", icon: <Terminal /> },
      { name: "Object-Oriented Programming (OOP)", icon: <Terminal /> },
    ],
  },
  {
    title: "Software Engineering",
    icon: <Code className="w-5 h-5 mr-1 inline-block" />,
    skills: [
      { name: "Secure SDLC", icon: <Code /> },
      { name: "Agile Methodologies", icon: <Code /> },
      { name: "Agile Project Management", icon: <Code /> },
      { name: "Software Design Patterns", icon: <Code /> },
      { name: "Web Development", icon: <Code /> },
      { name: "Big Data Analytics", icon: <Code /> },
      { name: "Computer Engineering", icon: <Code /> },
      { name: "Computer System Design", icon: <Code /> },
      { name: "Computer Science", icon: <Code /> },
    ],
  },
];

export default function SkillSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 px-6 rounded-lg">
      <div className="relative z-20 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Technical Arsenal
        </h2>
      </div>
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              {group.icon}
              {group.title}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center text-white/90 space-x-2 cursor-default hover:text-white transition-colors">
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    </TooltipTrigger>
                    {skill.tooltip && (
                      <TooltipContent className="bg-black text-white text-xs rounded px-2 py-1">
                        {skill.tooltip}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
