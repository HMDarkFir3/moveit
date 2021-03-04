//React.js
import { useEffect } from "react";

//Next.js
import Head from "next/head";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

//Style
import { LoginContainer, GitHubIcon } from "../styles/pages/Login";

export default function Login() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/home");
    }
  }, [session, router]);

  return (
    <LoginContainer>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <img src="images/logo-symbol.svg" alt="move.it" />

      <div>
        <img src="images/logo-full-white.svg" alt="move.it" />
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
          <GitHubIcon /> Continuar com Github
        </button>
      </div>
    </LoginContainer>
  );
}
