"use client";

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

export function ThemedToastContainer() {
  const { theme } = useTheme();

  const toastTheme = theme === "dark" ? "dark" : "light";

  return <ToastContainer key={theme} theme={toastTheme} />;
}
