"use client";

import React from "react";
import { Heart, Years, Certificate, Doctors } from "@/svgs/AboutCardIcon";
import dynamic from "next/dynamic";
import styles from "@/styles/About.module.css";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const cardData = [
  {
    head: "happy customer",
    integer: 2500,
    icon: <Heart />,
    key: 0,
  },
  {
    head: "Years of Experience",
    integer: 25,
    icon: <Years />,
    key: 1,
  },
  {
    head: "Certificate",
    integer: 11,
    icon: <Certificate />,
    key: 2,
  },
  {
    head: "Doctors",
    integer: 7,
    icon: <Doctors size={70} color="teal" />,
    key: 3,
  },
];

function AboutCards() {
  return (
    <div className={`${styles.iconContainer}`}>
      {cardData.map((elem) => {
        return (
          <div className={styles.abtCards} key={elem.key}>
            {elem.icon}
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.6,
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
