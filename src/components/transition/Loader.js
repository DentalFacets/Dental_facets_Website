import React from "react";
import styles from "@/styles/Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className="flex justify-center ">
      <div class={styles.typing_indicator}>
        <div class={styles.typing_circle}></div>
        <div class={styles.typing_circle}></div>
        <div class={styles.typing_circle}></div>
        <div class={styles.typing_shadow}></div>
        <div class={styles.typing_shadow}></div>
        <div class={styles.typing_shadow}></div>
      </div>
    </div>
  );
}
