import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./Components/NavBar/Nav";
import SideBar from "./Components/SideBar/SideBar";
function App() {
  return (
    <>
      <SideBar />
      <div className="flex flex-col flex-grow">
        <header>
          <Nav />
        </header>

        {/* Contenido principal */}
        <main className="flex-grow p-4 bg-blue-400">
          {/* Aquí iría el contenido principal */}
          <h1 className="text-2xl font-bold">Contenido Principal</h1>
          <p>Aquí va el contenido principal de la página.</p>
        </main>
      </div>
    </>
  );
}

export default App;
