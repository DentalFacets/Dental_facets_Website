// components/LoadingSpinner.js
import styles from "@/styles/LoadingSpinner.module.css";

const LoadingSpinner = () => (
  <div className={styles.spinnerWrapper}>
    {/* <div className={styles.spinner}></div> */}
    <div className={styles.cssload_main}>
      <div className={styles.cssload_heart}>
        <span className={styles.cssload_heartL}></span>
        <span className={styles.cssload_heartR}></span>
        <span className={styles.cssload_square}></span>
      </div>
      <div className={styles.cssload_shadow}></div>
    </div>
  </div>
);

export default LoadingSpinner;
