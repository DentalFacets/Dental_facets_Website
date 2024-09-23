import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/NewNavigation/Navigation.module.css";
import NavButton from "../Buttons/NavButton";
import PhoneOption from "./NavOption/PhoneOption";
import LargeViewOption from "./NavOption/LargeViewOption";

function Navigation() {
  let [visible, isvisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handlelcick = () => {
    isvisible((prev) => !prev);
    return isvisible;
  };

  //start scroll change color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? "bg-black" : ""}`}>
      <div className={styles.navHead}>
        <div className={styles.iconHeadContainer}>
          <div className={styles.iconContainer}>
            <Image
              src={"/image/favicon.webp"}
              alt="profile image"
              style={{ objectFit: "cover" }}
              fill
              sizes="10vw"
              priority
              className=""
            />
          </div>
          <h1
            className={`${styles.head} ${
              isScrolled ? "text-[#fff]" : "text-black"
            }`}
          >
            Dental Facets
          </h1>
        </div>
        <NavButton
          visible={visible}
          handlelcick={handlelcick}
          isScrolled={isScrolled}
        />
        <LargeViewOption isScrolled={isScrolled} />
      </div>
      <PhoneOption visible={visible} />
    </nav>
  );
}

export default Navigation;
