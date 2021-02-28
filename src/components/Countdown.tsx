import { useState, useEffect, useContext } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsFillPlayFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

//Context
import { CountdownContext } from "../contexts/CountdownContext";

//Style
import styles from "../styles/components/Countdown.module.css";

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
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={`${styles.countdownButton}`}>
          <p>Ciclo encerrado</p>
          <IoCheckmarkCircle
            color="#4cd62b"
            size="20"
            className={styles.iconCheck}
          />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton}  ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <IoClose className={styles.iconClose} />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <BsFillPlayFill className={styles.iconPlay} />
            </button>
          )}
        </>
      )}
    </div>
  );
}
