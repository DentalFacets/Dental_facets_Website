import React from "react";
import styles from "@/styles/About/PageChart.module.css";
import FadeInUp from "../transition/FadeInUp";

function PageCharts() {
  const graphdata = [
    { label: "Modern Equipment", value: 90, key: 0 },
    { label: "Infection Control", value: 99.9, key: 1 },
    { label: "Patient Satisfaction", value: 95, key: 2 },
  ];

  return (
    <div className="md:flex lg:flex items-center justify-center text-center">
      {graphdata.map((item, index) => {
        return (
          <FadeInUp key={index}>
            <div className=" relative flex flex-col items-center justify-center my-5">
              <div className={styles.ball}>
                <h3 className={styles.perc}>{item.value + " %"}</h3>
              </div>
              <div className={styles.shadow}></div>
              <h2 className="relative top-5 m-5 font-bold lg:top-9">
                {item.label}
              </h2>
            </div>
          </FadeInUp>
        );
      })}
    </div>
  );
}

export default PageCharts;
