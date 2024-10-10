import React from "react";
import { LineY } from "../../Iconos/LineY.tsx";
import { IconMenuSmall } from "../../Iconos/IconMenuSmall.tsx";
import { IconMenuMedium } from "../../Iconos/IconMenuMedium.tsx";
import { LogoRest } from "../../Iconos/LogoRest.tsx";
import { Github } from "../../Iconos/Github.tsx";
import { Linkedin } from "../../Iconos/Linkedin.tsx";
import MediumScreenMenu from "./MediumScreenMenu.tsx";
import SmallScreenMenu from "./SmallScreenMenu.tsx";
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [showMediaMenu, setShowMediaMenu] = React.useState(false);
  const [showSmallMenu, setShowSmallMenu] = React.useState(false);

  const handleShowMediaMenu = () => {
    setShowMediaMenu(!showMediaMenu);
  };

  const handleShowSmallMenu = () => {
    setShowSmallMenu(!showSmallMenu);
  };
  return (
    <nav className=" p-2 top-0 mt-2">
      <div className="container mx-auto flex justify-between items-center">
        <div id="logo" className="mx-12">
          <a href="/" className="text-6xl  text-red-700">
            <LogoRest />
          </a>
        </div>

        <div className="flex gap-2 w-full h-full items-center justify-center ml-72 sm:ml-32">
          <div className="hidden sm:flex gap-6 text-lg">
            <a href="/">Home</a>
            <a href="/">Documentacion</a>
            <a href="/">Invitame a un cafe</a>
          </div>
          <div className="hidden lg:flex items-center h-full ">
            <span className="text-4xl">
              <LineY />
            </span>
            <button className="bg-slate-600 text-white px-4 py-1 rounded-md focus:outline-none">
              Dark
            </button>
            <span className="text-4xl">
              <LineY />
            </span>
          </div>
          <div className="gap-6 items-center h-full hidden lg:flex text-3xl ">
            <a href="/">
              <Github />
            </a>
            <a href="/">
              <Linkedin />
            </a>
          </div>
        </div>
        <div
          className="hidden sm:block lg:hidden relative px-3 sm:px-5 "
          onClick={handleShowMediaMenu}
        >
          <button className="text-gray-700 focus:outline-none text-2xl">
            <IconMenuMedium />
          </button>
          {showMediaMenu && <MediumScreenMenu />}
        </div>
        <div className="sm:hidden relative" onClick={handleShowSmallMenu}>
          <button className="text-gray-700 focus:outline-none text-2xl">
            <IconMenuSmall />
          </button>
          {showSmallMenu && <SmallScreenMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
