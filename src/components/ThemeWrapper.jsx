import { useEffect } from "react";

const ThemeWrapper = ({ children }) => {
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add("dark");
  }, []);

  return <>{children}</>;
};

export default ThemeWrapper;
