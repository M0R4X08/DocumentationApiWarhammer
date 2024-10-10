import { getAllAnimes } from "./Metodos";
import { oneLight, nord } from "react-syntax-highlighter/dist/esm/styles/prism";

import ShowCode from "./ShowCode";
const MainContent = () => {
  return (
    <>
      <section className="m-2 sm:m-20">
        <div>
          <h2>How to use it</h2>
          <p>fakeAnimeApi es una api de anime falsa </p>
        </div>
      </section>
      <section className="m-2 sm:m-20">
        <ul className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">Characters</h2>
          <li>
            <ShowCode
              id="character-find-all"
              title="Character Find All"
              style={nord}
              code={getAllAnimes}
            />
          </li>
          <li>
            <ShowCode
              id="character-find-single"
              title="Character Find Single"
              style={oneLight}
              code={getAllAnimes}
            />
          </li>
          <li>
            <ShowCode
              id="character-limit"
              title="Limit Results"
              style={nord}
              code={getAllAnimes}
            />
          </li>
          <li>
            <ShowCode
              id="character-add"
              title="Add new Character"
              style={nord}
              code={getAllAnimes}
            />
          </li>
          <li>
            <ShowCode
              id="character-update"
              title="Update Character"
              style={nord}
              code={getAllAnimes}
            />
          </li>
        </ul>
        <div className="h-[50vh]"></div>
      </section>
    </>
  );
};

export default MainContent;
