//React.js
import { useState, useEffect } from "react";

//Next.js
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "next-auth/client";

//Styles
import { SidebarContainer } from "../styles/components/Sidebar";

//Icon
import { FiHome } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

export function SideBar() {
  const router = useRouter();

  return (
    <SidebarContainer>
      <img src="logo-blue.svg" alt="move.it" />

      <ul>
        <li className={router.pathname == "/home" ? "menuActive" : ""}>
          <Link href="/home">
            <FiHome size={28} color="#666666" />
          </Link>
        </li>

        <li className={router.pathname == "/leaderboard" ? "menuActive" : ""}>
          <Link href="/leaderboard">
            <FiAward size={28} color="#666666" />
          </Link>
        </li>
      </ul>

      <div className="logOut">
        <FiLogOut
          onClick={() =>
            signOut({
              callbackUrl: `${process.env.REACT_APP_URL}`,
            })
          }
          size="28"
        />
      </div>
    </SidebarContainer>
  );
}
