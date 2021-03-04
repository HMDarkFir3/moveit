//React.js
import { useEffect } from "react";

//Next.js
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

//Component
import { Sidebar } from "../components/Sidebar";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

//Context
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";

//Style
import { HomeContainer } from "../styles/pages/Home";

//Interface
interface userGithub {
  name: string;
  avatar_url: string;
}

interface HomeProps {
  user: userGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/");
    }
  }, [session, loading, router]);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Sidebar />
      <HomeContainer>
        <Head>
          <title>Home | move.it</title>
        </Head>

        <ExperienceBar />

        {!loading && (
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        )}
      </HomeContainer>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
