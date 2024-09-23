import React, { useRef, useState, useEffect } from "react";
import styles from "@/styles/ServicePage.module.css";
import Faq from "@/components/OtherComponents/Faq";
import FadeInUp from "@/components/transition/FadeInUp";
import Appointementbanner from "@/components/CommonComponents/Appointementbanner";
import Testimonials from "@/components/OtherComponents/Testimonials";
import ServiceTable from "@/components/Services_/ServiceTable";
import Link from "next/link";

function Service() {
  const [activecard, SetActiveCard] = useState();
  const cardRefs = useRef([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("api/serData");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServices();
  }, []);

  const scrollToCard = (index) => {
    if (cardRefs.current[index]) {
      SetActiveCard(index);
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="relative top-16 bottom-[2rem]">
      <h1 className={styles.ServiceHeading}>Services</h1>
      <div className={`${styles.SerContainer}`}>
        <h1 className={styles.containerHead}>Our Services</h1>
        <p className={"text-justify text-lg my-2 md:text-xl"}>
          At Dental Facets, we provide a wide range of dental services,
          including oral medicine and diagnosis, cosmetic dental treatments, and
          restorative care. Our dedicated team is here to help you achieve a
          healthy, beautiful smile in a comfortable and welcoming environment.
        </p>
      </div>

      {/* Use the new ServiceTable component */}
      <ServiceTable serviceData={services} scrollToCard={scrollToCard} />

      <Appointementbanner />
      <FadeInUp>
        <div className="flex justify-center flex-wrap bg-white m-5 rounded-2xl shadow-2xl">
          {services.map((elem, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`${styles.moreInfoContainer} ${
                activecard === index ? styles.selectedCard : "bg-white"
              }`}
            >
              <h3 className={"text-[1.7rem] underline underline-offset-4 py-4"}>
                {elem.head}
              </h3>
              {Array.isArray(elem.defi) && elem.defi.length > 0 && (
                <ul>
                  {elem.defi.map((item, index) => (
                    <li
                      key={index}
                      className="marker:font-semibold list-decimal ml-5 m-[0.5rem] cursor-pointer"
                    >
                      <Link
                        className="flex items-center justify-between"
                        href={`/Service/${elem.head}`}
                      >
                        {item.Label}
                        <p className="font-extrabold text-xl">+</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </FadeInUp>
      <Testimonials />
      <Faq />
    </div>
  );
}

export default Service;