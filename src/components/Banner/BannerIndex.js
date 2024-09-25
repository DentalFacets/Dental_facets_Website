import React, { useState, useRef } from "react";
import Link from "next/link";
import { BannerIcon } from "@/svgs/OtherIcon";
import FadeInUp from "../transition/FadeInUp";
import styles from "@/styles/NewBanner/Banner.module.css";

function BannerIndex({ divRef }) {
  const [hover, setHover] = useState();

  const toform = () => {
    if (divRef) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      // console.log(divRef, "LLLLLL");
    }
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.con1}>
        <h2 className={styles.heading}>Advanced Dental Clinic in Gurugram</h2>
        <button
          onClick={() => toform()}
          className={styles.BookBtn}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Book Appointment
          <div className="animate-pulse">
            <BannerIcon width={"1.8rem"} color={hover ? "black" : "white"} />
          </div>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFAF45"
            fillOpacity="1"
            d="M0,96L30,106.7C60,117,120,139,180,144C240,149,300,139,360,117.3C420,96,480,64,540,58.7C600,53,660,75,720,74.7C780,75,840,53,900,42.7C960,32,1020,32,1080,48C1140,64,1200,96,1260,122.7C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={styles.con2}>
        <FadeInUp threshold={0.8} delay={2}>
          <div className={styles.bg_conter}>
            <Link href={"/About"} className={styles.know_more}>
              Know more
            </Link>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}

export default BannerIndex;
