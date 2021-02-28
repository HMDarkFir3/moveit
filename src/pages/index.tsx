import { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
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
      <img
        src="/symbol-logo.svg"
        alt="Símbolo move.it"
        className={styles.symbol}
      />

      <div>
        <img src="/logo-full-white.svg" alt="move.it" />
        <h1>Bem-vindo</h1>
        <p>Faça o login com o seu Github ou Google para começar</p>
      </div>

      <button
        type="button"
        onClick={() =>
          signIn("github", {
            callbackUrl: "http://localhost:3000/home",
          })
        }
      >
        Continuar com Github
      </button>
    </div>
  );
}
