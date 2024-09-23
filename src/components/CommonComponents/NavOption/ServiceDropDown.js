import React, { useRef } from "react";
import styles from "@/styles/NewNavigation/Navigation.module.css";
import Link from "next/link";
import services from "@/Data/services.json";

function ServiceDropDown() {
  return (
    <div className={`${styles.serviceWrapper}`}>
      {services.map((item, index) => {
        return (
          <div key={index} className={styles.optionCards}>
            <h4>
              <Link href={`/Service/${item.head}`}> {item.head}</Link>
            </h4>
            {Array.isArray(item.defi) && (
              <ul>
                {item.defi.map((elem, index) => {
                  return (
                    <li key={index}>
                      <Link href={`/Service/${item.head}`}>- {elem.Label}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ServiceDropDown;
