//React.js
import { useContext } from "react";

//Context
import { ChallengesContext } from "../contexts/ChallengesContext";

//Style
import { CompletedChallengesContainer } from "../styles/components/CompletedChallenges";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  );
}
