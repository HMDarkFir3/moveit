import styled from "styled-components";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { X } from "@styled-icons/bootstrap/X";

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

    background: var(--background-box);
    box-shadow: var(--box-shadow);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  & > div span {
    flex: 1;
  }

  & > div span:first-child {
    border-right: 1px solid var(--background);
  }

  & > div:last-child {
    border-right: 1px solid var(--background);
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  box-shadow: var(--box-shadow);

  transition: background 0.5s;

  &:hover {
    background: var(--blue-dark);
    color: var(--white);
  }

  &.isActive {
    background: var(--background-box);
    color: var(--text);

    transition: background 0.5s;
  }

  &.isActive:hover {
    background: var(--red);
    color: var(--white);
  }

  &:disabled {
    background: var(--background-box);
    color: var(--text);
    cursor: not-allowed;
    border-bottom: 5px solid var(--green);
  }

  &:disabled p {
    margin-top: 0.3rem;
  }
`;

export const CheckIcon = styled(CheckCircleFill)`
  color: var(--green);

  height: auto;
  width: 1.5rem;

  margin-left: 0.5rem;
  margin-top: 0.5rem;
`;

export const PlayIcon = styled(PlayFill)`
  height: auto;
  width: 2rem;

  margin-left: 0.5rem;
  margin-top: 0.2rem;
`;

export const CloseIcon = styled(X)`
  height: auto;
  width: 2rem;

  margin-left: 0.5rem;
  margin-top: 0.2rem;
`;
