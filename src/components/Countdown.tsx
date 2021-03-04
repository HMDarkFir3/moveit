//React.js
import { useContext } from "react";

//Context
import { CountdownContext } from "../contexts/CountdownContext";

//Style
import {
  CountdownContainer,
  CountdownButton,
  CheckIcon,
  PlayIcon,
  CloseIcon,
} from "../styles/components/Countdown";

export function Countdown() {
  const {
    isActive,
    hasFinished,
    minutes,
    seconds,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton disabled>
          <p>Ciclo encerrado</p>
          <CheckIcon />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              className="isActive"
              type="button"
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <CloseIcon />
            </CountdownButton>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
              <PlayIcon />
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
