import { useEffect, useState } from "react";

const useDarkMode = () => {
  const verifyClass = () => {
    const isDark = localStorage.getItem("darkMode");
    const defaultTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDark && isDark === "enabled") {
      return true;
    } else if (defaultTheme && !isDark) {
      return true;
    } else {
      return false;
    }
  };
  const [isDark, setIsDark] = useState(verifyClass());

  const handleClassChange = () => {
    setIsDark(verifyClass());
  };

  useEffect(() => {
    const observer = new MutationObserver(handleClassChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);
  return isDark;
};

export default useDarkMode;
