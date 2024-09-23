import React, { Suspense } from "react";
import styles from "@/styles/About.module.css";
import FadeInUp from "../transition/FadeInUp";

const PageCharts = React.lazy(() => import("./PageCharts"));
const AboutCards = React.lazy(() => import("./AboutCards"));
const SlideShow = React.lazy(() => import("./SlideShow"));

function AboutUS() {
  return (
    <div className={styles.aboutContainer}>
      <div className={`${styles.abt1wrapper}`}>
        <div className="w-2/4 flex items-center justify-center my-5">
          <div className={`${styles.imgbg}`}></div>
          <div className="w-full flex items-center justify-center">
            <Suspense fallback={<div>Loading Slideshow...</div>}>
              <SlideShow />
            </Suspense>
          </div>
        </div>

        <div className="lg:w-2/4">
          <h2 className="text-4xl underline underline-offset-4 m-3 md:text-5xl">
            About Us
          </h2>
          <p className="text-lg m-3 md:text-xl md:py-5">
            At <i>Dental Facets</i>, our mission is to provide exceptional
            dental care with a focus on your comfort and well-being. Our
            friendly and skilled team is dedicated to making your visit as
            pleasant as possible. We use state-of-the-art equipment and the
            latest techniques to ensure you receive the highest standard of
            care.
            <br />
            <br />
            Our experienced <i>doctors</i> and staff take pride in offering
            personalized treatments tailored to your needs, from routine
            cleanings to advanced procedures. We believe in building lasting
            relationships with our patients, grounded in trust and open
            communication.
          </p>
          <div>
            <FadeInUp>
              <Suspense fallback={<div>Loading Charts...</div>}>
                <PageCharts />
              </Suspense>
            </FadeInUp>
          </div>
        </div>
      </div>
      <div className={styles.abtCardContainer}>
        <Suspense fallback={<div>Loading Cards...</div>}>
          <AboutCards />
        </Suspense>
      </div>
    </div>
  );
}

export default AboutUS;
