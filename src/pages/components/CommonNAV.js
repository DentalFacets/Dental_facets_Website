import React, { useState } from "react";
import { Email, Location, DownArrow } from "../lib/svgs/NavIcons";
import { Facebook, Instagram, WhatsApp } from "../lib/svgs/SocialIcon";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Nav.module.css";

function CommonNAV() {
  let [visible, isvisible] = useState(false);

  const handlelcick = () => {
    isvisible((prev) => !prev);
    return isvisible;
  };

  return (
    <nav className="w-full rounded-sm ">
      <div className="hidden lg:flex items-center justify-center gap-2 w-full bg-violet-100">
        <div className="flex text-center gap-2">
          <Link
            href="https://maps.app.goo.gl/brJU7BJdqYWrqLR69"
            target="blank"
            className="flex items-center text-sm"
          >
            <Location width={"1.5rem"} />
            560-P, behind Jalvayu Towers, Block B, Sector 56, Gurugram, Haryana
            122001
          </Link>
          <Link
            href={"mailto:dentalfacets2016@gmial.com"}
            className="flex items-center text-sm"
          >
            <Email width={"1.2rem"} /> dentalfacets2016@gmail.com
          </Link>
        </div>
        <div className="flex space-x-2">
          <Link href="https://www.instagram.com/dental.facets/" target="_blank">
            <Instagram width={"1.5rem"} />
          </Link>
          <Link
            href="https://www.facebook.com/share/EpB4ThMJiarg9KBh/?mibextid=qi2Omg"
            target="_blank"
          >
            <Facebook width={"1.5rem"} />
          </Link>
          <Link href="https://wa.me/8447057806" target="_blank">
            <WhatsApp width={"1.5rem"} />
          </Link>
        </div>
      </div>

      <div
        className={`${styles.nav2} md:flex-row md:items-center md:p-2 lg:flex-row lg:items-center`}
      >
        <div className="bg-slate-800 w-full md:flex md:rounded-full">
          <div className="flex items-center justify-between">
            <div className={`${styles.imgHeadWrapper}`}>
              <div className="relative h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 ">
                <Image
                  src={"/image/favicon.png"}
                  alt="progile image"
                  style={{ objectFit: "cover" }}
                  fill
                  sizes="10vw"
                  loading="lazy"
                />
              </div>
              <h1 className={styles.logoHead}>Dental Facets </h1>
            </div>
            <div className="p-4">
              <button
                className={`lg:hidden md:hidden ${
                  visible
                    ? "transition-all duration-500 rotate-180"
                    : "duration-500"
                }`}
                onClick={handlelcick}
              >
                <DownArrow />
              </button>
            </div>
          </div>
          <div>
            <div className={`${visible ? "" : "hidden"}`}>
              <ul
                className={`absolute w-full text-xl text-center bg-gray-800 opacity-95 z-50 text-white`}
              >
                <Link href={"/"}>
                  <li onClick={handlelcick} className={styles.navOption}>
                    Home
                  </li>
                </Link>
                <Link href={"/AboutUsPage"}>
                  <li onClick={handlelcick} className={styles.navOption}>
                    About Us
                  </li>
                </Link>
                <Link href={"/ServicePage"}>
                  <li onClick={handlelcick} className={styles.navOption}>
                    Services
                  </li>
                </Link>
                <Link href={"/ContactPage"}>
                  <li onClick={handlelcick} className={styles.navOption}>
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="hidden h-full w-full md:block">
              <ul className={"flex px-5"}>
                <Link href={"/"}>
                  <li className={`${styles.navOption} `}>Home</li>
                </Link>
                <Link href={"/AboutUsPage"}>
                  <li className={styles.navOption}>About Us</li>
                </Link>
                <Link href={"/ServicePage"}>
                  <li className={styles.navOption}>Services</li>
                </Link>
                <Link href={"/ContactPage"}>
                  <li className={styles.navOption}>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CommonNAV;
