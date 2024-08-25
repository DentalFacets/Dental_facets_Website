import React from "react";
import {
  ToothFix,
  Braces,
  Treatment,
  BrushInGlass,
  Drill,
  Hospital,
  ReviewTeeth,
} from "../lib/svgs/ServiceIcon";
import styles from "./styles/Service.module.css";

function serviceCards() {
  const serviceData = [
    {
      label: "Tooth Whitening",
      icon: <ToothFix />,
      key: 0,
    },
    {
      label: "Tooth Whitening",
      icon: <ReviewTeeth />,
      key: 1,
    },
    {
      label: "Tooth Whitening",
      icon: <Drill />,
      key: 2,
    },
    {
      label: "Tooth Whitening",
      icon: <Treatment />,
      key: 3,
    },
    {
      label: "Tooth Whitening",
      icon: <BrushInGlass />,
      key: 4,
    },
    {
      label: "Tooth Whitening",
      icon: <Braces />,
      key: 5,
    },
  ];
  return (
    <div className={"text-white w-full  relative"}>
      <div className={styles.serBackground}></div>
      <div className={"backdrop-blur-sm h-fit lg:flex"}>
        <div className={"lg:w-full"}>
          <h2
            className={
              "text-5xl underline underline-offset-4 p-10  lg:text-6xl"
            }
            data-aos="fade-right"
          >
            Our Services
          </h2>
          <div
            className={
              "flex flex-wrap items-center justify-center text-center lg:flex lg:text-2xl"
            }
          >
            {serviceData.map((elem) => {
              return (
                <div
                  className={`${styles.iconHandle} p-3 md:p-5 md:text-xl lg:m-5`}
                  key={elem.key}
                >
                  <i className="h-[20vh] w-[20vh] lg:h-[15vh] lg:w-[15vh] flex items-center justify-center">
                    {elem.icon}
                  </i>
                  <h3 className="flex text-center">{elem.label}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default serviceCards;
