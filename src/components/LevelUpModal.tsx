//React.js
import { useContext } from "react";

//Context
import { ChallengesContext } from "../contexts/ChallengesContext";

//Styles
import {
  Overlay,
  LevelUpModalContainer,
} from "../styles/components/LevelUpModal";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <LevelUpModalContainer>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </LevelUpModalContainer>
    </Overlay>
  );
}
