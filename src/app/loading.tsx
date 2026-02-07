"use client";

import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-1 w-40 overflow-hidden rounded-full bg-white/20">
        <div className="h-full w-1/2 bg-white animate-loading-bar)]" />
      </div>
    );
  }

  return <>{children}</>;
}
