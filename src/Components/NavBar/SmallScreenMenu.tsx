import { Github } from "../../Iconos/Github";
import { Linkedin } from "../../Iconos/Linkedin";

const SmallScreenMenu = () => {
  return (
    <div className="fixed flex flex-col items-center top-16 left-0 w-full h-screen p-4 bg-gray-100/90 border-2 border-gray-300/80 ">
      <div className="flex flex-col items-center gap-10 text-lg p-4 mt-28">
        <a href="/">Home</a>
        <a href="/">Documentacion</a>
        <a href="/">Invitame a un cafe</a>
      </div>
      <div className="bg-slate-600 text-white px-4 py-1 rounded-md focus:outline-none mt-6">
        <button>Dark</button>
      </div>
      <div className="flex gap-8 text-4xl mt-8">
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

export default SmallScreenMenu;
