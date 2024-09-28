import React from "react";
import styles from "@/styles/NewNavigation/Navigation.module.css";
import Link from "next/link";
import { Email, Location } from "@/svgs/NavIcons";
import { Facebook, Instagram, WhatsApp } from "@/svgs/SocialIcon";

function PhoneOption({ visible }) {
  return (
    <div className={`${styles.phoneOption} ${visible ? "w-[90vw]" : "w-0"}`}>
      <ul
        className={`transition-opacity duration-100  ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
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
        <li className="">
          <Link href={"/Service"} className={styles.navOption}>
            Services
          </Link>
        </li>
        <li>
          <Link href={"/Contact"} className={styles.navOption}>
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <div
          className={`w-[90vw] p-5 border-t-[0.1rem] opacity-0 transition-opacity duration-100 ease-in-out ${
            visible ? "opacity-100" : ""
          }`}
        >
          <Link
            href="https://maps.app.goo.gl/3tjaoArVPCsWFZuG6"
            target="blank"
            className={styles.navbtn}
          >
            <i className={styles.heading2}>
              <Location width={"1.7rem"} color={"#fff"} />
              Dental Facets
            </i>
            <p>
              560-P, behind Jalvayu Towers, Block B, Sector 56, Gurugram,
              Haryana 122001
            </p>
          </Link>
          <Link
            href="https://maps.app.goo.gl/3tjaoArVPCsWFZuG6"
            target="blank"
            className={styles.navbtn}
          >
            <i className={styles.heading2}>
              <Location width={"1.7rem"} color={"#fff"} />
              Sehgal Neo Hospital
            </i>
            <p className={styles.ptag}>
              B-362 363, 364, Outer Ring Rd, near to ICICI Bank, Block B, Meera
              Bagh, Paschim Vihar, New Delhi, Delhi, 110063
            </p>
          </Link>
          <Link
            href={"mailto:dentalfacets2016@gmial.com"}
            className="flex gap-1 ml-2 text-lg text-[#ffce45]"
          >
            <Email width={"1.3rem"} color={"#fff"} />
            dentalfacets2016@gmial.com
          </Link>
        </div>
        <div className="flex space-x-2 w-full border-t-[0.1rem] items-center justify-evenly p-5">
          <Link href="https://www.instagram.com/dental.facets/" target="_blank">
            <Instagram width={"2.5rem"} />
          </Link>
          <Link
            href="https://www.facebook.com/share/EpB4ThMJiarg9KBh/?mibextid=qi2Omg"
            target="_blank"
          >
            <Facebook width={"2rem"} />
          </Link>
          <Link href="https://wa.me/8447057806" target="_blank">
            <WhatsApp width={"1.6rem"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhoneOption;
