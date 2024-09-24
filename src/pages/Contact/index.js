import React from "react";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";
import { WhatsApp, Facebook, Instagram } from "@/svgs/SocialIcon";
import { Location } from "@/svgs/NavIcons";
import Form from "@/components/OtherComponents/Form";

function Contact() {
  return (
    <div className="relative top-16">
      <h1 className={styles.cntHeading}>Contact Us</h1>

      <div className={styles.StaticContainers}>
        <h3 className={styles.ConHeadings}>Conatct Details </h3>
        <p>
          Phone No. :<br />
          <Link className={styles.linkTags} href="tel:+91 84470 57806">
            +91 84470 57806
          </Link>
        </p>
        <p>
          Email To :<br />
          <Link
            className={styles.linkTags}
            href="mailto:dentalFacets2016@gmail.com"
          >
            dentalfacets2016@gmail.com
          </Link>
        </p>
        <p>
          Address : <br />
          <Link href={"#map"} className={styles.linkTags}>
            560-P, behind Jalvayu Towers, Block B, Sector 56, Gurugram, Haryana
            122001 - <span> Near Mor Market , Alpine Convent Cchool </span>
          </Link>
        </p>
        <p>
          Business Hours :<br />
          <span className={styles.linkTags}>
            <span className="text-gray-500">Monday - Saturday :</span> 10:00 Am
            - 7:00 Pm ,<br />
            <span className="text-gray-500"> Sunday : </span>
            Closed
          </span>
        </p>
      </div>

      <div id="form">
        <Form />
      </div>

      <div
        className={`${styles.StaticContainers} lg:flex md:flex gap-5`}
        id="map"
      >
        <div className="lg:w-2/4 md:w-2/4">
          <h3 className={styles.ConHeadings}>Find Us Here</h3>
          <div className="flex items-center ">
            <p>
              <Link
                className={styles.FootP}
                href={"https://maps.app.goo.gl/3tjaoArVPCsWFZuG6"}
              >
                <Location width={"3.4rem"} />
                Map
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:w-2/4 md:w-2/4">
          <h3 className={styles.ConHeadings}> Follow Us </h3>
          <p>
            <Link
              className={styles.FootP}
              href={"https://wa.me/message/3AHD24LIMSVAK1"}
            >
              <WhatsApp width={"5vh"} />
              Whatsapp
            </Link>
          </p>
          <p>
            <Link
              className={styles.FootP}
              href={"https://fb.openinapp.co/9kmrt"}
            >
              <Facebook width={"5vh"} />
              Facebook
            </Link>
          </p>
          <p>
            <Link
              className={styles.FootP}
              href={"https://www.instagram.com/dental.facets/"}
            >
              <Instagram width={"5vh"} />
              Instagram
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
