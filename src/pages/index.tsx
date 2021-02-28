import { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Head from "next/head";

//Style
import styles from "../styles/pages/Login.module.css";

export default function Login() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/home");
    }
  }, [session, router]);

  return (
    <div className={styles.containerLogin}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <img
        src="/symbol-logo.svg"
        alt="Símbolo move.it"
        className={styles.symbol}
      />

      <div>
        <img src="/logo-full-white.svg" alt="move.it" />
        <h1>Bem-vindo</h1>

        <p>Faça o login com o seu GitHub para começar</p>

        <button
          type="button"
          onClick={() =>
            signIn("github", {
              callbackUrl: `${process.env.REACT_APP_URL}/home`,
            })
          }
        >
          Continuar com Github
        </button>
      </div>
    </div>
  );
}
