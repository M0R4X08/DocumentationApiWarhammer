import ShowList from "./ShowList";
import {
  metodsCharacters,
  metodsUsers,
  metodsRace,
  metodsFaction,
  metodsSubfactions,
  metodsLogin,
} from "../../Constants/ConstantsListMethods";

const SideBar = () => {
  return (
    <aside className="fixed hidden h-full sm:flex flex-col items-start justify-start bg-white border-r border-gray-200 dark:border-gray-500 dark:bg-gray-900/85 w-[18%] gap-10 overflow-y-auto md:overflow-x-hidden pt-8 md:px-3 lg:px-6 ">
      <ShowList title="Character" List={metodsCharacters} />
      <ShowList title="Race" List={metodsRace} />
      <ShowList title="Faction" List={metodsFaction} />
      <ShowList title="Subfaction" List={metodsSubfactions} />
      <ShowList title="User" List={metodsUsers} />
      <ShowList title="Login" List={metodsLogin} />
    </aside>
  );
};

export default SideBar;
