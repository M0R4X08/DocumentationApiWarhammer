import { CodeListCharacter } from "../../Constants/CodeList/CharacterCodeList";
import { CodeListUser } from "../../Constants/CodeList/UserCodeList";
import { CodeListRace } from "../../Constants/CodeList/RaceCodeList";
import { CodeListLogin } from "../../Constants/CodeList/LoginCodeList";
import { CodeListFaction } from "../../Constants/CodeList/FactionCodeList";
import { CodeListSubFaction } from "../../Constants/CodeList/SubFactionCodeList";
import { CodeListAlignment } from "../../Constants/CodeList/AlignmentCodeList";
import { CodeListRank } from "../../Constants/CodeList/RankCodeList";
import { lazy, Suspense } from "react";

const ShowCodeList = lazy(() => import("./ShowCodeList"));
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
        <Suspense>
          <ShowCodeList title="Race" codeList={CodeListRace} />
          <ShowCodeList title="Faction" codeList={CodeListFaction} />
          <ShowCodeList title="Subfaction" codeList={CodeListSubFaction} />
          <ShowCodeList title="Alignment" codeList={CodeListAlignment} />
          <ShowCodeList title="Rank" codeList={CodeListRank} />
          <ShowCodeList title="User" codeList={CodeListUser} />
          <ShowCodeList title="Login" codeList={CodeListLogin} />
        </Suspense>

        <div className="h-[50vh]"></div>
      </section>
    </>
  );
};

export default MainContent;
