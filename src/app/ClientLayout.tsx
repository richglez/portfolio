"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 LOADING OVERLAY */}
      {loading && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#050505ff]">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xl tracking-widest text-slate-400">
              LOADING
            </span>

            <div className="h-1.5 w-40 overflow-hidden rounded-full bg-purple-400/20">
              <div className="h-full w-1/2 p-8 rounded-lg bg-linear-to-r from-purple-300 via-purple-500 to-fuchsia-400 shadow-[0_0_15px_rgba(168,85,247,0.6),0_0_30px_rgba(168,85,247,0.4)] animate-loading-bar  shadow-purple-400" />
            </div>
          </div>
        </div>
      )}

      {/* 🌌 TU UI TAL CUAL */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#231A69]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <AnimatedBackground />
      <Navbar />

      {children}
    </>
  );
}
