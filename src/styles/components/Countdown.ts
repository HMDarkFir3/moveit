import styled from "styled-components";

interface IsActiveProps {
  isActive: boolean;
}

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  & > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  & > div span {
    flex: 1;
  }

  & > div span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  & > div:last-child {
    border-right: 1px solid #f0f1f3;
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button<IsActiveProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${(props) => (props.isActive ? "var(--red)" : "var(--blue)")};
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.5s;

  &:not(:disabled):hover {
    background: ${(props) =>
      props.isActive ? "var(--white)" : "var(--blue-dark)"};
    color: ${(props) => (props.isActive ? "var(--tilte)" : "var(--white)")};
  }

  &:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
    border-bottom: 5px solid var(--green);
  }

  &:disabled p {
    margin-top: 0.3rem;
  }
`;
