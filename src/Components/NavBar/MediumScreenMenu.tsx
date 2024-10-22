import { Github } from "../../Iconos/Github.tsx";
import { Linkedin } from "../../Iconos/Linkedin.tsx";
import SwitchDarkMode from "../SwitchDarkMode/SwitchDarkMode.tsx";
const MediumScreenMenu = () => {
  return (
    <div className="absolute flex flex-col items-center w-52 h-28 top-full mt-2 right-0  rounded-lg p-4 border-2 border-solid border-gray-300/80 dark:border-gray-600 bg-gray-100/90 dark:bg-gray-900">
      <div className="flex gap-3">
        <p className="">Dark Mode:</p>
        <SwitchDarkMode />
      </div>

      <div className="w-64">
        <hr className="border-t-2 border-black/30 dark:border-gray-400 w-3/4 mx-auto mt-4 mb-3" />
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://github.com/M0R4X08"
          className="text-black dark:text-white"
          target="_blank"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/steven-moran-dev"
          className="text-blue-700/95 dark:text-gray-300"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
};
export default MediumScreenMenu;
