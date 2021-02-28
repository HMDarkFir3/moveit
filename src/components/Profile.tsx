import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { useSession } from "next-auth/client";

//Style
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session] = useSession();

  return (
    <div className={styles.profileContainer}>
      <img src={session.user.image} alt={session.user.name} />
      <div>
        <strong>{session.user.name}</strong>

        <p>
          <img src="icons/level.svg" alt="Seu level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
