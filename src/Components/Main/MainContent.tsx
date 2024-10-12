import ShowCodeList from "./ShowCodeList";
import { CodeListCharacter, CodeListUser } from "../../Constants/ConstantsCodeList";

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
        
        <ShowCodeList title="Character" codeList={CodeListCharacter} />
        <ShowCodeList title="User" codeList={CodeListUser} />

        <div className="h-[50vh]"></div>
      </section>
    </>
  );
};

export default MainContent;
