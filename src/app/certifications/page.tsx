"use client";

import React from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

// Define a simple CertificateIcon SVG component for visual appeal.
const CertificateIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
    />
  </svg>
);

type Certification = {
  title: string;
  organization: string;
  credentialUrl: string;
};

// Maintain scalability with a structured array of certifications.
const certifications: Certification[] = [
  {
    title: "Introduction to Enterprise Cloud Migration Planning",
    organization: "LinkedIn",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/14f63b005c0e0faf39138e7a0cfcd3b8fb8c1e9d6278fa004f4ee4a3d79a54aa",
  },
  {
    title: "MERN Essential Training",
    organization: "LinkedIn",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/ee0a0b0b5e9ba8fa00ccbcfc509d23db13e02fee079f5ca3e34390a370a4bd40",
  },
  // Future certifications can be added here.
];

const CertificationsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <HoverBorderGradient
            key={index}
            as="div"
            containerClassName="rounded-xl"
            className="bg-white dark:bg-black p-6 shadow transition duration-300 flex flex-col space-y-4"
            duration={1}
            clockwise={true}
          >
            <div className="flex items-center space-x-2">
              <CertificateIcon />
              <h2 className="text-xl font-semibold">{cert.title}</h2>
            </div>
            <p className="text-gray-500">{cert.organization}</p>
            <Link
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              View Credential
            </Link>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
