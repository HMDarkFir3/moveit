//Next.js
import Head from "next/head";

//Component
import { Sidebar } from "../components/Sidebar";

//Style
import styles from "../styles/pages/Settings.module.css";

export default function Leaderboard() {
  return (
    <>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <Sidebar />

      <div>
        <div></div>
      </div>
    </>
  );
}
