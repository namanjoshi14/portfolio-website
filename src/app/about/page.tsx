"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "Infosys Limited",
    content: (
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
          2 yrs 11 mos
        </p>
        <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Specialist Programmer
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Sep 2022 - Present · 2 yrs 8 mos
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Bengaluru, Karnataka, India · Hybrid
        </p>
        <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-4">
          Specialist Programmer Trainee
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Jun 2022 - Aug 2022 · 3 mos
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Mysuru, Karnataka, India · Remote
        </p>
      </div>
    ),
  },
  {
    title: "SRM IST Chennai",
    content: (
      <div className="space-y-2">
        <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Bachelor of Technology - BTech, Computer Science and Engineering
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Jul 2018 - May 2022
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Grade: CGPA :- 9.04
        </p>
      </div>
    ),
  },
  {
    title: "Hartmann College",
    content: (
      <div className="space-y-2">
        <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Schooling
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          2003 - 2017
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Indian School Certificate Examination (ISC), Indian Certificate of
          Secondary Education Examination (ICSE)
        </p>
      </div>
    ),
  },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Timeline data={timelineData} />
    </>
  );
};

export default AboutPage;
