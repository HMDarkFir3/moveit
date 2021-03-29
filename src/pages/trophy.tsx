//Next.js
import Head from "next/head";

//Component
import { Sidebar } from "../components/Sidebar";
import { Achievement } from "../components/Achievement";

//Style
import { TrophyContainer } from "../styles/pages/Trophy";

export default function Trophy() {
  return (
    <>
      <Sidebar />
      <TrophyContainer>
        <Head>
          <title>Conquistas | move.it</title>
        </Head>

        <Achievement />
      </TrophyContainer>
    </>
  );
}
