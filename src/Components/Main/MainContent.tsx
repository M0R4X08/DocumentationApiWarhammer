import { lazy, Suspense } from "react";
const { CodeListCharacter } = await import(
  "../../Constants/CodeList/CharacterCodeList"
);
const { CodeListRace } = await import("../../Constants/CodeList/RaceCodeList");

const { CodeListFaction } = await import(
  "../../Constants/CodeList/FactionCodeList"
);
const { CodeListSubFaction } = await import(
  "../../Constants/CodeList/SubFactionCodeList"
);
const { CodeListAlignment } = await import(
  "../../Constants/CodeList/AlignmentCodeList"
);
const { CodeListRank } = await import("../../Constants/CodeList/RankCodeList");

const { CodeListUser } = await import("../../Constants/CodeList/UserCodeList");
const { CodeListLogin } = await import(
  "../../Constants/CodeList/LoginCodeList"
);

const ShowCodeList = lazy(() => import("./ShowCodeList"));
const MainContent = () => {
  return (
    <>
      <section className="m-2 sm:m-20">
        <div className="w-[95%] sm:w-[80%]">
          <h2 className="text-2xl mb-6 font-lexend font-semibold  dark:text-gray-200/95">
            How to use it
          </h2>
          <p className="text-[15px] m-2 font-medium text-gray-700 dark:text-gray-200/95">
            ApiWarhammer is a public API that you can integrate into your
            projects or use to enhance your skills. It provides detailed
            information about characters from Warhammer 40k
          </p>
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
