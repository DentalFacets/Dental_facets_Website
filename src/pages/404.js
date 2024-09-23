import Link from "next/link";
import { useEffect, useState } from "react";
import { Rocket, Astronaut } from "@/svgs/404Icon";
import styles from "@/styles/404/404.module.css";
export default function Custom404() {
  const [floatingMessage, setFloatingMessage] = useState("");

  useEffect(() => {
    const messages = [
      "Oops! Lost in space?",
      "Are you sure you’re on the right planet?",
      "This page went for a dental checkup...",
      "Houston, we have a 404!",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setFloatingMessage(messages[index]);
      index = (index + 1) % messages.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.error_container}>
      <div className={styles.animation_container}>
        <div className={styles.moon}></div>
        <div className={styles.rocket}>
          <Rocket width={"8rem"} />
        </div>
        <div className={styles.astronaut}>
          <Astronaut width={"8rem"} />
        </div>
      </div>

      <div className={styles.error_text}>
        <h1>404</h1>
        <h2>{floatingMessage}</h2>
        <Link className={styles.back_home_btn} href={"/"}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
