import React from "react";
import Link from "next/link";
import { Facebook, WhatsApp, Instagram } from "../lib/svgs/SocialIcon";
import styles from "./styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.elemContainer}>
        <h3 className={styles.footHeadings}>Contact Us</h3>
        <p>
          <strong>Dental Facets</strong>
        </p>
        <p>
          Phone : <Link href={"tel:+91 84470 57806"}>+91 84470 57806</Link>
        </p>
        <p>
          Email To :{" "}
          <Link href={"mailto:dentalfacets2016@gmail.com"}>
            dentalfacets2016@gmail.com
          </Link>
        </p>
        <p>
          Address : 560-P, behind Jalvayu Towers,
          <br /> Block B, Sector 56, Gurugram, Haryana 122001
        </p>
      </div>

      <div className={styles.elemContainer}>
        <h3 className={styles.footHeadings}>Quick Links</h3>
        <p>
          <Link className={styles.FootP} href={"/"}>
            Home
          </Link>
        </p>
        <p>
          <Link className={styles.FootP} href={"/AboutUsPage"}>
            About Us{" "}
          </Link>
        </p>
        <p>
          <Link className={styles.FootP} href={"/ServicePage"}>
            Services
          </Link>
        </p>
        <p>
          <Link className={styles.FootP} href={"/ContactPage"}>
            Contact Us
          </Link>
        </p>
      </div>

      <div className={styles.elemContainer}>
        <h3 className={styles.footHeadings}>Follow Us</h3>
        <p>
          <Link
            className={styles.FootP}
            href={"https://wa.me/8447057806"}
            target="_blank"
          >
            <i className="m-1">
              <WhatsApp width={"2vh"} />
            </i>
            Whatsapp
          </Link>
        </p>
        <p>
          <Link
            className={styles.FootP}
            href={
              "https://www.facebook.com/share/EpB4ThMJiarg9KBh/?mibextid=qi2Omg"
            }
            target="_blank"
          >
            <i className="m-1">
              <Facebook width={"2vh"} />
            </i>
            Facebook
          </Link>
        </p>
        <p>
          <Link
            className={styles.FootP}
            href={"https://www.instagram.com/dental.facets/"}
            target="_blank"
          >
            <i className="m-1">
              <Instagram width={"2vh"} />
            </i>
            Instagram
          </Link>
        </p>
      </div>

      <div className={styles.elemContainer}>
        <h3 className={styles.footHeadings}>Open Hours</h3>
        <table className={styles.timeTable}>
          <tbody>
            <tr className={styles.tableRow}>
              <th>Days</th>
              <th>Timings</th>
            </tr>
            <tr className={styles.tableRow}>
              <td>Monday</td>
              <td>10:00 am - 7:00 pm</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Tuesday</td>
              <td>10:00 am - 7:00 pm</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Wednesday</td>
              <td>10:00 am - 7:00 pm</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Thursay</td>
              <td>10:00 am - 7:00 pm</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Friday</td>
              <td>10:00 am - 7:00 pm</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>saturday</td>
              <td>10:00 am - 7:00 pm</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Footer;
