import Nav from "./Components/NavBar/Nav";
import SideBar from "./Components/SideBar/SideBar";
import MainContent from "./Components/Main/MainContent";
function App() {
  return (
    <>
      <SideBar />

      <div className="flex flex-col flex-grow container ml-0 sm:ml-[18%]">
        <header>
          <Nav />
        </header>

        {/* Contenido principal */}
        <main className="flex-grow p-4 ">
          <MainContent />
        </main>
      </div>
    </>
  );
}

export default App;
