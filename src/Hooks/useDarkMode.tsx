import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleClassChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(handleClassChange);
    observer.observe(document.documentElement, { attributes: true });

    // Limpiar el observer al desmontar el componente
    return () => {
      observer.disconnect();
    };
  }, []);

  return isDark;
};

export default useDarkMode;
