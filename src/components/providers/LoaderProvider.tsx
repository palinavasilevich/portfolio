"use client";

import { useEffect, useState } from "react";
import { DiceLoader } from "../ui/loader/dice/DiceLoader";

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <DiceLoader /> : children}</>;
}
