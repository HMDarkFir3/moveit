import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";

export const LoginContainer = styled.div`
  background: ${(props) =>
    props.theme.title === "light" ? "#5965e0" : "#121214"};
  background-size: contain;
  color: var(--white);
  height: 100vh;
  max-width: 100%;
  margin: auto;

  display: flex;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
    text-align: flex-start;
    justify-content: center;

    height: 100%;
    width: 40%;

    padding-left: 8rem;
  }

  & div img {
    width: 30rem;
  }

  & div h1 {
    font-size: 2rem;
    font-weight: 600;

    margin-top: 6rem;
  }

  & div p {
    color: var(--white);
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  & button {
    display: flex;
    height: 4rem;

    padding-left: 1rem;

    background: ${(props) =>
      props.theme.title === "light" ? "#4953b8" : "#202024"};
    border: 0;
    color: var(--white);
    outline-color: var(--white);

    text-align: start;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.05rem;

    border-radius: 5px;

    transition: background 0.5s;
  }

  & button:hover {
    background: var(--green);
    color: var(--white);
  }
`;

export const GitHubIcon = styled(Github)`
  height: auto;
  width: 2rem;
  margin-right: 1rem;

  color: var(--white);
`;
