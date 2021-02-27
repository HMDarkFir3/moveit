import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

//Style
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/HMDarkFir3.png" alt="Henrique Marques" />
      <div>
        <strong>Henrique Marques</strong>

        <p>
          <img src="icons/level.svg" alt="Seu level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
