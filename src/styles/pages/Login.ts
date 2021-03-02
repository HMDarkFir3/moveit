import styled from "styled-components";

export const LoginContainer = styled.div`
  background: var(--blue);
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
    color: var(--text-highlight);
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  & button {
    height: 4rem;

    padding-left: 1rem;

    background: var(--blue-dark);
    border: 0;
    color: var(--text-highlight);
    outline-color: var(--white);

    text-align: start;
    font-size: 1.05rem;

    border-radius: 5px;
  }

  & button + button {
    margin-top: 1.5rem;
  }
`;
