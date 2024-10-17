import { useEffect, useState } from "react";

const useDarkMode = () => {
  const verifyClass = () => {
    return document.documentElement.classList.contains("dark");
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
