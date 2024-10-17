const SwitchDarkMode = () => {
  const toggleDarkMode = (event: any) => {
    event.stopPropagation();
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      className="w-14 h-[1.9rem] flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-700"
      onClick={toggleDarkMode}
    >
      <span className="bg-white dark:bg-gray-900 w-6 h-6 rounded-full shadow-md transform transition-transform duration-700 ease-in-out translate-x-0 dark:translate-x-6"></span>
    </div>
  );
};
export default SwitchDarkMode;
