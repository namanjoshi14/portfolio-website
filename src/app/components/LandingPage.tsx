"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

import sampleArcs from "@/data/globe.json";

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  polygonsData: sampleArcs,
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const typewriterWords = [
  { text: "I", className: "text-gray-300" },
  { text: "am", className: "text-gray-300" },
  { text: "a", className: "text-gray-300" },
  { text: "Specialist", className: "text-blue-400" },
  { text: "Programmer", className: "text-blue-400" },
  { text: "at", className: "text-gray-300" },
  { text: "Infosys Limited,", className: "text-gray-300" },
  { text: "focused", className: "text-gray-300" },
  { text: "on", className: "text-gray-300" },
  { text: "building", className: "text-emerald-400" },
  { text: "innovative", className: "text-emerald-400" },
  { text: "solutions", className: "text-emerald-400" },
  { text: "using", className: "text-gray-300" },
  { text: "emerging", className: "text-pink-400" },
  { text: "technologies.", className: "text-pink-400" },
];

const LandingPage: React.FC = () => {
  return (
    <>
      <section className="min-h-screen px-6 py-16 bg-gray-950">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl sm:text-5xl font-bold tracking-tight text-transparent"
          >
            Infoscion (Specialist Programmer) | Full Stack Developer
          </motion.h1>
        </LampContainer>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="w-full md:w-1/2 h-[40rem] relative">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed"
            >
              <TypewriterEffect
                words={typewriterWords}
                className="text-left text-xl"
                cursorClassName="text-blue-400"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
