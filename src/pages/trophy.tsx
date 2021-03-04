//Next.js
import Head from "next/head";

//Component
import { Sidebar } from "../components/Sidebar";

export default function Trophy() {
  return (
    <div>
      <Head>
        <title>Conquistas | move.it</title>
      </Head>
      <Sidebar />
      <h1>Trophy</h1>
    </div>
  );
}
