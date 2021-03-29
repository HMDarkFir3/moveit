import styled from "styled-components";

export const AchievementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-box);
  flex-direction: column;

  height: 20rem;
  width: 15rem;

  border: 4px solid var(--blue);
  border-radius: 5px;

  box-shadow: var(--box-shadow);
  padding: 0;

  & img {
    height: auto;
    width: 10rem;
  }
`;
