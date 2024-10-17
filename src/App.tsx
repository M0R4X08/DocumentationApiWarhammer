import Nav from "./Components/NavBar/Nav";
import SideBar from "./Components/SideBar/SideBar";
import MainContent from "./Components/Main/MainContent";
function App() {
  return (
    <>
      <SideBar />

      <div className="flex flex-col flex-grow container ml-0 sm:ml-[18%] w-full min-w-0 ">
        <header className="container dark:dark:bg-gray-950/85 text-black dark:text-white bg-gray-50/70">
          <Nav />
        </header>

        {/* Contenido principal */}
        <main className="flex-grow p-4 bg-gray-50/70 dark:bg-gray-950/85 text-black dark:text-white">
          <MainContent />
        </main>
      </div>
    </>
  );
}

export default App;
