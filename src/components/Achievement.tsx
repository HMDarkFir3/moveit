//React.js
import { useState } from "react";

//Styles
import { AchievementContainer } from "../styles/components/Achievement";

export function Achievement() {
  return (
    <AchievementContainer>
      <img src="images/trophy.svg" alt="Troféu" />
      <h1>achievement</h1>
    </AchievementContainer>
  );
}
