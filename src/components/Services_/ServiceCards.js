import React, { useState } from "react";
import {
  ToothFix,
  Braces,
  CrownAndBridge,
  RootCanal,
  Drill,
  ReviewTeeth,
} from "@/svgs/ServiceIcon";
import styles from "@/styles/Service.module.css";
import FadeInUp from "../transition/FadeInUp";
import Modal from "./Modal";

const serviceData = [
  {
    label: "Dental Implant",
    icon: <ToothFix />,
    key: 0,
    para: "A dental implant is a permanent solution for replacing missing teeth. It provides a natural look and feel, restoring full functionality for chewing and speaking. Implants help prevent bone loss and maintain the structure of your face.",
    img: "/image/ModalImage/implant.webp",
  },
  {
    label: "Tooth Whitening",
    icon: <ReviewTeeth />,
    key: 1,
    para: "Professional teeth whitening removes stubborn stains and discoloration, giving you a brighter, more youthful smile. Achieve fast, safe, and noticeable results in just one session, boosting your confidence with whiter teeth.",
    img: "/image/ModalImage/zoom-teeth-whitening.webp",
  },
  {
    label: "Root Canal Treatment ",
    icon: <RootCanal />,
    key: 4,
    para: "Root canal therapy eliminates infection from the inner tooth, saving your natural tooth and preventing further damage. This pain-relieving procedure is essential for maintaining oral health and avoiding tooth extraction.",
    img: "/image/ModalImage/rootCanal.webp",
  },
  {
    label: "Crown and Bridge",
    icon: <CrownAndBridge />,
    key: 3,
    para: "Crowns and bridges are custom-made to restore the shape, size, and strength of damaged or missing teeth. They improve both the function and appearance of your smile, offering durable and long-lasting solutions for dental issues.",
    img: "/image/ModalImage/crown&bridges2.webp",
  },
  {
    label: "Oral Surgery",
    icon: <Drill />,
    key: 2,
    para: "Whether you need wisdom teeth removal, jaw correction, or soft tissue surgery, our oral surgery services provide expert care for complex dental conditions. We ensure your comfort and safety through every step of the procedure.",
    img: "/image/ModalImage/surgery2.webp",
  },
  {
    label: "Braces and Aligners",
    icon: <Braces />,
    key: 5,
    para: "Correct crooked or misaligned teeth with traditional braces or clear aligners. Our customized orthodontic treatments help improve your bite, alignment, and overall oral health while giving you a straighter, more beautiful smile.",
    img: "/image/ModalImage/braces.webp",
  },
];

function ServiceCards() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className={`text-white w-full relative `}>
      <div className={styles.serBackground}></div>
      <div className={"backdrop-blur-sm h-fit lg:flex"}>
        <FadeInUp>
          <div className={"lg:w-full"}>
            <FadeInUp>
              <h2
                className={
                  "text-5xl underline underline-offset-4 p-10  lg:text-6xl"
                }
              >
                Our Services
              </h2>
            </FadeInUp>
            <div
              className={
                "flex flex-wrap items-center justify-center text-center lg:flex lg:text-2xl lg:justify-evenly"
              }
            >
              {serviceData.map((elem) => {
                return (
                  <div
                    className={`${styles.iconHandle}`}
                    key={elem.key}
                    onClick={() => openModal(elem)}
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
        </FadeInUp>
        <Modal show={showModal} onClose={closeModal} item={selectedItem} />
      </div>
    </div>
  );
}

export default ServiceCards;
