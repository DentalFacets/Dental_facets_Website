import React from "react";
import styles from "@/styles/Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.tooth}></div>
      <div className={styles.circle}></div>
    </div>
  );
}
