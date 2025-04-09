"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  InfoIcon,
  FolderIcon,
  MailIcon,
  BadgeCheckIcon,
  BrainIcon,
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Experience", path: "/about", icon: InfoIcon },
    { name: "Skills", path: "/skills", icon: BrainIcon },
    { name: "Certifications", path: "/certifications", icon: BadgeCheckIcon },
    { name: "Projects", path: "/projects", icon: FolderIcon },
    { name: "Contact Me", path: "/contact", icon: MailIcon },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="w-full bg-black shadow-md z-50">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 p-4">
        {navItems.map(({ name, path, icon: Icon }) => (
          <button
            key={path}
            onClick={() => handleNavigation(path)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-800",
              pathname === path
                ? "bg-gray-700 font-semibold text-white"
                : "text-gray-300"
            )}
          >
            <Icon className="w-4 h-4" />
            {name}
          </button>
        ))}
      </div>
    </nav>
  );
}
