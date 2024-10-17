import ShowList from "./ShowList";
import {
  metodsCharacters,
  metodsUsers,
} from "../../Constants/ConstantsListMethods";

const SideBar = () => {
  return (
    <aside className="fixed hidden h-full sm:flex flex-col items-start justify-start bg-white border-r border-gray-200 dark:border-gray-500 dark:bg-gray-900/85 w-[18%] gap-10 overflow-y-auto md:overflow-x-hidden pt-8 md:px-3 lg:px-6 ">
      <ShowList title="Character" List={metodsCharacters} />
      <ShowList title="User" List={metodsUsers} />
    </aside>
  );
};

export default SideBar;
