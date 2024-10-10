import { Link } from "react-scroll";

const SideBar = () => {
  const metodsCharacters = [
    { name: "Find All Characters", to: "character-find-all" },
    { name: "Find a Single Character", to: "character-find-single" },
    { name: "Limit Results", to: "character-limit" },
    { name: "Add new Character", to: "character-add" },
    { name: "Update Character", to: "character-update" },
  ];

  const metodsUsers = [
    { name: "Find All Users", to: "users" },
    { name: "Find a Single User", to: "users" },
    { name: "Limit Results", to: "users" },
    { name: "Add new User", to: "users" },
    { name: "Update User", to: "users" },
  ];

  return (
    <aside className="fixed hidden h-full sm:flex flex-col items-center justify-start bg-gray-50/5 w-[18%] gap-10 overflow-y-auto p-8 ">
      <ul className="flex min-w-0 flex-col gap-2.5 m-5 font-lexendtext-gray-900">
        <li className="text-[1.17rem] font-bold mb-4">
          <h3>Characters</h3>
        </li>
        {metodsCharacters.map((method) => (
          <Link spy={true} smooth={true} to={method.to} offset={-40}>
            <li className="text-[15px] m-2 font-normal cursor-pointer">
              {method.name}
            </li>
          </Link>
        ))}
      </ul>
      <ul className="flex flex-col min-w-0 gap-2.5 m-5">
        <li className="text-[1.17rem] font-bold mb-4">
          <h3>Users</h3>
        </li>
        {metodsUsers.map((method) => (
          <Link spy={true} smooth={true} to={method.to} offset={0}>
            <li className="text-[15px] m-2 font-normal cursor-pointer">
              {method.name}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
