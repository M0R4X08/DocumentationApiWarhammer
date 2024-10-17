import { useEffect, useState } from "react";

const useDarkMode = () => {
  const verifyClass = () => {
    const isDark = localStorage.getItem("darkMode");
    if (isDark && isDark === "enabled") {
      return true;
    }
    return false;
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
