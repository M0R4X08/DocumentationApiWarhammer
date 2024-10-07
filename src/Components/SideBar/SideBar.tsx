const SideBar = () => {
  return (
    <aside className="hidden sm:flex flex-col items-center justify-start bg-gray-600 w-64 gap-10 overflow-y-auto p-8 ">
      <ul className="flex flex-col gap-3">
        <li>
          <h3 className="text-lg text-fuchsia-600">Animes</h3>
        </li>
        <li>
          <a href="#m-all">FindAll</a>
        </li>
        <li>FindById</li>
        <li>FindAllByTitle</li>
        <li>FindAllByType</li>
        <li>FindAllByStatus</li>
        <li>FindAllByScore</li>
      </ul>

      <ul className="flex flex-col gap-3">
        <li>
          <h3 className="text-lg text-fuchsia-600">Mangas</h3>
        </li>
        <li>
          <a href="#m-all">FindAll</a>
        </li>
        <li>FindById</li>
        <li>FindAllByTitle</li>
        <li>FindAllByType</li>
        <li>FindAllByStatus</li>
        <li>FindAllByScore</li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li>
          <h3 className="text-lg text-fuchsia-600">Usuarios</h3>
        </li>
        <li>
          <a href="#m-all">FindAll</a>
        </li>
        <li>FindById</li>
        <li>FindAllByTitle</li>
        <li>FindAllByType</li>
        <li>FindAllByStatus</li>
        <li>FindAllByScore</li>
      </ul>
    </aside>
  );
};

export default SideBar;
