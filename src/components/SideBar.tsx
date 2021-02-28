import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "next-auth/client";

//Styles
import styles from "../styles/components/SideBar.module.css";

//Icon
import { FiHome } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

export function SideBar() {
  const router = useRouter();

  return (
    <div className={styles.containerSideBar}>
      <img src="logo-blue.svg" alt="move.it" />

      <ul>
        <li className={router.pathname == "/home" ? styles.menuActive : ""}>
          <Link href="/home">
            <FiHome size={28} color="#666666" />
          </Link>
        </li>

        <li
          className={router.pathname == "/leaderboard" ? styles.menuActive : ""}
        >
          <Link href="/leaderboard">
            <FiAward size={28} color="#666666" />
          </Link>
        </li>
      </ul>

      <div className={styles.logout}>
        <FiLogOut
          onClick={() =>
            signOut({
              callbackUrl: "https://moveit-6jvvw0eqp-hmdarkfir3.vercel.app",
            })
          }
          size="28"
        />
      </div>
    </div>
  );
}
