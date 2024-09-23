import React, { Fragment } from "react";
import {
  Braces_dental,
  Dental_eqipment,
  Dental_floss,
  Tooth_brush,
  Tooth_green,
} from "@/svgs/ServiceTable";
import styles from "@/styles/ServicePage.module.css";

const ServiceTable = ({ serviceData, scrollToCard }) => {
  return (
    <div className={`${styles.tableContainer}`}>
      <div className="md:w-2/4 lg:w-2/4">
        <h2 className="text-[1.7rem] mb-5 md:text-[7vh] lg:text-[8vw] lg:leading-[8rem]">
          Table Of Contents
        </h2>
        <div className={`${styles.container} hidden lg:block md:block`}>
          <div className={`${styles.container} hidden lg:block md:block`}>
            <div className={styles.ball}>
              <Braces_dental width={"10vh"} />
            </div>
            <div className={styles.ball}>
              <Dental_eqipment width={"8vh"} />
            </div>
            <div className={`${styles.ball}`}>
              <Dental_floss width={"8vh"} />
            </div>
            <div className={`${styles.ball} md:hidden lg:block`}>
              <Tooth_brush width={"10vh"} />
            </div>
            <div className={styles.ball}>
              <Tooth_green width={"8vh"} />
            </div>
          </div>
        </div>
      </div>
      <table
        className={
          "text-black shadow-2xl w-full md:m-5 md:w-2/4 lg:m-5 lg:w-2/4"
        }
      >
        <thead>
          <tr className={"bg-zinc-800"}>
            <th className={"text-white rounded-tl-md "}>S.no</th>
            <th className={"text-white rounded-tr-md"}>Services</th>
          </tr>
        </thead>
        <tbody>
          {serviceData.map((elem, index) => (
            <Fragment key={index}>
              <tr className={`${styles.tableRows}`}>
                <td className={`${styles.keyData}`}>{elem.key}</td>
                <td className={`${styles.tdatas}`}>
                  <button
                    onClick={() => scrollToCard(index)}
                    className=" w-full h-full p-3 flex justify-between items-center"
                  >
                    {elem.head}
                    <p className="text-xs w-[2.5rem] lg:w-[3rem] p-1 bg-zinc-200 rounded-md font-semibold">
                      know more
                    </p>
                  </button>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
