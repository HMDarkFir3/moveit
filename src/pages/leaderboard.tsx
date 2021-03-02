//Next.js
import Head from "next/head";

//Component
import { SideBar } from "../components/SideBar";

//Style
import styles from "../styles/pages/Settings.module.css";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <SideBar />

      <div>
        <div></div>
      </div>
    </>
  );
}
