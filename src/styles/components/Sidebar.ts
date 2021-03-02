import styled from "styled-components";

export const SidebarContainer = styled.div`
  background: var(--white);
  height: 100%;
  width: 7rem;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  & img {
    position: fixed;
    top: 2rem;
  }

  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  & ul li {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: filter 0.2s;
  }

  & ul li:hover svg {
    filter: brightness(0.9);
  }

  & ul li + li {
    margin-top: 2.5rem;
  }

  .menuActive::before {
    content: "";
    position: absolute;

    left: 0;

    width: 4px;
    height: 56px;

    background: var(--blue);
    border-radius: 0 5px 5px 0;
  }

  .menuActive svg {
    color: var(--blue) !important;
  }

  .logOut {
    position: fixed;
    bottom: 2rem;

    cursor: pointer;
  }

  .logOut svg:hover {
    color: var(--red);
  }
`;
