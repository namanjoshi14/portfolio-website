"use client";

import React from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

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
  {
    title: "Oracle Certified Foundations Associate",
    organization: "Oracle",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F01F0FA3571AA11E99465D10C51DA22C59E5DA3E98662D496D81F19D6BEBCBF5",
  },
  {
    title: "MongoDB Aggregation Fundamentals",
    organization: "MongoDB",
    credentialUrl:
      "https://www.credly.com/badges/a2ed65bd-7526-4c7b-afaa-17c463f76e1c/linked_in_profile",
  },
  {
    title: "Frontend Developer (React)",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/a86a6729d1b9",
  },
  {
    title: "Node (Basic)",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/4cd5590376fc",
  },
  {
    title: "React (Basic)",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/2c74f2b68727",
  },
  {
    title: "React: Design Patterns",
    organization: "LinkedIn",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/30340a764d4901bbef7d9716a41e7fa1a9a4af313e84a73f09c94d9056341fff?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4lJ9tNe4TzG%2FxPuFJmNcgw%3D%3D",
  },
  {
    title: "System Design in Cloud",
    organization: "LinkedIn",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/69da4ccbd015d3ef2318c961b554e139380475d466a9848f763c07761ae1cfd8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4lJ9tNe4TzG%2FxPuFJmNcgw%3D%3D",
  },
  {
    title: "GitHub Foundations",
    organization: "GitHub",
    credentialUrl:
      "https://www.credly.com/badges/6ef0c9c9-88fe-4b09-91fb-afc22ed464ea/linked_in_profile",
  },
  {
    title: "API Beginner Learning Path - Completion Certificate",
    organization: "Postman",
    credentialUrl: "https://verify.skilljar.com/c/hdut3eebywia",
  },
  {
    title: "MongoDB Developer's Toolkit course by GeeksforGeeks",
    organization: "GeeksforGeeks",
    credentialUrl:
      "https://www.geeksforgeeks.org/certificate/3952a6d47bac4ee9379ca367c58d4c98?utm_source=socials&utm_medium=cc_link",
  },
  {
    title: "Node JS Certification Course - Master the Fundamentals",
    organization: "Scaler",
    credentialUrl: "https://moonshot.scaler.com/s/sl/AxN65AybtR",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    credentialUrl:
      "https://www.credly.com/badges/7982eca1-6dd3-4690-ae0b-553657a46a7e/linked_in_profile",
  },
  {
    title: "JavaScript Foundations Professional Certificate by Mozilla",
    organization: "Mozilla",
    credentialUrl: "",
  },
  {
    title: "Salesforce Certified AI Associate",
    organization: "Salesforce",
    credentialUrl: "https://www.salesforce.com/trailblazer/a0i1op1tksoi5j3neg",
  },
  {
    title: "Cloud Digital Leader Certification",
    organization: "Google",
    credentialUrl:
      "https://www.credly.com/badges/508b2145-ca9c-47db-8183-2135e59bccba/linked_in_profile",
  },
  {
    title: "Build an Enterprise Cloud Architecture",
    organization: "LinkedIn",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/b5ba8dbf9ad5e85358f907d960212ff40eb17d79ad6c406ee7f5abd1250c04c6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdPFnZsnwRLupiXN%2BAPFoIA%3D%3D",
  },
  {
    title: "SI Associate Quiz",
    organization: "MongoDB",
    credentialUrl: "https://learn.mongodb.com/c/UBJ5DBYqS8WFaDs7Sktlmg",
  },
  {
    title: "Azure Cloud Design Patterns",
    organization: "LinkedIn",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/5c62baa3fd8e43c98a2f8942fbe331a7b7ebdfa4fe9cd37ab9a3b1cc94188670?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdPFnZsnwRLupiXN%2BAPFoIA%3D%3D",
  },
  {
    title: "LinkedIn Learning Cloud Strategy Professional Certificate",
    organization: "LinkedIn",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/a9214e49e79947e26387db7c4d81ff574c4ba365e4f51766a2fe3b0108515389?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdPFnZsnwRLupiXN%2BAPFoIA%3D%3D",
  },
  {
    title: "JavaScript (Intermediate)",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/1771c3b1c001",
  },
  {
    title: "Advanced Java Programming",
    organization: "LinkedIn",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/eee6e57da5dc223339d654fd429c978f95dec8ffac355fcb4b018a40f3d04225?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdPFnZsnwRLupiXN%2BAPFoIA%3D%3D",
  },
  {
    title:
      "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    organization: "Microsoft",
    credentialUrl:
      "https://www.credly.com/badges/f9bcae94-f901-4f70-a2be-b9d6c6737002/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals",
    organization: "Microsoft",
    credentialUrl:
      "https://www.credly.com/badges/cdc482ec-ea48-4855-9a9b-237c6434e526/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    credentialUrl:
      "https://www.credly.com/badges/e8dac3ac-b408-453b-bef5-72f6eb596cf8/linked_in_profile",
  },
  {
    title: "Programming in Java",
    organization: "NPTEL",
    credentialUrl: "",
  },
  {
    title: "Data Structure and Algorithms using Java",
    organization: "NPTEL",
    credentialUrl: "",
  },
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
