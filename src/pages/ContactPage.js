import React from "react";
import Link from "next/link";
import styles from "./components/styles/Contact.module.css";
import { WhatsApp, Facebook, Instagram } from "./lib/svgs/SocialIcon";
import Form from "./components/Form";

function ContactPage() {
  return (
    <div>
      <h1 className={styles.cntHeading}>Contact Us</h1>

      <div className={styles.StaticContainers}>
        <h3 className={styles.ConHeadings}>Conatct Details </h3>
        <p>
          Phone No. :<br />
          <Link className={styles.linkTags} href="tel:+91 84470 57806">
            +91 84470 57806{" "}
          </Link>
        </p>
        <p>
          Email To :<br />
          <Link
            className={styles.linkTags}
            href="mailto:dentalFacets2016@gmail.com"
          >
            {" "}
            dentalFacets2016@gmail.com{" "}
          </Link>
        </p>
        <p>
          Address : <br />
          <Link href={"#map"} className={styles.linkTags}>
            560-P, behind Jalvayu Towers, Block B, Sector 56, Gurugram, Haryana
            122001{" "}
          </Link>
        </p>
        <p>
          Business Hours :<br />
          <span className={styles.linkTags}>
            {" "}
            Monday - saturday : 10:00 Am - 7:00 Pm{" "}
          </span>{" "}
        </p>
      </div>

      <div id="form">
        <Form />
      </div>

      <div className={styles.StaticContainers} id="map">
        <h3 className={styles.ConHeadings}>Find Us Here</h3>
        <iframe
          className="w-full h-[20rem] rounded-lg outline"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.6785314270774!2d77.0960434!3d28.4289554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a98c6281ed%3A0xea3fb8f1fa33f62d!2sDental%20Facets-%20Best%20Dental%20Surgeon%20in%20Gurgaon%20%7C%20Dentist%20%7C%20Implantologist%2FOral%20Surgeon%2FDental%20Implant%2FDental%20Doctor%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1723796075212!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>

      <div className={styles.StaticContainers}>
        <h3 className={styles.ConHeadings}> Follow Us </h3>
        <p>
          <Link
            className={styles.FootP}
            href={"https://wa.me/message/3AHD24LIMSVAK1"}
          >
            <WhatsApp width={"8vh"} />
            Whatsapp
          </Link>
        </p>
        <p>
          <Link className={styles.FootP} href={"https://fb.openinapp.co/9kmrt"}>
            <Facebook width={"8vh"} />
            Facebook
          </Link>
        </p>
        <p>
          <Link
            className={styles.FootP}
            href={"https://www.instagram.com/dental.facets/"}
          >
            <Instagram width={"8vh"} />
            Instagram
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
