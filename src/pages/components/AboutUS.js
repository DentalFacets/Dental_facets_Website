import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import PageCharts from "./PageCharts";
import AboutCards from "./AboutCards";
import styles from "./styles/About.module.css";

function AboutUS() {
  useEffect(() => {
    AOS.init({
      delay: 100,
      throttleDelay: 100,
      once: true,
    });
  }, []);
  return (
    <div className={styles.aboutContainer}>
      <div className={`${styles.abt1wrapper} flex-col lg:flex-row`}>
        <div className={`${styles.imageWrapper} lg:w-2/4`}>
          <div
            className={`${styles.imageBg} h-[16rem] w-[15rem] md:h-64 md:w-60 lg:h-[30rem] lg:w-[20rem]`}
          ></div>
          <div
            className={`${styles.abtImage} w-36 h-56 md:h-60 md:w-40 lg:h-96 lg:w-64`}
          >
            <Image
              src={"/image/aboutImage.webp"}
              alt="about Image"
              style={{ objectFit: "cover" }}
              sizes="10vw"
              loading="lazy"
              fill
            />
          </div>
        </div>
        <div className={`lg:w-2/4`} data-aos="fade-up">
          <h2
            className={`text-4xl underline underline-offset-4 m-3 md:text-5xl`}
          >
            About Us{" "}
          </h2>
          <p className={`text-lg m-3 font-medium md:text-xl md:py-5`}>
            At <i>Dental Facets</i>, our mission is to provide exceptional
            dental care with a focus on your comfort and well-being. Our
            friendly and skilled team is dedicated to making your visit as
            pleasant as possible. We use state-of-the-art equipment and the
            latest techniques to ensure you receive the highest standard of
            care.
            <br />
            <br />
            Our experienced <i>dentists</i> and staff take pride in offering
            personalized treatments tailored to your needs, from routine
            cleanings to advanced procedures. We believe in building lasting
            relationships with our patients, grounded in trust and open
            communication.
          </p>
          <div data-aos="fade-right">
            <PageCharts />
          </div>
        </div>
      </div>
      <div className={styles.abtCardContainer}>
        <AboutCards />
      </div>
    </div>
  );
}

export default AboutUS;
