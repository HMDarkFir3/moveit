//Next.js
import Head from "next/head";

//Component
import { SideBar } from "../components/SideBar";
import { Achievement } from "../components/Achievement";

//Style
import { TrophyContainer } from "../styles/pages/Trophy";

export default function Trophy() {
  return (
    <>
      <SideBar />
      <TrophyContainer>
        <Head>
          <title>Conquistas | move.it</title>
        </Head>

        <Achievement />
      </TrophyContainer>
    </>
  );
}
