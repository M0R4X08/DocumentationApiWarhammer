import { Link } from "react-scroll";
import { ApiMethodList } from "../../Types/Interface";
interface ShowListProps {
    title: string;
    List: ApiMethodList[];
}

const ShowList: React.FC<ShowListProps> = ({ title, List }) => {
    return (
        <>
        <ul className="flex min-w-0 flex-col gap-2.5 m-5 mt-2.5 font-lexend text-gray-900 ">
        <li className="text-[1.2rem]  font-semibold mb-4">
          <h3>{title}</h3>
        </li>
        {List.map((method,index) => (
          <Link spy={true} smooth={true} to={method.to} offset={-26} key={index}>
            <li className="text-[15px] m-2 font-light cursor-pointer break-words whitespace-normal overflow-wrap">
              {method.name}
            </li>
          </Link>
        ))}
      </ul>
        </>
    )
};

export default ShowList;