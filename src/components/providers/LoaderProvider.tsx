"use client";

import { useEffect, useState } from "react";
import { DiceLoader } from "../ui/loader/dice/DiceLoader";

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(hide);
  }, []);

  useEffect(() => {
    if (!loading) {
      const unmount = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(unmount);
    }
  }, [loading]);

  return (
    <>
      {visible && (
        <div
          className="transition-opacity duration-300"
          style={{ opacity: loading ? 1 : 0 }}
        >
          <DiceLoader />
        </div>
      )}
      <div
        className="transition-opacity duration-300"
        style={{ opacity: visible ? 0 : 1 }}
      >
        {children}
      </div>
    </>
  );
}
