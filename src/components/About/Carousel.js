import React, { useState, useEffect } from "react";
import styles from "@/styles/Gallery/ImageGallery.module.css";
import Image from "next/image";

const imageData = [
  "/image/webImages/OurStory.webp",
  "/image/webImages/welDenFac.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center">
      <button className={` ${styles.button}`} onClick={prevImage}>
        &#10094;
      </button>
      <div className={styles.carousel}>
        <div
          className={styles.carousel_images}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {imageData.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={500}
              height={500}
              sizes={"100vh"}
              alt={`carousel-${index}`}
              className={styles.img}
            />
          ))}
        </div>
      </div>

      <button className={` ${styles.button}`} onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
