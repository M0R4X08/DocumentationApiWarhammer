import React, { useEffect } from "react";
import { LineY } from "../../Iconos/LineY.tsx";
import { IconMenuSmall } from "../../Iconos/IconMenuSmall.tsx";
import { IconMenuMedium } from "../../Iconos/IconMenuMedium.tsx";
import { LogoRest } from "../../Iconos/LogoRest.tsx";
import { Github } from "../../Iconos/Github.tsx";
import { Linkedin } from "../../Iconos/Linkedin.tsx";
import MediumScreenMenu from "./MediumScreenMenu.tsx";
import SmallScreenMenu from "./SmallScreenMenu.tsx";
import SwitchDarkMode from "../SwitchDarkMode/SwitchDarkMode.tsx";

const Nav = () => {
  const [showMediaMenu, setShowMediaMenu] = React.useState(false);
  const [showSmallMenu, setShowSmallMenu] = React.useState(false);

  const handleShowMediaMenu = () => {
    setShowMediaMenu(!showMediaMenu);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden");
  }, [showSmallMenu]);

  const handleShowSmallMenu = () => {
    setShowSmallMenu(!showSmallMenu);
  };

  return (
    <nav className="p-2 top-0 mt-6 mb-4">
      <div className="mx-auto flex justify-between items-center text-gray-800/90 dark:text-gray-100">
        <div id="logo" className="mx-6 sm:mx-20 lg:mx-20">
          <a
            href="/"
            className="text-5xl sm:text-6x1 lg:text-6xl  text-red-700"
          >
            <LogoRest />
          </a>
        </div>

        <div className="flex gap-2 w-full h-full items-center justify-end mr-48 sm:mr-24 lg:mr-52 xl:mr-28">
          <div className="hidden sm:flex gap-6 text-lg font-lexend font-light">
            <a
              href="/"
              className="hover:text-gray-950 dark:hover:text-gray-400"
            >
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
          <div className="hidden lg:flex items-center h-full ">
            <span className="text-4xl">
              <LineY />
            </span>
            <SwitchDarkMode />
            <span className="text-4xl">
              <LineY />
            </span>
          </div>
          <div className="gap-6 items-center h-full hidden lg:flex text-3xl ">
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
        <div className="hidden sm:block lg:hidden relative md:mx-4 ">
          <button
            onClick={handleShowMediaMenu}
            className="text-gray-700 dark:text-gray-100/80 focus:outline-none text-2xl"
          >
            <IconMenuMedium />
          </button>
          {showMediaMenu && <MediumScreenMenu />}
        </div>
        <div className="sm:hidden sm:mx-4 right-4 relative">
          <button
            onClick={handleShowSmallMenu}
            className="text-gray-700 dark:text-gray-100/80 focus:outline-none text-2xl"
          >
            <IconMenuSmall />
          </button>
          {showSmallMenu && (
            <SmallScreenMenu
              showSmallMenu={showSmallMenu}
              handleShowSmallMenu={handleShowSmallMenu}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
