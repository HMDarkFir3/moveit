//React.js
import { useContext, useEffect } from "react";

//Next.js
import { useSession } from "next-auth/client";

//Context
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ThemeContext } from "../contexts/ThemeContext";

//Style
import {
  ProfileContainer,
  SunIcon,
  MoonIcon,
} from "../styles/components/Profile";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [session] = useSession();

  return (
    <ProfileContainer>
      <img src={session.user.image} alt={session.user.name} />
      <div>
        <strong>{session.user.id}</strong>
        <p>
          <img src="icons/level.svg" alt="Seu level" />
          Level {level}
          {theme.title === "light" ? (
            <MoonIcon onClick={toggleTheme} />
          ) : (
            <SunIcon onClick={toggleTheme} />
          )}
        </p>
      </div>
    </ProfileContainer>
  );
}
