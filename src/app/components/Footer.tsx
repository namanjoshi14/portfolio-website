"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-black text-white text-center py-6 text-sm border-t border-gray-800 mt-8">
      <p className="mb-1">© {year} Naman Joshi. All Rights Reserved.</p>
    </footer>
  );
}
