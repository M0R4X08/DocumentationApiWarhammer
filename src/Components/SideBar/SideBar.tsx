import ShowList from "./ShowList";
import {metodsCharacters, metodsUsers} from "../../Constants/ConstantsListMethods";

const SideBar = () => {
  return (
    <aside className="fixed hidden h-full sm:flex flex-col items-start justify-start bg-gray-100 w-[18%] gap-10 overflow-y-auto  p-8  ">
      <ShowList title="Character" List={metodsCharacters} />
      <ShowList title="User" List={metodsUsers}/>
    </aside>
  );
};

export default SideBar;
