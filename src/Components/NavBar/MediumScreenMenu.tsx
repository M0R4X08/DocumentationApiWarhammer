import { Github } from "../../Iconos/Github.tsx";
import { Linkedin } from "../../Iconos/Linkedin.tsx";
const MediumScreenMenu = () => {
  return (
    <div className="absolute flex flex-col items-center w-52 h-28 top-full mt-2 right-2  rounded-lg p-4 border-2 border-solid border-gray-300/80 bg-gray-100/90">
      <div className="flex gap-3">
        <p>Apariencia</p>
        <button className="bg-blue-500 px-4 rounded-md">Dark</button>
      </div>
      <div className="w-64">
        <hr className="border-t-2 border-black/30 w-3/4 mx-auto mt-4 mb-3" />
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a href="/">
          <Github />
        </a>
        <a href="/">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};
export default MediumScreenMenu;
