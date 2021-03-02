//React.js
import { useContext } from "react";

//Context
import { CountdownContext } from "../contexts/CountdownContext";

//Style
import {
  CountdownContainer,
  CountdownButton,
} from "../styles/components/Countdown";

//Icon
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsFillPlayFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

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
        <CountdownButton isActive disabled>
          <p>Ciclo encerrado</p>
          <IoCheckmarkCircle
            color="#4cd62b"
            size="20"
            style={{ marginLeft: "0.5rem", marginTop: "0.3rem" }}
          />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton isActive type="button" onClick={resetCountdown}>
              Abandonar ciclo
              <IoClose size="20" style={{ marginLeft: "0.5rem" }} />
            </CountdownButton>
          ) : (
            <CountdownButton
              isActive={false}
              type="button"
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <BsFillPlayFill size="20" style={{ marginLeft: "0.5rem" }} />
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
