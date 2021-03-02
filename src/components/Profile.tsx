//React.js
import { useContext } from "react";

//Next.js
import { useSession } from "next-auth/client";

//Context
import { ChallengesContext } from "../contexts/ChallengesContext";

//Style
import { ProfileContainer } from "../styles/components/Profile";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session] = useSession();

  return (
    <ProfileContainer>
      <img src={session.user.image} alt={session.user.name} />
      <div>
        <strong>{session.user.name}</strong>

        <p>
          <img src="icons/level.svg" alt="Seu level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}
