import Head from "next/head";

//Component
import { SideBar } from "../components/SideBar";

//Style
import styles from "../styles/pages/Settings.module.css";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Configurações | move.it</title>
      </Head>

      <SideBar />

      <div className={styles.container}>
        <div>
          <strong>Configurações</strong>
        </div>
      </div>
    </>
  );
}
