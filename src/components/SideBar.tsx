//Next.js
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "next-auth/client";

//Styles
import {
  SidebarContainer,
  HomeIcon,
  AwardIcon,
  TrophyIcon,
  PowerIcon,
} from "../styles/components/Sidebar";

export function SideBar() {
  const router = useRouter();

  return (
    <SidebarContainer>
      <img src="images/logo-blue.svg" alt="move.it" />

      <ul>
        <li className={router.pathname == "/home" ? "menuActive" : ""}>
          <Link href="/home">
            <HomeIcon />
          </Link>
        </li>

        <li className={router.pathname == "/leaderboard" ? "menuActive" : ""}>
          <Link href="/leaderboard">
            <AwardIcon />
          </Link>
        </li>

        <li className={router.pathname == "/trophy" ? "menuActive" : ""}>
          <Link href="/trophy">
            <TrophyIcon />
          </Link>
        </li>
      </ul>

      <div className="logOut">
        <PowerIcon
          onClick={() =>
            signOut({
              callbackUrl: `${process.env.REACT_APP_URL}`,
            })
          }
        />
      </div>
    </SidebarContainer>
  );
}
