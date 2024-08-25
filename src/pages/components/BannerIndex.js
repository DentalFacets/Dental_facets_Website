import React from "react";
import styles from "./styles/Banner.module.css";
import Link from "next/link";
import { BannerIcon } from "../lib/svgs/OtherIcon";
import Typewriter from "typewriter-effect";

function BannerIndex() {
  return (
    <div className={styles.bannerContainer}>
      <div className="p-10">
        <h2 className={styles.heading1}>
          Your Smile,
          <br /> Our Priority
        </h2>
        <div className={styles.para1}>
          <Typewriter
            options={{
              strings: [
                "A smile is an inexpensive way to change your looks. <br/> – Charles Gordy",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Link href={"#form"} className={styles.BookBtn}>
          Book Appointment
          <BannerIcon width={"2.5rem"} />
        </Link>
      </div>
    </div>
  );
}

export default BannerIndex;
