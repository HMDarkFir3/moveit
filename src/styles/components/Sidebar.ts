import styled from "styled-components";
import { HouseDoor } from "@styled-icons/bootstrap/HouseDoor";
import { Award } from "@styled-icons/bootstrap/Award";
import { Trophy } from "@styled-icons/bootstrap/Trophy";
import { Power } from "@styled-icons/bootstrap/Power";

export const SidebarContainer = styled.div`
  background: ${(props) => props.theme.colors.backgroundBox};
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

    height: auto;
    width: 4rem;

    color: var(--blue);
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
    margin-left: 0.25rem;

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

export const HomeIcon = styled(HouseDoor)`
  color: var(--text);

  height: auto;
  width: 2rem;
`;

export const AwardIcon = styled(Award)`
  color: var(--text);

  height: auto;
  width: 2rem;
`;

export const TrophyIcon = styled(Trophy)`
  color: var(--text);

  height: auto;
  width: 2rem;
`;
``;
export const PowerIcon = styled(Power)`
  color: var(--text);

  height: auto;
  width: 2rem;
`;
