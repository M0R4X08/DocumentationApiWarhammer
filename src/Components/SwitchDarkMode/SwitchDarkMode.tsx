import { useEffect, useState } from "react";

const SwitchDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (event: any) => {
    event.stopPropagation();
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "enabled" : "disabled");
  };

  useEffect(() => {
    const defaultTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const localTheme = localStorage.getItem("darkMode");
    if (localTheme === "enabled") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (localTheme === "disabled") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else if (defaultTheme) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);
  return (
    <div
      className="w-14 h-[1.7rem] flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-500"
      onClick={toggleDarkMode}
    >
      <span className="bg-white dark:bg-gray-900 w-5 h-5 rounded-full shadow-md transform transition-transform duration-500 ease-in-out translate-x-0 dark:translate-x-6"></span>
    </div>
  );
};
export default SwitchDarkMode;
