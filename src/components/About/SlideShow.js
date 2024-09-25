import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/SlideShow/SlideShow.module.css";

const image = [
  "/image/webImages/about3img.webp",
  "/image/webImages/about2img.webp",
  "/image/webImages/About2img_.webp",
];
const delay = 3000;

function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {image.map((elem, index) => {
          return (
            <div className={styles.slide} key={index}>
              <div className={`flex items-center justify-center w-full p-2`}>
                <Image
                  src={elem}
                  alt={`about slider ${index}`}
                  width={100}
                  height={100}
                  sizes="100vh"
                  style={{ width: "100vw", height: "auto" }}
                  className="shadow-zinc-500 shadow-lg rounded-xl saturate-[1.5] border-2 border-black"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.slideshowDots}>
        {image.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot ${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
