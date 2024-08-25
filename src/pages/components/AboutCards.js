import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart, Years, Certificate, Doctors } from "../lib/svgs/AboutCardIcon";
import dynamic from "next/dynamic";
import styles from "./styles/About.module.css";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

function AboutCards() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      throttleDelay: 100,
    });
  }, []);

  const cardData = [
    {
      head: "happy customer",
      integer: 900,
      icon: <Heart />,
      key: 0,
    },
    {
      head: "Years of Experience",
      integer: 900,
      icon: <Years />,
      key: 1,
    },
    {
      head: "Certificate",
      integer: 900,
      icon: <Certificate />,
      key: 2,
    },
    {
      head: "Doctors",
      integer: 3,
      icon: <Doctors size={70} color="teal" />,
      key: 3,
    },
  ];

  return (
    <div
      className={`${styles.iconContainer} md:flex lg:flex md:items-center lg:items-center lg:justify-evenly md:justify-evenly`}
      data-aos="fade-up"
    >
      {cardData.map((elem) => {
        return (
          <div className={styles.abtCards} key={elem.key}>
            {elem.icon}
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: "spring",
                duration: index + 3.5,
              })}
              animateToNumber={elem.integer}
              fontStyle={{
                fontSize: 40,
                color: "black",
              }}
            />
            {elem.head}
          </div>
        );
      })}
    </div>
  );
}

export default AboutCards;
