import React from "react";
import { Github } from "../../Iconos/Github";
import { Linkedin } from "../../Iconos/Linkedin";
import SwitchDarkMode from "../SwitchDarkMode/SwitchDarkMode";

interface SmallScreenMenuProps {
  showSmallMenu: boolean;
  handleShowSmallMenu: () => void;
}
const SmallScreenMenu: React.FC<SmallScreenMenuProps> = ({
  showSmallMenu,
  handleShowSmallMenu,
}) => {
  return (
    <div
      className={`${
        showSmallMenu ? "flex" : "hidden"
      } fixed  flex-col items-center top-0 left-0 w-full h-screen p-4 bg-gray-100 dark:bg-gray-900 `}
    >
      <div className="fixed top-8 left-8">
        <button onClick={handleShowSmallMenu}>X</button>
      </div>
      <div className="flex flex-col items-center gap-10 mb-10 text-lg p-4 mt-28 text-gray-800/90 dark:text-gray-100 ">
        <a href="/" className="hover:text-gray-950 dark:hover:text-gray-400">
          Documentation
        </a>
        <a
          href="https://paypal.me/M0R4X08"
          className="hover:text-gray-950 dark:hover:text-gray-400"
          target="_blank"
        >
          Buy me a coffe
        </a>
      </div>
      <div className="flex gap-3">
        <p>Dark Mode:</p>
        <SwitchDarkMode />
      </div>
      <div className="flex gap-8 text-4xl mt-8">
        <a href="/" className="text-black dark:text-white">
          <Github />
        </a>
        <a href="/" className="text-blue-700/95 dark:text-gray-300">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default SmallScreenMenu;
