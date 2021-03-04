import styled from "styled-components";
import { BrightnessHighFill } from "@styled-icons/bootstrap/BrightnessHighFill";
import { Moon } from "@styled-icons/bootstrap/Moon";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  & div {
    margin-left: 1.5rem;
  }

  & div strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--title);
  }

  & div p {
    font-size: 1rem;
    margin-top: 0.5rem;

    color: var(--text);
  }

  & div p img {
    margin-right: 0.5rem;
  }
`;

export const SunIcon = styled(BrightnessHighFill)`
  color: #f49e12;
  height: auto;
  width: 2.25rem;

  margin-left: 8rem;
  cursor: pointer;
`;

export const MoonIcon = styled(Moon)`
  color: #2e384d;
  height: 2.25rem;
  width: 2.25rem;

  margin-left: 8rem;
  cursor: pointer;

  transition: 0.5;
`;
