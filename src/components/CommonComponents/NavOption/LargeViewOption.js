import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/NewNavigation/Navigation.module.css";
import { More } from "@/svgs/NavIcons";
import { Contact } from "@/svgs/NavIcons";
import ServiceDropDown from "./ServiceDropDown";

function LargeViewOption({ isScrolled }) {
  const [showPopup, setShowPopup] = useState(false);

  //copu email to clipboard
  const copytext = (e) => {
    navigator.clipboard
      .writeText(e)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div
      className={`hidden md:flex lg:flex items-center ${
        isScrolled ? "text-white" : "text-black"
      }`}
    >
      <ul className="flex gap-5 mx-5">
        <li>
          <Link href={"/"} className={styles.navOption}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/About"} className={styles.navOption}>
            About Us
          </Link>
        </li>
        <li>
          <div className={`${styles.serOption}`}>
            <div className="flex items-center">
              <Link href={"/Service"} className={`${styles.navOption} `}>
                Services
              </Link>
              <div>
                <More width={"1.5rem"} color={"#fff"} />
              </div>
            </div>
            <div className={` ${styles.dropdown}`}>
              <ServiceDropDown />
            </div>
          </div>
        </li>
        <li>
          <Link href={"/Contact"} className={styles.navOption}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className={styles.adsEmailConainter}>
        <span className="px-5">
          <Contact color={isScrolled ? "#fff" : "#000"} width={"1.8rem"} />
        </span>
        <div className={styles.adsEmail}>
          <div>
            Dental Facets :
            <p>
              <Link
                href={"https://maps.app.goo.gl/VRoQe8cue4r3sVe49"}
                target="_blank"
                rel="noopener noreferrer"
              >
                560-P, behind Jalvayu Towers, Block B, Sector 56, Gurugram,
                Haryana 122001
              </Link>
            </p>
          </div>
          <div>
            Sehgal Neo Hospital:
            <p>
              <Link
                href={"https://maps.app.goo.gl/1DRsDMDqdXdCgW1F8"}
                target="_blank"
                rel="noopener noreferrer"
              >
                B-362 363, 364, Outer Ring Rd, near to ICICI Bank, Block B,
                Meera Bagh, Paschim Vihar, New Delhi, Delhi, 110063
              </Link>
            </p>
          </div>
          <div onClick={() => copytext("dentalfacets2016@gmail.com")}>
            Email us :<p>dentalfacets2016@Gmail.com</p>
            {showPopup && <div className={styles.copy}>Copied!</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeViewOption;
